import { StyleSheet } from 'react-native';

const stylesFn = () =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    container: {
      padding: '5%',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#ffc144',
      borderRadius: 25,
      color: '#f0f',
    },
    h1: {
      alignItems: 'center',
      fontSize: 20,
      margin: 10,
      alignSelf: 'center',
    },
    h2: {
      fontSize: 15,
      marginBottom: 1,
      alignSelf: 'center',
    },
    textButton: {
      color: 'white',
      fontWeight: '800',
      flex: 1,
      alignItems: 'center',
    },
    buttons: {
      backgroundColor: '#00a081',
      borderRadius: 20,
      paddingTop: 10,
      borderWidth: 5,
      borderColor: 'black',
      alignItems: 'center',
      width: 200,
      height: 50,
      margin: 10,
    },
    buttonCreate: {
      backgroundColor: '#0070a1',
    },
    form: {
      height: 40,
      width: 250,
      margin: 10,
      borderWidth: 1,
      backgroundColor: 'white',
      borderColor: 'black',
      borderRadius: 10,
      padding: 5,
      fontSize: 25,
    },
    formPicker: {
      height: 200,
      width: 200,
      marginTop: 5,
    },
    row: {
      borderWidth: 2,
      borderRadius: 20,
      padding: 10,
      margin: 10,
      backgroundColor: '#def5ff',
    },
  });

export default stylesFn;
