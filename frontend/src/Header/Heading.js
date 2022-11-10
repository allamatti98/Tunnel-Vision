import React from "react";
import Alert from "../components/Alert";
import { Link } from "react-router-dom";

const Heading = () => {
	return (
		<>
			<div className='heading'>
				<h1 style={{textAlign:"center", fontSize:"5em", fontFamily: "Tenor Sans"}}>
					<Link exact to='/'>
						Tunnel Vision Properties
					</Link>
				</h1>
			</div>
			<Alert />
		</>
	);
};

export default Heading;
