import React from 'react';
import {TextInput, View, Keyboard, Button, SafeAreaView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './searchBar.style';

interface Props {
  clicked: Event;
  searchPhrase: string;
  setSearchPhrase: (value: string) => void;
  setClicked: (value: boolean) => void;
}

export const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={clicked ? styles.clicked : styles.unclicked}>
        <Icon name="search-outline" size={20} color="black" />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
          }}
        />
        {clicked && (
          <Icon
            name="close-outline"
            size={20}
            color="black"
            onPress={() => {
              setSearchPhrase('');
            }}
          />
        )}
      </View>
      {clicked && (
        <View>
          <Button
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
            }}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
export default SearchBar;
