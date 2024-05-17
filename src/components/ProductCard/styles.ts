import { theme } from "@/styles/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "48%",
    backgroundColor: theme.colors.neutral.white,
    elevation: 2,
    borderRadius: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  name: {
    color: theme.colors.neutral.grey[900],
    fontFamily: theme.fonts.semibold,
    fontSize: 16,
  },
  quantity: {
    color: theme.colors.neutral.grey[100],
    fontFamily: theme.fonts.regular,
    fontSize: 10,
  },
  wrapperPrice: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  price: {
    color: theme.colors.primary.roxo,
    fontFamily: theme.fonts.regular,
    fontSize: 12,
  },
  priceBold: {
    fontFamily: theme.fonts.semibold,
  },
  button: {
    width: 32,
    height: 32,
    backgroundColor: theme.colors.primary.roxo,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
