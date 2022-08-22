# Configuration Options

## Introduction

zProtect uses the [YAML](https://en.wikipedia.org/wiki/YAML) data serialization language for configuring the behavior of the zProtect obfuscator. It is possible to hand-write the configuration file to upload on the web interface, however, you may wish to use the configurator tool in the zProtect dashboard area.

## Value Types
There are a few value types used in the zProtect configuration, which are listed below.

### Boolean
Only accepts `true` and `false` as the value.

For example:
```yaml
# A key with value as true
key1: true

# A key with value as false
key2: false
```

### String
Accepts any text character.

For example:
```yaml
# A key with a string value
key: value
```

### String Array
A list of [`strings`](#string), separated by a newline and prefixed with a dash.

For example:
```yaml
# An array with entries
key:
- something
- another thing

# An empty array
empty: []
```

## Options
These options specify runtime information and general configuration.

### outputJar
Name of the obfuscated JAR file.

Value type: [`string`](#string)

### libraries
Dependencies required to obfuscate your jar to prevent "Not found" errors. 

Value type: [`string array`](#string-array)

### exclusions
Class files and directories that should be ignored by the obfuscator. They will not have any obfuscation applied to them.

Value type: [`string array`](#string-array)

### watermark
Adds a watermark to the obfuscated JAR for advertisement. Only removable for users with a Commercial License.

Value type: [`boolean`](#boolean)

## Transformers
These options specify wherether to enable available obfuscation techniques.

### FieldRenamer
Obfuscates field names.

Value type: [`boolean`](#boolean)

### MethodRenamer
Obfuscates method names.

Value type: [`boolean`](#boolean)

### ClassRenamer
Obfuscates class names.

Value type: [`boolean`](#boolean)

### LocalVariableRenamer
Obfuscates local variable names.

Value type: [`boolean`](#boolean)

### DecompilerCrasher
Performs stack manipulation to crash decompilers.

Value type: [`boolean`](#boolean)

### BadAnnotationCrasher
Performs annotation manipulation to crash decompilers.

Value type: [`boolean`](#boolean)

### AntiDebug
Adds anti-tamper / disables certain flags from being used on your program.

Value type: [`boolean`](#boolean)

### LineNumberRemover
Removes the line number attribute from your class.

Value type: [`boolean`](#boolean)

### SourceDebugRemover
Removes the source debug attribute. 

Value type: [`boolean`](#boolean)

### SourceFileRemover
Removes the source file attribute. 

Value type: [`boolean`](#boolean)

### KotlinMetadataRemover
Removes kotlin meta data from your kotlin class files.

Value type: [`boolean`](#boolean)

### HideClassMembers
Mark classes as synthetic to hide them from bad decompilers.

Value type: [`boolean`](#boolean)

### RemoveSignatures
Removes extended type information.

Value type: [`boolean`](#boolean)

### LocalVariableRemover
Removes local variables from your class.

Value type: [`boolean`](#boolean)

### InsnRemover
Removes the instructions const_. and tableswitch.

Value type: [`boolean`](#boolean)

### EnumOptimiser
Optimises enum values by removing clone call(s). 

Value type: [`boolean`](#boolean)

### Flow
Applies various obfuscation techniques such as flattening. 

Value type: [`boolean`](#boolean)

### NumberPooler
Moves numbers into an array and obfuscates them.

Value type: [`boolean`](#boolean)

### StringPooler
Moves your strings into an array and obfuscates them.

Value type: [`boolean`](#boolean)

### ShuffleFields
Moves around fields.

Value type: [`boolean`](#boolean)

### ShuffleMethods
Moves around methods.

Value type: [`boolean`](#boolean)

### ShuffleClasses
Moves around classes.

Value type: [`boolean`](#boolean)

## Example
Below is a fully functional example configuration file with some zProtect transformers enabled and some disabled.

```yaml
outputJar: output.jar
libraries: []
exclusions:
- org/
- net/
- me/
- redis
watermark: true
FieldRenamer: true
MethodRenamer: false
ClassRenamer: false
ClassRenamerPath: ''
LocalVariableRenamer: false
DecompilerCrasher: true
BadAnnotationCrasher: true
AntiDebug: true
LineNumberRemover: true
SourceDebugRemover: true
SourceFileRemover: true
KotlinMetadataRemover: true
HideClassMembers: true
HideFields: true
HideMethods: true
RemoveSignatures: true
LocalVariableRemover: true
InsnRemover: true
EnumOptimiser: true
Flow: true
NumberPooler: false
StringPooler: true
ShuffleFields: true
ShuffleMethods: true
```