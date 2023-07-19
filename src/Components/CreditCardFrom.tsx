import React from "react";
import {
  Button,
  TextField,
  Grid,
  Box,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

interface CreditCardFormProps {
  formData: any;
  setFormData: any;
  onSubmit: any;
}

const theme = createTheme({
  typography: {
    fontFamily: "VT323, monospace",
    fontWeightRegular: 400,
  },
  palette: {
    primary: {
      main: "#ccc",
    },
  },
});

const CreditCardForm = ({
  formData,
  setFormData,
  onSubmit,
}: CreditCardFormProps) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    maxDigits: number | undefined
  ) => {
    // Prevent input if maxDigits is reached
    if (maxDigits && event.target.value.length > maxDigits) return;

    const { id, value } = event.target;
    let newValue = value;

    // Set min and max values for the expiration month and year
    if (id === "expirationMonth") {
      if (parseInt(newValue) > 12) {
        newValue = "12";
      }
      if (parseInt(newValue) < 1) {
        newValue = "1";
      }
    }

    if (id === "expirationYear" && newValue.length === 4) {
      const currentYear = new Date().getFullYear();
      const maxYear = currentYear + 10;
      const minYear = currentYear;

      if (parseInt(newValue) > maxYear) {
        newValue = maxYear.toString();
      }
      if (parseInt(newValue) < minYear) {
        newValue = minYear.toString();
      }
    }

    setFormData({
      ...formData,
      [id]: newValue,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          width: "70%",
          borderRadius: 8,
          display: "flex",
          alignItems: "center", // Center form vertically
          justifyContent: "center", // Center form horizontally
          height: "100%", // Set the outer container height to full viewport height
        }}
      >
        <form>
          <Grid container spacing={2}>
            {formFields.map((field) => (
              <Grid item xs={field.size} key={field.id}>
                <Typography
                  sx={{
                    color: "#000",
                    fontWeight: 700,
                    fontSize: 14,
                    mb: 1,
                  }}
                >
                  {field.label} {field.required && "*"}
                </Typography>
                <TextField
                  variant="outlined"
                  id={field.id}
                  fullWidth
                  value={formData[field.id] || ""}
                  onChange={(e) => handleChange(e, field.maxDigits)}
                  required={field.required}
                />
              </Grid>
            ))}
            <Grid
              item
              xs={12}
              sx={{
                float: "right",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto", // Center the button horizontally
                  width: "50%",
                }}
                disableElevation
                onClick={() => onSubmit(formData)}
              >
                Confirm
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
      {/* leave a note saying it was built by me and made for desktop only in the bottom right corner */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          right: 0,
          m: 2,
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontWeight: 700,
            fontSize: 14,
          }}
        >
          Built with ❤️ for Desktop only by{" "}
          <a
            href="https://busaidi.tech/"
            target="_blank"
            rel="noreferrer"
          >
            Ahmed Adil Ahmed Al Busaidi
          </a>
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default CreditCardForm;

const formFields = [
  {
    label: "Card Number",
    id: "cardNumber",
    size: 12,
    required: true,
    type: "number",
    maxDigits: 16,
  },
  {
    label: "Cardholder Name",
    id: "cardholderName",
    size: 12,
    required: true,
    type: "text",
  },
  {
    label: "Expiration Month",
    id: "expirationMonth",
    size: 6,
    required: true,
    type: "number",
    maxDigits: 2,
  },
  {
    label: "Expiration Year",
    id: "expirationYear",
    size: 6,
    required: true,
    type: "number",
    maxDigits: 4,
  },
  {
    label: "CVV",
    id: "cvv",
    size: 12,
    required: true,
    type: "number",
    maxDigits: 3,
  },
];
