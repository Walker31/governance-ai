import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

const Navbar = () => {
    return (
        <AppBar position="static" color="white" elevation={1}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <div className="text-2xl font-bold">Rakfort</div>
                <Box>
                    <Button variant="contained" style={{backgroundColor:'#1d4ed8'}} sx={{ mr: 2 }}>
                        + Create Use Case
                    </Button>
                    <Button variant="outlined" style={{backgroundColor:'gray',color:'white', border: 0}}>
                        Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
