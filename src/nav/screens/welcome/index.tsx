import * as React from 'react';
import {
  StyleSheet, View, ScrollView, TouchableOpacity,
} from 'react-native';

import { EPaper } from 'src/components';
import Color from '../../../config/Color';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  black: {
    color: Color.black[0],
  },
});

interface WelcomeProps {}

const pages = [
  { title: 'Welcome to Kotetsu', color: Color.red[1], startVisible: false },
  { title: 'You can learn effectively by Kotetsu', color: Color.blue[1], startVisible: false },
  { title: 'Enhance your learning', color: Color.yellow[1], startVisible: false },
  { title: 'Jot down, attach photos', color: Color.green[2], startVisible: false },
  { title: 'Are You Ready?', color: Color.purple[1], startVisible: false },
  { title: 'Go to Home Screen!', color: Color.blue[17], startVisible: true },
];
const Welcome = (props: WelcomeProps) => {
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
      <ScrollView
        horizontal
        pagingEnabled
      >
        {pages.map((page) => (
          <View
            style={{
              backgroundColor: page.color,
              height: layout.height,
              width: layout.width,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            key={page.title}
          >
            <Text style={styles.black}>{page.title}</Text>
            {page.startVisible ? (
              <TouchableOpacity
                onPress={() => console.log('Go to Home')}
                style={{ borderWidth: 1, padding: 5, margin: 5 }}
              >
                <Text style={styles.black}>Go to Home</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Welcome;
