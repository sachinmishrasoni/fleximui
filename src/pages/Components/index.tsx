import Button from '@/components/ui/Button';
import DropDown from '@/components/ui/DropDown';
import NestedDropdown, { type MenuItem } from '@/components/ui/NestedDropdown';
import { Box, Container } from '@mui/material';
import React from 'react'
import { IoPerson } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import CodeBlock from '@/components/common/CodeBlock';
import ButtonRow from '@/components/ui/Button/index.tsx?raw';

const menuItems: MenuItem[] = [
  { key: "1", label: "Profile", icon: <IoPerson />, onClick: () => alert("Profile clicked") },
  {
    key: "2",
    label: "Settings",
    icon: <FiSettings />,
    children: [
      { key: "2-1", label: "Account", onClick: () => alert("Account clicked") },
      {
        key: "2-2",
        label: "Notifications",
        children: [
          { key: "2-2-1", label: "Email", onClick: () => alert("Email clicked") },
          { key: "2-2-2", label: "SMS", onClick: () => alert("SMS clicked") },
        ],
      },
    ],
  },
  { key: "3", label: "Logout", color: "error", onClick: () => alert("Logout clicked") },
];

const Components: React.FC = () => {

  const exampleCode = `
    function greet() {
      console.log("Hello, world!");
    }
  `;

  return (
    <Box>
      <Container>
        Components
        <br /><br />
        <DropDown
          menuItems={[
            { key: "1", label: "Profile lsldfkkkkkkkkkkkkkkkkkkkkkkkk", icon: <IoPerson />, onClick: () => console.log("Profile clicked") },
            { key: "divider-1", type: "divider" },
            { key: "2", label: "Settings", onClick: () => console.log("Settings clicked") },
            { key: "3", label: "Logout", color: "warning", onClick: () => console.log("Logout clicked") },
          ]}
        >
          <Button variant='contained' loading={false} loadingText='Saving...'>enums</Button>
        </DropDown>
        <br /><br />
        <NestedDropdown menuItems={menuItems}>
          <Button variant="contained">Open Menu</Button>
        </NestedDropdown>

        <br /><br />
        <CodeBlock code={ButtonRow} showLineNumbers />
      </Container>
    </Box>
  )
}

export default Components;
