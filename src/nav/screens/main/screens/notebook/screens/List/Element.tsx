import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { EPaper } from 'src/components';
import { Color } from 'src/config';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { withTheme } from 'react-native-paper';
import { Theme } from 'src/interface';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Color.grey[4],
    margin: 10,
    padding: 10,
  },
});

interface ElementProps {
  element:{
    canvas:any,
    tagIDs: string[],
    date: {
      created: number,
      modified: number,
    },
    note: string[],
    text: string[],
    image: any[],
    ref: string[],
  };
  // tags: {
  //   name:string,
  //   elementIDs: string[],
  // };
  onPress: () => void;
  theme: Theme;
}

// const renderTags = ({ elementIDs,tags }:{elementIDs:string[],tags}) => {
//   const tagsArray = Object.assign(...elementIDs.map((key) => ({ [key]: testdata.tags[key] })));
//   return (
//     tagsArray.map((tag) => (
//       <Text>{tag.name}</Text>
//     ))
//   );
// };

const Element = (props: ElementProps) => {
  const { element, onPress, theme: { colors: { text, content } } } = props;
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: content }]}
      onPress={onPress}
    >
      <Text style={{ color: text }}>{element.note}</Text>
      {/* {renderTags({elementIDs.tagIDs, tags})} */}
    </TouchableOpacity>
  );
};

export default withTheme(Element);
