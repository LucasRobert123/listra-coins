import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TabRoutes } from "./tab.routes";
import { StackParamList } from "@/@types/navigation";

const Stack = createNativeStackNavigator<StackParamList>();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={TabRoutes} />
    </Stack.Navigator>
  );
}
