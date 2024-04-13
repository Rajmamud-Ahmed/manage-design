import {
  FormControl,
  Heading,
  IInputProps,
  Input,
  VStack,
  WarningOutlineIcon
} from 'native-base';
import * as React from 'react';

const InputField = (
  props: IInputProps & {
    label: string;
    errorMessage: string | undefined;
    isInvalid: boolean;
  }
) => {
  const { label, errorMessage, isInvalid, ...rest } = props;
  return (
    <FormControl isInvalid={isInvalid}>
      <FormControl.Label _text={{ fontSize: 16, fontWeight: 'bold' }}>
        {label}
      </FormControl.Label>
      <Input
        {...rest}
        placeholder={label}
        size={'lg'}
        variant={'filled'}
        bg={'gray.200'}
        borderRadius={12}
        h={12}
      />
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};

export default InputField;
