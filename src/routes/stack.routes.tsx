import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@/screens/Login";
import { TabNavigator } from "./tab.routes";
import { StackParamList } from "@/@types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={TabNavigator} />
    </Stack.Navigator>
  );
}
