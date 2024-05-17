import { StyleSheet } from "react-native";
import { theme } from "@/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.roxo,
  },
  header: {
    height: 64,
    paddingHorizontal: 24,
  },
  image: {
    marginTop: 10,
  },
  buttonGoBack: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textGoBack: {
    color: theme.colors.neutral.white,
    fontFamily: theme.fonts.semibold,
    fontSize: 12,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.neutral.grey[50],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  title: {
    color: theme.colors.neutral.grey[900],
    fontFamily: theme.fonts.semibold,
    fontSize: 24,
  },
  contentListProducts: {
    paddingBottom: 24,
    gap: 16,
  },
});
