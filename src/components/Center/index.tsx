import React, { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

export const Center = ({ children }: { children: ReactNode }) => {
  return <View style={styles.container}>{children}</View>;
};
