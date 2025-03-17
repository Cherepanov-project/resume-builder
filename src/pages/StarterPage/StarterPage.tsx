/*import { useNavigate } from 'react-router-dom';*/
import logo from "@assets/images/quickly_Logo.png";
import { Box, Button, Container, Typography, Icon } from "@mui/material";

import { useAuth0 } from "@auth0/auth0-react";

import decoration from "@assets/images/starterPage/button_decoration.svg";

const StarterPage = () => {
  /*const navigate = useNavigate();*/
  const { loginWithRedirect } = useAuth0();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        background: "#dcf2ed",
      }}
    >
      <Box
        sx={{
          background: "#f1fffc",
          width: "960px",
          border: "4px solid #20484f",
          borderRadius: "12px",
          margin: "0 auto",
        }}
      >
        <Container
          sx={{
            height: "40px",
            background: "#20484f",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Icon sx={{ height: "35px", width: "102px" }}>
            <img src={decoration} alt="decoration" />
          </Icon>
        </Container>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            gap: "50px",
            height: "475px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <img
              src={logo}
              alt="Company logo"
              style={{ scale: "1.5", margin: "20px", marginLeft: "360px" }}
            />
            <Typography
              sx={{
                fontSize: "75px",
                fontWeight: "800",
                lineHeight: "120%",
              }}
            >
              Landing Page and Resume Builder
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "15px" }}>
            <Button
              size="large"
              variant="contained"
              /*onClick={() => navigate('/sign-in')}*/
              onClick={() => loginWithRedirect()}
              sx={{ height: "60px", width: "200px", background: "#20484f" }}
            >
              Sign In
            </Button>
            <Button
              size="large"
              variant="outlined"
              /*onClick={() => navigate('/sign-up')}*/
              onClick={() => loginWithRedirect()}
              sx={{ height: "60px", width: "200px", borderColor: "#20484f", color: "#20484f" }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StarterPage;
