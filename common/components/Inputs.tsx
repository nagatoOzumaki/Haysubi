import { Radio, Box, TextField, Typography } from '@mui/material';
import { useField } from 'formik';
import { FC } from 'react';

export const MyTextInput: FC<any> = ({ label, InputColor, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <Box component="div">
        <label htmlFor={props.id || props.name}>{label}</label>
      </Box>
      <TextField
        fullWidth
        {...field}
        {...props}
        variant="outlined"
        sx={{
          input: {
            borderWidth: 3,
            borderColor: 'blue',
            color: InputColor || '#000',
          },
          contan: {
            color: 'blue',
          },
          borderColor: 'rgba(255,255,255,0.3)',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      />
      {meta.touched && meta.error ? (
        <Typography
          className="error"
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

export const MyCheckbox = ({ children, ...props }: any) => {
  // React treats radios and checkbox inputs differently other input types, select, and textarea.
  // Formik does this too! When you specify `type` to useField(), it will
  // return the correct bag of props for you -- a `checked` prop will be included
  // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <div>
        <Radio
          sx={{
            // color: '#fff',
            // '&:checked': { color: '#fff' },
            color: '#fff',
            '&.Mui-checked': {
              color: '#fff',
            },
          }}
          type="checkbox"
          {...field}
          {...props}
        />
        {children}
      </div>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};
