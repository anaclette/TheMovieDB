// // import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
// // import {RootStackParams} from '../../navigation/NavigationController';
// import SearchBar from '../../components/SearchBar';
import {useMovies} from '../../hooks/useMovies';
import {styles} from './fullCategoryContent.style';
// import {Movie} from '../../types/moviesInterface';
// import HorizontalFlatlist from '../../components/HorizontalFlatlist';
// import copies from '../../utils/copies';
// import MovieCard from '../../components/MovieCard';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParams} from '../../navigation/NavigationController';
import {Movie} from '../../types/moviesInterface';
import MovieCard from '../../components/MovieCard';

interface Props
  extends StackScreenProps<RootStackParams, 'FullCategoryContent'> {}

export const FullCategoryContent = ({route}: Props) => {
  const params = route.params;
  const {isLoading, popular, topRated, upcoming, nowPlaying} = useMovies();

  const [searchPhrase, setSearchPhrase] = useState('');
  const [clicked, setClicked] = useState(false);

  type DataType = 'now-playing' | 'popular' | 'top-rated' | 'upcoming';
  const retrieveInfo = (data: DataType) => {
    switch (data) {
      case 'now-playing':
        return nowPlaying;
      case 'popular':
        return popular;
      case 'top-rated':
        return topRated;
      case 'upcoming':
        return upcoming;
    }
  };

  const renderItem = ({item}: {item: Movie}) => {
    if (searchPhrase === '') {
      return <MovieCard movie={item} />;
    }
    if (
      item.title
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <MovieCard movie={item} />;
    }
    if (
      item.overview
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ''))
    ) {
      return <MovieCard movie={item} />;
    }
  };

  return (
    <SafeAreaView>
      <Text>{JSON.stringify(params)}</Text>
      {/* {isLoading ? (
        <View>
          <ActivityIndicator color="red" size={100} />
        </View>
      )
       : (
        <FlatList data={retrieveInfo('popular')} renderItem={renderItem} />
      )} */}
    </SafeAreaView>
  );

  //       {/* {!clicked && <Text> Todas las pelis</Text>}
  //       <SafeAreaView>
  //         <SearchBar
  //           searchPhrase={searchPhrase}
  //           setSearchPhrase={setSearchPhrase}
  //           clicked={clicked}
  //           setClicked={setClicked}
  //         />
  //         <View
  //         //   onStartShouldSetResponder={() => {
  //         //     setClicked(false);
  //         //   }}
  //         >
  //           <FlatList data={retrieveInfo(nowPlaying)} renderItem={renderItem} />
  //         </View>
  //       </SafeAreaView> */}
};
