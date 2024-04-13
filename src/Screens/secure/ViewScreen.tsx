import * as React from 'react';
import ParentContainer from '../../components/ParentContainer';
import { Box, Fab, Heading, HStack, Icon, ScrollView, Text } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../components/BackButton';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
import useEdit from '../../hooks/useEdit';
import useGet from '../../hooks/useGet';

import NewCheckBox from '../../components/NewCheckBox';
import useDelete from '../../hooks/useDelete';

const ViewScreen = ({ route, navigation }) => {
  const routeData = route.params;
  const [fi, setFi] = React.useState<any>(routeData.data);

  const URL = `http://192.168.211.160:3000/task/${routeData.data._id}`;

  const [IDdata] = useGet(URL);
  const [returnData, setPushData] = useEdit(URL);
  const [data, setUrlId] = useDelete();

  const previousValue = {
    taskStatus: route.params.data.taskStatus
  };
  const handleSubmit = (values: any, form: FormikHelpers<any>) => {
    form.setSubmitting(true);
    setPushData({
      taskStatus: values.taskStatus
    });
  };

  React.useEffect(() => {
    if (IDdata !== null) {
      setFi(IDdata);
    }
  }, [returnData, IDdata]);

  return (
    <ParentContainer>
      {/* header */}
      <HStack alignItems={'center'} space={4}>
        <BackButton />
        <Heading color={'white'}>Review</Heading>
      </HStack>
      <Box h={4} />
      {/* body */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box>
          <Formik initialValues={previousValue} onSubmit={handleSubmit}>
            {({ handleSubmit, values }) => (
              <Box>
                <Field name={'taskStatus'}>
                  {({ field, form, meta }: FieldProps) => (
                    <HStack space={4} alignItems={'center'} mt={2} mb={4}>
                      <NewCheckBox
                        value={fi.taskStatus}
                        style={{
                          width: 30,
                          height: 30
                        }}
                        color={'#06b6d4'}
                        onValueChange={(nextValue) => {
                          form.setFieldValue(field.name, nextValue);
                          handleSubmit();
                        }}
                      />
                      <Text fontWeight={'bold'} color={'white'}>
                        Task Status
                      </Text>
                    </HStack>
                  )}
                </Field>
              </Box>
            )}
          </Formik>

          <Heading fontSize={20} color={'yellow.400'}>
            {fi.taskName}
          </Heading>
          <Text fontWeight={'bold'} mt={4} fontSize={16} color={'amber.100'}>
            {fi.content}
          </Text>
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
        onPress={() => navigation.navigate('EditTask', { data: fi })}
        icon={<Icon color="white" as={AntDesign} name="edit" size="4" />}
      />
    </ParentContainer>
  );
};

export default ViewScreen;
