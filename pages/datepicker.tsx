import * as React from 'react';
import { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const Datepicker = () => {
  const [date, setDate] = React.useState();

  return (
    <div>
      <h1>datepicker</h1>

      {/* <TextField
        type="month"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <TextField type="date" /> */}
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Basic example"
          views={['month']}
          value={date}
          onChange={e => {
            setDate(e);
          }}
          renderInput={params => <TextField {...params} />}
        />
        <DatePicker
          label="Basic example"
          views={['year']}
          value={date}
          onChange={e => {
            setDate(e);
          }}
          renderInput={params => <TextField {...params} />}
        />
      </LocalizationProvider>
    </div>
  );
};
export default Datepicker;
