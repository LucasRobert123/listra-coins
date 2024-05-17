import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  text?: string;
};

export function Button({ children, text, ...props }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.6} {...props}>
      {children ?? <Text style={styles.text}>{text}</Text>}
    </TouchableOpacity>
  );
}
