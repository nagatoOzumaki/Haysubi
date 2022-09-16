import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ChildrenProps } from '../types/@appTypes';
import { darkTheme, lightTheme } from '../config/theme';
import { useDarkModeState } from '../store/Store';

const ThemeProvider = ({ children }: ChildrenProps) => {
  const isDarkMode = useDarkModeState();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
export default ThemeProvider;
