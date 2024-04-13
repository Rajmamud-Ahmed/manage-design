import React from 'react';
import { Button, HStack, IButtonProps, Text } from 'native-base';

const CButton = (props: IButtonProps & { extraText?: string }) => {
  const { children, h = 16, extraText, ...rest } = props;
  return (
    <HStack alignItems={'center'}>
      <Text fontSize={16} fontWeight={'bold'}>
        {extraText}
      </Text>
      <Button
        {...rest}
        rounded={14}
        h={h}
        _text={{
          fontSize: 16,
          fontWeight: 'bold',
          paddingX: !extraText ? 8 : 0
        }}
      >
        {children}
      </Button>
    </HStack>
  );
};

export default CButton;
