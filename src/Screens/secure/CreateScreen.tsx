import * as React from 'react';
import ParentContainer from '../../components/ParentContainer';
import { Box, Checkbox, Heading, HStack, ScrollView, Text } from 'native-base';
import BackButton from '../../components/BackButton';
import CInput from '../../components/CInput';
import CTextArea from '../../components/CTextArea';
import CButton from '../../components/CButton';
import { Formik, Field, FieldProps, FormikHelpers } from 'formik';
import NewCheckBox from '../../components/NewCheckBox';
import * as Yup from 'yup';
import usePost from '../../hooks/usePost';

const CreateScreen = () => {
  const [data, setPushData] = usePost(`http://192.168.211.160:3000/task`);

  const handleSubmit = (values: any, form: FormikHelpers<any>) => {
    form.setSubmitting(true);
    setPushData({
      taskName: values.taskName,
      content: values.content,
      taskStatus: false
    });
  };

  const previousValue = {
    taskName: '',
    content: ''
  };

  return (
    <ParentContainer>
      <HStack alignItems={'center'} space={4}>
        <BackButton />
        <Heading>Create</Heading>
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
              <Box w="100%">
                <CInput
                  label="Name"
                  isInvalid={!!errors.taskName && !!touched.taskName}
                  errorMessage={errors.taskName}
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Box h={4} />
                <CInput
                  label="Model"
                  isInvalid={!!errors.taskName && !!touched.taskName}
                  errorMessage={errors.taskName}
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Box h={4} />
                <CInput
                  label="Kw/Hp"
                  isInvalid={!!errors.taskName && !!touched.taskName}
                  errorMessage={errors.taskName}
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Box h={4} />
                <CInput
                  label="Run Cap"
                  isInvalid={!!errors.taskName && !!touched.taskName}
                  errorMessage={errors.taskName}
                  onChangeText={handleChange('taskName')}
                  onBlur={handleBlur('taskName')}
                  value={values.taskName}
                />
                <Box h={4} />
                <CTextArea
                  label={'Discription on Running coil'}
                  isInvalid={!!errors.content && !!touched.content}
                  errorMessage={errors.content}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  value={values.content}
                />
                <CTextArea
                  label={'Discription on Starting coil'}
                  isInvalid={!!errors.content && !!touched.content}
                  errorMessage={errors.content}
                  onChangeText={handleChange('content')}
                  onBlur={handleBlur('content')}
                  value={values.content}
                />

                <CButton mt={'auto'} w={'full'} onPress={() => handleSubmit()}>
                  Save
                </CButton>
              </Box>
            </Box>
          )}
        </Formik>
      </ScrollView>
    </ParentContainer>
  );
};

export default CreateScreen;
