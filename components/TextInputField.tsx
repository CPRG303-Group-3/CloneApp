import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

interface TextInputFieldProps extends TextInputProps {
  label: string;
  secure?: boolean;
  rightIcon?: React.ReactNode;
}

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  secure = false,
  rightIcon,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          secureTextEntry={secure}
          placeholderTextColor="#888"
          {...rest}
        />
        {rightIcon && <View style={styles.iconWrapper}>{rightIcon}</View>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  label: {
    color: "#fff",
    fontWeight: "600",
    marginBottom: 6,
    fontSize: 14,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    backgroundColor: "#121212",
  },
  input: {
    flex: 1,
    color: "#fff",
    height: 40,
    fontSize: 16,
  },
  iconWrapper: {
    marginLeft: 8,
  },
});

export default TextInputField;
