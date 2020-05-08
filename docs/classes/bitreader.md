[@hookun/bitbybit](../README.md) › [BitReader](bitreader.md)

# Class: BitReader

## Hierarchy

* [Wrapper](wrapper.md)

  ↳ **BitReader**

## Index

### Constructors

* [constructor](bitreader.md#constructor)

### Properties

* [bitOffset](bitreader.md#protected-bitoffset)
* [byteOffset](bitreader.md#protected-byteoffset)
* [view](bitreader.md#readonly-view)

### Accessors

* [bitOffsetFromStart](bitreader.md#protected-bitoffsetfromstart)
* [buffer](bitreader.md#buffer)
* [byte](bitreader.md#protected-byte)
* [byteLength](bitreader.md#protected-bytelength)
* [done](bitreader.md#protected-done)

### Methods

* [read](bitreader.md#read)
* [step](bitreader.md#protected-step)

## Constructors

###  constructor

\+ **new BitReader**(`buffer`: ArrayBuffer): *[BitReader](bitreader.md)*

*Inherited from [Wrapper](wrapper.md).[constructor](wrapper.md#constructor)*

*Defined in [Wrapper.ts:9](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L9)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *[BitReader](bitreader.md)*

## Properties

### `Protected` bitOffset

• **bitOffset**: *number*

*Inherited from [Wrapper](wrapper.md).[bitOffset](wrapper.md#protected-bitoffset)*

*Defined in [Wrapper.ts:9](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L9)*

___

### `Protected` byteOffset

• **byteOffset**: *number*

*Inherited from [Wrapper](wrapper.md).[byteOffset](wrapper.md#protected-byteoffset)*

*Defined in [Wrapper.ts:7](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L7)*

___

### `Readonly` view

• **view**: *DataView*

*Inherited from [Wrapper](wrapper.md).[view](wrapper.md#readonly-view)*

*Defined in [Wrapper.ts:5](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L5)*

## Accessors

### `Protected` bitOffsetFromStart

• **get bitOffsetFromStart**(): *number*

*Inherited from [Wrapper](wrapper.md).[bitOffsetFromStart](wrapper.md#protected-bitoffsetfromstart)*

*Defined in [Wrapper.ts:29](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L29)*

**Returns:** *number*

___

###  buffer

• **get buffer**(): *ArrayBuffer*

*Inherited from [Wrapper](wrapper.md).[buffer](wrapper.md#buffer)*

*Defined in [Wrapper.ts:17](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L17)*

**Returns:** *ArrayBuffer*

___

### `Protected` byte

• **get byte**(): *number*

*Inherited from [Wrapper](wrapper.md).[byte](wrapper.md#protected-byte)*

*Defined in [Wrapper.ts:25](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L25)*

**Returns:** *number*

___

### `Protected` byteLength

• **get byteLength**(): *number*

*Inherited from [Wrapper](wrapper.md).[byteLength](wrapper.md#protected-bytelength)*

*Defined in [Wrapper.ts:21](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L21)*

**Returns:** *number*

___

### `Protected` done

• **get done**(): *boolean*

*Inherited from [Wrapper](wrapper.md).[done](wrapper.md#protected-done)*

*Defined in [Wrapper.ts:33](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L33)*

**Returns:** *boolean*

## Methods

###  read

▸ **read**(`bitLength`: number): *number*

*Defined in [BitReader.ts:7](https://github.com/hookun/bitbybit/blob/54e56bb/src/BitReader.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`bitLength` | number |

**Returns:** *number*

___

### `Protected` step

▸ **step**(`bitLength`: number): *boolean*

*Inherited from [Wrapper](wrapper.md).[step](wrapper.md#protected-step)*

*Defined in [Wrapper.ts:41](https://github.com/hookun/bitbybit/blob/54e56bb/src/Wrapper.ts#L41)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bitLength` | number | Number of bits to proceed. |

**Returns:** *boolean*

Whether byteOffset is changed.
