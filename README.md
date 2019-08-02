# react-native-qqsdk
[![npm](https://img.shields.io/npm/v/react-native-qqsdk.svg)](https://www.npmjs.com/package/react-native-qqsdk)
[![npm](https://img.shields.io/npm/dm/react-native-qqsdk.svg)](https://www.npmjs.com/package/react-native-qqsdk)
[![platform](https://img.shields.io/badge/platform-iOS%2FAndroid-lightgrey.svg?style=flat)](https://github.com/@stonecutter/react-native-qqsdk)
[![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat)](https://github.com/@stonecutter/react-native-qqsdk/blob/master/LICENSE)


A React Native wrapper around the Tencent QQ SDK for Android and iOS. Provides access to QQ ssoLogin, QQ Sharing, QQ Zone Sharing etc.


## Table of Contents

- [Feature](#feature)
- [Installation](#installation)
  - [RNPM](#rnpm)
  - [CocoaPods](#cocoapods)
  - [Manual](#manual)
    - [iOS Setup](#ios-setup)
    - [Android Setup](#android-setup)
- [Documentation](#documentation)     
  - [Support API](#support-api)
  - [Error Code](#error-code)
  - [Image](#image)  
  - [Usage](#usage)
    - [checkClientInstalled](#checkclientinstalled)
    - [ssoLogin](#ssologin)
    - [logout](#logout)
    - [shareText](#sharetext)
    - [shareImage](#shareimage)
    - [shareNews](#sharenews)
    - [shareAudio](#shareaudio)
    - [getUserInfo](#getuserinfo)
- [About SDK](#about-sdk) 
- [Contributing](#contributing) 
- [License](#license) 

  

## Feature
1. QQ SSO Login
2. QQ Logout 
3. QQ Share 
4. QZone Share
5. QQ Favorites
6. checkClientInstalled   

## Installation

1. Install package from npm

```shell
npm install --save @stonecutter/react-native-qqsdk@latest
cd ios && pod install && cd ..
```

2. Link

```
react-native link @stonecutter/react-native-qqsdk
```

3. Add CFBundleURLTypes to project's Info.plist file.

```xml
<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>qq</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>tencent101741163</string>
    </array>
  </dict>
</array>
```

4. Add LSApplicationQueriesSchemes to project's Info.plist file.

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>mqqapi</string>
  <string>mqq</string>
  <string>mqqOpensdkSSoLogin</string>
  <string>mqqconnect</string>
  <string>mqqopensdkdataline</string>
  <string>mqqopensdkgrouptribeshare</string>
  <string>mqqopensdkfriend</string>
  <string>mqqopensdkapi</string>
  <string>mqqopensdkapiV2</string>
  <string>mqqopensdkapiV3</string>
  <string>mqzoneopensdk</string>
  <string>wtloginmqq</string>
  <string>wtloginmqq2</string>
  <string>mqqwpa</string>
  <string>mqzone</string>
  <string>mqzonev2</string>
  <string>mqzoneshare</string>
  <string>wtloginqzone</string>
  <string>mqzonewx</string>
  <string>mqzoneopensdkapiV2</string>
  <string>mqzoneopensdkapi19</string>
  <string>mqzoneopensdkapi</string>
  <string>mqzoneopensdk</string>
</array>
```

#### Android Setup

1. In your `android/settings.gradle` file, make the following additions:

    ```gradle
    include ':app', ':react-native-qqsdk'
    project(':react-native-qqsdk').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-qqsdk/android')
    ```

2. In your `android/app/build.gradle` file, add the `:react-native-qqsdk` project as a compile-time dependency:

    ```gradle
    ...
    dependencies {
        ...
        compile project(':react-native-qqsdk')
    }
    ```
3. add App ID to `$RNProjectRoot/package.json`

``` json
{
  "qq_app_id": "YOUR_QQ_APP_ID"
}
```
        
4.Update the `MainApplication.java` file to use react-native-qqsdk via the following changes:

```java
...
// 1. Import the plugin class.
import me.vanpan.rctqqsdk.QQSDKPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        ...

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new QQSDKPackage()
            );
        }
    };
}
```
## Documentation

### Support API
1. ssoLogin
2. Logout
3. checkClientInstalled
4. Share(see form below)

|      Platform      |   iOS  |   iOS     |     iOS      | Android |  Android  |    Android   |
|        :---:       | :---:  |   :---:   |    :---:     |   :---: |    :---:  |     :---:    |
|      ShareScene    |   QQ   |   QQZone  |  QQ Favorite |    QQ   |   QQZone  |  QQ Favorite |
|      Text        |    √   |     √     |      √       |    ✕    |     √     |      √       |
|      Image         |    √   |     √     |      √       |    √    |     √     |      √       |
|      News        |    √   |     √     |      √       |    √    |     √     |      √       |
|      Audio         |    √   |     √     |      √       |    √    |     √     |      √       |



### Error Code

| code        |                        explanation                                   |
|-------------|----------------------------------------------------------------------|
|      404    |                        QQ client not found                           |
|      405    |                        Android Activity not found                    |
|      500    |             QQ share (QQSDKPackage,QQZone QQ Favorite) error         |
|      503    |             QQ share (QQSDKPackage,QQZone QQ Favorite) cancelled     |
|      600    |                        QQ ssoLogin error                             |
|      603    |                        ssoLogin cancelled                            |

### Image
 This plugin support three Image types:
  1. Network URL
  2. Base64
  3. Absolute file path
 also support resolveAssetSource,for example, resolveAssetSource(require('./news.jpg')).uri           
 
### Usage
##### checkClientInstalled
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
QQ.isQQClientInstalled()
  .then(()=>{console.log('Installed')})
  .catch(()=>{console.log('not installed')});

```
##### ssoLogin
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
QQ.ssoLogin()
  .then((result)=>{'result is', result})
  .catch((error)=>{console.log('error is', error)});

```
##### logout
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
QQ.logout()
  .then((result)=>{'result is', result})
  .catch((error)=>{console.log('error is', error)});

```
##### shareText
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
QQ.shareText('分享文字',QQ.shareScene.QQ)
  .then((result)=>{console.log('result is', result)})
  .catch((error)=>{console.log('error is', error)});

```
##### shareImage
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
const imgUrl = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg';
QQ.shareImage(imgUrl,'分享标题','分享描述',QQ.shareScene.QQ)
  .then((result)=>{console.log('result is', result)})
  .catch((error)=>{console.log('error is', error)});

```
##### shareNews
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
import resolveAssetSource from 'resolveAssetSource';
QQ.shareNews('https://facebook.github.io/react-native/',resolveAssetSource(require('./news.jpg')).uri,'分享新闻标题','分享新闻描述',QQ.shareScene.QQ)
.then((result)=>{console.log('result is', result)})
.catch((error)=>{console.log('error is', error)});

```
##### shareAudio
```js
import * as QQ from '@stonecutter/react-native-qqsdk';
const audioPreviewUrl = 'https://y.qq.com/portal/song/001OyHbk2MSIi4.html';
const audioUrl = 'http://stream20.qqmusic.qq.com/30577158.mp3';
const imgUrl = 'https://y.gtimg.cn/music/photo_new/T001R300x300M000003Nz2So3XXYek.jpg';
QQ.shareAudio(audioPreviewUrl,audioUrl,imgUrl,'十年','陈奕迅',QQ.shareScene.QQ)
.then((result)=>{console.log('result is', result)})
.catch((error)=>{console.log('error is', error)});

 ```

##### getUserInfo
```js
var url = 'https://graph.qq.com/user/get_user_info?access_token=' + accessToken + '&oauth_consumer_key= APPID &openid=' + userId;
http.get(url)
```


## About SDK 
This plugin use 3.2.0 version sdk for Android,3.2.1 version sdk for iOS. You can download lastest version sdk [here](http://wiki.open.qq.com/wiki/mobile/SDK%E4%B8%8B%E8%BD%BD)                        

## Contributing
Feel free to contribute
                
## License

**react-native-qqsdk** is released under the **MIT** license. See [LICENSE](https://github.com/@stonecutter/react-native-qqsdk/blob/master/LICENSE) file for more information.

