import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '../../themes/colors';
import copies from '../../utils/copies';

interface Props {
  totalPages: number;
}

export const Pagination = ({totalPages}: Props) => {
  const pages = [];
  const maxPerPage = 5;
  for (let i = 1; i < totalPages; i++) {
    pages.push(i);
  }
  return (
    <View>
      <TouchableOpacity>
        <Text>
          <Icon name="chevron-back-outline" size={20} color={colors.darkPink} />
        </Text>
      </TouchableOpacity>
      {pages.slice(0, maxPerPage).map(pageNum => (
        <TouchableOpacity key={pageNum}>
          <Text>{pageNum}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity>{copies.ellipsis}</TouchableOpacity>
      <TouchableOpacity>
        <Text>{totalPages}</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>
          <Icon
            name="chevron-forward-outline"
            size={20}
            color={colors.darkPink}
          />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
