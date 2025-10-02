import React, { useState } from 'react'
import Header from '../common/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import { Box, Container } from '@mui/material';
import Sidebar from './Sidebar';
import SettingsDrawer from '../common/SettingsDrawer';

const ComponentsLayout: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setIsOpen((prev) => !prev);
    };
    return (
        <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header toggleDrawer={toggleDrawer} />
            <Box sx={{
                flexGrow: 1,
                display: "flex",
            }}>
                <Sidebar isOpen={isOpen} toggleDrawer={toggleDrawer} />
                <Box component={"main"} sx={{
                    width: "100%",
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    // p: 1
                }}>
                    <Container
                        sx={{
                            py: 2,
                            minHeight: 'calc(100vh - 65px - 52px)',
                        }}
                    >
                        <Outlet />
                    </Container>
                    <Footer />
                </Box>
            </Box>

            <SettingsDrawer />
        </Box>
    )
}

export default ComponentsLayout;
