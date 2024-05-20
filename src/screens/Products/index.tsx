import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";

import { styles } from "./styles";
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Center } from "@/components/Center";
import { theme } from "@/styles/theme";

export function Products() {
  const navigation = useNavigation();
  const { products, getProducts, loading } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonGoBack}
        >
          <Image
            style={styles.image}
            source={require("@/assets/icons/arrow-left.png")}
          />
          <Text style={styles.textGoBack}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Shop</Text>

        {loading ? (
          <Center>
            <ActivityIndicator size={24} color={theme.colors.primary.roxo} />
          </Center>
        ) : (
          <FlatList
            contentContainerStyle={[styles.contentListProducts]}
            columnWrapperStyle={{ justifyContent: "space-between" }}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 24 }}
            data={products}
            numColumns={2}
            renderItem={({ item }) => <ProductCard product={item} />}
            keyExtractor={(item) => String(item.id)}
          />
        )}
      </View>
    </SafeAreaView>
  );
}
