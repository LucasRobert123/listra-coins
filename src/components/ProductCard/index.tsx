import { Image, Text, TouchableOpacity, View, ViewProps } from "react-native";
import { styles } from "./styles";
import { IProduct } from "@/entities/product";

type Props = Pick<ViewProps, "style"> & {
  product: IProduct;
};

export const ProductCard = ({ style, product }: Props) => {
  return (
    <View style={[styles.container, style]}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: product.image,
          cache: "force-cache",
        }}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.quantity}>{product.quantity} unidades</Text>

        <View style={styles.wrapperPrice}>
          <Text style={styles.price}>
            Lc {"\n"}
            <Text style={styles.priceBold}>{product.price}</Text>
          </Text>
          <TouchableOpacity activeOpacity={0.6} style={styles.button}>
            <Image source={require("@/assets/icons/shopping-cart.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
