import { Box, Button, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { setLogin } from '../../common/store/actions';

import { MyCheckbox, MyTextInput } from './components/Inputs';

const Login: FC = () => {
  const dispatch = useDispatch()<any>;

  const handleSubmit = (email: string, password: string) => {
    dispatch(
      setLogin({
        token: password,
        name: email,
        username: email,
        isAdmin: false,
      })
    );
  };
  return (
    <Box
      sx={{
        padding: 2,
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
          handleSubmit(values.email, values.password);
          setSubmitting(false);
        }}
      >
        <Form>
          <Grid direction="column" spacing={3} container>
            <Grid item>
              <MyTextInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="example@gmail.com"
              />
            </Grid>
            <Grid item>
              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="*****"
              />
            </Grid>

            <Grid item sx={{ padding: 4 }}>
              <MyCheckbox name="remenberMe">Remember Me</MyCheckbox>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </Box>
  );
};

export default Login;
