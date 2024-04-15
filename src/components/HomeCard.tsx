import { Box, Divider, Heading, HStack, Text, VStack } from 'native-base';
import * as React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle
} from 'react-native';

const HomeCard = (props: {
  data: any;
  onPress?: (event: any) => void;
  style?: StyleProp<TextStyle>;
}) => {
  const { data, onPress, style } = props;

  return (
    <Box style={style}>
      {!style && (
        <Divider
          _light={{
            bg: 'muted.800'
          }}
          _dark={{
            bg: 'muted.50'
          }}
        />
      )}
      <TouchableOpacity onPress={onPress}>
        <HStack rounded={0}>
          <VStack justifyContent={'center'} flex={1} pl={style ? 2 : 0}>
            <Heading fontSize={20}>Name:-{data.name}</Heading>
          </VStack>
          <Divider
            orientation="vertical"
            mx="3"
            _light={{
              bg: 'muted.800'
            }}
            _dark={{
              bg: 'muted.50'
            }}
          />
          <VStack flex={1} alignItems={'flex-end'} py={2} pr={style ? 2 : 0}>
            <Text fontSize={16} fontWeight={'bold'}>
              Model:-{data.model}
            </Text>
            <Text fontSize={16} fontWeight={'bold'}>
              Run cap:-{data.cap}
            </Text>
            <Text fontSize={16} fontWeight={'bold'}>
              KW/HP:-{data.kwHp}
            </Text>
          </VStack>
        </HStack>
      </TouchableOpacity>
    </Box>
  );
};

export default HomeCard;
