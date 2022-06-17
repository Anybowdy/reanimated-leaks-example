import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AnimatedScreen } from "./AnimatedScreen";
import { HomeScreen } from "./HomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Animated" component={AnimatedScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
