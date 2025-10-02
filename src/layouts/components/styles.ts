import { alpha, List, styled } from "@mui/material";

export const StyledList = styled(List)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: '4px',
    margin: '0px 8px',
    '& .MuiListSubheader-root': {
        fontSize: 12,
        padding: 0,
        lineHeight: 2,
    },
    '& .MuiListItem-root': {
        padding: 0,
    },
    '& .MuiListItemButton-root': {
        fontSize: 14,
        borderRadius: 10,
        padding: theme.spacing(1.5, 2),
        '&.Mui-selected': {
            // backgroundColor: theme.palette.primary.main,
            // color: theme.palette.primary.contrastText,
            backgroundColor: alpha(theme.palette.primary.main, 0.2),
            color: theme.palette.primary.main,
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.contrastText,
            }
        },
        '&:hover:not(.Mui-selected)': {
            backgroundColor: alpha(theme.palette.primary.main, 0.1),
            color: theme.palette.primary.main,
            '& .MuiListItemIcon-root': {
                color: theme.palette.primary.main,
            }
        },
    }
}));