import { Image, Text, TouchableOpacity, View, ViewProps } from "react-native";
import { styles } from "./styles";

type Props = Pick<ViewProps, "style">;

export const ProductCard = ({ style }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={require("@/assets/icons/product.png")}
      />
      <View style={styles.content}>
        <Text style={styles.name}>Notebook L24</Text>
        <Text style={styles.quantity}>40 unidades</Text>

        <View style={styles.wrapperPrice}>
          <Text style={styles.price}>
            Lc {"\n"}
            <Text style={styles.priceBold}>4000.00</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Image source={require("@/assets/icons/shopping-cart.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
