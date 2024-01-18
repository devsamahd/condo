import * as React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { Theme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';
import { IconMenu2 } from "@tabler/icons-react";
import Notifications from "../../vertical/header/Notification";
import Profile from "../../vertical/header/Profile";
import Search from "../../vertical/header/Search";
import Language from "../../vertical/header/Language";
import Logo from "../../shared/logo/Logo";
import { useCustomizer } from "@/context/customizer";

export default function Header() {
  const lgDown = useMediaQuery((theme: Theme) => theme.breakpoints.down("lg"));

  // drawer
  const customizer = useCustomizer().state
  const customizerActions = useCustomizer().actions

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    background: theme.palette.background.paper,
    justifyContent: "center",
    backdropFilter: "blur(4px)",

    [theme.breakpoints.up("lg")]: {
      minHeight: customizer.TopbarHeight,
    },
    borderBottom: '1px solid rgba(0,0,0,0.05)',
  }));
  const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
    margin: "0 auto",
    width: "100%",
    color: `${theme.palette.text.secondary} !important`,
    minHeight: customizer.TopbarHeight,
  }));

  return (
    <AppBarStyled position="sticky" color="default" elevation={0}>
      <ToolbarStyled
        sx={{
          maxWidth: customizer.isLayout === "boxed" ? "lg" : "100%!important",
        }}
      >
        <Box sx={{ width: lgDown ? "45px" : "auto", overflow: "hidden" }}>
          <Logo />
        </Box>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        {lgDown ? (
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={() => customizerActions.toggleMobileSidebar()}
          >
            <IconMenu2 />
          </IconButton>
        ) : (
          ""
        )}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          <Search />
          <Language />
          <Notifications />
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

