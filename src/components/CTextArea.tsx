import {
  Box,
  TextArea,
  Divider,
  Text,
  IInputProps,
  ITextAreaProps
} from 'native-base';
import * as React from 'react';

export type CTextAreaProps = {
  label: string;
  errorMessage?: any;
  isRequired?: boolean;
  isInvalid?: boolean;
  value?: any;
};

const CTextArea = (props: IInputProps & ITextAreaProps & CTextAreaProps) => {
  const { label, ...rest } = props;
  return (
    <Box>
      <Text mb="1" bold>
        {label}
      </Text>
      <TextArea
        aria-label="t1"
        numberOfLines={4}
        h={210}
        size={'lg'}
        placeholder={label}
        // isInvalid
        mb="5"
        autoCompleteType={'off'}
        {...rest}
      />
    </Box>
  );
};

export default CTextArea;
