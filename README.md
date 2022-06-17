## About

This is an example of how **memory leaks** can occur using the react-native-reanimated v2 library.

It contains two screens : "Home" and "Animated".

"Animated" screen contains multiples huge reanimated shared values (each filled with 100k elements), that will bring the RAM usage from ~**75mb** to ~**120mb**.
We expect the screen to be fully unmounted when navigating back, which appear not to be the case (cf video recording) since the memory keep ramping up when going back and forth. It goes up to ~**+200mb** before the apps crashes.


![leaks](https://user-images.githubusercontent.com/36242531/174328142-2ea6c0ba-ba8c-46a8-9803-c6f84e7d53fe.gif)

## Installation

```bash
yarn install
npx pod-install
yarn ios
```
