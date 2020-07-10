/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import CardDeck from "react-bootstrap/CardDeck"
import TeamLogo from "../images/team-logos/Auburn.svg"

const Team = (props) => (
	<Card
		className="d-flex align-items-between"
		style={{
			fontWeight: `strong`,
			color: `#0C2340`,
			backgroundColor: `#E87722`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body
			style={{
				padding: `0rem`
			}}
		>
			<Card.Title><h3>{props.name}</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team