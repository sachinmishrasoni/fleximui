import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const Features: React.FC = () => {
    return (
        <Box component={"section"}
            sx={{
                minHeight: "calc(100vh - 60px)",
                px: 2,
                py: 5
            }}
        >
            <Container sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}>
                <Typography variant="h3" fontWeight={600}>Features</Typography>
                <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facere dignissimos consequatur porro maxime? Ab aspernatur earum ad doloremque praesentium.</Typography>
            </Container>
        </Box>
    )
}

export default Features