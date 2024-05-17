import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.roxo,
    paddingTop: 64,
  },
  image: {
    width: 96,
    height: 95,
    alignSelf: "center",
  },
  wrapperAppName: {
    backgroundColor: theme.colors.neutral.grey[900],
    borderRadius: 24,
    alignSelf: "center",
    paddingVertical: 8,
    paddingHorizontal: 24,
    marginTop: 16,
    opacity: 0.6,
  },
  appName: {
    color: theme.colors.neutral.white,
    fontSize: 20,
    fontFamily: theme.fonts.semibold,
  },
  form: {
    flex: 1,
    backgroundColor: theme.colors.neutral.grey[50],
    marginTop: 48,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  title: {
    color: theme.colors.neutral.grey[900],
    fontSize: 24,
    fontFamily: theme.fonts.semibold,
    textAlign: "center",
    marginBottom: 24,
  },
  action: {
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 64,
  },
  textFooter: {
    fontFamily: theme.fonts.regular,
    fontSize: 12,
    color: theme.colors.neutral.grey[100],
  },
});
