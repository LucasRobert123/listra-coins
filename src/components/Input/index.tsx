import {
  Image,
  ImageSourcePropType,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { styles } from "./styles";

type Props = TextInputProps & {
  icon: ImageSourcePropType;
};

export function Input({ icon, ...props }: Props) {
  return (
    <View style={styles.container}>
      <Image source={icon} />
      <TextInput style={styles.input} {...props} />
    </View>
  );
}
