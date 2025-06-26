// app/index.tsx for Output 2

import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <Image
        source={require("@/assets/images/suckthisbird.webp")}
        style={{
          width: 280,
          height: 400,
          borderRadius: 10,
          marginBottom: 20,
        }}
        resizeMode="cover"
      />
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>Mark Zuckerberg</Text>
      <Text>CEO Meta</Text>
    </View>
  );
}
