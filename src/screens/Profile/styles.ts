import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.roxo,
  },
  header: {
    paddingHorizontal: 24,
    paddingVertical: 32,
    alignItems: "center",
  },
  image: {
    width: 96,
    height: 96,
    borderRadius: 24,
  },
  username: {
    fontSize: 16,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.grey[50],
    marginTop: 24,
  },
  buttonEdit: {
    backgroundColor: theme.colors.neutral.grey[900],
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 24,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  buttonEditText: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.white,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.neutral.grey[50],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
  },
  buttonDetails: {
    height: 89,
    backgroundColor: theme.colors.neutral.white,
    paddingHorizontal: 24,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    marginBottom: 24,
  },
  buttonDetailsContent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  buttonDetailsText: {
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.grey[900],
    marginLeft: 16,
  },
  action: {
    justifyContent: "center",
    alignItems: "center",
  },
});
