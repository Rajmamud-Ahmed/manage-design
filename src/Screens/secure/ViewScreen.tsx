import * as React from 'react';
import ParentContainer from '../../components/ParentContainer';
import {
  Box,
  Divider,
  Fab,
  Heading,
  HStack,
  Icon,
  ScrollView,
  Text
} from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import BackButton from '../../components/BackButton';
import useDelete from '../../hooks/useDelete';
import useGet from 'src/hooks/useGet';
import HomeCard from 'src/components/HomeCard';

const ViewScreen = ({ route, navigation }) => {
  const routeData = route.params;
  const [stateData, setData] = React.useState<any>(routeData.data);

  const URL = `product/${routeData.data._id}`;

  const [IDdata] = useGet(URL);
  const [data, setUrlId] = useDelete();

  React.useEffect(() => {
    if (IDdata !== null) {
      setData(IDdata);
    }
  }, [IDdata]);

  return (
    <ParentContainer>
      {/* header */}
      <HStack alignItems={'center'} space={4}>
        <BackButton />
        <Heading>Review</Heading>
      </HStack>
      <Box h={4} />
      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <HomeCard
            style={{ borderColor: 'black', borderWidth: 1 }}
            data={stateData}
          />
          <ViewData
            headingType="RT"
            heading={stateData.terms1}
            note={stateData.discription1}
          />
          <ViewData
            headingType="ST"
            heading={stateData.terms2}
            note={stateData.discription2}
          />
        </Box>
      </ScrollView>

      <Fab
        renderInPortal={false}
        shadow={0}
        right={6}
        bottom={8}
        size="lg"
        onPress={() => {
          setUrlId(URL);
        }}
        icon={<Icon color="white" as={AntDesign} name="delete" size="4" />}
      />
      <Fab
        renderInPortal={false}
        shadow={0}
        right={6}
        bottom={24}
        size="lg"
        onPress={() => navigation.navigate('EditScreen', { data: stateData })}
        icon={<Icon color="white" as={AntDesign} name="edit" size="4" />}
      />
    </ParentContainer>
  );
};

export default ViewScreen;

const ViewData = (props: {
  heading: string;
  note: string;
  headingType: string;
}) => {
  const { heading, note, headingType } = props;
  return (
    <Box borderColor={'black'} borderWidth={1} borderTopWidth={0}>
      <Heading fontSize={20} px={2} py={4} color={'green.500'}>
        {headingType}
        {heading}
      </Heading>
      <Divider
        _light={{
          bg: 'muted.800'
        }}
        _dark={{
          bg: 'muted.50'
        }}
      />
      <Text fontWeight={'bold'} my={1} mx={2} fontSize={16} color={'red.600'}>
        Note:-{note}
      </Text>
    </Box>
  );
};
