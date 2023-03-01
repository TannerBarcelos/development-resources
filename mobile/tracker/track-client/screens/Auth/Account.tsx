import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useAppDispatch } from "../../app/rtkHooks";
import { signout } from "../../features/auth/authSlice";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Protected } from "../../components/ProtectedPage";

type Props = {
  navigation: NativeStackScreenProps<{}>;
};

export const Account = ({ navigation }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <Protected>
      <View style={styles.container}>
        <Text style={styles.title}>Your account</Text>
        <TouchableOpacity
          style={styles.cta}
          onPress={() => dispatch(signout())}
        >
          <Text style={styles.ctaText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </Protected>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 80,
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    position: "relative",
  },
  title: {
    fontSize: 30,
    fontWeight: "500",
  },
  cta: {
    backgroundColor: "#EC7272",
    padding: 15,
    borderRadius: 15,
    width: "100%",
    marginBottom: 40,
  },
  ctaText: {
    color: "#eee",
    fontSize: 17,
    textAlign: "center",
  },
});
