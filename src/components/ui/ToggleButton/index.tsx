import { alpha, styled, Tab, Tabs } from '@mui/material';
import React from 'react'

interface StyledTabsProps {
    height?: number;
}

interface ToggleButtonItem {
    label?: React.ReactNode;
    value?: string;
    icon?: React.ReactNode;
    disabled?: boolean;
    color?: string;
}

interface ToggleButtonProps {
    height?: number;
    value: string;
    onChange: (event: React.SyntheticEvent, value: string) => void;
    buttonList: ToggleButtonItem[]
}

const StyledTabs = styled(Tabs)<StyledTabsProps>(({ theme, height = 40 }) => ({
    // padding: 5,
    minHeight: height,
    border: 'none',
    // borderRight: '12px',
    borderRadius: '8px',
    // backgroundColor: alpha(theme.palette.primary.main, 0.2),
    "& .MuiTabs-list": {
        height: height
    },
    "& .MuiTab-root": {
        minHeight: 'auto',
        fontWeight: 500,
        textTransform: "capitalize",
        '&:active': {
            borderRadius: '8px',
        },
        '&:hover': {
            borderRadius: '8px',
            backgroundColor: alpha(theme.palette.primary.main, 0.2)
        }
    },
    "& .MuiTab-root.Mui-selected": {
        color: "inherit",
        zIndex: 2,
        borderRadius: '8px',
    },
    "& .MuiTabs-indicator": {
        height: height,
        width: '100%',
        borderRadius: '8px'
    },
}));

const ToggleButton: React.FC<ToggleButtonProps> = ({
    buttonList,
    value,
    height,
    onChange,
}) => {
   
    return (
        <StyledTabs
            variant='fullWidth'
            value={value}
            onChange={(e, value) => onChange(e, value)}
            height={height}
        >
            {buttonList.map((item, index) => (
                <Tab key={index} disableRipple label={item.label} value={item.value} />
            ))}
        </StyledTabs>
    )
}

export default ToggleButton;
