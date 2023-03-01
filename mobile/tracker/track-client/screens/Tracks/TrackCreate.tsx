import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Protected } from "../../components/ProtectedPage";

export const TrackCreate = () => {
  return (
    <Protected>
      <View>
        <Text>New Track</Text>
      </View>
    </Protected>
  );
};

const styles = StyleSheet.create({});
