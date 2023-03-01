import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";

type RootProps = {
  headerText: string;
  redirectText: string;
  redirectTo: string;
  error?: boolean;
  errorMessage?: string;
  onSubmit: (email: string, password: string) => void;
};

export const AuthForm = ({
  headerText,
  redirectText,
  redirectTo,
  onSubmit,
  error,
  errorMessage,
}: RootProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text h3 style={styles.heading}>
        {headerText}
      </Text>
      <Input
        autoCompleteType={"string"}
        label="Email"
        autoCorrect={true}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize={"none"}
      />
      <Input
        label="Password"
        autoCorrect={true}
        autoCompleteType={"string"}
        autoCapitalize={"none"}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      {error && <Text style={styles.errorMessage}>{errorMessage}</Text>}
      <Button
        title={"Submit"}
        style={styles.btn}
        onPress={() => onSubmit(email, password)}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate(redirectTo as never)}
      >
        <Text style={{ color: "blue" }}>{redirectText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
    marginBottom: 100,
  },
  heading: {
    paddingVertical: 30,
  },
  btn: {
    marginVertical: 20,
  },
  errorMessage: {
    color: "red",
    marginVertical: 10,
  },
});
