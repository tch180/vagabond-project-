import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BodyWrapper = styled.div`
background-color: darkgray;
display: flex;
justify-content: space-between;
padding: 10px 10px 10px 10px;
`
const LinkMenu = styled.div`
a {
    color: white;
    font-size: 1.6em;
}
`

class NavBar extends Component {
    render() {
        return (
            <BodyWrapper>
                <div>
                    <h3>Vegabond Travel</h3>
                    </div>
                <LinkMenu>
                Login | Sign Up
                </LinkMenu>
                
            </BodyWrapper>
        );
    }
}

export default NavBar;