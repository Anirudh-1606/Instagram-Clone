import React from "react";
import "./Gallery.css";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import GridOnIcon from "@mui/icons-material/GridOn";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
const Gallery = ({ data }) => {
	return (
		<div>
			<Container maxWidth="sm" fixed="true">
				<div className="menu">
					<GridOnIcon />
					<SlideshowIcon />
					<AccountBoxOutlinedIcon />
				</div>
			</Container>
			<Container maxWidth="md">
				<Grid container marginY="1rem" spacing={2}>
					{data ? (
						data.map((ele) => (
							<Grid item sm={4} key={ele.id}>
								<Card sx={{ maxWidth: 300 }}>
									<CardActionArea>
										<CardMedia
											component="img"
											height="200"
											image={ele.thumbnailUrl}
											alt={ele.title}
										/>
									</CardActionArea>
								</Card>
							</Grid>
						))
					) : (
						<h1>sjdhs</h1>
					)}
				</Grid>
			</Container>
		</div>
	);
};

export default Gallery;
