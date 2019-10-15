import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button className="filter-btn" aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
        <div className="filter-btn">Filter Dream By Type</div>
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}><Link id="show_lucid" className="nav-item" to="/lucid">Lucid Dreams</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link id="show_nightmare" className="nav-item" to="/nightmare">Nightmares</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link id="show_recurring" className="nav-item" to="/recurring">Recurring Dreams</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link id="show_strange" className="nav-item" to="/strange">Strange Dreams</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link id="show_vivid" className="nav-item" to="/vivid">Vivid Dreams</Link></MenuItem>
      </Menu>
    </div>
  );
}