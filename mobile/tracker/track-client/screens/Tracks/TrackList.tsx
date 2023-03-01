import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../app/rtkHooks";
import { authSelector } from "../../features/auth/authSlice";
import { Protected } from "../../components/ProtectedPage";

export const TrackList = () => {
  const state = useAppSelector(authSelector);
  return (
    <Protected>
      <View>
        <Text>Latest Tracks</Text>
      </View>
    </Protected>
  );
};

const styles = StyleSheet.create({});
