import { Box, Typography, Stack, Container, Paper } from "@mui/material";
import { FaRocket, FaPalette, FaRecycle } from "react-icons/fa";
import Hero from "./Hero";
import Features from "./Features";

const Home = () => {
  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>


      {/* Hero Section */}
      {/* <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, #1976d2 0%, #90caf9 100%)",
          color: "#fff",
          px: 2,
        }}
      >
        <Typography variant="h2" fontWeight="bold" gutterBottom sx={{ mb: 2 }}>
          Welcome to FlexiMUI
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, maxWidth: 600 }}>
          A futuristic collection of flexible and reusable MUI-based components for your projects 🚀
        </Typography>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <Button variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
            Get Started
          </Button>
          <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderColor: "#fff", color: "#fff", "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}>
            View Components
          </Button>
        </Stack>
      </Box> */}
      <Hero />
      <Features />

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ mt: 12 }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={6} justifyContent="center">
          {[{
            icon: <FaRocket size={32} color="#1976d2" />,
            title: "Fast",
            desc: "Built with Vite + React for blazing fast development and builds."
          }, {
            icon: <FaPalette size={32} color="#1976d2" />,
            title: "Customizable",
            desc: "Extend MUI components with your own styles and logic."
          }, {
            icon: <FaRecycle size={32} color="#1976d2" />,
            title: "Reusable",
            desc: "Copy-paste and reuse across multiple projects with ease."
          }].map((feature, i) => (
            <Paper key={i} elevation={3} sx={{ p: 4, textAlign: "center", borderRadius: 4, flex: 1, transition: "0.3s", "&:hover": { transform: "translateY(-5px)", boxShadow: 6 } }}>
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography variant="h5" fontWeight="bold" gutterBottom>{feature.title}</Typography>
              <Typography color="text.secondary">{feature.desc}</Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Home;
