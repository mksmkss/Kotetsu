import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import {
  withTheme, Divider, Portal, Dialog,
} from 'react-native-paper';

import { EPaper } from 'src/components';
import { Icon, IconProps } from 'src/components/Icon';
import testdata from 'src/dev/testdata';
import { Theme } from 'src/interface';
import { Color, CFs } from 'src/config';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'red',
  },
  listscontainer: {
    // margin: 10,
    // borderRadius: 10,
    paddingVertical: 5,
  },
  listcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1,
  },
  tagContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  tag: {
    alignItems: 'center',
    // backgroundColor: Color.grey[8],
    borderWidth: 1,
    borderColor: Color.grey[4],
    flexDirection: 'row',
    paddingLeft: 8,
    paddingRight: 3,
    borderRadius: 14,
    height: 28,
    margin: 2,
  },
  divider: {
    backgroundColor: Color.grey[3],
    height: 1,
    opacity: 0.4,
    marginLeft: 40,
    marginVertical: 5,
  },
  iconContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
  },
  textContainer: {
    // flex: 1,
    alignItems: 'center',
  },
  crossContainer: {
    // borderWidth: 1,
  },
});

interface InfoProps {
    theme:Theme;
    element: {
        canvas:any,
        tagIDs: string[], //
        date: { //
          create: number,
          modifiy: number,
        },
        note: string[],
        text: string[],
        image: any[],
        ref: string[],
      };
      screen: { width: number, height: number }
    }

const renderHelp = () => (
  <View style={{ flex: 1 }}>
    <Text style={{ opacity: 0.8, fontWeight: 'bold' }}>
      You can edit below contents by clicking on them.
    </Text>
  </View>
);

const renderTagBox = (tagIDs, text) => (
  <View style={styles.tagContainer}>
    {tagIDs.map((tagID) => (
      <View style={styles.tag} key={tagID}>
        <View style={styles.textContainer}>
          <Text>
            {testdata.tags[tagID].name}
          </Text>
        </View>
        <TouchableOpacity style={styles.crossContainer}>
          <Icon.Ionicons name="close" size={24} color={text} />
        </TouchableOpacity>
      </View>
    ))}
  </View>
);

const renderDateBox = (date) => {
  const { create, modify } = date;
  return (
    <View>
      <Text>{`Created at ${CFs.convertUnixToString(create)}`}</Text>
      <Text>{`Modified at ${CFs.convertUnixToString(modify)}`}</Text>
    </View>
  );
};

const renderTextBox = (element) => (
  <View style={{ flex: 1 }}>
    <Text
      numberOfLines={4}
      ellipsizeMode="tail"
    >
      {element}
    </Text>
  </View>
);

const renderDetails = (element, text, visible) => {
  const {
    tagIDs,
    date,
    note,
    ref,
  } = element;
  const segments = [
    { icon: { collection: 'Ionicons', name: 'help-circle-outline' }, title: 'Help', content: renderHelp() },
    { icon: { collection: 'MaterialCommunityIcons', name: 'calendar-edit' }, title: 'Dates', content: renderDateBox(date) },
    { icon: { collection: 'Ionicons', name: 'pricetags-outline' }, title: 'Tag', content: renderTagBox(tagIDs, text) },
    { icon: { collection: 'Ionicons', name: 'at-outline' }, title: 'Ref', content: renderTextBox(ref) },
    { icon: { collection: 'Ionicons', name: 'create-outline' }, title: 'Note', content: renderTextBox(note) },
  ];
  return (
    <View>
      {segments.map((segment, index) => {
        const IconComponent = Icon[segment.icon.collection];
        const [isPressed, setIsPressed] = React.useState(false);
        return (
          <View key={segment.title}>
            <TouchableOpacity
              key={segment.title}
              disabled={segment.title === 'Dates' || segment.title === 'Help'}
              onPress={() => setIsPressed(!isPressed)}
              style={{ justifyContent: 'center' }}
            >
              <View style={styles.listcontainer}>
                <View style={styles.iconContainer}>
                  <IconComponent
                    name={segment.icon.name}
                    size={20}
                    style={{ color: text }}
                  />
                </View>
                {segment.content}
              </View>
            </TouchableOpacity>
            {index !== segments.length - 1 && <Divider style={styles.divider} />}
          </View>
        );
      })}
    </View>
  );
};

// const renderDialog = (visibleState, element, text) => {
//   const [visible, setVisible] = visibleState;
//   return (
//     <Portal>
//       <Dialog
//         visible={visible}
//         onDismiss={() => setVisible(false)}
//       >
//         <View>
//           {renderDetails(element, text, visible)}
//         </View>
//       </Dialog>
//     </Portal>
//   );
// };

const Info = (props: InfoProps) => {
  const { element, theme: { colors: { text, content } }, screen } = props;
  const [visible, setVisible] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={[styles.listscontainer, { backgroundColor: content }]}>
        {renderDetails(element, text, visible)}
      </View>
      {/* {renderDialog([visible, setVisible], element, text)} */}
    </View>
  );
};

export default withTheme(Info);
