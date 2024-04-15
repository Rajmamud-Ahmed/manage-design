import {
  FormControl,
  Stack,
  Input,
  WarningOutlineIcon,
  IInputProps
} from 'native-base';
import * as React from 'react';

export type CInputProps = {
  [name: string]: any;
  label: string;
  errorMessage?: any;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: any;
};

const CInput = (props: CInputProps & IInputProps) => {
  const { label, type, isInvalid, isRequired, errorMessage, value, ...rest } =
    props;
  return (
    <FormControl isRequired={isRequired} isInvalid={isInvalid}>
      <Stack mx="0">
        <FormControl.Label _text={{ color: 'gray.500', fontWeight: 'bold' }}>
          {label}
        </FormControl.Label>
        <Input
          type={type}
          size={'lg'}
          placeholder={label}
          value={value}
          {...rest}
        />
        <FormControl.ErrorMessage
          _text={{ color: 'red.300' }}
          leftIcon={<WarningOutlineIcon size="xs" />}
        >
          {errorMessage}
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  );
};

export default CInput;
