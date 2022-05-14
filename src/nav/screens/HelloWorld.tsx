import * as React from 'react';
import {
  View, Text, StyleSheet, Image, Button, LayoutAnimation,
} from 'react-native';

// import Folder from 'src/components/Folder';
import testdata from 'src/dev/testdata';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

// folderの幅調整テスト
const renderFoldersTest = (layout) => {
  const subjects = testdata.subject;
  const subjectIDs = Object.keys(subjects);
  // const colorBoxes = ['black', 'skyblue', 'red', 'green', 'yellow', 'orange', 'purple', 'pink', 'gray', 'brown', 'cyan', 'magenta', 'blue'];
  const nRows = Math.ceil(layout.width / 200);
  const widthRow = layout.width / nRows;
  return (
    <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor: 'lightgray',
    }}
    >
      {subjectIDs.map((id) => {
        const subject = subjects[id];
        return (null
        // <Folder
        //   key={id}
        //   title={subject.name}
        //   onPress={() => {
        //     console.log('onPress');
        //   }}
        //   textStyle={{ color: 'black' }}
        //   iconStyle={{ fontSize: widthRow - 20 }}
        //   style={{ width: widthRow }}
        // />
        );
      })}
      {/* colorBoxes.map((color) => (
        <View
          key={color}
          style={{ backgroundColor: color, height: widthRow, width: widthRow }}
        />
      )) */}
      <Text>{JSON.stringify({ screen: layout })}</Text>
    </View>
  );
};

const HelloWorld = (props) => {
  const [layout, setLayout] = React.useState({ height: 1, width: 1 });
  const { } = props;
  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { height, width } = e.nativeEvent.layout;
        setLayout({ height, width });
      }}
    >
      {renderFoldersTest(layout)}
    </View>
  );
};

export default HelloWorld;
