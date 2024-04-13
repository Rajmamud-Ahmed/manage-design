import React from 'react';
import { Container, IContainerProps, View } from 'native-base';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IViewProps } from 'native-base/lib/typescript/components/basic/View/types';

const ParentContainer = (props: IViewProps) => {
  const { children, ...rest } = props;
  return (
    <View flex={1} bgColor={'gray.100'}>
      <SafeAreaView />
      <View flex={1} w={'full'} px={5} pt={5} pb={3} {...rest}>
        {children}
      </View>
    </View>
  );
};

export default ParentContainer;
