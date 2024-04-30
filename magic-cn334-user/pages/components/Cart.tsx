import { Box, Drawer, Divider, Typography, IconButton, List, ListItem, ListItemText, Button, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material/styles';
import getCart from '../api/auth/get/getCart';
import { useEffect, useState } from 'react';
import getProductById from '../api/auth/store/get/productById';
import { CartInCart } from './CartInCart';
import { Image } from '@nextui-org/react';
import deleteAllCart from '../api/auth/delete/deleteCart';
import { AlertSuccess } from './alertSuccess';
import { ToastContainer } from 'react-toastify';

// Define a theme to match the dark theme in the screenshot
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Cart({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {
  const [Cart, setCart] = useState([]);
  const [revenue , setRevenue] = useState(0)
  const [getRevenue , setGetRevenue] = useState(0)

  const changeRevenue = (price : any) => {
    setRevenue(prevRevenue => prevRevenue + price);
  }

  const changePath = () => {
    onClose()
    window.location.href = '/Payment'
  }
  console.log(revenue, "revenue")
  const fetchData = async () => {
    try {
      const respones = await getCart();
      setCart(respones.message)
      console.log(Cart, "getrespones")
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchData();
  }, [isOpen])

  const deleteCart = async () => {
    try {
      const respone = await deleteAllCart()
      if (respone.status){
        AlertSuccess("Delete All Cart Success")
        onClose()
      }
    }
    catch (error) {
      console.log(error)
    }
  }
  console.log(Cart, "getrespones")
  const list = (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          width: 350,
          bgcolor: 'background.default',
          color: 'text.primary',
          height: '100%',
          overflow: 'auto',
        }}
        role="presentation"
      >
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" component="div">
            My Cart
          </Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <div>
          {Cart.map((item) => (
            <CartInCart data={item} changeRevenue={changeRevenue}/>
          ))}
        </div>
        <Divider />
        <Box sx={{ p: 2 }}>
          {/* Subtotal, Taxes, Shipping, and Total cost */}
          <Typography variant="body1">Taxes: $0.00 USD</Typography>
          <Typography variant="body1">Shipping: Calculated at checkout</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6">Total: ${revenue} USD</Typography>
        </Box>
        <div className='flex m-4 gap-4'>
          {/* Proceed to Checkout button */}
          <Button variant="outlined" fullWidth className='text-xs' onClick={deleteCart}>
            Delete All Cart
          </Button>
          <Button variant="contained" fullWidth className='text-xs'onClick={changePath}>
            Proceed to Checkout
          </Button>
        </div>
      </Box>
    </ThemeProvider>
  );

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    ><ToastContainer />
      {list}
    </Drawer>
  );
}
