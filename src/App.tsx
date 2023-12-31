import { createTheme, ThemeProvider, Grid, Box } from "@mui/material";
import { useState } from "react";
import CreditCardForm from "./Components/CreditCardFrom";
import CreditCardDisplay from "./Components/CreditCardDisplay";
import LoadingAnimation from "./Components/LoadingCircle";
import DesktopOnlyRedirect from "./Components/DesktopOnly";

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
  palette: {
    primary: {
      main: primaryColor, // Use primaryColor as the main color for buttons and other components
    },
  },
});

const App = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardHolderName: "",
    expirationMonth: "",
    expirationYear: "",
    cvv: "",
  });

  const isMobile = window.innerWidth < 600;

  const [open, setOpen] = useState<boolean>(false);

  const showSubmitAlert = () => {
    setOpen(true);
  };

  return (
    <>
      {isMobile ? (
        <DesktopOnlyRedirect />
      ) : (
        <Box
          sx={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            m: 0, // Remove margins
            p: 0, // Remove padding
            overflow: "hidden", // Hide overflowing content
          }}
        >
          <LoadingAnimation open={open} setOpen={setOpen} />
          <ThemeProvider theme={theme}>
            <Grid container justifyContent="center">
              <Grid item xs={7}>
                <CreditCardDisplay
                  cardHolderName={formData.cardHolderName}
                  cardNumber={formData.cardNumber}
                  expirationDate={
                    formData.expirationMonth + "/" + formData.expirationYear
                  }
                  cvv={formData.cvv}
                />
              </Grid>
              <Grid item xs={5}>
                <CreditCardForm
                  formData={formData}
                  setFormData={setFormData}
                  onSubmit={showSubmitAlert}
                />
              </Grid>
            </Grid>
          </ThemeProvider>
        </Box>
      )}
      {/* Failed promise exampe */}
    </>
  );
};

export default App;
