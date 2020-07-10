/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import TeamLogo from "../../images/team-logos/squared/Auburn.png"

const Team = (props) => (
	<Card
		style={{
			fontWeight: `strong`,
			color: `#0C2340`,
			backgroundColor: `#E87722`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`,
			paddingTop: `0.25rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body style={{padding: `0rem`}}>
			<Card.Title><h3>Auburn</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team