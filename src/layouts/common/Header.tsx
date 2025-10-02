import { alpha, AppBar, Button, Divider, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { SiMui } from 'react-icons/si';
import { CgMenuLeft } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { FaGithubAlt } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
    toggleDrawer?: () => void;
}
const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
    const navigate = useNavigate();
    return (
        <AppBar position="sticky"
            sx={{
                height: '60px !important',
                boxShadow: "none",
                // backgroundColor: theme => theme.palette.mode === "light"
                //     ? alpha(theme.palette.common.black, 0.4)
                //     : alpha(theme.palette.primary.main, 0.2),
                backgroundColor: theme => alpha(theme.palette.primary.main, 0.2),
                color: theme => theme.palette.primary.contrastText,
                backdropFilter: "blur(10px)",
                borderBottom: `1px solid`,
                borderColor: theme => alpha(theme.palette.primary.main, 0.3),
            }}
        >
            <Toolbar sx={{
                justifyContent: "space-between",
                // minHeight: 'auto',
            }}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                    {/* <Box width={35} component={'img'} src={'/logo.svg'} /> */}
                    <IconButton color='primary' onClick={toggleDrawer} sx={{
                        display: { xs: "flex", md: "none" }
                    }}>
                        <CgMenuLeft size={20} />
                    </IconButton>
                    <Stack direction={"row"} alignItems="center" spacing={0.3}
                        sx={{ userSelect: "none" }}
                        onClick={() => navigate("/")}
                    >
                        <Typography variant="h5" sx={{ color: "#1976d2", fontWeight: "bold" }}>
                            Flexi
                        </Typography>
                        <SiMui size={22} color="#1976d2" />
                    </Stack>
                </Stack>

                <Stack direction="row" alignItems="center" spacing={1}
                    divider={<Divider orientation="vertical" flexItem sx={{ mx: 0.5 }} />}
                >
                    <Stack direction="row" alignItems="center" spacing={1}>
                        {['Components', 'Pages'].map((item, index) => (
                            <Button key={index} color='primary'
                                sx={{ textTransform: 'capitalize' }}
                                onClick={() => navigate(`/${item.toLowerCase()}`)}
                            >
                                {item}
                            </Button>
                        ))}
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                        <IconButton color='primary'>
                            <FaGithubAlt size={20} />
                        </IconButton>
                        <IconButton color='primary'>
                            <FiSettings size={20} />
                        </IconButton>
                    </Stack>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}

export default Header;
