import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Protected } from "../../components/ProtectedPage";

export const TrackDetail = () => {
  return (
    <Protected>
      <View>
        <Text>Details</Text>
      </View>
    </Protected>
  );
};

const styles = StyleSheet.create({});
