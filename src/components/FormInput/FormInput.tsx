import React from 'react';
import { styles } from './FormInputStyles';
import { TextInput } from 'react-native-paper';

type FormInput = {
  labelName: string;
  value: string;
  secureTextEntry?: boolean;
  onChangeText: (text: string) => void;
};

const FormInput = ({ labelName, secureTextEntry }: FormInput) => (
  <TextInput
    label={labelName}
    style={styles.input}
    numberOfLines={1}
    secureTextEntry={secureTextEntry}
  />
);

export default FormInput;
