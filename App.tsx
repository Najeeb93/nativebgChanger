import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function App(): JSX.Element {
  const [randomBackground, setRandomBackground] = useState('#ffffff');

  const generateColor = () => {
    const hexRange = "0123456789ABCDEF"
    let color = '#'
  }
  return (
    <>
    <StatusBar backgroundColor={randomBackground} />
    <View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({

})