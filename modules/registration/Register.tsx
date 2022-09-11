import { Button, Grid, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { FC } from 'react';
import * as Yup from 'yup';
import { MyCheckbox, MyTextInput } from '../../common/components/Inputs';

// And now we can use these
const Register: FC = () => (
  <Box
    sx={{
      padding: 2,
      color: '#ddd',
      pb: 0,
    }}
  >
    <h1>Sign up!</h1>
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        remenberMe: false, // added for our checkbox
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string()
          .min(8, 'Must be 8 characters or more')
          .required('Required'),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'Password must match'
        ),
        remenberMe: Yup.boolean(),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          // eslint-disable-next-line no-alert
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form>
        <Grid direction="column" spacing={1} container>
          <Grid item>
            <MyTextInput
              InputColor="#fff"
              label="Email Address"
              name="email"
              type="email"
              placeholder="example@gmail.com"
            />{' '}
          </Grid>
          <Grid item>
            <MyTextInput
              InputColor="#fff"
              label="Password"
              name="password"
              type="password"
              placeholder="*****"
            />
          </Grid>
          <Grid item>
            <MyTextInput
              InputColor="#fff"
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              placeholder="*****"
            />
          </Grid>

          <Grid item>
            <MyCheckbox name="acceptTerms">
              I accept the terms and conditions
            </MyCheckbox>
          </Grid>
          <Grid xs={12} item>
            <Button
              type="submit"
              color="secondary"
              variant="outlined"
              sx={{ p: 1, mt: 3, borderWidth: 1 }}
              fullWidth
            >
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </Form>
    </Formik>
  </Box>
);

export default Register;
