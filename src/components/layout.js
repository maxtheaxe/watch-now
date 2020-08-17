/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Header from "./header"
import Navbar from "./navBar"

import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'

const Layout = ({ children, pageInfo }) => (
<>
	<Helmet>
		<link rel="icon" href={favicon} />
	</Helmet>
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={data => (
			<>
				<Container fluid className="px-0 main">
					<Row noGutters className="justify-content-center">
						<Col>
							<Header siteTitle={data.site.siteMetadata.title} />
						</Col>
					</Row>
					{/* <Navbar pageInfo={pageInfo} /> */}
					<Row noGutters>
						<Col>
							<Container className="mt-2">
								<main>{children}</main>
							</Container>
						</Col>
					</Row>
				</Container>
				<Container fluid className="px-0">
					<Row noGutters>
						<Col className="footer-col">
							<footer>
								<span>
									© {new Date().getFullYear()}, Powered by
									{` `}
									<a href="http://www.footballvideos.com/" target="_blank">Football Videos</a>
								</span>
							</footer>
						</Col>
					</Row>
				</Container>
			</>
		)}
	/>
</>
)

export default Layout
