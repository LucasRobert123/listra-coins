export type StackParamList = {
  Login: undefined;
  Home: undefined;
  HomeTab: undefined;
  ProductsTab: undefined;
  ProfileTab: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackParamList {}
  }
}
