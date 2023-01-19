import React from "react";
import "./User.css";
import Grid from "@mui/material/Grid";

import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import dp from "../../assets/dp.jpg";
import tick from "../../assets/tick.png";
const User = () => {
	return (
		<Grid container className="user-pannel row">
			<Grid md={4} className="pro-pic">
				<img src={dp} alt="profile pic" className="img-fluid" />
			</Grid>
			<Grid md={8} className="info">
				<div className="info-header row">
					<div className="head row">
						<p>virat.kohli</p>
						<img src={tick} alt="" />
					</div>
					<Button
						color="primary"
						variant="contained"
						disableElevation="true"
						size="small"
						sx={{
							textTransform: "none",
							color: "black",
							backgroundColor: "#EFEFEF",
						}}
					>
						Follow
					</Button>
					<Button
						color="primary"
						variant="contained"
						disableElevation="true"
						size="small"
						sx={{
							textTransform: "none",
							color: "black",
							backgroundColor: "#EFEFEF",
						}}
					>
						Message
					</Button>
					<MoreHorizIcon />
				</div>

				<div className="post-info row">
					<p>
						<b>1,501</b> posts
					</p>
					<p>
						<b>232M</b> followers
					</p>
					<p>
						<b>262</b> following
					</p>
				</div>
				<div className="bio">
					<p className="bio-head">Virat Kohli</p>
					<p>Carpediem!</p>
				</div>
			</Grid>
		</Grid>
	);
};

export default User;
