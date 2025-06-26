// app/index.tsx for Output 3

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
      <Text style={{ fontSize: 18, fontWeight: "bold", textAlign: "center" }}>
        COLLEGE OF COMPUTING{"\n"}AND INFORMATION SCIENCES
      </Text>

      <Image
        source={require("@/assets/images/logoccis.png")}
        style={{
          width: 200,
          height: 250,
          marginVertical: 20,
        }}
        resizeMode="contain"
      />

      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Developed by{"\n"}
        <Text style={{ fontWeight: "bold" }}>
          ALMER B. BONGCAHIG
        </Text>
      </Text>
    </View>
  );
}
