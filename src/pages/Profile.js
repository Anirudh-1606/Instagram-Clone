import Container from "@mui/material/Container";
import React, { useState, useEffect } from "react";
import "./Profile.css";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import User from "../components/User/User";
import axios from "axios";

const Profile = () => {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		fetchData();
	}, []);

	//Function to fetch post data provided in the assignment
	const fetchData = async () => {
		try {
			const res = await axios.get("http://jsonplaceholder.typicode.com/photos");
			console.log(res.data.slice(0, 25));
			setPosts(res.data.slice(0, 25));
			return;
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<div>
			<Container>
				<Header />
			</Container>
			<hr />
			<div className="body">
				<Container maxWidth="md">
					<User />
					<hr />
				</Container>

				<Container>{posts && <Gallery data={posts} />}</Container>
			</div>
		</div>
	);
};

export default Profile;
