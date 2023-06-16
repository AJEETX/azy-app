import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text, Button, View } from "react-native";
import {Home, LoginScreen,Dashboard, UserLocation, VideoRecorder} from './src/screens'

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text>Home</Text>
//       <Button onPress={navigation.openDrawer} title="Open drawer" />
//       <Button onPress={() => navigation.navigate("Login")} title="Login" />
//     </View>
//   );
// }

// function LoginScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//     <Text>Login</Text>
//       <Button onPress={navigation.openDrawer} title="Open drawer" />
//       <Button onPress={() => navigation.goBack()} title="Back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="LoginScreen" component={LoginScreen} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
        <Drawer.Screen name="UserLocation" component={UserLocation} />
        <Drawer.Screen name="VideoRecorder" component={VideoRecorder} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
