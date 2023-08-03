import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface IMultiLineInputProps {
  value: string;
  onChange: TextInputProps['onChangeText'];
  onBlur: TextInputProps['onBlur'];
  useInBottomSheet?: boolean;
  _textInput?: TextInputProps;
}

function MultiLineInput({
  value,
  onChange,
  onBlur,
  useInBottomSheet,
  _textInput,
}: IMultiLineInputProps) {
  const props: TextInputProps = {
    style: styles.multilineTextInput,
    multiline: true,
    cursorColor: 'black',
    placeholderTextColor: '#C4CACF',
    allowFontScaling: false,
    onBlur,
    onChangeText: onChange,
    value,
    blurOnSubmit: true,
    ..._textInput,
  };

  const TextInputComponent = useInBottomSheet ? BottomSheetTextInput : TextInput;

  return <TextInputComponent {...props} />;
}

const styles = StyleSheet.create({
  multilineTextInput: {
    lineHeight: 24,
    fontSize: 20,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#F2F6F7',
    verticalAlign: 'middle',
  },
});

export default MultiLineInput;
