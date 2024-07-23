import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../redux/stores/Store";
import { useFonts } from "expo-font";
export default function RootLayout() {
  useFonts({
    "pop-bold": require("./../assets/fonts/Poppins-Bold.ttf"),
    "pop-medium": require("./../assets/fonts/Poppins-Medium.ttf"),
    "pop-regular": require("./../assets/fonts/Poppins-Regular.ttf"),
  });
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen options={{ headerShown: false }} name="(tabs)" />
      </Stack>
    </Provider>
  );
}
