import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { styles } from "./styles";
import { IProduct } from "@/entities/product";
import { theme } from "@/styles/theme";
import { useCallback } from "react";

type ChildrenButtonProps = {
  [key in StateProductCard]: React.JSX.Element;
};

type StateProductCard = "add-cart" | "loading" | "on-my-way";

type Props = Pick<ViewProps, "style"> & {
  product: IProduct;
  state?: StateProductCard;
  onBuy?: (productId: number) => void;
};

export const ProductCard = ({
  style,
  state = "add-cart",
  product,
  onBuy,
}: Props) => {
  const childrenButton: ChildrenButtonProps = {
    "add-cart": <Image source={require("@/assets/icons/shopping-cart.png")} />,
    loading: <ActivityIndicator size={20} color={theme.colors.neutral.white} />,
    "on-my-way": <Image source={require("@/assets/icons/check-circle.png")} />,
  };

  const handleOnBuy = useCallback(() => {
    onBuy?.(product.id);
  }, [onBuy, product.id]);

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
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.button}
            onPress={handleOnBuy}
          >
            {childrenButton[state]}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
