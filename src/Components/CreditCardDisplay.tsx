import { faCreditCard } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Box,
  Card,
  CardContent,
  Grow,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { creditCardDefinitions } from "./CreditCardInfo";

const theme = createTheme({
  typography: {
    fontFamily: "Inconsolata, monospace",
    fontWeightRegular: 400,
  },
  palette: {
    primary: {
      main: "#9C27B0", // Purple color
    },
  },
});

interface CreditCardInfo {
  cardNumber: string;
  cardHolderName: string;
  expirationDate: string;
  cvv: string;
}

const CreditCardDisplay = ({
  cardNumber,
  cardHolderName,
  expirationDate,
  cvv,
}: CreditCardInfo) => {
  const formattedCardNumber = cardNumber
    .match(/.{1,4}/g)
    ?.join(" ")
    .padEnd(19, "*");

  const defaultCardNumber = "**** **** **** 1234";
  const defaultCardHolderName = "John Doe";
  const defaultExpirationDate = "12/23";
  const defaultCvv = "123";

  const findCreditCardIcon = (cardNumber: string) => {
    const creditCard = Object.values(creditCardDefinitions).find(
      (card) =>
        card.startDigits.filter((digit) => cardNumber.startsWith(digit))
          .length > 0
    );

    return creditCard?.faIcon ?? faCreditCard;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {/* FRONT CARD */}
        <Box
          sx={{
            width: "50%", // Take up half of the width
            height: "100vh", // Full height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(45deg, #9C27B0, #673AB7)", // Background gradient
          }}
        >
          <Card
            sx={{
              width: "80vh",
              height: "auto",
              borderRadius: 2,
              m: 1,
              display: "flex",
              flexDirection: "column",
              position: "absolute", // Set the position to absolute
              top: "15vh", // Stack the front card on top of the back card (0 distance from top)
              left: "2rem", // Keep the front card aligned to the left
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 1,
                }}
              >
                {/* Find the credit card that starts with the digits and display the logo */}
                {/* FIND THE LOGO USING THE CREDIT CARD NUMBER AND THE CREDIT CARD DEFINTION */}
                <Box
                  sx={{
                    m: 1,
                    paddingBottom: "3rem",
                  }}
                >
                  {/* CHATGPT FILL HERE --> Show grow animation if the icon changes */}
                  <Grow in={Boolean(cardNumber)} timeout={500}>
                    <FontAwesomeIcon
                      icon={findCreditCardIcon(cardNumber)}
                      size="2xl"
                      color="#000"
                    />
                  </Grow>
                </Box>

                <Typography
                  variant="h6"
                  color="text.primary"
                  // * Put the card holder name in the bottom left corner
                  sx={{
                    textTransform: "uppercase",
                    fontSize: "14px",
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    m: 2,
                  }}
                >
                  {cardHolderName === ""
                    ? defaultCardHolderName
                    : cardHolderName}
                </Typography>
              </Box>
              <Typography
                variant="h5"
                color="text.primary"
                sx={{
                  fontFamily: "Inconsolata",
                  fontSize: "20px",
                  letterSpacing: "3px",
                  textAlign: "center",
                  m: 3,
                  paddingBottom: "1.6rem",
                  position: "relative",
                }}
              >
                {cardNumber === "" ? defaultCardNumber : formattedCardNumber}
              </Typography>
              <Typography
                variant="h6"
                color="text.primary"
                sx={{
                  fontSize: "14px",
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  padding: "4px",
                  fontFamily: "Inconsolata",
                  m: 2,
                }}
              >
                {expirationDate === "/"
                  ? defaultExpirationDate
                  : expirationDate}
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            width: "50%", // Take up half of the width
            height: "100vh", // Full height
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: "80vh",
              height: "auto",
              borderRadius: 2,
              m: 1,
              display: "flex",
              flexDirection: "column",
              background: "#000",
              color: "#fff",
              position: "absolute", // Set the position to absolute
              top: "55vh", // Shift the back card down by 2rem from the top
              left: "10rem", // Shift the back card right by 2rem from the left
            }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 6.25,
                }}
              >
                <Grow in={Boolean(cardNumber)} timeout={500}>
                  <FontAwesomeIcon
                    icon={findCreditCardIcon(cardNumber)}
                    size="xl"
                  />
                </Grow>
              </Box>

              <Box
                sx={{
                  width: "95%",
                  height: "30px",
                  background: "#666",
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  pr: 2,
                  mb: 6.25,
                }}
              >
                <Typography
                  variant="h6"
                  color="text.primary"
                  sx={{
                    fontSize: "14px",
                    fontFamily: "Inconsolata, monospace",
                  }}
                >
                  {cvv === "" ? defaultCvv : cvv}
                </Typography>
              </Box>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{
                  mt: 2,
                  fontSize: "14px",
                  textAlign: "center",
                  color: "#fff",
                }}
              >
                This is a demo card. Do not use it for real transactions.
              </Typography>
            </CardContent>
          </Card>
        </Box>
        {/* BACK CARD */}
      </Box>
    </ThemeProvider>
  );
};

export default CreditCardDisplay;
