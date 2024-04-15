import * as React from 'react';
import ParentContainer from '../../components/ParentContainer';
import { Box, Heading, HStack, ScrollView, Text } from 'native-base';
import BackButton from '../../components/BackButton';
import CInput from '../../components/CInput';
import CTextArea from '../../components/CTextArea';
import CButton from '../../components/CButton';
import { Formik, Field, FieldProps, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import usePost from '../../hooks/usePost';

const CreateScreen = () => {
  const [data, setPushData] = usePost(`product`);

  const handleSubmit = (values: any, form: FormikHelpers<any>) => {
    form.setSubmitting(true);
    setPushData({
      name: values.name,
      model: values.model,
      kwHp: values.kwHp,
      cap: values.cap,
      terms1: values.terms1,
      discription1: values.discription1,
      terms2: values.terms2,
      discription2: values.discription2
    });
  };

  const previousValue = {
    name: '',
    model: '',
    kwHp: '',
    cap: '',
    terms1: '',
    discription1: '',
    terms2: '',
    discription2: ''
  };
  const validationSchema = Yup.object({
    name: Yup.string().required(),
    model: Yup.string().required(),
    kwHp: Yup.string().required(),
    cap: Yup.string().required(),
    terms1: Yup.string().required(),
    discription1: Yup.string().required(),
    terms2: Yup.string().required(),
    discription2: Yup.string().required()
  });

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
          validationSchema={validationSchema}
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
                  isInvalid={!!errors.name && !!touched.name}
                  errorMessage={errors.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name}
                />
                <Box h={4} />
                <CInput
                  label="Model"
                  isInvalid={!!errors.model && !!touched.model}
                  errorMessage={errors.model}
                  onChangeText={handleChange('model')}
                  onBlur={handleBlur('model')}
                  value={values.model}
                />
                <Box h={4} />
                <HStack flex={1} space={3}>
                  <Box flex={1}>
                    <CInput
                      label="Kw/Hp"
                      isInvalid={!!errors.kwHp && !!touched.kwHp}
                      errorMessage={errors.kwHp}
                      onChangeText={handleChange('kwHp')}
                      onBlur={handleBlur('kwHp')}
                      value={values.kwHp}
                    />
                  </Box>
                  <Box flex={1}>
                    <CInput
                      label="Run Cap"
                      isInvalid={!!errors.cap && !!touched.cap}
                      errorMessage={errors.cap}
                      onChangeText={handleChange('cap')}
                      onBlur={handleBlur('cap')}
                      value={values.cap}
                    />
                  </Box>
                </HStack>

                <Box h={4} />
                <CTextArea
                  label={'Running coil'}
                  isInvalid={!!errors.terms1 && !!touched.terms1}
                  errorMessage={errors.terms1}
                  onChangeText={handleChange('terms1')}
                  onBlur={handleBlur('terms1')}
                  value={values.terms1}
                />
                <CTextArea
                  label={'Discription on Running coil'}
                  isInvalid={!!errors.discription1 && !!touched.discription1}
                  errorMessage={errors.discription1}
                  onChangeText={handleChange('discription1')}
                  onBlur={handleBlur('discription1')}
                  value={values.discription1}
                />
                <CTextArea
                  label={'Starting coil'}
                  isInvalid={!!errors.terms2 && !!touched.terms2}
                  errorMessage={errors.terms2}
                  onChangeText={handleChange('terms2')}
                  onBlur={handleBlur('terms2')}
                  value={values.terms2}
                />
                <CTextArea
                  label={'Discription on Starting coil'}
                  isInvalid={!!errors.discription2 && !!touched.discription2}
                  errorMessage={errors.discription2}
                  onChangeText={handleChange('discription2')}
                  onBlur={handleBlur('discription2')}
                  value={values.discription2}
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
