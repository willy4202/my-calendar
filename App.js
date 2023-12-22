import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { getCalendarColumns } from "./src/utils";
import dayjs from "dayjs";

export default function App() {
  const now = dayjs();
  const columns = getCalendarColumns(now);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
