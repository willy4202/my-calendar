import { Image, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import TodoList from "./src/TodoList";

export default function App() {
  // const now = dayjs();

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-photo/white-crumpled-paper-texture-for-background_1373-159.jpg?w=1060&t=st=1667524235~exp=1667524835~hmac=8a3d988d6c33a32017e280768e1aa4037b1ec8078c98fe21f0ea2ef361aebf2c",
          }}
          style={{ width: "100%", height: "100%", position: "absolute" }}
        />
        <SafeAreaView>
          <TodoList />
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
