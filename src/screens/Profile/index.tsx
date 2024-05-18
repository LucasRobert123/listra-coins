import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { styles } from "./styles";
import { Button } from "@/components/Button";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "@/store/user";

export function Profile() {
  const name = useUserStore((state) => state.name);
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={{ uri: "https://github.com/LucasRobert123.png" }}
        />
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity style={styles.buttonEdit}>
          <Text style={styles.buttonEditText}>Editar Perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <TouchableOpacity activeOpacity={0.6} style={styles.buttonDetails}>
          <View style={styles.buttonDetailsContent}>
            <Image source={require("@/assets/icons/person.png")} />
            <Text style={styles.buttonDetailsText}>Detalhes do perfil</Text>
          </View>
          <Image source={require("@/assets/icons/arrow-right.png")} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.buttonDetails}>
          <View style={styles.buttonDetailsContent}>
            <Image source={require("@/assets/icons/bank.png")} />
            <Text style={styles.buttonDetailsText}>Detalhes da conta</Text>
          </View>
          <Image source={require("@/assets/icons/arrow-right.png")} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} style={styles.buttonDetails}>
          <View style={styles.buttonDetailsContent}>
            <Image source={require("@/assets/icons/document.png")} />
            <Text style={styles.buttonDetailsText}>Histórico</Text>
          </View>
          <Image source={require("@/assets/icons/arrow-right.png")} />
        </TouchableOpacity>

        <View style={styles.action}>
          <Button
            style={{ paddingHorizontal: 8 }}
            text="Sair"
            onPress={() => navigation.navigate("Login")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
