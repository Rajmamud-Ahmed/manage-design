import React from 'react';
import { HStack, Heading, Box, ScrollView, Text } from 'native-base';
import BackButton from '../../components/BackButton';
import ParentContainer from '../../components/ParentContainer';
import CInput from '../../components/CInput';
import CTextArea from '../../components/CTextArea';
import CButton from '../../components/CButton';
import { Field, FieldProps, Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import useEdit from '../../hooks/useEdit';
import NewCheckBox from '../../components/NewCheckBox';

const EditScreen = ({ route, navigation }) => {
  const taskData = route.params;
  const [data, setPushData] = useEdit(
    `http://192.168.211.160:3000/task/${taskData.data._id}`
  );
  const handleSubmit = (values: any, form: FormikHelpers<any>) => {
    form.setSubmitting(true);
    setPushData(values);
    navigation.navigate('ViewTask', { data: data });
  };

  const previousValue = {
    taskName: route.params.data.taskName,
    content: route.params.data.content,
    taskStatus: route.params.data.taskStatus
  };

  return (
    <ParentContainer>
      <HStack alignItems={'center'} space={4}>
        <BackButton />
        <Heading color={'white'}>Edit</Heading>
      </HStack>
      <Box h={4} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Formik
          initialValues={previousValue}
          validationSchema={Yup.object({
            taskName: Yup.string().required(),
            content: Yup.string().required()
          })}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            handleBlur,
            values,
            errors,
            touched
          }) => (
            <Box>
              <Field name={'taskStatus'}>
                {({ field, form, meta }: FieldProps) => (
                  <HStack space={4} alignItems={'center'} mt={2} mb={4}>
                    <NewCheckBox
                      value={values.taskStatus}
                      style={{
                        width: 30,
                        height: 30
                      }}
                      color={'#06b6d4'}
                      onValueChange={(nextValue) => {
                        form.setFieldValue(field.name, nextValue);
                      }}
                    />
                    <Text fontWeight={'bold'} color={'white'}>
                      Task Status
                    </Text>
                  </HStack>
                )}
              </Field>
              <Box w="100%">
                <CInput
                  label="Task Name"
                  isInvalid={!!errors.taskName && !!touched.taskName}
                  errorMessage={errors.taskName}
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Box h={4} />
                <CTextArea
                  label={'Type Discription'}
                  isInvalid={!!errors.content && !!touched.content}
                  errorMessage={errors.content}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  value={values.content}
                />

                <CButton mt={'auto'} w={'full'} onPress={() => handleSubmit()}>
                  Save changes
                </CButton>
              </Box>
            </Box>
          )}
        </Formik>
      </ScrollView>
    </ParentContainer>
  );
};

export default EditScreen;
