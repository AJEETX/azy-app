import React, { useEffect } from 'react'
import Background from "../components/Background";
import Logo from "../components/Logo";
import Button from "../components/Button";
import UserTracker from "./UserTracker";
import { StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export default function Dashboard({ navigation }) {

  return (
    <Background>
      <Logo />
      <UserTracker />
      <Button mode="contained" onPress={() => navigation.navigate('UserLocation')}>
        <AntDesign name="camerao" size={28} color="white" /> Photo 
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('VideoRecorder')}>
        <AntDesign name="videocamera" size={28} color="white" /> Video (new) 
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Home')} >
        <AntDesign name="logout" size={24} color="red" /> Logout
      </Button>
    </Background>
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
