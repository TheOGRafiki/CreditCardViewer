import { useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  ThemeProvider,
  createTheme,
  Box,
  Slide,
  CardActionArea,
} from "@mui/material";
import { ArrowBack, CreditCard } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9C27B0", // Purple color
    },
  },
});

const CreditCardDisplay = () => {
  const [showFront, setShowFront] = useState(true);

  const handleFlip = () => {
    setShowFront(!showFront);
  };

  const cardNumber = "**** **** **** 1234";
  const cardHolderName = "John Doe";
  const expirationDate = "12/23";
  const cvv = "123";

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "99vh",
          background: "linear-gradient(45deg, #9C27B0, #673AB7)",
        }}
      >
        <Slide direction="up" in={showFront}>
          <Card sx={{ width: "80vh", height: "40vh" }}>
            <CardActionArea onClick={handleFlip}>
              <CardContent>
                <Grid
                  container
                  direction="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Grid item>
                    <IconButton
                      sx={{ float: "right", color: "#fff" }}
                      onClick={handleFlip}
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography variant="h6" color="text.secondary">
                      Card Number
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                      {cardNumber}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="text.secondary">
                      Card Holder
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                      {cardHolderName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6" color="text.secondary">
                      Expiry
                    </Typography>
                    <Typography variant="h5" color="text.primary">
                      {expirationDate}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </CardActionArea>
          </Card>
        </Slide>
        <Slide direction="up" in={!showFront}>
          <Card
            sx={{
              width: "80vh",
              height: "40vh",
              borderRadius: 16,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "linear-gradient(45deg, #9C27B0, #673AB7)",
            }}
          >
            <CardActionArea onClick={handleFlip}>
              <CardContent>
                <CreditCard sx={{ fontSize: 120, color: "#fff" }} />
                <Typography variant="h6" color="text.secondary">
                  CVV
                </Typography>
                <Typography variant="h5" color="text.primary">
                  {cvv}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Slide>
      </Box>
    </ThemeProvider>
  );
};

export default CreditCardDisplay;
