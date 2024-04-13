import * as React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Box, Icon, IconButton } from 'native-base';

const BackButton = () => {
  const navigation = useNavigation();
  return (
    <Box w={12} h={12} rounded="full" bg={'#0a6ce7b5'}>
      <IconButton
        variant={'ghost'}
        borderRadius={32}
        icon={
          <Icon
            as={MaterialIcons}
            color={'white'}
            size={'xl'}
            name={'arrow-back'}
          />
        }
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Box>
  );
};

export default BackButton;
