/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import TeamLogo from "../../images/team-logos/squared/USC.png"

const Team = (props) => (
	<Card
		style={{
			fontWeight: `strong`,
			color: `#990000`,
			backgroundColor: `#FFC72C`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`,
			paddingTop: `0.25rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body style={{padding: `0rem`}}>
			<Card.Title><h3>USC</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team