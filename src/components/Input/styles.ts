import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.neutral.white,
    elevation: 2,
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 24,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flexGrow: 1,
    color: theme.colors.neutral.grey[900],
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    marginLeft: 16,
  },
});
