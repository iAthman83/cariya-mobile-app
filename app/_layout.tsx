import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack, useRouter, Link } from "expo-router";
import { useEffect } from "react";
import { TouchableOpacity, useColorScheme, Pressable } from "react-native";
import Colors from "../constants/Colors";
import Icons from "../components/utils/Icons";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Inter-Regular": require("../assets/fonts/Inter-Regular.ttf"),
    "Inter-Bold": require("../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../assets/fonts/Inter-Medium.ttf"),
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree..
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const isAuthenticated = false;

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace("/(details)/subscriptions");
    }
  }, [isAuthenticated]);

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* tabs screen */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* auth screen */}
        <Stack.Screen
          name="(auth)/login"
          options={{
            // presentation: "modal",
            title: "Log in or sign up",
            // headerShown: false,
            headerRight: () => (
              <Link href="/(modals)/terms" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        {/* user details screen */}
        <Stack.Screen
          name="(details)/userDetailsForm"
          options={{
            title: "Parent details",
          }}
        />
        {/* user subscription screen */}
        <Stack.Screen
          name="(details)/subscriptions"
          options={{
            title: "Select a subscription",
          }}
        />
        {/* terms modal */}
        <Stack.Screen
          name="(modals)/terms"
          options={{ presentation: "modal", title: "Terms and conditions" }}
        />
        {/* payment form modal */}
        <Stack.Screen
          name="(modals)/paymentForm"
          options={{ presentation: "modal", title: "Top up your subscription" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
