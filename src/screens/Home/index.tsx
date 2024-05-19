import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import { api } from "@/libs/axios";
import { useProducts } from "@/hooks/useProducts";
import { useUserStore } from "@/store/user";
import { useNotifications } from "@/hooks/useNotifications";

export function Home() {
  const { name, balance } = useUserStore((state) => {
    const name = state.name;
    const balance = state.balance;

    return { name, balance };
  });
  const navigation = useNavigation();

  const { products, getProductsFromHome } = useProducts();
  const { fetchNotificationByProductId } = useNotifications();

  useEffect(() => {
    getProductsFromHome();
  }, []);

  async function handleOnBuy(productId: number) {
    const notification = await fetchNotificationByProductId(productId);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.navigate("ProfileTab")}
          >
            <Image
              style={styles.userPicture}
              source={{ uri: "https://github.com/LucasRobert123.png" }}
            />
          </TouchableOpacity>

          <View style={styles.appNameContainer}>
            <Text style={styles.appName}>Listra Coins</Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>
            Olá, <Text style={styles.userNameBold}>{name}</Text>
          </Text>
          <Image source={require("@/assets/icons/notification.png")} />
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.wrapperWallet}>
          <View style={styles.wallet}>
            <Image
              width={24}
              height={20}
              source={require("@/assets/icons/wallet-small.png")}
            />

            <Text style={styles.walletValue}>
              Lc <Text style={styles.walletValueBold}>{balance}</Text>
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles.wrapperShop}
            onPress={() => navigation.navigate("ProductsTab")}
          >
            <Image
              width={24}
              height={20}
              source={require("@/assets/icons/shopping-bag.png")}
            />
            <Text style={styles.shopText}>Shop</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          style={styles.listVacationPackage}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentListVacationPackage}
        >
          <View style={styles.vacationPackageContainer}>
            <Image source={require("@/assets/icons/vacation-package.png")} />
            <View style={styles.vacationPackageContent}>
              <Text style={styles.vacationPackageName}>
                Pacote{" "}
                <Text style={styles.vacationPackageNameBold}>ACAPULCO</Text>
              </Text>
              <Text style={styles.vacationPackageLocation}>
                Guerrero - México
              </Text>
              <Text style={styles.vacationPackageValue}>
                Lc<Text style={styles.vacationPackageValueBold}>50.000</Text>
              </Text>
            </View>
          </View>
          <View style={styles.vacationPackageContainer}>
            <Image source={require("@/assets/icons/vacation-package.png")} />
            <View style={styles.vacationPackageContent}>
              <Text style={styles.vacationPackageName}>
                Pacote{" "}
                <Text style={styles.vacationPackageNameBold}>ACAPULCO</Text>
              </Text>
              <Text style={styles.vacationPackageLocation}>
                Guerrero - México
              </Text>
              <Text style={styles.vacationPackageValue}>
                Lc<Text style={styles.vacationPackageValueBold}>50.000</Text>
              </Text>
            </View>
          </View>
        </ScrollView>

        <View style={styles.products}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onBuy={handleOnBuy}
            />
          ))}
        </View>

        <View style={styles.footer}>
          <Button
            text="Ver todos os produtos"
            onPress={() => navigation.navigate("ProductsTab")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
