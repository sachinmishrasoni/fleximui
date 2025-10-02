import { alpha, Box, Button, Container, Stack, Typography } from "@mui/material"

const Hero: React.FC = () => {
  return (
    <Box component={"section"}
      sx={{
        minHeight: "calc(100vh - 60px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        px: 2,
        backgroundImage: theme => `linear-gradient(to bottom right, transparent 30%, ${alpha(theme.palette.primary.main, 0.2)} 100%)`,
      }}
    >
      <Container sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        <Typography variant="h3" fontWeight={600}>Welcome to FlexiMUI</Typography>
        <Typography variant="h6" mt={2}>A futuristic collection of flexible and reusable MUI-based components for your projects.</Typography>

        <Stack direction={{ xs: "column", sm: "row" }} spacing={2} mt={4}>
          <Button variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>Get Started</Button>
          <Button variant="outlined" size="large" sx={{ px: 4, py: 1.5, borderColor: "#fff", color: "#fff", "&:hover": { backgroundColor: "rgba(255,255,255,0.1)" } }}>Learn More</Button>
        </Stack>
      </Container>
    </Box>
  )
}

export default Hero