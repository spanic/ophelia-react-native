import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

import { BottomSheetTextInput } from '@gorhom/bottom-sheet';

interface IMultiLineInputProps<T extends FieldValues> {
  controllerProps: UseControllerProps<T>;
  placeholder?: string;
  useInBottomSheet?: boolean;
  _textInput?: TextInputProps;
}

function MultiLineInput<T extends FieldValues>({
  controllerProps,
  placeholder,
  useInBottomSheet,
  _textInput,
}: IMultiLineInputProps<T>) {
  const {
    field: { onBlur, onChange, value },
  } = useController(controllerProps);

  const props: TextInputProps = {
    style: styles.multilineTextInput,
    placeholder: placeholder,
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
