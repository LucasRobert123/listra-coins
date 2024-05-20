import { useEffect } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import notifee, { AndroidImportance } from "@notifee/react-native";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

import { useUserStore } from "@/store/user";

import { useProducts } from "@/hooks/useProducts";
import { useNotifications } from "@/hooks/useNotifications";

import { styles } from "./styles";

export function Home() {
  const { name, balance } = useUserStore((state) => {
    const name = state.name;
    const balance = state.balance;

    return { name, balance };
  });
  const navigation = useNavigation();

  const { products, getProductsFromHome, updateProduct } = useProducts();
  const { fetchNotificationByProductId } = useNotifications();

  useEffect(() => {
    getProductsFromHome();
  }, []);

  useEffect(() => {
    notifee.requestPermission();
  }, []);

  async function handleOnBuy(productId: number) {
    updateProduct(productId, { state: "loading" });

    const notification = await fetchNotificationByProductId(productId);

    const channelId = await notifee.createChannel({
      id: String(notification.id),
      name: "buy-product",
      importance: AndroidImportance.HIGH,
    });

    await notifee.displayNotification({
      title: `Olá, ${name}`,
      body: notification.message,
      android: {
        channelId,
      },
    });

    updateProduct(productId, { state: "on-my-way" });
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
