import { Text, View, Image } from "react-native";
import { styles } from "./styles";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

export function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("@/assets/icons/wallet.png")}
        style={styles.image}
      />

      <View style={styles.wrapperAppName}>
        <Text style={styles.appName}>Listra Coins</Text>
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <Input placeholder="E-mail" icon={require("@/assets/icons/user.png")} />
        <Input placeholder="Senha" icon={require("@/assets/icons/lock.png")} />

        <View style={styles.action}>
          <Button text="Entrar" />
        </View>

        <View style={styles.footer}>
          <Text style={styles.textFooter}>Registrar-se</Text>
          <Text style={styles.textFooter}> | </Text>
          <Text style={styles.textFooter}>Resetar senha</Text>
        </View>
      </View>
    </View>
  );
}
