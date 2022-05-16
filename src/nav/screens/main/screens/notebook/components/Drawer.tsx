import * as React from 'react';
import {
  StyleSheet, View, Text, TouchableWithoutFeedback, TouchableOpacity, LayoutAnimation,
} from 'react-native';
import { withTheme } from 'react-native-paper';

import { Theme } from 'src/interface';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#000',
    opacity: 0.5,
  },
  drawer: {
    position: 'absolute',
    height: '100%',
  },
});

interface DrawerProps {
    isDrawerOpenState: [boolean, (isDrawerOpen: boolean) => void];
    mainComponent: React.ReactNode;
    drawerComponent: React.ReactNode;
    layout:{
        height: number;
        width: number;
    };
    theme: Theme
}

const Drawer = (props: DrawerProps) => {
  const {
    isDrawerOpenState: [isDrawerOpen, setIsDrawerOpen],
    mainComponent,
    drawerComponent,
    layout,
    theme: { colors: { drawer } },
  } = props;
  const drawerWidthMax = 325;
  const drawerWidth = ((layout.width + drawerWidthMax)
  - Math.abs(layout.width - drawerWidthMax)) / 2;

  const openDrawer = (bool) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsDrawerOpen(bool);
  };

  return (
    <View
      style={styles.container}
    >
      {mainComponent}
      {isDrawerOpen ? (
        <TouchableWithoutFeedback onPress={() => openDrawer(false)}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      ) : null}
      <View style={[styles.drawer, { width: drawerWidth, right: isDrawerOpen ? 0 : -drawerWidth, backgroundColor: drawer }]}>
        {drawerComponent}
      </View>
    </View>
  );
};

export default withTheme(Drawer);
