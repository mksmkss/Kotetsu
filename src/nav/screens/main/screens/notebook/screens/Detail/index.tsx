import * as React from 'react';
import {
  StyleSheet, View, ScrollView, TouchableOpacity, LayoutAnimation,
} from 'react-native';
import { withTheme } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { EPaper, Icon } from 'src/components';
import { Theme } from 'src/interface';

import ParamList from '../../ParamList';

import Info from './Info';
import Canvas from './Canvas';
import Drawer from '../../components/Drawer';

const { Text } = EPaper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arrowContainer: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  arrowIcon: {
    fontSize: 28,
  },
});

type NavigationProps = NativeStackScreenProps<ParamList, 'Detail'>
interface DetailProps extends NavigationProps {
  theme: Theme;
}

const Detail = (props: DetailProps) => {
  const { route, navigation, theme: { colors: { text } } } = props;
  const [isExpand, setIsExpand] = React.useState(false);
  const { element, isDrawerOpen } = route.params;
  const [layout, setLayout] = React.useState({ width: 1, height: 1 });
  return (
    <View
      style={styles.container}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setLayout({ width, height });
      }}
    >
      <Drawer
        isDrawerOpenState={[isDrawerOpen, (bool) => navigation.setParams({ isDrawerOpen: bool })]}
        layout={layout}
        drawerComponent={(
          <Info
            element={element}
            screen={layout}
            drawerState={[isDrawerOpen, (bool) => navigation.setParams({ isDrawerOpen: bool })]}
          />
      )}
        mainComponent={(
          <>
            <Canvas
              canvas={element.canvas}
              screen={layout}
              isExpand={isExpand}
            />
            {/* <TouchableOpacity
              style={styles.arrowContainer}
              onPress={() => {
                // LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                setIsExpand(!isExpand);
              }}
            >
              <Icon.MaterialCommunityIcons name={isExpand ? 'arrow-collapse-all' : 'arrow-expand-all'} style={styles.arrowIcon} />
            </TouchableOpacity> */}
            {/* {!isExpand && <Info element={element} screen={layout} />} */}
          </>
        )}
      />
    </View>
  );
};

export default withTheme(Detail);
