import { NavigationContainer } from "@react-navigation/native";

import { StackRoutes } from "./stack.routes";
import { useUserStore } from "@/store/user";
import { AuthRoutes } from "./auth.routes";

export function Routes() {
  const userName = useUserStore((state) => state.name);

  return (
    <NavigationContainer>
      {userName ? <StackRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
