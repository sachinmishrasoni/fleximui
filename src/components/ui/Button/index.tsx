import React from "react";
import {
  Button as MuiButton,
  CircularProgress,
  type ButtonProps,
  styled,
} from "@mui/material";
import type { PaletteColor } from "@mui/material/styles";

interface IButtonProps extends ButtonProps {
  loading?: boolean;
  loadingText?: string;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "ownerState",
})<{ ownerState: { color: string } }>(({ theme, ownerState }) => {
  // Try to pick the correct palette color
  const paletteColor = theme.palette[ownerState.color as keyof typeof theme.palette];

  // Only PaletteColor has `.main`
  const resolvedColor =
    typeof paletteColor === "object" && "main" in paletteColor
      ? (paletteColor as PaletteColor)
      : theme.palette.primary;

  return {
    backgroundColor: resolvedColor.main,
    color: resolvedColor.contrastText,
    "&:hover": {
      backgroundColor: resolvedColor.dark,
    },
    "&:disabled": {
      backgroundColor: resolvedColor.main,
      color: resolvedColor.contrastText,
      opacity: 0.5, // faded but same color
    },
  };
});

const Button: React.FC<IButtonProps> = ({
  children,
  loading = false,
  loadingText = "Loading...",
  disabled,
  color = "primary",
  ...rest
}) => {
  return (
    <StyledButton
      disabled={loading || disabled}
      ownerState={{ color }}
      color={color}
      {...rest}
    >
      {loading ? (
        <>
          <CircularProgress
            size={16}
            color="inherit"
            style={{ marginRight: 8 }}
          />
          {loadingText}
        </>
      ) : (
        children
      )}
    </StyledButton>
  );
};

export default Button;
