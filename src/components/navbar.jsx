import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PersonIcon from '@mui/icons-material/Person';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      elevation={1}
      color="inherit"
      className="!bg-white !border-b !border-gray-200"
    >
      <Toolbar className="flex justify-between items-center px-4 py-2">
        {/* Brand/Logo */}
        <Typography
          variant="h6"
          component="div"
          className="font-bold text-[#1d4ed8] tracking-wide text-2xl md:text-3xl"
        >
          Rakfort
        </Typography>

        {/* Actions */}
        <Box className="flex items-center gap-3">
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            className="!bg-[#1d4ed8] !text-white !font-semibold !shadow-none hover:!bg-[#2563eb] transition-all duration-200"
            sx={{
              textTransform: "none",
              px: 2.5,
            }}
          >
            Create Use Case
          </Button>
          <Button
            variant="outlined"
            startIcon={<PersonIcon />}
            className="!border-[#1d4ed8] !text-[#1d4ed8] !bg-gray-100 hover:!bg-blue-50 transition-all duration-200"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              px: 2,
              borderWidth: 2,
            }}
          >
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
