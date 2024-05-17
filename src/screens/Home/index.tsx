import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/Button";

import { styles } from "./styles";

export function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <Image
            style={styles.userPicture}
            source={{ uri: "https://github.com/LucasRobert123.png" }}
          />
          <View style={styles.appNameContainer}>
            <Text style={styles.appName}>Listra Coins</Text>
          </View>
        </View>
        <View style={styles.headerRow}>
          <Text style={styles.userName}>
            Olá, <Text style={styles.userNameBold}>Lucas</Text>
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
              Lc <Text style={styles.walletValueBold}>5.000.000</Text>
            </Text>
          </View>
          <View style={styles.wrapperShop}>
            <Image
              width={24}
              height={20}
              source={require("@/assets/icons/shopping-bag.png")}
            />
            <Text style={styles.shopText}>Shop</Text>
          </View>
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
          <ProductCard />
          <ProductCard />
        </View>

        <View style={styles.footer}>
          <Button text="Ver todos os produtos" />
        </View>
      </View>
    </SafeAreaView>
  );
}
