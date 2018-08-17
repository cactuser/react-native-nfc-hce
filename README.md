
# react-native-hce

## Getting started

`$ npm install react-native-hce --save`

### Mostly automatic installation

`$ react-native link react-native-hce`

### Manual installation


#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import studio.bb.rnlib.RNHcePackage;` to the imports at the top of the file
  - Add `new RNHcePackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-hce'
  	project(':react-native-hce').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-hce/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-hce')
  	```


## Usage
```javascript
import RNHce from 'react-native-hce';

// TODO: What to do with the module?
RNHce;
```
  