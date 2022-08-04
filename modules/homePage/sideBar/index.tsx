import { Box } from '@mui/material';
import GroupingInput, { NameInput, RamInput } from './FileterInputs';

export default function SideBar() {
  return (
    <Box sx={{ p: 1 }}>
      <NameInput />
      <GroupingInput />
      <GroupingInput />
      <RamInput />
    </Box>
  );
}
