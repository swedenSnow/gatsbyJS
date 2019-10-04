import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

const FooterLayout = styled.footer`
    font-size: 0.7rem;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: flex-end;
    margin: 4rem 0 2rem;
    > * {
        margin-bottom: 0;
    }
    img {
        height: 200px;
    }
`

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            site {
                siteMetadata {
                    title
                    description
                    author
                }
            }
            file(relativePath: { regex: "/gatsby-icon/" }) {
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
            <FooterLayout>
                <p> {new Date().getFullYear()} || Built with hipsteripsum</p>
                <p>By: {data.site.siteMetadata.author} &copy;</p>
            </FooterLayout>
            {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
        </>
    )
}

export default Footer
