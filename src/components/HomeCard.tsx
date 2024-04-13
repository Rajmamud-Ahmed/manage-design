import { Box, Divider, Heading, HStack, Text, VStack } from 'native-base';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';

const HomeCard = (props: { data: any; onPress: (event: any) => void }) => {
  const { data, onPress } = props;
  const content = data.kwHp;
  const TEXT =
    content.length < 46 ? `${content}` : `${content.slice(0, 46)}...`;
  const status = data.taskStatus;
  return (
    <Box>
      <Divider
        _light={{
          bg: 'muted.800'
        }}
        _dark={{
          bg: 'muted.50'
        }}
      />
      <TouchableOpacity onPress={onPress}>
        <HStack rounded={0}>
          <VStack justifyContent={'center'} flex={1}>
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
          <VStack flex={1} alignItems={'flex-end'} py={2}>
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
