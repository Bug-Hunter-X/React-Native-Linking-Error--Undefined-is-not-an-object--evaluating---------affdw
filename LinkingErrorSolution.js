The solution involves correctly linking the native modules of the third-party library. The exact steps vary depending on the library and your build system (e.g., CocoaPods, Gradle), but generally involve:

**1. Android (using Gradle):**

Ensure that the library is correctly added as a dependency in your `android/app/build.gradle` file. You might also need to add the necessary native code directories to the `android/settings.gradle` file.  Additionally, verify that the library's AndroidManifest.xml is merged properly.

```gradle
//In android/app/build.gradle
dependencies {
    implementation "com.example:react-native-uncommon-library:x.x.x"
}
```

**2. iOS (using CocoaPods):**

Make sure the library is correctly specified in your `Podfile`, and run `pod install`. Also, ensure the necessary frameworks and libraries are added to your Xcode project's build settings (under 'Build Phases').

```ruby
#In Podfile
pod 'react-native-uncommon-library', :path => '../node_modules/react-native-uncommon-library'
```

**3. React Native Linking (if needed):**

If the library doesn't handle linking automatically, you may need to use the `react-native link` command (although this command is often discouraged in newer React Native versions):

```bash
react-native link react-native-uncommon-library
```

After completing these steps, clean and rebuild your project.  The linking error should be resolved.