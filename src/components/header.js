import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import logo from '../images/logo_hype.svg'

const HeaderWrapper = styled.div`
    background: #476263;
    /* margin-bottom: 1.45rem; */
`
const HeaderContainer = styled.div`
    margin: 0 auto;
    max-width: 1366px;
    padding: 0.4rem;
    img {
        margin-bottom: 0;
        height: 130px;
    }
    @media only screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
        background-color: #d6b76b;
        img {
            height: 170px;
        }
    }
`

const Header = ({ siteTitle }) => (
    <HeaderWrapper>
        <HeaderContainer>
            <h1 style={{ margin: 0 }}>
                <Link
                    to="/"
                    style={{
                        color: `white`,
                        textDecoration: `none`,
                    }}
                >
                    <img src={logo} alt="LU Logo" />
                </Link>
            </h1>
        </HeaderContainer>
    </HeaderWrapper>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
