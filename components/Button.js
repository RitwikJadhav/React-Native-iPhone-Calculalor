import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

const screen = Dimensions.get("window");
const buttonWidth = screen.width / 4;

export default ({ onPress, text, size, theme }) => {
  const buttonStyles = [styles.button];
  const textStyles = [styles.text];
  if (size == "double") {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme == "secondary") {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme == "accent") {
    buttonStyles.push(styles.buttonAccent);
    textStyles.push(styles.textAccent);
  }
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#333333",
    flex: 1,
    height: buttonWidth - 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: buttonWidth,
    margin: 5,
    marginBottom: 15,
  },
  text: {
    color: "#fff",
    fontSize: 36,
    fontWeight: "500",
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    flex: 0,
    alignItems: "flex-start",
    paddingLeft: 38,
  },
  textSecondary: {
    color: "#060606",
    width: 60,
    paddingLeft: 10,
    fontSize: 30,
  },
  buttonSecondary: {
    backgroundColor: "#a6a6a6",
  },
  buttonAccent: {
    backgroundColor: "#f09a36",
  },
  textAccent: {
    fontSize: 48,
  },
});
