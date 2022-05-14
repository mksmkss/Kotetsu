/*
import 先では<Folder/>を囲む<View/>には
 {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
を書く必要あり
*/
import * as React from 'react';
import {
  StyleSheet, View, TouchableOpacity, ViewStyle, TextStyle,
} from 'react-native';

import { Icon, EPaper } from 'src/components';

const { Text } = EPaper;

const styles = StyleSheet.create({
  eachFile: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 0,
  },
  file: {
  },
  titleContainer: {
    alignSelf: 'center',
  },
  title: {
    fontSize: 15,
  },
});

interface FolderProps {
    onPress: () => any;
    title: string;
    textStyle?: TextStyle;
    iconStyle?: TextStyle;
    style?: ViewStyle;
}

const Folder = (props: FolderProps) => {
  const {
    onPress, title, textStyle, iconStyle, style,
  } = props;

  return (
    <View style={[styles.eachFile, style]}>
      <TouchableOpacity
        style={styles.file}
        onPress={onPress}
      >
        <Icon.MaterialCommunityIcons
          name="folder"
          color="skyblue"
          size={120}
          style={iconStyle}
        />
        <View style={styles.titleContainer}>
          <Text style={[styles.title, textStyle]}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Folder;
