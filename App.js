import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: "center"
  },
  logo: {
    width: 210,
    height: 210,
    borderRadius: 105,
    marginTop: 70,
  },
  nameSurnameText: {
    fontFamily: 'Roboto',
    fontSize: 30,
    lineHeight: 46.88,
    textAlign: "center",
  },
  rocketText: {
    fontSize: 90,
    marginBottom: 70,
  }
});


const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{ uri: 'https://www.jingu.ru/sirius/jingu-logo-512.png' }} />
      <Text style={styles.nameSurnameText}> Nickolay Mozganov </Text>
      <Text style={styles.rocketText}>🚀</Text>
    </View>
  )
};

export default App;
