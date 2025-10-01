import { Box, Typography, Button, Stack, Container, AppBar, Toolbar, IconButton, Paper } from "@mui/material";
import { FaRocket, FaPalette, FaRecycle, FaGithub, FaBook } from "react-icons/fa";
import { SiMui } from "react-icons/si";

const Home = () => {
  return (
    <Box sx={{ fontFamily: "Roboto, sans-serif" }}>
      {/* Navbar */}
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none",}}>
        <Toolbar sx={{ justifyContent: "space-between", minHeight: 'auto', }}>
          <Stack direction="row" alignItems="center" spacing={1}>
            {/* <SiMui size={32} color="#1976d2" /> */}
            <Box width={40} component={'img'} src={'/logo.svg'} />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              FlexiMUI
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button color="primary" startIcon={<FaBook />}>Docs</Button>
            <Button color="primary" startIcon={<FaPalette />}>Components</Button>
            <IconButton color="primary" href="https://github.com" target="_blank">
              <FaGithub />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
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
      </Box>

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

      {/* Footer */}
      <Box sx={{ mt: 12, py: 4, bgcolor: "#f5f5f5", textAlign: "center" }}>
        <Typography variant="body2" color="text.secondary">
          © {new Date().getFullYear()} FlexiMUI. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
