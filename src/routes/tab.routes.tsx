import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "@/screens/Home";
import { Products } from "@/screens/Products";
import { Profile } from "@/screens/Profile";
import { Image } from "react-native";

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 58,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require(`@/assets/tab/home-active.png`)
                  : require(`@/assets/tab/home-inactive.png`)
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProductsTab"
        component={Products}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require(`@/assets/tab/bag-active.png`)
                  : require(`@/assets/tab/bag-inactive.png`)
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={
                focused
                  ? require(`@/assets/tab/person-active.png`)
                  : require(`@/assets/tab/person-inactive.png`)
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
