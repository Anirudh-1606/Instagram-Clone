import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Hidden from "@mui/material/Hidden";
import Button from "@mui/material/Button";
const Header = () => {
	return (
		<div className="header">
			<div className="log">
				<img src={logo} alt="" />
			</div>

			<Hidden smDown="true">
				<div className="search-bar row">
					<SearchIcon color="disabled" />
					<input type="text" placeholder="Search" />
				</div>
			</Hidden>

			<div className="btns">
				<Button
					color="primary"
					variant="contained"
					disableElevation="true"
					size="small"
					sx={{ textTransform: "none", backgroundColor: "#0095F6" }}
				>
					Log In
				</Button>
				<Button
					color="primary"
					size="small"
					sx={{ textTransform: "none", marginLeft: "5px" }}
				>
					Sign Up
				</Button>
			</div>
		</div>
	);
};

export default Header;
