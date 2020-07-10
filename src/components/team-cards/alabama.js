/*
	team card component - watch-now - by maxtheaxe
	references:
		https://reactjs.org/docs/components-and-props.html
		https://react-bootstrap.github.io/components/cards/
*/

import React from "react"
import Card from "react-bootstrap/Card"
import TeamLogo from "../../images/team-logos/squared/Alabama.png"

const Team = (props) => (
	<Card
		style={{
			width: `15rem`,
			fontWeight: `strong`,
			color: `#9e1b32`,
			backgroundColor: `#828a8f`,
			paddingRight: `1rem`,
			paddingLeft: `1rem`
		}}
	>
		<Card.Img variant="top" src={TeamLogo} />
		<Card.Body style={{padding: `0rem`}}>
			<Card.Title><h3>Alabama</h3></Card.Title>
		</Card.Body>
	</Card>
)

export default Team