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
    // borderWidth: 0.5,
  },
  file: {
  },
  titleContainer: {
  },
  title: {
    fontSize: 15,
    alignSelf: 'center',
  },
});

interface FolderProps {
    onPress: () => any;
    title: string;
    textStyle?: TextStyle;
    iconStyle?: TextStyle;
    style?: ViewStyle;
    folderWidth: number;
}

const Folder = (props: FolderProps) => {
  const {
    onPress, title, textStyle, iconStyle, style, folderWidth,
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
          size={folderWidth - 20}
          style={iconStyle}
        />
        <View style={[styles.titleContainer, { width: folderWidth - 20 }]}>
          <Text style={[styles.title, textStyle]} numberOfLines={1}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Folder;
