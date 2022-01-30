import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '90%'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      padding: 15
    },
    price: {
      fontSize: 25,
      fontWeight: 'bold',
      padding: 10
    },
    peso: {
      fontWeight: 'bold',
      margin: 10,
    },
    description: {
      width: '70%',
    },
    img: {
    width: 380,
    alignContent: 'center',
    marginLeft: 40,
    height: 350
    }

  });


  export default styles;