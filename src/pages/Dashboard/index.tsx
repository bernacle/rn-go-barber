import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { useAuth } from "../../hooks/auth";

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => signOut()}
        style={{
          height: 65,
          width: 160,
          backgroundColor: "#FF9000",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#312e38", fontFamily: "RobotoSlab-Medium" }}>
          Sign Out
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Dashboard;
