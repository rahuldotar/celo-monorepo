# External module: "wrappers/MetaTransactionWallet"

## Index

### Classes

* [MetaTransactionWalletWrapper](../classes/_wrappers_metatransactionwallet_.metatransactionwalletwrapper.md)

### Interfaces

* [TransactionObjectWithValue](../interfaces/_wrappers_metatransactionwallet_.transactionobjectwithvalue.md)

### Type aliases

* [TransactionInput](_wrappers_metatransactionwallet_.md#transactioninput)

### Functions

* [buildMetaTxTypedData](_wrappers_metatransactionwallet_.md#const-buildmetatxtypeddata)

## Type aliases

###  TransactionInput

Ƭ **TransactionInput**: *TransactionObject‹T› | [TransactionObjectWithValue](../interfaces/_wrappers_metatransactionwallet_.transactionobjectwithvalue.md)‹T›*

*Defined in [packages/contractkit/src/wrappers/MetaTransactionWallet.ts:27](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MetaTransactionWallet.ts#L27)*

## Functions

### `Const` buildMetaTxTypedData

▸ **buildMetaTxTypedData**(`walletAddress`: [Address](_base_.md#address), `tx`: [TransactionInput](_wrappers_metatransactionwallet_.md#transactioninput)‹any›, `nonce`: number, `chainId`: number): *EIP712TypedData*

*Defined in [packages/contractkit/src/wrappers/MetaTransactionWallet.ts:238](https://github.com/celo-org/celo-monorepo/blob/master/packages/contractkit/src/wrappers/MetaTransactionWallet.ts#L238)*

**Parameters:**

Name | Type |
------ | ------ |
`walletAddress` | [Address](_base_.md#address) |
`tx` | [TransactionInput](_wrappers_metatransactionwallet_.md#transactioninput)‹any› |
`nonce` | number |
`chainId` | number |

**Returns:** *EIP712TypedData*