[@hookun/bitbybit](../README.md) › [Wrapper](wrapper.md)

# Class: Wrapper

## Hierarchy

* **Wrapper**

  ↳ [BitReader](bitreader.md)

  ↳ [BitWriter](bitwriter.md)

## Index

### Constructors

* [constructor](wrapper.md#constructor)

### Properties

* [bitOffset](wrapper.md#protected-bitoffset)
* [byteOffset](wrapper.md#protected-byteoffset)
* [view](wrapper.md#readonly-view)

### Accessors

* [bitLength](wrapper.md#bitlength)
* [bitOffsetFromStart](wrapper.md#bitoffsetfromstart)
* [buffer](wrapper.md#buffer)
* [byte](wrapper.md#byte)
* [byteLength](wrapper.md#bytelength)
* [done](wrapper.md#done)

### Methods

* [residualBitLength](wrapper.md#residualbitlength)
* [step](wrapper.md#protected-step)

## Constructors

###  constructor

\+ **new Wrapper**(`buffer`: ArrayBuffer): *[Wrapper](wrapper.md)*

*Defined in [Wrapper.ts:9](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *[Wrapper](wrapper.md)*

## Properties

### `Protected` bitOffset

• **bitOffset**: *number*

*Defined in [Wrapper.ts:9](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L9)*

___

### `Protected` byteOffset

• **byteOffset**: *number*

*Defined in [Wrapper.ts:7](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L7)*

___

### `Readonly` view

• **view**: *DataView*

*Defined in [Wrapper.ts:5](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L5)*

## Accessors

###  bitLength

• **get bitLength**(): *number*

*Defined in [Wrapper.ts:25](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L25)*

**Returns:** *number*

___

###  bitOffsetFromStart

• **get bitOffsetFromStart**(): *number*

*Defined in [Wrapper.ts:33](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L33)*

**Returns:** *number*

___

###  buffer

• **get buffer**(): *ArrayBuffer*

*Defined in [Wrapper.ts:17](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L17)*

**Returns:** *ArrayBuffer*

___

###  byte

• **get byte**(): *number*

*Defined in [Wrapper.ts:29](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L29)*

**Returns:** *number*

___

###  byteLength

• **get byteLength**(): *number*

*Defined in [Wrapper.ts:21](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L21)*

**Returns:** *number*

___

###  done

• **get done**(): *boolean*

*Defined in [Wrapper.ts:37](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L37)*

**Returns:** *boolean*

## Methods

###  residualBitLength

▸ **residualBitLength**(): *number*

*Defined in [Wrapper.ts:41](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L41)*

**Returns:** *number*

___

### `Protected` step

▸ **step**(`bitLength`: number): *boolean*

*Defined in [Wrapper.ts:49](https://github.com/hookun/bitbybit/blob/20789a9/src/Wrapper.ts#L49)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bitLength` | number | Number of bits to proceed. |

**Returns:** *boolean*

Whether byteOffset is changed.
