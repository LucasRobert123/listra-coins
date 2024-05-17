import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

import { styles } from "./styles";

export function Products() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.buttonGoBack}>
          <Image
            style={styles.image}
            source={require("@/assets/icons/arrow-left.png")}
          />
          <Text style={styles.textGoBack}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Shop</Text>

        <FlatList
          contentContainerStyle={[styles.contentListProducts]}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          style={{ marginTop: 24 }}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          numColumns={2}
          renderItem={() => <ProductCard />}
          keyExtractor={(item) => item.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
