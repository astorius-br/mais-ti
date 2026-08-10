import { StyleSheet, StyleSheetProperties, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 2,
    padding: 5,
    backgroundColor: '#FBF7F2', //creme
  },

  buttonColor: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 25,
    borderRadius: 5,
    backgroundColor: '#6F4E37',
  },

  buttonLight: {
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 100,
    height: 25,
    borderRadius: 20,
    backgroundColor: '#e6d4c7', 
    color: '#6F4E37',
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
  },
  
  cafe: {
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#2C1810',
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    fontSize: 35,
  },
   
  input: {
    width: 200,
    height: 25,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#6F4E37',
    padding: 5,
  },

  // SafeAreaView
  saview: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: 'flex-start',
    width: 400,
    height: 700,
    borderWidth: 5,
    borderRadius: 20,
    borderColor: '#000000',
    margin: 10,
    padding: 10,
  },
    
  // Topo/header tela de login
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    alignItems: 'center',
    margin: 2,
    padding: 0,
  },
    
})
