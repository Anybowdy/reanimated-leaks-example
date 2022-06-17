# About

This project aims to reproduce and show **memory leaks** that can occur when using the reanimated v2 library.
It contains two screens : "Home" and "Animated".
"Animated" screen contains multiples huge reanimated shared values (each filled with 100k elements), that will bring the RAM usage from ~**75mb** to ~**120mb**. We expect the screen to be fully unmounted when navigating back, which appear not to be the case (cf video recording) since the memory keep ramping up when going back and forth. It goes up to ~**+200mb** before the apps crashes.
