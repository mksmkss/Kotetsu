import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withTheme } from 'react-native-paper';

import { Icon, IconProps } from 'src/components/Icon';
import { Theme } from 'src/interface';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    marginHorizontal: 10,
    height: 60,
  },
  button: {
    marginHorizontal: 10,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

interface SubjectsButtonProps {
  theme: Theme
}

interface Buttons {
  icon : { collection: string, name: string };
  onPress: () => void;
}

const SubjectsButtons = (props: SubjectsButtonProps) => {
  const { theme: { colors: { text } } } = props;
  const buttons: Buttons[] = [
    {
      icon: { collection: 'Ionicons', name: 'md-add' },
      onPress: () => {},
    },
    {
      icon: { collection: 'Ionicons', name: 'trash-outline' },
      onPress: () => {},

    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => {
        const IconComponent = Icon[button.icon.collection];
        return (
          <TouchableOpacity
            style={styles.button}
            onPress={button.onPress}
            key={index}
          >
            <IconComponent name={button.icon.name} size={30} color={text} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default withTheme(SubjectsButtons);
