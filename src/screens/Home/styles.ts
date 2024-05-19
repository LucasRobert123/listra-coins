import { theme } from "@/styles/theme";
import { Dimensions, StyleSheet } from "react-native";

const WIDTH_CARD_VACATION_PACKAGE = (Dimensions.get("window").width - 48) * 0.9;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary.roxo,
  },
  header: {
    padding: 24,
  },
  headerRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  userPicture: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  appNameContainer: {
    backgroundColor: theme.colors.neutral.grey[900],
    borderRadius: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  appName: {
    fontSize: 14,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.white,
  },
  userName: {
    fontSize: 14,
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral.white,
  },
  userNameBold: {
    fontFamily: theme.fonts.semibold,
  },
  content: {
    flex: 1,
    backgroundColor: theme.colors.neutral.grey[50],
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 24,
    marginTop: 8,
  },
  wrapperWallet: {
    flexDirection: "row",
    alignItems: "center",
    height: 62,
    elevation: 2,
    marginTop: -56,
    borderRadius: 24,
    backgroundColor: theme.colors.neutral.white,
    paddingHorizontal: 16,
  },
  wallet: {
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderRightWidth: 2,
    borderRightColor: "#3131311A",
    paddingRight: 32,
    marginRight: 16,
  },
  walletValue: {
    fontSize: 16,
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral.grey[900],
    paddingLeft: 8,
    marginBottom: 4,
  },
  walletValueBold: {
    fontSize: 18,
    fontFamily: theme.fonts.semibold,
    color: theme.colors.neutral.grey[900],
  },
  wrapperShop: {
    flexDirection: "row",
    alignItems: "center",
  },
  shopText: {
    fontSize: 18,
    fontFamily: theme.fonts.medium,
    color: theme.colors.neutral.grey[900],
    marginLeft: 8,
  },
  listVacationPackage: {
    marginTop: 40,
  },
  contentListVacationPackage: {
    alignSelf: "flex-start",
    gap: 16,
  },
  vacationPackageContainer: {
    width: WIDTH_CARD_VACATION_PACKAGE,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.primary.roxo,
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  vacationPackageContent: {
    paddingLeft: 16,
  },
  vacationPackageName: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral.white,
  },
  vacationPackageNameBold: {
    fontFamily: theme.fonts.semibold,
  },
  vacationPackageLocation: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral.white,
  },
  vacationPackageValue: {
    fontSize: 12,
    fontFamily: theme.fonts.regular,
    color: theme.colors.neutral.white,
  },
  vacationPackageValueBold: {
    fontSize: 28,
    fontFamily: theme.fonts.semibold,
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
});
