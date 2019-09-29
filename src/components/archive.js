import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

const ArchiveList = styled.ul`
    padding: 0;
    margin: 0;
    list-style: none;

    a {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

        font-size: 0.8rem;
        text-decoration: underline;
        color: #476263;
        @media only screen and (max-width: 768px) {
            font-size: 1rem;
            color: #d6b76b;
        }
    }
    @media only screen and (max-width: 400px) {
        padding: 0 1rem;
    }
`

const ArchiveHeader = styled.h3`
    @media only screen and (max-width: 400px) {
        padding: 0 1rem;
    }
`

const Archive = () => {
    const data = useStaticQuery(graphql`
        query blogPostArchive {
            allMarkdownRemark(
                limit: 5
                sort: { order: DESC, fields: [frontmatter___date] }
            ) {
                totalCount
                edges {
                    node {
                        frontmatter {
                            title
                            slug
                            date(formatString: "MMMM DD, YYYY")
                        }
                    }
                }
            }
        }
    `)

    return (
        <>
            <aside>
                <ArchiveHeader>Archive</ArchiveHeader>
                {data.allMarkdownRemark.edges.map((edge, key) => (
                    <ArchiveList key={edge.node.frontmatter.slug}>
                        <li key={edge.node.frontmatter.slug}>
                            <Link to={`/posts/${edge.node.frontmatter.slug}`}>
                                {edge.node.frontmatter.title}
                            </Link>
                        </li>
                    </ArchiveList>
                ))}
                {/* <p>{data.allMarkdownRemark.totalCount}</p> */}
            </aside>
        </>
    )
}

export default Archive
