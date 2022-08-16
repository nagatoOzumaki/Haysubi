/* eslint-disable no-param-reassign */
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import * as Yup from 'yup';

import {
  Grid,
  Typography,
  Button,
  Box,
  Link,
  ButtonGroup,
} from '@mui/material';
import { HelpCenterOutlined } from '@mui/icons-material';
import { Form, Formik } from 'formik';
import {
  PaymentInfoActions,
  PaymentInfoState,
} from '../../../common/store/reducers/payementReducer';

type PropsType = {
  dispatch: any;
  paymentInfo: PaymentInfoState;
};

const DeliveryMethodStep: FC<PropsType> = ({ dispatch, paymentInfo }) => {
  const { isNextButtonEnabled } = paymentInfo;
  const disableNext = useCallback(() => {
    dispatch({ type: PaymentInfoActions.DISABLE_NEXT_BUTTON });
  }, [dispatch]);
  const enableNext = () => {
    dispatch({ type: PaymentInfoActions.ENABLE_NEXT_BUTTON });
  };
  const nextStep = () => {
    if (isNextButtonEnabled) {
      // dispatch({ type: PaymentInfoActions.ENABLE_NEXT_BUTTON });
      dispatch({ type: PaymentInfoActions.NEXT_STEP });
    }
  };
  const previousStep = () => {
    dispatch({ type: PaymentInfoActions.PREVIOUS_STEP });
  };

  const testSchema = Yup.object().shape({
    method: Yup.string().required('select a method'),
  });

  const initialValues = {
    method: 'Delivery',
  };

  const handleOnChange = (values: any) => {
    if (!values.method) {
      disableNext();
    } else {
      enableNext();
    }
  };
  useEffect(() => {
    disableNext();
  }, [disableNext]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6">Delivery information</Typography>
      </Grid>
      <Grid item>
        <Typography sx={{ fontSize: 23, color: '#0f0' }}>
          How do you like to get the product ?
        </Typography>

        <Formik
          onSubmit={(values, { setSubmitting }) => {
            nextStep();
            setSubmitting(false);
          }}
          validationSchema={testSchema}
          initialValues={initialValues}
          validateOnChange
        >
          {({ values, errors }) => (
            <Form>
              <FormControl sx={{ mt: 2, minWidth: 120, ml: 50 }}>
                <InputLabel htmlFor="delivery-method">
                  Delivery Method
                </InputLabel>
                <Select
                  sx={{ width: 200 }}
                  autoFocus
                  value={values.method}
                  onChange={(e: any) => {
                    values.method = e.target.value;
                    handleOnChange(values);
                  }}
                  label="Delivery Method"
                  inputProps={{
                    name: 'method',
                    id: 'method',
                  }}
                >
                  <MenuItem value="withdrawal">Withdrawal Point</MenuItem>
                  <MenuItem value="delivery">Home Delivery</MenuItem>
                </Select>
              </FormControl>
              {errors.method}

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  position: 'absolute',
                  bottom: 53,
                  right: 50,
                }}
              >
                <ButtonGroup>
                  <Button
                    sx={{ mr: 2 }}
                    variant="outlined"
                    onClick={previousStep}
                  >
                    Back
                  </Button>
                  <Button
                    type="submit"
                    disabled={!isNextButtonEnabled}
                    variant="contained"
                    sx={{ backgroundColor: 'green' }}
                  >
                    Next
                  </Button>
                </ButtonGroup>
              </Box>
            </Form>
          )}
        </Formik>

        <ScrollDialog />
      </Grid>
    </Grid>
  );
};

export default DeliveryMethodStep;

function ScrollDialog() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps['scroll']>('paper');

  const handleClickOpen = (scrollType: DialogProps['scroll']) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <Box sx={{ mt: 12, display: 'flex', gap: 1 }}>
        <HelpCenterOutlined />
        <Link onClick={handleClickOpen('paper')} sx={{ cursor: 'pointer' }}>
          What Is Withdrawal Point ?
        </Link>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Withdrawl Point</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
            quam dignissimos ipsam et expedita, impedit necessitatibus
            distinctio deleniti ne mo omnis facilis eaque vel nam totam, ullam,
            molestiae doloribus odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam ad quam dignissimos ipsam et expedita,
            impedit necessitatibus distinctio deleniti ne mo omnis facilis eaque
            vel nam totam, ullam, molestiae doloribus odio. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Veniam ad quam dignissimos
            ipsam et expedita, impedit necessitatibus distinctio deleniti ne mo
            omnis facilis eaque vel nam totam, ullam, molestiae doloribus odio.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam ad
            quam dignissimos ipsam et expedita, impedit necessitatibus
            distinctio deleniti ne mo omnis facilis eaque vel nam totam, ullam,
            molestiae doloribus odio. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam ad quam dignissimos ipsam et expedita,
            impedit necessitatibus distinctio deleniti ne mo omnis facilis eaque
            vel nam totam, ullam, molestiae doloribus odio.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
