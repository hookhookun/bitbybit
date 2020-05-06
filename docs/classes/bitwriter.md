[@hookun/bitbybit](../README.md) › [BitWriter](bitwriter.md)

# Class: BitWriter

## Hierarchy

* **BitWriter**

## Index

### Constructors

* [constructor](bitwriter.md#constructor)

### Properties

* [bitOffset](bitwriter.md#private-bitoffset)
* [byte](bitwriter.md#private-byte)
* [byteOffset](bitwriter.md#private-byteoffset)
* [view](bitwriter.md#readonly-view)

### Accessors

* [buffer](bitwriter.md#buffer)

### Methods

* [end](bitwriter.md#end)
* [write](bitwriter.md#write)

## Constructors

###  constructor

\+ **new BitWriter**(`buffer`: ArrayBuffer): *[BitWriter](bitwriter.md)*

*Defined in [BitWriter.ts:11](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *[BitWriter](bitwriter.md)*

## Properties

### `Private` bitOffset

• **bitOffset**: *number*

*Defined in [BitWriter.ts:9](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L9)*

___

### `Private` byte

• **byte**: *number*

*Defined in [BitWriter.ts:11](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L11)*

___

### `Private` byteOffset

• **byteOffset**: *number*

*Defined in [BitWriter.ts:7](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L7)*

___

### `Readonly` view

• **view**: *DataView*

*Defined in [BitWriter.ts:5](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L5)*

## Accessors

###  buffer

• **get buffer**(): *ArrayBuffer*

*Defined in [BitWriter.ts:20](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L20)*

**Returns:** *ArrayBuffer*

## Methods

###  end

▸ **end**(): *ArrayBuffer*

*Defined in [BitWriter.ts:43](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L43)*

**Returns:** *ArrayBuffer*

___

###  write

▸ **write**(`value`: number, `bitLength`: number): *void*

*Defined in [BitWriter.ts:24](https://github.com/hookun/bitbybit/blob/ac7ae06/src/BitWriter.ts#L24)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`bitLength` | number |

**Returns:** *void*
