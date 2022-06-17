import { useNavigation } from "@react-navigation/native";
import { FC, memo } from "react";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { StyledButton } from "./StyledButton";

type Props = {
  onPress: () => void;
};

export const AnimatedScreen: FC<Props> = ({ onPress }) => {
  const { goBack } = useNavigation();

  const largeArray = Array.from(Array(100000).keys());

  useSharedValue(largeArray);
  useSharedValue(largeArray);
  useSharedValue(largeArray);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <StyledButton text="Navigate back" onPress={() => goBack()} />
    </View>
  );
};
