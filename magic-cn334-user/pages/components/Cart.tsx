import * as React from 'react';
import { Box, Drawer, Divider, Typography, IconButton, List, ListItem, ListItemText, Button, ThemeProvider } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { createTheme } from '@mui/material/styles';

// Define a theme to match the dark theme in the screenshot
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Cart({ isOpen, onClose }: { isOpen: boolean, onClose: any }) {
  // Sample cart item data - this would be dynamic in a real application
  const cartItems = [
    {
      name: "Acme Circles T-Shirt",
      variant: "Black / XS",
      price: "$15.00 USD",
      quantity: 1,
      image: "/path/to/tshirt-image.png", // Replace with actual image path
    },
    // ... other cart items
  ];

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
        <List>
          {cartItems.map((item, index) => (
            <ListItem key={index} sx={{ py: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                {/* Image - replace with actual img tag or MUI Image component */}
                <Box component="img" src={item.image} sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }} alt={item.name} />
                <ListItemText primary={item.name} secondary={item.variant} />
                <Box sx={{ marginLeft: 'auto', textAlign: 'right' }}>
                  <Typography variant="body1">{item.price}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size="small"><RemoveIcon /></IconButton>
                    <Typography sx={{ mx: 1 }}>{item.quantity}</Typography>
                    <IconButton size="small"><AddIcon /></IconButton>
                  </Box>
                </Box>
              </Box>
            </ListItem>
          ))}
        </List>
        <Divider />
        <Box sx={{ p: 2 }}>
          {/* Subtotal, Taxes, Shipping, and Total cost */}
          <Typography variant="body1">Taxes: $0.00 USD</Typography>
          <Typography variant="body1">Shipping: Calculated at checkout</Typography>
          <Divider sx={{ my: 1 }} />
          <Typography variant="h6">Total: $15.00 USD</Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          {/* Proceed to Checkout button */}
          <Button variant="contained" fullWidth>
            Proceed to Checkout
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
    >
      {list}
    </Drawer>
  );
}
