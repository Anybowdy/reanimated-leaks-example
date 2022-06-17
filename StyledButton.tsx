import { FC } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  text: string;
  onPress: () => void;
};

export const StyledButton: FC<Props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={{ fontSize: 17, fontWeight: "600", color: "white" }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#03396C",
    padding: 20,
    borderRadius: 5,
  },
});
