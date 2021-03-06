# Class: EscrowWrapper

Contract for handling reserve for stable currencies

## Hierarchy

* [BaseWrapper](_wrappers_basewrapper_.basewrapper.md)‹Escrow›

  ↳ **EscrowWrapper**

## Index

### Constructors

* [constructor](_wrappers_escrow_.escrowwrapper.md#constructor)

### Properties

* [escrowedPayments](_wrappers_escrow_.escrowwrapper.md#escrowedpayments)
* [eventTypes](_wrappers_escrow_.escrowwrapper.md#eventtypes)
* [events](_wrappers_escrow_.escrowwrapper.md#events)
* [getReceivedPaymentIds](_wrappers_escrow_.escrowwrapper.md#getreceivedpaymentids)
* [getSentPaymentIds](_wrappers_escrow_.escrowwrapper.md#getsentpaymentids)
* [methodIds](_wrappers_escrow_.escrowwrapper.md#methodids)
* [receivedPaymentIds](_wrappers_escrow_.escrowwrapper.md#receivedpaymentids)
* [revoke](_wrappers_escrow_.escrowwrapper.md#revoke)
* [sentPaymentIds](_wrappers_escrow_.escrowwrapper.md#sentpaymentids)
* [transfer](_wrappers_escrow_.escrowwrapper.md#transfer)
* [withdraw](_wrappers_escrow_.escrowwrapper.md#withdraw)

### Accessors

* [address](_wrappers_escrow_.escrowwrapper.md#address)

### Methods

* [getPastEvents](_wrappers_escrow_.escrowwrapper.md#getpastevents)

## Constructors

###  constructor

\+ **new EscrowWrapper**(`kit`: [ContractKit](_kit_.contractkit.md), `contract`: Escrow): *[EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[constructor](_wrappers_basewrapper_.basewrapper.md#constructor)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:26](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`kit` | [ContractKit](_kit_.contractkit.md) |
`contract` | Escrow |

**Returns:** *[EscrowWrapper](_wrappers_escrow_.escrowwrapper.md)*

## Properties

###  escrowedPayments

• **escrowedPayments**: *function* = proxyCall(this.contract.methods.escrowedPayments)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:8](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L8)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  eventTypes

• **eventTypes**: *EventsEnum‹T›* = Object.keys(this.events).reduce<EventsEnum<T>>(
    (acc, key) => ({ ...acc, [key]: key }),
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[eventTypes](_wrappers_basewrapper_.basewrapper.md#eventtypes)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:42](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L42)*

___

###  events

• **events**: *Escrow["events"]* = this.contract.events

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[events](_wrappers_basewrapper_.basewrapper.md#events)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:40](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L40)*

___

###  getReceivedPaymentIds

• **getReceivedPaymentIds**: *function* = proxyCall(this.contract.methods.getReceivedPaymentIds)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:14](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L14)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  getSentPaymentIds

• **getSentPaymentIds**: *function* = proxyCall(this.contract.methods.getSentPaymentIds)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:16](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L16)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  methodIds

• **methodIds**: *Record‹keyof T["methods"], string›* = Object.keys(this.contract.methods).reduce<Record<Methods<T>, string>>(
    (acc, method: Methods<T>) => {
      const methodABI = this.contract.options.jsonInterface.find((item) => item.name === method)

      acc[method] =
        methodABI === undefined ? '0x' : this.kit.web3.eth.abi.encodeFunctionSignature(methodABI)

      return acc
    },
    {} as any
  )

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[methodIds](_wrappers_basewrapper_.basewrapper.md#methodids)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:47](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L47)*

___

###  receivedPaymentIds

• **receivedPaymentIds**: *function* = proxyCall(this.contract.methods.receivedPaymentIds)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:10](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L10)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  revoke

• **revoke**: *function* = proxySend(this.kit, this.contract.methods.revoke)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:22](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L22)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  sentPaymentIds

• **sentPaymentIds**: *function* = proxyCall(this.contract.methods.sentPaymentIds)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:12](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L12)*

#### Type declaration:

▸ (...`args`: InputArgs): *Promise‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  transfer

• **transfer**: *function* = proxySend(this.kit, this.contract.methods.transfer)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:18](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L18)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

___

###  withdraw

• **withdraw**: *function* = proxySend(this.kit, this.contract.methods.withdraw)

*Defined in [packages/contractkit/src/wrappers/Escrow.ts:20](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/Escrow.ts#L20)*

#### Type declaration:

▸ (...`args`: InputArgs): *[CeloTransactionObject](_wrappers_basewrapper_.celotransactionobject.md)‹Output›*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | InputArgs |

## Accessors

###  address

• **get address**(): *string*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[address](_wrappers_basewrapper_.basewrapper.md#address)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:30](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L30)*

Contract address

**Returns:** *string*

## Methods

###  getPastEvents

▸ **getPastEvents**(`event`: Events‹Escrow›, `options`: PastEventOptions): *Promise‹EventLog[]›*

*Inherited from [BaseWrapper](_wrappers_basewrapper_.basewrapper.md).[getPastEvents](_wrappers_basewrapper_.basewrapper.md#getpastevents)*

*Defined in [packages/contractkit/src/wrappers/BaseWrapper.ts:36](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/BaseWrapper.ts#L36)*

Contract getPastEvents

**Parameters:**

Name | Type |
------ | ------ |
`event` | Events‹Escrow› |
`options` | PastEventOptions |

**Returns:** *Promise‹EventLog[]›*
