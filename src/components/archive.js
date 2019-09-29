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
            <aside style={{ padding: '1rem' }}>
                <h3>Archive</h3>
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
