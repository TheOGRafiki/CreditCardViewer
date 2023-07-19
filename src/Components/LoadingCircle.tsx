import React, { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { Box, Dialog } from "@mui/material";

interface LoadingAnimationProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const LoadingAnimation: React.FC<LoadingAnimationProps> = ({
  open,
  setOpen,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Create a promise with a random chance of success
    const promise = new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });

    promise
      .then(() => {
        // Success
        setError(false);

        setTimeout(() => {
          setLoading(false);
        }, 1000);

        setTimeout(() => {
          setOpen(false);
        }, 3000);
      })
      .catch(() => {
        // Error
        setError(true);

        setTimeout(() => {
          setLoading(false);
        }, 1000);

        setTimeout(() => {
          setOpen(false);
        }, 3000);
      });

    // * Set everything back to default when the component unmounts
    return () => {
      setLoading(true);
      setError(false);
    };
  }, [open, setOpen]);

  return (
    <Dialog
      open={open}
      PaperProps={{
        style: { backgroundColor: "transparent", boxShadow: "none" },
      }}
    >
      {loading && (
        <Box
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 9999,
          }}
        >
          <CircularProgress size={60} thickness={5} />
        </Box>
      )}
      {!loading && (
        <React.Fragment>
          {error ? (
            <React.Fragment>
              <ErrorIcon style={{ color: "red", fontSize: 60 }} />
              <p>Oops! Something went wrong.</p>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <CheckCircleIcon style={{ color: "green", fontSize: 60 }} />
              <p>Success!</p>
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </Dialog>
  );
};

export default LoadingAnimation;
