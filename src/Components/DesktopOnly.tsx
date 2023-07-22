import {
  Box,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

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

const DesktopOnlyRedirect = () => {
  const handleRedirect = () => {
    // Replace YOUR_PORTFOLIO_WEBSITE_URL with your actual portfolio website URL
    window.location.href = "https://busaidi.tech";
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          width: "100vw",
          m: 0,
          p: 0,
          background: "linear-gradient(45deg, #9C27B0, #673AB7)", // Background gradient
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ marginBottom: theme.spacing(4), textAlign: "center" }}
        >
          This app is designed for desktop use only.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={handleRedirect}
        >
          Visit My Portfolio Website
        </Button>
      </Box>
    </ThemeProvider>
  );
};

export default DesktopOnlyRedirect;
