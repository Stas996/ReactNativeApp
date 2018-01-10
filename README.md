## Instruction for running application

1. Install the extension in VS Code:
	* Press Ctrl + Shift + X (Cmd + Shift + X on macOS), wait a moment while the list of available extensions is populated
	* Type react-native and install React Native Tools
	* For more guidance view VS Code Extension Gallery
2. If you haven't already, install React Native:
	* Run `npm install -g react-native-cli` to install React Native CLI
3. Install Expo app on your phone device:
	* For IOS - [download](https://itunes.apple.com/app/apple-store/id982107779?ct=www&mt=8);
	* For Android - [download](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www);
4. Run application:
	* Open this application in VS Code;
	* Connect device to computer by USB;
	* Run `npm install`;
	* For IOS - `npm run ios`;
    * For Android - `npm run android`;

## Commands
  1. `npm start` - Starts the development server so you can open your app in the Expo app on your phone.

  2. `npm run ios` - (Mac only, requires Xcode) 
  	Starts the development server and loads your app in an iOS simulator.

  3. `npm run android` - (Requires Android build tools)
    Starts the development server and loads your app on a connected Android
    device or emulator.

