import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));




function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
    
    return (
        <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}




export default function HideAppBar(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
     setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();
  return (
    <React.Fragment>

      <HideOnScroll {...props}>
        <AppBar style={{backgroundColor: 'black', height: '9vh'}}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    <MenuIcon aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}><a href="#projects"><p>Projects</p></a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="#skills"><p>Technical Skills</p></a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="#contact"><p>Contact Me</p></a></MenuItem>
                        <MenuItem onClick={handleClose}><a href="#about"><p>About</p></a></MenuItem>
                        <MenuItem onClick={handleClose}><a target="#" href="https://res.cloudinary.com/ahonore42/image/upload/v1591281353/adamHonoreResume_yueoap.pdf"><p>Resume</p></a></MenuItem>
                    </Menu>
                </IconButton>
                
            
            </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      
    </React.Fragment>
  );
}