import { Grid } from '@mui/material';
import GroupingInput, { NameInput, RamInput } from './FileterInputs';

export default function FilterBar() {
  return (
    <Grid sx={{}} container>
      <Grid md={3} item>
        <NameInput />
      </Grid>
      {/* <Grid md={3} item>
        <GroupingInput />
      </Grid> */}
      <Grid md={2} item>
        <GroupingInput />
      </Grid>
      <Grid md={2} item>
        <RamInput />
      </Grid>
    </Grid>
  );
}
