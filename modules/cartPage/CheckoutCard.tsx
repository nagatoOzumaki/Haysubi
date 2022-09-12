// import {
//   Box,
//   Button,
//   createTheme,
//   Paper,
//   ThemeProvider,
//   Typography,
// } from '@mui/material';
// import NextLink from 'next/link';
// import { useCartState } from '../../common/store/Store';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#fcba03',
//     },
//   },
// });

// const CheckoutCard = () => {
//   const { cartItems } = useCartState();
//   const total = cartItems.reduce(
//     (a, b) =>
//       a + (b.price as unknown as number) * (b.quantity as unknown as number),
//     0
//   );
//   return (
//     <ThemeProvider theme={theme}>
//       <Paper sx={{ border: '1px solid #ddd', p: 4 }}>
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 5 }}>
//           <Typography>Total :</Typography>
//           <Typography
//             sx={{
//               color: '#fb0',
//               fontWeight: 'bold',
//               display: 'flex',
//               alignItems: 'center',
//             }}
//           >
//             {total}
//             {' DH'}
//           </Typography>
//         </Box>

//         <Button disabled={total === 0} fullWidth variant="contained">
//           <NextLink href="/payment/personalInfo">
//             <a> Proceed to checkout </a>
//           </NextLink>
//         </Button>
//       </Paper>
//     </ThemeProvider>
//   );
// };

//    export default CheckoutCard;
export {};
