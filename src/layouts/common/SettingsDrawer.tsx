import { Drawer, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { IoClose } from 'react-icons/io5';

const SettingsDrawer: React.FC = () => {
  return (
    <Drawer
      anchor="right"
      open={true}
      onClose={() => {}}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 300,
        },
      }}
    >
        <Stack component={'header'} direction="row" alignItems="center" justifyContent="space-between" px={2} pt={1}>
          <Typography variant="h6">Settings</Typography>
          <IconButton size='small'>
            <IoClose />
          </IconButton>
        </Stack>
    </Drawer>
  )
}

export default SettingsDrawer;