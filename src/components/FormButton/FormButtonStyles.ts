import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    button: {
      marginTop: 10
    },
    buttonContainer: {
      width: width / 2,
      height: height / 15
    }
  });