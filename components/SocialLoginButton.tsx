import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

interface SocialLoginButtonProps {
  iconName: string;
  iconSet?: "FontAwesome" | "FontAwesome5";
  label: string;
  iconColor?: string;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({
  iconName,
  iconSet = "FontAwesome",
  label,
  iconColor = "#000",
}) => {
  const IconComponent = iconSet === "FontAwesome5" ? FontAwesome5 : FontAwesome;

  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7}>
      <View style={styles.iconContainer}>
        <IconComponent name={iconName} size={20} color={iconColor} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#666",
    borderWidth: 1,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 6,
    backgroundColor: "transparent",
  },
  iconContainer: {
    width: 24,
    alignItems: "center",
    marginRight: 12,
  },
  label: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default SocialLoginButton;
