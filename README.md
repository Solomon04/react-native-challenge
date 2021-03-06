# react-native-challenge
React Native Challenge for the Vemos position. 



## Getting Started
### Requirements: 
- You must have NodeJs installed: <a href="https://nodejs.org/en/">Node</a>
- You must have Yarn installed: <a href="https://yarnpkg.com/en/">Yarn</a>
- You must have the React Native CLI Installed: <a href="https://www.npmjs.com/package/react-native">React Native</a>
- You must have a Mac Environment with Xcode downloaded. 

If you have NPM installed you can just run `npm install -g react-native-cli` to install the React Native CLI

### Steps To Run on iOS: 
1. Run `git clone https://github.com/Solomon04/react-native-challenge.git` to download the repo
2. Run `cd react-native-challenge`
2. Run `yarn install` to install the node modules into your directory
3. Run `react-native run-ios` to build the iOS app, which will then open

### Project Specs: 
Checkout the specs for the project here: <a href="https://github.com/bookbottles/react-native-challenge">react-native-challenge</a>

### Post Layout: 
![layout](https://user-images.githubusercontent.com/35110194/61183721-48a27180-a60a-11e9-9072-9113e97a9a38.JPG)

The layout uses a scrollable view for up to 5 Reddit posts, where you can click a button at the bottom to open the Reddit post within a webview.

### Troubleshooting
If you are getting an error with the `react-native run-ios` command please follow these steps: 
1. Download the iOS zip file here: <a href="https://drive.google.com/open?id=1UJuOJeFtVLPuUKWA55gdcWHPJZoMBeMm">Here<a/> (very large file)
2. Extract the iOS zip file
3. Move the new iOS directory into the *react-native-challenge* directory which will replace the old one. 
4. Then cd into the iOS directory
5. Select the **AwesomeProject.xcworkspace**, which will promptly open Xcode
6. Click build in the top left corner of Xcode, which will then open the app on an iPhone simulator. 
