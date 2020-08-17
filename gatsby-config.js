module.exports = {
	// pathPrefix: "/watch-now/docs", // for gh-pages
	siteMetadata: {
		title: `watch now`,
		description: `page for watching different categories of videos with maximum simplicity`,
		author: `Max Perrello`,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-plugin-sass`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		// `query-string`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-react-bootstrap`,
				short_name: `react-bootstrap`,
				start_url: `/`,
				background_color: `#20232a`,
				theme_color: `#20232a`,
				display: `minimal-ui`,
				// icon: `src/images/favicon.png`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// tracking ID for watch football now within football.com analytics account
				trackingId: "UA-29450693-2",
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
