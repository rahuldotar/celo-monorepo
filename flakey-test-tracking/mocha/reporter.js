const Mocha = require('mocha')
const GitHub = require('../github')
const { processFlakes } = require('../processor')
const { getTestID, fmtFlakeIssue } = require('./utils')
const cache = require('../cache')
const { skipKnownFlakes } = require('../config')

function FlakeReporter(runner) {
  Mocha.reporters.Spec.call(this, runner)

  const flakes = []
  let github
  let skip

  before('Fetch Flakey Tests', async function() {
    cache.init()
    console.log('Fetching known flakey tests...\n')
    github = await GitHub.build()
    // cache.saveKnownFlakes(await github.fetchKnownFlakes())
    // skip = cache.getKnownFlakes() //TODO(Alec)
  })

  after('Process Flakey Tests', async function() {
    if (flakes.length) {
      console.log('Flakey tests found. Sending to GitHub...')
      await processFlakes(
        flakes.map((f) => fmtFlakeIssue(f, cache.getErrors(f))),
        github
      )
    } else {
      console.log('No flakey tests found!')
    }
  })

  // The `retry` event is only emmited by Mocha >= v6.0.0.
  // See `interface.js` for details.
  runner.on('retry', function(test, err) {
    cache.saveError(getTestID(test), JSON.stringify(err))
  })

  // if (skipKnownFlakes) {
  //   runner.on('test', function(test) {
  //     let testID = getTestID(test)
  //     console.log(testID)
  //     if (skip.some((knownFlake) => knownFlake.includes(testID))) {
  //       console.log('Test Skipped!')
  //       test.parent.pending = true
  //       test.pending = true
  //       test.skip()
  //     }
  //   })
  // }

  runner.on('pass', function(test) {
    if (test.currentRetry() > 0 && test.currentRetry() <= test.retries()) {
      flakes.push(getTestID(test))
    }
  })
}

Mocha.utils.inherits(FlakeReporter, Mocha.reporters.Spec)

module.exports = FlakeReporter
