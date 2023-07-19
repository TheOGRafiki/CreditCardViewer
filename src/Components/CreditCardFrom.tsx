import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid,
} from "@mui/material";

interface CreditCardFormProps {
    formData: any;
    setFormData: any;
    onSubmit: any;
}

const CreditCardForm = ({
  formData,
  setFormData,
  onSubmit
}: CreditCardFormProps) => {


  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    let newValue = value;

    // Restrict input to numbers only
    if (id === "expirationMonth" || id === "expirationYear") {
      newValue = value.replace(/\D/g, "");
    }

    // Set min and max values for the expiration month and year
    if (id === "expirationMonth") {
      if (parseInt(newValue) > 12) {
        newValue = "12";
      }
      if (parseInt(newValue) < 1) {
        newValue = "1";
      }
    }

    if (id === "expirationYear") {
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
    <Card sx={{ width: "100%", maxWidth: "40vw", borderRadius: 8 }}>
      <CardContent sx={{ m: 3 }}>
        <form>
          <Grid container spacing={4}>
            {formFields.map((field) => (
              <Grid item xs={field.size} key={field.id}>
                <TextField
                  label={field.label}
                  variant="outlined"
                  fullWidth
                  id={field.id}
                  value={formData[field.id] || ""}
                  onChange={handleChange}
                  required={field.required}
                />
              </Grid>
            ))}
          </Grid>
        </form>
      </CardContent>
      <CardActions sx={{ justifyContent: "flex-end", padding: "1rem", m: 3 }}>
        <Button
          variant="contained"
          color="primary"
          disableElevation
          fullWidth
          onClick={() => onSubmit(formData)}
        >
          Submit
        </Button>
      </CardActions>
    </Card>
  );
};

export default CreditCardForm;

const formFields = [
  { label: "Card Number", id: "cardNumber", size: 12, required: true },
  { label: "Cardholder Name", id: "cardholderName", size: 12, required: true },
  { label: "Expiration Month", id: "expirationMonth", size: 6, required: true },
  { label: "Expiration Year", id: "expirationYear", size: 6, required: true },
  { label: "CVV", id: "cvv", size: 12, required: true },
];
