import { Label } from '@mui/icons-material';
import { Button, Grid, Radio, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput } from './components/Inputs';

// And now we can use these
const SignupForm = () => {
  return (
    <Box
      sx={{
        padding: 1,
        width: 400,
        backgroundColor: 'secondary.main',
        color: '#ddd',
        pb: 0,
      }}
    >
      <h1>Subscribe!</h1>
      <Formik
        initialValues={{
          email: '',
          password: '',
          remenberMe: false, // added for our checkbox
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(8, 'Must be 8 characters or more')
            .required('Required'),
          remenberMe: Yup.boolean(),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Grid direction='column' spacing={1} container>
            <Grid item>
              <MyTextInput
                label='Email Address'
                name='email'
                type='email'
                placeholder='example@gmail.com'
              />{' '}
            </Grid>
            <Grid item>
              <MyTextInput
                label='Password'
                name='password'
                type='password'
                placeholder='*****'
              />
            </Grid>

            <Grid item>
              <MyCheckbox name='remenberMe'>Remember Me</MyCheckbox>
            </Grid>
            <Grid item>
              <Button type='submit' variant='contained' fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
};

export default SignupForm;
