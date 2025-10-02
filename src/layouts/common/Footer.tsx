import { alpha, Box, Typography } from '@mui/material';
import React from 'react'

const Footer: React.FC = () => {
  return (
    <Box component={"footer"} sx={{
      px: 1, py: 2,
      textAlign: "center",
      backgroundColor: theme => alpha(theme.palette.background.paper, 0.2),
    }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} FlexiMui. All rights reserved.
      </Typography>
    </Box>
  )
}

export default Footer;
