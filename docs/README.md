[@hookun/bitbybit](README.md)

# @hookun/bitbybit

## Index

### Classes

* [BitWriter](classes/bitwriter.md)

### Variables

* [WordSize](README.md#const-wordsize)

### Functions

* [createBufferFromBitLength](README.md#const-createbufferfrombitlength)
* [createBufferFromBytes](README.md#const-createbufferfrombytes)
* [getBit](README.md#const-getbit)
* [getBitInByte](README.md#const-getbitinbyte)
* [listBit](README.md#const-listbit)
* [listBitHasState](README.md#const-listbithasstate)
* [runLength](README.md#const-runlength)
* [setBit](README.md#const-setbit)
* [setBitInByte](README.md#const-setbitinbyte)
* [toString](README.md#const-tostring)

## Variables

### `Const` WordSize

• **WordSize**: *8* = 8

*Defined in [BitWriter.ts:1](https://github.com/hookun/bitbybit/blob/c76be99/src/BitWriter.ts#L1)*

## Functions

### `Const` createBufferFromBitLength

▸ **createBufferFromBitLength**(`bitLength`: number): *ArrayBuffer*

*Defined in [createBuffer.ts:6](https://github.com/hookun/bitbybit/blob/c76be99/src/createBuffer.ts#L6)*

If bitLength is 6, then this returns ArrayBuffer of 1 byte.
If bitLength is 9, then this returns ArrayBuffer of 2 bytes.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`bitLength` | number | number of bits  |

**Returns:** *ArrayBuffer*

___

### `Const` createBufferFromBytes

▸ **createBufferFromBytes**(`byteLength`: Iterable‹number›): *ArrayBuffer*

*Defined in [createBuffer.ts:8](https://github.com/hookun/bitbybit/blob/c76be99/src/createBuffer.ts#L8)*

**Parameters:**

Name | Type |
------ | ------ |
`byteLength` | Iterable‹number› |

**Returns:** *ArrayBuffer*

___

### `Const` getBit

▸ **getBit**(`buffer`: ArrayBuffer, `bitOffset`: number): *boolean*

*Defined in [getBit.ts:3](https://github.com/hookun/bitbybit/blob/c76be99/src/getBit.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`bitOffset` | number |

**Returns:** *boolean*

___

### `Const` getBitInByte

▸ **getBitInByte**(`byte`: number, `bitIndex`: number): *boolean*

*Defined in [getBitInByte.ts:1](https://github.com/hookun/bitbybit/blob/c76be99/src/getBitInByte.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`byte` | number |
`bitIndex` | number |

**Returns:** *boolean*

___

### `Const` listBit

▸ **listBit**(`buffer`: ArrayBuffer, `startBit`: number, `endBit`: number): *Generator‹boolean›*

*Defined in [listBit.ts:3](https://github.com/hookun/bitbybit/blob/c76be99/src/listBit.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`startBit` | number | 0 |
`endBit` | number | buffer.byteLength * 8 |

**Returns:** *Generator‹boolean›*

___

### `Const` listBitHasState

▸ **listBitHasState**(`buffer`: ArrayBuffer, `state`: boolean, `startBit`: number, `endBit`: number): *Generator‹number›*

*Defined in [listBitHasState.ts:3](https://github.com/hookun/bitbybit/blob/c76be99/src/listBitHasState.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`state` | boolean | - |
`startBit` | number | 0 |
`endBit` | number | buffer.byteLength * 8 |

**Returns:** *Generator‹number›*

___

### `Const` runLength

▸ **runLength**(`buffer`: ArrayBuffer, `startBit`: number, `endBit`: number, `startState`: boolean): *Generator‹number›*

*Defined in [runLength.ts:3](https://github.com/hookun/bitbybit/blob/c76be99/src/runLength.ts#L3)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`startBit` | number | 0 |
`endBit` | number | buffer.byteLength * 8 |
`startState` | boolean | false |

**Returns:** *Generator‹number›*

___

### `Const` setBit

▸ **setBit**(`buffer`: ArrayBuffer, `bitOffset`: number, `bitState`: boolean): *void*

*Defined in [setBit.ts:3](https://github.com/hookun/bitbybit/blob/c76be99/src/setBit.ts#L3)*

**Parameters:**

Name | Type |
------ | ------ |
`buffer` | ArrayBuffer |
`bitOffset` | number |
`bitState` | boolean |

**Returns:** *void*

___

### `Const` setBitInByte

▸ **setBitInByte**(`byte`: number, `bitIndex`: number, `bitState`: boolean): *number*

*Defined in [setBitInByte.ts:1](https://github.com/hookun/bitbybit/blob/c76be99/src/setBitInByte.ts#L1)*

**Parameters:**

Name | Type |
------ | ------ |
`byte` | number |
`bitIndex` | number |
`bitState` | boolean |

**Returns:** *number*

___

### `Const` toString

▸ **toString**(`buffer`: ArrayBuffer, `bytesPerLine`: number, `delimiter`: string): *string*

*Defined in [toString.ts:1](https://github.com/hookun/bitbybit/blob/c76be99/src/toString.ts#L1)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`buffer` | ArrayBuffer | - |
`bytesPerLine` | number | 4 |
`delimiter` | string | " " |

**Returns:** *string*
