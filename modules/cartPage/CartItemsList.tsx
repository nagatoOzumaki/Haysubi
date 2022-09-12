import {
  Box,
  Paper,
  Table,
  TableBody,
  TableFooter,
  TablePagination,
  Typography,
} from '@mui/material';
import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../../common/store/actions';
import { useCartState } from '../../common/store/Store';
import { CartItem } from '../../common/types/@appTypes';
import CartItemCard from './CartItemCard';

const CartItemsList = () => {
  const { cartItems } = useCartState();
  const dispatch = useDispatch<any>();
  const remove = (item: CartItem) => {
    dispatch(removeItemFromCart(item));
  };

  //
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);
  const rows = [
    () => 1,
    () => 2,
    () => 3,
    () => 4,
    () => 5,
    () => 6,
    () => 7,
    () => 8,
  ];

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  //
  return (
    <>
      <Box>
        {cartItems.length !== 0 ? (
          <Table
            component={Paper}
            elevation={2}
            stickyHeader
            aria-label="sticky table"
          >
            <TableBody sx={{ height: 500 }}>
              {cartItems
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(item => (
                  <CartItemCard key={item.id} product={item} remove={remove} />
                ))}
            </TableBody>
            <TableFooter>
              <TablePagination
                rowsPerPageOptions={[2, 3, 5, 7, 10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableFooter>
          </Table>
        ) : (
          <Typography variant="h6" sx={{ p: 12, mb: 60 }}>
            Cart Is empty.
          </Typography>
        )}
      </Box>
    </>
  );
};

export default CartItemsList;
