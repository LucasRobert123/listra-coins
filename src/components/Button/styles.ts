import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary.roxo,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.white,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
});
