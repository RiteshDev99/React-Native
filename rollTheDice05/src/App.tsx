import React, { useState } from 'react';
import { View, Text, SafeAreaView, ImageSourcePropType, StyleSheet, Image, Pressable } from 'react-native';
import type { PropsWithChildren } from 'react';
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <Image style={styles.image} source={imageUrl} />
  );
};

function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(DiceOne);

  const rollDiceTap = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    switch (randomNumber) {
      case 1:
        setDiceImage(DiceOne);
        break;
      case 2:
        setDiceImage(DiceTwo);
        break;
      case 3:
        setDiceImage(DiceThree);
        break;
      case 4:
        setDiceImage(DiceFour);
        break;
      case 5:
        setDiceImage(DiceFive);
        break;
      case 6:
        setDiceImage(DiceSix);
        break;
      default:
        setDiceImage(DiceOne);
        break;
    }

    ReactNativeHapticFeedback.trigger('selection', options);
  };

  const Haptics = () => {
    ReactNativeHapticFeedback.trigger('impactHeavy', options);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Dice imageUrl={diceImage} />
        <Pressable onPress={() => {
          Haptics();
          rollDiceTap();
        }}>
          <Text style={styles.btn}>ROLL THE DICE</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    margin: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderWidth: 2,
    color: '#6A89CC',
    fontSize: 20,
    fontWeight: 'semibold',
    borderRadius: 10,
    borderColor: '#6A89CC',
    marginVertical: 10, // Add some spacing between buttons
  },
});

export default App;
