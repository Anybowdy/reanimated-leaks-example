import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { StyledButton } from "./StyledButton";

export const HomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StyledButton text="Navigate" onPress={() => navigate("Animated")} />
    </View>
  );
};
