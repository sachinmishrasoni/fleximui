import { List, ListItem, ListItemButton, Typography } from '@mui/material';
import React from 'react'
// import { FaPerson } from 'react-icons/fa6';

const HorizontalMenu: React.FC = () => {
  return (
    <List sx={{
        display: 'flex',
    }}>
        <ListItem>
            <ListItemButton>
                <Typography variant="body1">Home</Typography>
            </ListItemButton>
        </ListItem>
    </List>
  )
}

export default HorizontalMenu;
