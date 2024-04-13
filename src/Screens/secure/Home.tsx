import { StyleSheet } from 'react-native';
import React from 'react';
import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Stack,
  StatusBar,
  View,
  Image,
  Text,
  FlatList,
  Icon,
  Button,
  Fab
} from 'native-base';
import ParentContainer from '../../components/ParentContainer';
import HomeCard from '../../components/HomeCard';
import CButton from '../../components/CButton';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import useGet from '../../hooks/useGet';
import { AntDesign } from '@expo/vector-icons';
const Home = ({ navigation }) => {
  // const navigation = useNavigation<any>();
  const [data] = useGet('http://192.168.211.160:3000/product');
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <ParentContainer>
      <Heading>Designs</Heading>
      <Box h={2} />
      {data !== null && (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item }) => (
            <HomeCard
              onPress={() => navigation.navigate('ViewScreen', { data: item })}
              data={item}
            />
          )}
        />
      )}
      <Box h={2} />

      <Fab
        renderInPortal={false}
        shadow={0}
        right={10}
        bottom={10}
        w={16}
        h={16}
        onPress={() => navigation.navigate('CreateScreen')}
        icon={<Icon color="white" as={AntDesign} name="plus" size="8" />}
      />
    </ParentContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
