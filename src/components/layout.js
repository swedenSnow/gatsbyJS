/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Spring } from 'react-spring'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Header from './header'
import Archive from './archive'
import Footer from './footer'
import './layout.css'

const MainLayout = styled.main`
    max-width: 1200px;
    margin: 20px auto 0;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-gap: 40px;
    padding: 1rem;

    @media only screen and (max-width: 500px) {
        grid-gap: 25px;
    }
    @media only screen and (max-width: 400px) {
        grid-template-columns: 1fr;
    }
`

const Layout = ({ children, location }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
            file(relativePath: { regex: "/hype-beast-bg/" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)

    return (
        <>
            <Header siteTitle={data.site.siteMetadata.title} />
            {/* <Spring
                from={{ height: location.pathname === '/' ? 100 : 200 }}
                to={{ height: location.pathname === '/' ? 200 : 100 }}
            >
                {styles => (
                    <div style={{ overflow: 'hidden', ...styles }}>
                        <Img fluid={data.file.childImageSharp.fluid} />
                    </div>
                )}
            </Spring> */}
            {location.pathname === '/' && (
                <Img fluid={data.file.childImageSharp.fluid} />
            )}

            <MainLayout>
                <div>{children}</div>
                <Archive />
                <Footer />
            </MainLayout>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
Layout.defaultProps = {
    location: {},
}

export default Layout
