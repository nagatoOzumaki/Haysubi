import { Box, Button, Grid } from '@mui/material';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput } from './components/Inputs';

const Login: FC = () => (
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
        email: Yup.string().email('Invalid email address').required('Required'),
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
        <Grid direction="column" spacing={3} container>
          <Grid item>
            <MyTextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />{' '}
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

export default Login;
