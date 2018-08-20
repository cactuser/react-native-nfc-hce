# react-native-hce

Inspired by [android-CardEmulation](https://github.com/googlesamples/android-CardEmulation)

🌟🔥Only supported Android !🔥🌟

## Requisites

- Android (API 19+)
- Android SDK 27
- Android Build Tools v27.0.2

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

## Setup

1. Open up `android/app/src/main/AndroidManifest.xml`

- Add `<uses-permission android:name="android.permission.NFC" />`
- Add
  ```
  <service
            android:name="studio.bb.rnlib.CardService"
            android:exported="true"
            android:permission="android.permission.BIND_NFC_SERVICE">
            <intent-filter>
                <action android:name="android.nfc.cardemulation.action.HOST_APDU_SERVICE" />
            </intent-filter>
            <meta-data
                android:name="android.nfc.cardemulation.host_apdu_service"
                android:resource="@xml/aid_list" />
    </service>
  ```

2. Create `aid_list.xml` in `android/app/src/main/res/xml/`

- Add code in `aid_list.xml`

```xml
<host-apdu-service xmlns:android="http://schemas.android.com/apk/res/android"
    android:description="@string/service_name"
    android:requireDeviceUnlock="false">
    <aid-group
        android:category="other"
        android:description="@string/card_title">
        <aid-filter android:name="F201808175" />
    </aid-group>
</host-apdu-service>
```

The aid need to customize

## Usage

```javascript
import HCE from "react-native-hce";

componentDidMount = () => {
  const { support, enabled } = HCE.supportNFC();

  HCE.listenNFCStatus(enabled => {
    console.log("NFC enabled: ", enabled);
  });
};

_onChangeText = text => {
  if (text.length > 0) {
    HCE.setCardContent(text);
  }
};
```

### supportNFC()

Get NFC supported and enabled

### listenNFCStatus(enabled:boolean)

Listen NFC enabled status

### setCardContent(content:string)

Write CardEmulation content
