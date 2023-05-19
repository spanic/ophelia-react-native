import { FC, useState } from 'react';
import { useController, UseControllerProps } from 'react-hook-form';
import { StyleSheet, Text, TextInput, View } from 'react-native';

import { IPillDataFormInput } from '../../types/PillDataForm.types';

interface ISingleLIneTextInputProps {
  controllerProps: UseControllerProps<IPillDataFormInput>;
  placeholder?: string;
}

const SingleLineEllipsedInput: FC<ISingleLIneTextInputProps> = ({
  controllerProps,
  placeholder,
}) => {
  const [isFakeTextVisible, setFakeTextVisible] = useState<boolean>();

  const {
    field: { onBlur, onChange, value },
  } = useController(controllerProps);

  const onInputBlur = (): void => {
    onBlur();
    setFakeTextVisible(true);
  };

  return (
    <View>
      {/* Native TextInput works better: setting fixed height for it prevents caret jumping */}
      <TextInput
        placeholder={placeholder}
        style={styles.textInput}
        value={value}
        onChangeText={onChange}
        onBlur={onInputBlur}
        onFocus={() => setFakeTextVisible(false)}
        cursorColor="black"
      ></TextInput>
      {isFakeTextVisible && value && (
        <View pointerEvents="none" style={styles.fakeInputTextWrapper}>
          <Text ellipsizeMode="tail" numberOfLines={1} style={styles.fakeInputText}>
            {value}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 20,
    lineHeight: 24,
    verticalAlign: 'middle',
    height: 24,
  },
  fakeInputTextWrapper: {
    position: 'absolute',
    backgroundColor: 'white',
    width: '100%',
  },
  fakeInputText: {
    fontSize: 20,
    lineHeight: 24,
  },
});

export default SingleLineEllipsedInput;
