import { StyleSheet, TextInput } from 'react-native';
import { FieldValues, UseControllerProps, useController } from 'react-hook-form';

interface IMultiLineInputProps<T extends FieldValues> {
  controllerProps: UseControllerProps<T>;
  placeholder?: string;
}

function MultiLineInput<T extends FieldValues>({
  controllerProps,
  placeholder,
}: IMultiLineInputProps<T>) {
  const {
    field: { onBlur, onChange, value },
  } = useController(controllerProps);

  return (
    <TextInput
      style={styles.multilineTextInput}
      placeholder={placeholder}
      multiline={true}
      cursorColor={'black'}
      placeholderTextColor={'#C4CACF'}
      allowFontScaling={false}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      blurOnSubmit={true}
    />
  );
}

const styles = StyleSheet.create({
  multilineTextInput: {
    lineHeight: 24,
    fontSize: 20,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 6,
    backgroundColor: '#F2F6F7',
  },
});

export default MultiLineInput;

/* const MultiLineInput: FC<IMultiLineInputProps> = ({ controllerProps, placeholder }) => {
  const {
    field: { onBlur, onChange, value },
  } = useController(controllerProps);

  return (
    <TextInput
      style={styles.multilineTextInput}
      placeholder={placeholder}
      multiline={true}
      cursorColor={'black'}
      placeholderTextColor={'#C4CACF'}
      allowFontScaling={false}
      onBlur={onBlur}
      onChangeText={onChange}
      value={value}
      blurOnSubmit={true}
    />
  );
}; */
