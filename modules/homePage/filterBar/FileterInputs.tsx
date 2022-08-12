import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addFilter } from '../../../common/store/actions/mainAction';
import { useFilter } from '../../../common/store/Store';

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// // const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const brands = ['DELL', 'HP', 'ASUS', 'SAMSUNG', 'HUAWEI', 'TOCHIBA', 'MAC'];
const ramValues = ['4', '8', '16', '32', '64'];
const cpuGenerations = ['5', '7', '11'];
const models = ['vostros', 'insperion'];
const storages = ['100 GB', '200 GB', '300 GB', '400 GB', '500 GB', '1T'];
const screens = [12, 40, 23, 13, 43];
const gpuValues = [12, 3, 4, 23, 1232];
// Brand
// Model
// CPU
// GPU
// RAM
// STORAGE
// SCREEN

export const RamInput = () => {
  const dispatch = useDispatch<any>();
  const { ram } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ ram: value }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Ram</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={ram}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="Ram"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {ramValues.map(value => (
            <MenuItem key={value} value={value}>
              {value}GB
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const BrandInput = () => {
  const dispatch = useDispatch<any>();
  const { brand } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ brand: value }));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Brand</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={brand}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="brand"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {brands.map(_brand => (
            <MenuItem key={_brand} value={_brand}>
              {_brand}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const ModelInput = () => {
  const dispatch = useDispatch<any>();
  const { model } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ model: value }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Model</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={model}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="model"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {models.map(_model => (
            <MenuItem key={_model} value={_model}>
              {_model}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const ScreenInput = () => {
  const dispatch = useDispatch<any>();
  const { screen } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ screen: value }));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Screen</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={screen}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="screen"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {screens.map(_screen => (
            <MenuItem key={_screen} value={_screen}>
              {_screen}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const StorageInput = () => {
  const dispatch = useDispatch<any>();
  const { storage } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ storage: value }));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Storage</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={storage}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="storage"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {storages.map(_storage => (
            <MenuItem key={_storage} value={_storage}>
              {_storage}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const CpuInput = () => {
  const dispatch = useDispatch<any>();
  const { cpu } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ cpu: value }));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Cpu</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={cpu}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="cpu"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {cpuGenerations.map(generation => (
            <MenuItem key={generation} value={generation}>
              {generation} generation
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export const GpuInput = () => {
  const dispatch = useDispatch<any>();
  const { gpu } = useFilter();
  const handleSelect = (value: string) => {
    dispatch(addFilter({ gpu: value }));
  };
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Gpu</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={gpu}
          onChange={e => handleSelect(e.target.value)}
          autoWidth
          label="gpu"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {gpuValues.map(value => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

// function getStyles(name: string, personName: readonly string[], theme: Theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

// export const Brand = () => {
//   const theme = useTheme();
//   const [personName, setPersonName] = useState<string[]>([]);

//   const handleChange = (event: SelectChangeEvent<typeof personName>) => {
//     const {
//       target: { value },
//     } = event;
//     setPersonName(
//       // On autofill we get a stringified value.
//       typeof value === 'string' ? value.split(',') : value
//     );
//   };

//   return (
//     <FormControl sx={{ m: 1, width: 300 }}>
//       <InputLabel id="demo-multiple-chip-label">Companies</InputLabel>
//       <Select
//         labelId="demo-multiple-chip-label"
//         id="demo-multiple-chip"
//         multiple
//         value={personName}
//         onChange={handleChange}
//         input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
//         renderValue={selected => (
//           <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
//             {selected.map(value => (
//               <Chip key={value} label={value} />
//             ))}
//           </Box>
//         )}
//         MenuProps={MenuProps}
//       >
//         {names.map(name => (
//           <MenuItem
//             key={name}
//             value={name}
//             style={getStyles(name, personName, theme)}
//           >
//             {name}
//           </MenuItem>
//         ))}
//       </Select>
//     </FormControl>
//   );
// };

// const GroupingInput = () => (
//   <FormControl sx={{ m: 1, minWidth: 120 }}>
//     <InputLabel htmlFor="grouped-native-select">Processeur</InputLabel>
//     <Select native defaultValue="" id="grouped-native-select" label="Type">
//       <option aria-label="None" value="" />
//       <optgroup label="Portable">
//         <option value={1}>Intel</option>
//         <option value={2}>Raizen</option>
//       </optgroup>
//       <optgroup label="Burreau">
//         <option value={3}>Intel</option>
//         <option value={4}>Raizen</option>
//       </optgroup>
//     </Select>
//   </FormControl>
// );
// export default GroupingInput;
