 import React, { useState } from 'react'; // Import useState here
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';

const App = () => {
  const colorList = ['yellow', '#BB2CD9', '#00CCCD', '#F5BCBA'];
  function generateRandom(): string {
    const randomColor = Math.floor(Math.random() * colorList.length);
    return colorList[randomColor];
  }
  const [btnColor, setBtnColor] = useState('blue');

  const [buttonColor, setButtonColor] = useState('red'); // Correctly manage button color
  const BtnFun = () => {
    setBtnColor(generateRandom());
  };

  const changeColor = () => {
    setButtonColor( generateRandom() ); // Toggle color
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.main, {backgroundColor: buttonColor}]}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: btnColor }]} // Apply dynamic background color
          onPress={() => {

            changeColor();
            BtnFun();
          }}
        >
        <Text style={styles.text}>CLICK ME</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 18,
  },
});

export default App;
