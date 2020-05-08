[@hookun/bitbybit](../README.md) › [BitWriter](bitwriter.md)

# Class: BitWriter

## Hierarchy

* [Wrapper](wrapper.md)

  ↳ **BitWriter**

## Index

### Constructors

* [constructor](bitwriter.md#constructor)

### Properties

* [bitOffset](bitwriter.md#protected-bitoffset)
* [byteOffset](bitwriter.md#protected-byteoffset)
* [tempByte](bitwriter.md#private-tempbyte)
* [view](bitwriter.md#readonly-view)

### Accessors

* [bitOffsetFromStart](bitwriter.md#protected-bitoffsetfromstart)
* [buffer](bitwriter.md#buffer)
* [byte](bitwriter.md#protected-byte)
* [byteLength](bitwriter.md#protected-bytelength)
* [done](bitwriter.md#done)

### Methods

* [end](bitwriter.md#end)
* [step](bitwriter.md#protected-step)
* [write](bitwriter.md#write)

## Constructors

###  constructor

\+ **new BitWriter**(`buffer`: ArrayBuffer): *[BitWriter](bitwriter.md)*

*Overrides [Wrapper](wrapper.md).[constructor](wrapper.md#constructor)*

*Defined in [BitWriter.ts:7](https://github.com/hookun/bitbybit/blob/a4e3653/src/BitWriter.ts#L7)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |

**Returns:** *[BitWriter](bitwriter.md)*

## Properties

### `Protected` bitOffset

• **bitOffset**: *number*

*Inherited from [Wrapper](wrapper.md).[bitOffset](wrapper.md#protected-bitoffset)*

*Defined in [Wrapper.ts:9](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L9)*

___

### `Protected` byteOffset

• **byteOffset**: *number*

*Inherited from [Wrapper](wrapper.md).[byteOffset](wrapper.md#protected-byteoffset)*

*Defined in [Wrapper.ts:7](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L7)*

___

### `Private` tempByte

• **tempByte**: *number*

*Defined in [BitWriter.ts:7](https://github.com/hookun/bitbybit/blob/a4e3653/src/BitWriter.ts#L7)*

___

### `Readonly` view

• **view**: *DataView*

*Inherited from [Wrapper](wrapper.md).[view](wrapper.md#readonly-view)*

*Defined in [Wrapper.ts:5](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L5)*

## Accessors

### `Protected` bitOffsetFromStart

• **get bitOffsetFromStart**(): *number*

*Inherited from [Wrapper](wrapper.md).[bitOffsetFromStart](wrapper.md#protected-bitoffsetfromstart)*

*Defined in [Wrapper.ts:29](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L29)*

**Returns:** *number*

___

###  buffer

• **get buffer**(): *ArrayBuffer*

*Overrides [Wrapper](wrapper.md).[buffer](wrapper.md#buffer)*

*Defined in [BitWriter.ts:14](https://github.com/hookun/bitbybit/blob/a4e3653/src/BitWriter.ts#L14)*

**Returns:** *ArrayBuffer*

___

### `Protected` byte

• **get byte**(): *number*

*Inherited from [Wrapper](wrapper.md).[byte](wrapper.md#protected-byte)*

*Defined in [Wrapper.ts:25](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L25)*

**Returns:** *number*

___

### `Protected` byteLength

• **get byteLength**(): *number*

*Inherited from [Wrapper](wrapper.md).[byteLength](wrapper.md#protected-bytelength)*

*Defined in [Wrapper.ts:21](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L21)*

**Returns:** *number*

___

###  done

• **get done**(): *boolean*

*Inherited from [Wrapper](wrapper.md).[done](wrapper.md#done)*

*Defined in [Wrapper.ts:33](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L33)*

**Returns:** *boolean*

## Methods

###  end

▸ **end**(): *ArrayBuffer*

*Defined in [BitWriter.ts:33](https://github.com/hookun/bitbybit/blob/a4e3653/src/BitWriter.ts#L33)*

**Returns:** *ArrayBuffer*

___

### `Protected` step

▸ **step**(`bitLength`: number): *boolean*

*Inherited from [Wrapper](wrapper.md).[step](wrapper.md#protected-step)*

*Defined in [Wrapper.ts:41](https://github.com/hookun/bitbybit/blob/a4e3653/src/Wrapper.ts#L41)*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bitLength` | number | Number of bits to proceed. |

**Returns:** *boolean*

Whether byteOffset is changed.

___

###  write

▸ **write**(`value`: number, `bitLength`: number): *void*

*Defined in [BitWriter.ts:18](https://github.com/hookun/bitbybit/blob/a4e3653/src/BitWriter.ts#L18)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |
`bitLength` | number |

**Returns:** *void*
