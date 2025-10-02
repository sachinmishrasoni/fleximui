import ToggleButton from '@/components/ui/ToggleButton';
import { toggleSettingsDrawer } from '@/store/features/common/common.slice';
import { setMode } from '@/store/features/theme/theme.slice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { Box, Drawer, IconButton, Stack, Typography } from '@mui/material';
import React from 'react'
import { IoClose } from 'react-icons/io5';

const buttonList = [
  { label: "Light", value: 'light', icon: '' },
  { label: "Dark", value: 'dark', icon: '' },
  { label: "System", value: 'system', icon: '' },
];

const SettingsDrawer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { open } = useAppSelector((state) => state.common.settingsDrawer);
  const selectedMode = useAppSelector((state) => state.theme.mode);

  const handleClose = () => {
    dispatch(toggleSettingsDrawer());
  }

  const handleChange = (_e: React.SyntheticEvent, value: 'light' | 'dark' | 'system') => {
    if (value) {
      dispatch(setMode(value));
    }
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={() => { }}
      sx={{
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: 300,
        },
      }}
    >
      <Stack component={'header'} direction="row" alignItems="center" justifyContent="space-between" px={2} py={2} sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h5">Settings</Typography>
        <IconButton size='small' onClick={handleClose}>
          <IoClose />
        </IconButton>
      </Stack>
      <Box component={'main'} px={2} py={2}>
        <Stack spacing={1}>
          <Typography variant='body2' color='text.secondary'>Mode</Typography>
          <ToggleButton
            buttonList={buttonList}
            value={selectedMode}
            onChange={handleChange}
          />
        </Stack>
      </Box>
    </Drawer>
  )
}

export default SettingsDrawer;