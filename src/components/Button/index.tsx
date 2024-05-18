import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  text?: string;
};

export function Button({ children, text, style, ...props }: Props) {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      activeOpacity={0.6}
      {...props}
    >
      {children ?? <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
}
