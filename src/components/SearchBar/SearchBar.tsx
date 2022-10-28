import React, {useState} from 'react';
import {
  TextInput,
  View,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import Button from '../Button';
import {styles} from './searchBar.style';

export const SearchBar = () => {
  // const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  const [form, setForm] = useState({
    userInput: '',
    pressedEnter: false,
  });

  const onChange = (value: boolean, field: string) => {
    setForm({
      ...form,
      [field]: value,
    });
    setSearchPhrase(field);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              // eslint-disable-next-line react-native/no-inline-styles
              {
                height:
                  Platform.OS === 'ios' ? metrics.scale(20) : metrics.scale(30),
              },
            ]}
            placeholder="Encuentra"
            placeholderTextColor={colors.petroleum}
            value={searchPhrase}
            onChangeText={() => onChange}
            // onFocus={() => {
            //   setClicked(true);
            // }}
          />
          <Button
            icon="search-outline"
            color={colors.petroleum}
            size={metrics.scale(15)}
            onPress={() => {
              Keyboard.dismiss();
            }}
          />
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};
export default SearchBar;
