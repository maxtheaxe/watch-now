import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
	<header
		style={{
			background: `#20232a`,
		}}
	>
		<div
			style={{
				margin: `0 auto`,
				maxWidth: 960,
				padding: `0.5rem 0.5rem`,
				textAlign: `center`,
			}}
		>
			<h1 style={{ margin: 0, color: `white` }}>
				<Link
					to="/"
					style={{textDecoration: `none`, color: `white`}}
					onClick={() => window.location.reload()}>
					{siteTitle}
				</Link>
			</h1>
			<h6 style={{ margin: 3, color: `white`}}>
				by <a
					style={{ margin: 0, color: `gray`, textDecoration: `none` }}
					href="http://www.footballvideos.com" target="_blank">
					FootballVideos.com
				</a>
			</h6>
		</div>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
