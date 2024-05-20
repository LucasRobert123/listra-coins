import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "@/screens/Login";
import { StackParamList } from "@/@types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export function AuthRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
