import { Text, View, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import { styles } from "./styles";
import { useAuth } from "@/hooks/useAuth";

const schema = yup
  .object({
    email: yup.string().email("Email inválido.").required("Email obrigatório"),
    password: yup.string().required("Senha obrigatória."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export function Login() {
  const navigation = useNavigation();
  const { login } = useAuth();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "lucas@gmail.com",
      password: "123",
    },
  });

  async function handleLogin(user: FormData) {
    try {
      await login(user);
    } catch {
      Alert.alert("Erro ao logar", "Credenciais não batem!");
    }
  }

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

        <View style={styles.inputControl}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="E-mail"
                icon={require("@/assets/icons/user.png")}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
              />
            )}
            name="email"
          />
          {errors.email && (
            <Text style={styles.inputError}>{errors.email.message}</Text>
          )}
        </View>

        <View style={styles.inputControl}>
          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                placeholder="Senha"
                icon={require("@/assets/icons/lock.png")}
                secureTextEntry
                onChangeText={onChange}
                value={value}
              />
            )}
            name="password"
          />
          {errors.password && (
            <Text style={styles.inputError}>{errors.password.message}</Text>
          )}
        </View>

        <View style={styles.action}>
          <Button text="Entrar" onPress={handleSubmit(handleLogin)} />
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
