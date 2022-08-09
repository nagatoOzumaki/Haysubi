import { Theme, useTheme } from '@mui/material/styles';
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { useState } from 'react';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = ['DELL', 'HP', 'ASUS', 'SAMSUNG', 'HUAWEI', 'TOCHIBA', 'MAC'];
function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export const NameInput = () => {
  const theme = useTheme();
  const [personName, setPersonName] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-chip-label">Companies</InputLabel>
      <Select
        labelId="demo-multiple-chip-label"
        id="demo-multiple-chip"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
        renderValue={selected => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map(value => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map(name => (
          <MenuItem
            key={name}
            value={name}
            style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

const GroupingInput = () => (
  <FormControl sx={{ m: 1, minWidth: 120 }}>
    <InputLabel htmlFor="grouped-native-select">Processeur</InputLabel>
    <Select native defaultValue="" id="grouped-native-select" label="Type">
      <option aria-label="None" value="" />
      <optgroup label="Portable">
        <option value={1}>Intel</option>
        <option value={2}>Raizen</option>
      </optgroup>
      <optgroup label="Burreau">
        <option value={3}>Intel</option>
        <option value={4}>Raizen</option>
      </optgroup>
    </Select>
  </FormControl>
);
export default GroupingInput;

export function RamInput() {
  const [ram, setRam] = useState(4);

  const handleChange = (event: SelectChangeEvent) => {
    setRam(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Ram</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ram}
          onChange={handleChange}
          autoWidth
          label="Ram"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={4}>4GB</MenuItem>
          <MenuItem value={8}>8GB</MenuItem>
          <MenuItem value={16}>16GB</MenuItem>
          <MenuItem value={32}>32GB</MenuItem>
          <MenuItem value={64}>64GB</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
