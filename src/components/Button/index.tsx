import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";
import { theme } from "@/styles/theme";

type Props = TouchableOpacityProps & {
  text?: string;
  isLoading?: boolean;
};

export function Button({ children, text, style, isLoading, ...props }: Props) {
  return (
    <TouchableOpacity
      disabled={isLoading}
      style={[styles.container, style]}
      activeOpacity={0.6}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size={18} color={theme.colors.neutral.white} />
      ) : (
        children ?? <Text style={styles.text}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}
