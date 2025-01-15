# React Native Linking Error: Undefined is not an object (evaluating '...')

This repository demonstrates a common yet often perplexing issue in React Native development: linking errors with third-party libraries that rely on native modules.  The problem typically arises when the native modules are not properly linked to your project's build system, leading to runtime errors like `undefined is not an object (evaluating '...')`. This README guides you through the problem and its solution.

## The Problem

The `LinkingErrorBug.js` file demonstrates a scenario where a third-party library, let's say `react-native-uncommon-library`, is not correctly linked.  Attempts to call functions from this library result in the infamous `undefined is not an object` error.

## The Solution

The `LinkingErrorSolution.js` file provides a solution by correctly linking the native modules for both Android and iOS.  This usually involves steps like:

* **Android:** Manually linking the library in `android/app/build.gradle` or using the appropriate Android build tools.
* **iOS:**  Adding necessary frameworks and libraries in your Xcode project using CocoaPods or other dependency managers.

Specific steps will depend on the library you're using; refer to the library's documentation for detailed linking instructions.

## Reproducing the Issue

1. Clone this repository.
2. Run `npm install`.
3. Attempt to run the app on either an Android emulator/device or iOS simulator/device.

You should observe the linking error. After applying the solution in `LinkingErrorSolution.js`, the app should run correctly.