import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
} from "@mui/material";
import {Typography} from "@mui/material";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

const Header = () => {
  return (
    <AppBar position="sticky" elevation={1}>
      <Toolbar>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
          }}
        >
          TaskFlow
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <IconButton color="inherit">
          <NotificationsNoneIcon />
        </IconButton>

        <IconButton color="inherit">
          <DarkModeOutlinedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;