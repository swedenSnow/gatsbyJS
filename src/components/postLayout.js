import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'

//! Static query cant be used anywhere
//! Does not accept variables or arguments parameter, cant use context

//! Page query
//! Must be used on pagess

export default class postLayout extends Component {
    render() {
        const { markdownRemark } = this.props.data
        return (
            <Layout location={this.props.location}>
                <h1>{markdownRemark.frontmatter.title}</h1>
                <p
                    dangerouslySetInnerHTML={{
                        __html: markdownRemark.frontmatter.date,
                    }}
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: markdownRemark.html,
                    }}
                />
            </Layout>
        )
    }
}

export const query = graphql`
    query PostQuery($slug: String!) {
        markdownRemark(frontmatter: { slug: { eq: $slug } }) {
            html
            frontmatter {
                title
                date
                slug
            }
        }
    }
`
