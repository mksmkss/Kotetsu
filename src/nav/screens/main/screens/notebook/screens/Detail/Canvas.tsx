import * as React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Canvas as CanvasOriginal, CanvasRef } from '@benjeau/react-native-draw';
import {
  withTheme, Portal, Dialog, Button,
} from 'react-native-paper';
import ColorPicker from 'react-native-wheel-color-picker';

import { Icon, IconProps } from 'src/components/Icon';
import { EPaper } from 'src/components';
import { Theme } from 'src/interface';
import { Color } from 'src/config';

const { Text } = EPaper;

const styles = StyleSheet.create({
  canvascontainer: {
    alignSelf: 'center',
  },
  barcontainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: 10,
  },
  button: {
    margin: 5,
    padding: 5,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 17,
  },
  palette: {
    justifyContent: 'center',
    borderRadius: 12,
    height: 24,
    width: 24,
    borderWidth: 1,
  },
});

interface CanvasProps {
  canvas: any
  screen: { width: number, height: number }
  theme: Theme
  isExpand: boolean
}

interface ToolBarProps {
  textcolor: string;
  toolState: [string, (tool: string) => void];
  colorState: [string, (color: string) => void];
  thicknessState: [number, (thickness: number) => void];
  opacityState: [number, (opacity: number) => void];
  undo: () => void;
  clear: () => void;
}

interface ButtonType {
  title: string;
  icon : { collection: string, name: string };
  onPress: () => void;
  iconStyle?: IconProps['style']
}

const renderColorPallate = (colorState, palleteVisibleState) => {
  const [color, setColor] = colorState;
  const [tempColor, setTempColor] = React.useState('#ffffff');
  const [palleteVisible, setPalleteVisible] = palleteVisibleState;

  React.useEffect(() => setTempColor(color), [palleteVisible]);

  return (
    <Portal>
      <Dialog
        visible={palleteVisible}
        onDismiss={() => [setColor(tempColor), setPalleteVisible(false)]}
        style={{
          paddingVertical: 30, paddingHorizontal: 100, maxWidth: 300, alignSelf: 'center', borderRadius: 10,
        }}

      >
        <View style={{
          height: 200, width: 250, alignSelf: 'center', marginBottom: 80,
        }}
        >
          <ColorPicker
            color={tempColor}
            onColorChange={setTempColor}
          />
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Dialog.Actions>
            <Button
              onPress={() => setPalleteVisible(false)}
              color={Color.blue[3]}
            >
              Cancel
            </Button>
          </Dialog.Actions>
          <Dialog.Actions>
            <Button
              onPress={() => [setColor(tempColor), setPalleteVisible(false)]}
              color={Color.blue[3]}
            >
              Done
            </Button>
          </Dialog.Actions>
        </View>
      </Dialog>
    </Portal>
  );
};

const ToolBar = (props: ToolBarProps) => {
  const {
    textcolor, toolState, colorState, thicknessState, opacityState, expandState, undo, clear,
  } = props;
  const [mode, setMode] = React.useState('pen');
  const [palleteVisible, setPalleteVisible] = React.useState(false);
  const [tool, setTool] = toolState;
  const [color, setColor] = colorState;
  const [thickness, setThickness] = thicknessState;
  const [opacity, setOpacity] = opacityState;
  const buttons: ButtonType[] = [
    {
      title: 'undo',
      icon: { collection: 'MaterialCommunityIcons', name: 'undo' },
      onPress: () => undo(),
    },
    {
      title: 'pen',
      icon: { collection: 'MaterialCommunityIcons', name: 'pencil-outline' },
      onPress: () => [setTool('brush'), setThickness(5), setOpacity(1), setMode('pen')],
    },
    {
      title: 'marker',
      icon: { collection: 'MaterialCommunityIcons', name: 'marker' },
      onPress: () => [setTool('brush'), setThickness(10), setOpacity(0.5), setMode('marker')],
    },
    {
      title: 'eraser',
      icon: { collection: 'MaterialCommunityIcons', name: 'eraser' },
      onPress: () => [setTool('eraser'), setMode('eraser')],
    },
    {
      title: 'trash',
      icon: { collection: 'Ionicons', name: 'trash' },
      onPress: () => clear(),
    },
    {
      title: 'color',
      icon: { collection: 'FontAwesome', name: 'circle' },
      iconStyle: { color },
      onPress: () => setPalleteVisible(true),
    },
  ];

  return (
    <View style={styles.barcontainer}>
      {buttons.map((button) => {
        const IconComponent = Icon[button.icon.collection];
        return (
          <TouchableOpacity
            style={[
              styles.button,
              { backgroundColor: button.title === mode ? Color.grey[4] : null },
            ]}
            onPress={button.onPress}
            key={button.title}
          >
            <IconComponent
              name={button.icon.name}
              size={24}
              color={textcolor}
              style={button.iconStyle}
            />
          </TouchableOpacity>
        );
      })}
      {renderColorPallate(colorState, [palleteVisible, setPalleteVisible])}
    </View>
  );
};

const Canvas = (props: CanvasProps) => {
  const {
    canvas, theme: { colors: { text } }, screen, isExpand,
  } = props;
  const [tool, setTool] = React.useState('brush');
  const [color, setColor] = React.useState('#000000');
  const [thickness, setThickness] = React.useState(5); // slider導入検討
  const [opacity, setOpacity] = React.useState(1);
  const ref = React.useRef<CanvasRef>();

  return (
    <View style={styles.canvascontainer}>
      <CanvasOriginal
        ref={ref}
        color={color}
        thickness={thickness}
        opacity={opacity}
        height={screen.height - 44}
        // height={isExpand ? screen.height - 44 : 400}
        width={screen.width}
        tool={tool}
        simplifyOptions={{
          amount: 1,
          simplifyCurrentPath: true,
        }}
        // enabled={false}
      />
      <ToolBar
        toolState={[tool, setTool]}
        colorState={[color, setColor]}
        thicknessState={[thickness, setThickness]}
        opacityState={[opacity, setOpacity]}
        textcolor={text}
        undo={() => ref.current?.undo()}
        clear={() => ref.current?.clear()}
      />
      {/* <Button onPress={() => setTool(null)}>Lock the canvas</Button> */}
    </View>
  );
};

export default withTheme(Canvas);
