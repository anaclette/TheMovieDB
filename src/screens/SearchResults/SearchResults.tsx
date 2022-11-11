import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {RootStackParamList} from '../../navigation/NavigationController';
import colors from '../../themes/colors';
import metrics from '../../themes/metrics';
import {styles} from './searchResults.style';
import Button from '../../components/Button';
import {useGetSearchResultQuery} from '../../state/search';

export const SearchResults = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'SearchResults'>) => {
  const [userInput, setUserInput] = useState('');
  const {data: searchResults} = useGetSearchResultQuery({
    keyword: userInput,
    page: 1,
  });

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.keyBoardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={styles.container}>
          <Button
            size={metrics.scale(20)}
            wrapperStyle={styles.backButton}
            icon="chevron-back-circle-outline"
            onPress={() => {
              navigation.goBack();
            }}
            color={colors.palePink}
          />
          <View style={styles.inputWrapper}>
            <TextInput
              style={[
                styles.input,
                {
                  height:
                    Platform.OS === 'ios'
                      ? metrics.scale(30)
                      : metrics.scale(40),
                },
              ]}
              placeholder="Encuentra"
              placeholderTextColor={colors.petroleum}
              defaultValue={userInput}
              onChangeText={input => setUserInput(input)}
              value={userInput}
              onSubmitEditing={input => setUserInput(input.nativeEvent.text)}
              autoFocus={true}
              autoCorrect={false}
              underlineColorAndroid={colors.transparent}
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
        </View>
      </KeyboardAvoidingView>

      <ScrollView>
        {!!userInput &&
          searchResults?.map((item, index) => (
            <View
              key={index}
              style={{borderWidth: 2, borderColor: 'white', margin: 5}}>
              {item.name && <Text style={{color: 'white'}}>{item.name}</Text>}
              {item.title && <Text style={{color: 'white'}}>{item.title}</Text>}
              <Text style={{color: 'white'}}>{item.media_type}</Text>
              <Text style={{color: 'white'}}>{item.overview}</Text>
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
};
