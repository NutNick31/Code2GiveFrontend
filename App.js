import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
const Stack = createStackNavigator();
import Onboarding from "./screens/Onboarding/Onboading";
import Auth from "./screens/Auth/Auth";
import Home from "./screens/App/Home";
import CounsellingForm from "./screens/App/CounsellingForm";
import Chatbot from "./screens/App/Chatbot";
import Profile from "./screens/App/Profile";
import Location from "./screens/Ask/Location"
import Quiz from './screens/Ask/Quiz'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Onboarding"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CounsellingForm" component={CounsellingForm} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Quiz" component={Quiz} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
