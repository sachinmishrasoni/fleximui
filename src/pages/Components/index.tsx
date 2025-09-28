import Button from '@/components/ui/Button';
import DropDown from '@/components/ui/DropDown';
import { Box } from '@mui/material';
import React from 'react'
import { FaPerson } from 'react-icons/fa6';

const Components: React.FC = () => {
  return (
    <Box>
      Components
      <br /><br />
      <DropDown
        menuItems={[
          { key: "1", label: "Profile lsldfkkkkkkkkkkkkkkkkkkkkkkkk", icon: <FaPerson />, onClick: () => console.log("Profile clicked") },
           { key: "divider-1", type: "divider" },
          { key: "2", label: "Settings", onClick: () => console.log("Settings clicked") },
          { key: "3", label: "Logout", color: "warning", onClick: () => console.log("Logout clicked") },
        ]}
      >
        <Button variant='contained' loading={false} loadingText='Saving...'>enums</Button>
      </DropDown>

    </Box>
  )
}

export default Components;
