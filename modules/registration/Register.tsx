import { Label } from '@mui/icons-material';
import {
  Button,
  Grid,
  Link,
  Radio,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }: any) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <Box component='div'>
        <label htmlFor={props.id || props.name}>{label}</label>
      </Box>
      <TextField fullWidth {...field} {...props} />
      {meta.touched && meta.error ? (
        <Typography
          className='error'
          sx={{
            color: 'red',
          }}
        >
          {meta.error}
        </Typography>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }: any) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <div className='checkbox-input'>
        <Radio
          sx={{ color: '#fff', '& .checked': { color: '#fff' } }}
          type='checkbox'
          {...field}
          {...props}
        />
        {children}
      </div>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

// And now we can use these
const SignupForm = () => {
  return (
    <Box
      sx={{
        padding: 5,
        width: 400,
        backgroundColor: 'secondary.main',
        color: '#ddd',
        pb: 0,
      }}
    >
      <h1>Sign up!</h1>
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
              <MyTextInput
                label='Password'
                name='password'
                type='password'
                placeholder='*****'
              />
            </Grid>

            <Grid item>
              <MyCheckbox name='remenberMe'>
                I accept the terms and conditions
              </MyCheckbox>
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
