import * as React from 'react';
import {
  StyleSheet, View, TouchableOpacity, KeyboardAvoidingView,
} from 'react-native';

import {
  withTheme, Divider, Portal, Dialog, TextInput, Button,
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
  },
  listscontainer: {
    paddingVertical: 5,
  },
  listcontainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  tagContainer: {
    flexDirection: 'row',
    paddingVertical: 2,
  },
  tag: {
    alignItems: 'center',
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
    alignItems: 'center',
  },
  crossContainer: {
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
      drawerState: [boolean, (isOpen: boolean) => void];
    }

const renderHelp = () => (
  <View style={{ flex: 1 }}>
    <Text style={{ opacity: 0.8, fontWeight: 'bold', fontSize: 16 }}>
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
      numberOfLines={8}
      ellipsizeMode="tail"
    >
      {element}
    </Text>
  </View>
);

const renderDetails = (
  element,
  text,
  editState,
  basicdataState,
  textState,
) => {
  const {
    tagIDs,
    date,
    note,
    ref,
  } = element;
  const [isEdit, setIsEdit] = editState;
  const [basicdata, setBasicData] = basicdataState;
  const [textValue, setTextValue] = textState;
  const segments = [
    {
      icon: { collection: 'Ionicons', name: 'help-circle-outline' }, title: 'Help', content: renderHelp(),
    },
    {
      icon: { collection: 'MaterialCommunityIcons', name: 'calendar-edit' }, title: 'Dates', content: renderDateBox(date),
    },
    {
      icon: { collection: 'Ionicons', name: 'pricetags-outline' }, title: 'Tag', content: renderTagBox(tagIDs, text), element: null,
    },
    {
      icon: { collection: 'Ionicons', name: 'at-outline' }, title: 'Ref', content: renderTextBox(ref), element: ref,
    },
    {
      icon: { collection: 'Ionicons', name: 'create-outline' }, title: 'Note', content: renderTextBox(note), element: note,
    },
  ];
  return (
    <View>
      {segments.map((segment, index) => {
        const IconComponent = Icon[segment.icon.collection];
        return (
          <View key={segment.title}>
            <TouchableOpacity
              key={segment.title}
              disabled={segment.title === 'Dates' || segment.title === 'Help'}
              onPress={() => [
                setIsEdit(true),
                setBasicData([segment.icon.collection, segment.icon.name, segment.title]),
                setTextValue(segment.element.toString()), // Array['','','']
              ]}
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

const renderEditDialog = (text, editState, basicdataState, textState) => {
  const [isEdit, setIsEdit] = editState;
  const [basicdata, setBasicData] = basicdataState;
  const [textValue, setTextValue] = textState;
  return (
    <Portal>
      <Dialog
        visible={isEdit}
        onDismiss={() => setIsEdit(false)}
        style={{
          maxHeight: 300, maxWidth: 500, paddingHorizontal: 30, alignSelf: 'center', borderRadius: 10,
        }}
      >
        <View>
          <View style={{ alignSelf: 'center', margin: 10, flexDirection: 'row' }}>
            <View>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{basicdata[2]}</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <TextInput
              value={textValue}
              onChangeText={(text) => setTextValue(text)}
              multiline
              dense
              style={{ flex: 1 }}
              theme={{ colors: { text } }}
            />
          </View>
          <View style={{
            flexDirection: 'row', justifyContent: 'center', alignSelf: 'center',
          }}
          >
            <Dialog.Actions>
              <Button
                onPress={() => setIsEdit(false)}
                color={Color.blue[3]}
              >
                Cancel
              </Button>
            </Dialog.Actions>
            <Dialog.Actions>
              <Button
                onPress={() => setIsEdit(false)}
                color={Color.blue[3]}
              >
                Done
              </Button>
            </Dialog.Actions>
          </View>
        </View>
      </Dialog>
    </Portal>
  );
};

const Info = (props: InfoProps) => {
  const { element, theme: { colors: { text, content } }, drawerState } = props;
  const [isEdit, setIsEdit] = React.useState(false);
  const [basicdata, setBasicData] = React.useState(['', '', '']);
  const [textValue, setTextValue] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.listscontainer, { backgroundColor: content }]}>
        {renderDetails(
          element,
          text,
          [isEdit, setIsEdit],
          [basicdata, setBasicData],
          [textValue, setTextValue],
        )}
        {renderEditDialog(
          text,
          [isEdit, setIsEdit],
          [basicdata, setBasicData],
          [textValue, setTextValue],
        )}
      </View>
    </View>
  );
};

export default withTheme(Info);
