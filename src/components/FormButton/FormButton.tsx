import React from 'react';
import { styles } from './FormButtonStyles';
import { Button } from 'react-native-paper';
import { StyleProp, TextStyle } from 'react-native';

type PaperButton = {
  title: string;
  modeValue: 'text' | 'outlined' | 'contained' | 'elevated' | 'contained-tonal';
  labelStyle?: StyleProp<TextStyle>;
  uppercase?: boolean;
  onPress?: () => void;
};

const FormButton = ({ title, modeValue, labelStyle, onPress }: PaperButton) => (
  <Button
    mode={modeValue}
    labelStyle={labelStyle}
    style={styles.button}
    contentStyle={styles.buttonContainer}
    onPress={onPress}>
    {title}
  </Button>
);

export default FormButton;
