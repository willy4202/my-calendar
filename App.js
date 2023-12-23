import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import dayjs from "dayjs";
import Calendar from "./src/Calendar";
import { Header } from "react-native/Libraries/NewAppScreen";

export default function App() {
  // const now = dayjs();

  return (
    <SafeAreaView style={styles.container}>
      <Calendar />
    </SafeAreaView>
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
