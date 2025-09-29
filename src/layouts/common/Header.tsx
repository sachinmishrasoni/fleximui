import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import { RiMenuLine, RiLoginBoxLine, RiUserAddLine } from "react-icons/ri";
import HorizontalMenu from "@/components/ui/Menu/HorizontalMenu";

const Header: React.FC = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 2,
                }}
            >
                {/* Left side - Logo & Menu button */}
                <Stack direction="row" alignItems="center" sx={{ flexShrink: 0 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                        <RiMenuLine size={24} />
                    </IconButton>
                    <Typography variant="h6" component="div" noWrap>
                        My App
                    </Typography>
                </Stack>

                {/* Middle - Menu (takes remaining space) */}
                <Box sx={{ flex: 1, display: "flex", justifyContent: "center", minWidth: 0 }}>
                    <HorizontalMenu />
                </Box>

                {/* Right side - Actions */}
                <Box sx={{ flexShrink: 0, display: "flex", gap: 1 }}>
                    <Button color="inherit" startIcon={<RiLoginBoxLine />}>
                        Login
                    </Button>
                    <Button color="inherit" startIcon={<RiUserAddLine />}>
                        Signup
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
