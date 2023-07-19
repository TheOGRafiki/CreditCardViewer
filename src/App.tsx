import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  createTheme,
  ThemeProvider,
  Grid,
  Box,
} from "@mui/material";
import { useState } from "react";
import CreditCardForm from "./Components/CreditCardFrom";
import CreditCardDisplay from "./Components/CreditCardDisplay";

// Define the primary color used in the theme
const primaryColor = "#4285F4";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    body1: {
      color: "#333", // Set default text color to a dark color
    },
    body2: {
      color: "#333", // Set default text color to a dark color
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 10, // Rounded input corners
        },
      },
    },
  },
  palette: {
    primary: {
      main: primaryColor, // Use primaryColor as the main color for buttons and other components
    },
  },
});

const App = () => {
  const [formData, setFormData] = useState({});
  const [showCard, setShowCard] = useState(false);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden", // Hide the scrollbar
      }}
    >
      <ThemeProvider theme={theme}>
        <Grid container justifyContent="center" sx={{ mb: 3 }}>
          <Grid item xs={7}>
            <CreditCardDisplay />
          </Grid>
          <Grid item xs={5}>
            <CreditCardForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={() => setShowCard(true)}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Box>
  );
};

export default App;
