import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
const Stack = createStackNavigator();
import Onboarding from "./screens/Onboarding/Onboading";
import Auth from "./screens/Auth/Auth";
import Register from "./screens/Auth/Register";
import Login from "./screens/Auth/Login";
import Home from "./screens/App/Home";
import CounsellingForm from "./screens/App/CounsellingForm";
import Chatbot from "./screens/App/Chatbot";
import Profile from "./screens/App/Profile";
import Location from "./screens/Ask/Location";
import Quiz from "./screens/Ask/Quiz";
import AddictionChoice from "./screens/Questionaire/AddictionChoice";
import alcohol from "./screens/Questionaire/alcohol/alcohol";
import anger from "./screens/Questionaire/anger/anger";
import family from "./screens/Questionaire/family/family";
import gambling from "./screens/Questionaire/gambling/gambling";
import gaming from "./screens/Questionaire/gaming/gaming";
import internet from "./screens/Questionaire/internet/internet";
import pornography from "./screens/Questionaire/pornography/pornography";
import suicidal from "./screens/Questionaire/suicidal/suicidal";
import Results from "./screens/Results/Results";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="AddictionChoice"
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CounsellingForm" component={CounsellingForm} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="AddictionChoice" component={AddictionChoice} />
        <Stack.Screen name="Alcohol" component={alcohol} />
        <Stack.Screen name="Anger" component={anger} />
        <Stack.Screen name="Family" component={family} />
        <Stack.Screen name="Gambling" component={gambling} />
        <Stack.Screen name="Gaming" component={gaming} />
        <Stack.Screen name="Internet" component={internet} />
        <Stack.Screen name="Pornography" component={pornography} />
        <Stack.Screen name="Suicidal" component={suicidal} />
        <Stack.Screen name="Results" component={Results} />
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
