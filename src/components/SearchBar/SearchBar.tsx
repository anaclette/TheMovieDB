import React, {useState} from 'react';
import {
  TextInput,
  View,
  Keyboard,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import Button from '../Button';
import {styles} from './searchBar.style';

export const SearchBar = () => {
  // const [filteredData, setFilteredData] = useState([]);
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

    // if (field) {
    //   const newData = data.filter(item => {
    //     const itemData = item.name ? item.name.toUpperCase() : '';
    //     const textData = field.toUpperCase();

    //     return itemData.indexOf(textData) > -1;
    //   });
    //   setFilteredData(newData);
    // } else setFilteredData(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.keyBoardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.languageButtonsWrapper}>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.lightBlue}
            onPress={() => undefined}
            style={styles.languageFlagButton}>
            <Image
              source={require('../../assets/images/Argentina_flag.webp')}
              style={styles.flagAsset}
            />
          </TouchableHighlight>
          <TouchableHighlight
            activeOpacity={0.6}
            underlayColor={colors.lightBlue}
            onPress={() => undefined}
            style={styles.languageFlagButton}>
            <Image
              source={require('../../assets/images/USA_flag.png')}
              style={[styles.flagAsset, styles.biggerAsset]}
            />
          </TouchableHighlight>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            style={[
              styles.input,
              {
                height:
                  Platform.OS === 'ios' ? metrics.scale(20) : metrics.scale(30),
              },
            ]}
            placeholder="Encuentra"
            placeholderTextColor={colors.petroleum}
            value={searchPhrase}
            onChangeText={() => onChange}
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
export default SearchBar;
