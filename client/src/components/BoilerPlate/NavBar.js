import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const BodyWrapper = styled.div`
background-color: #984843;
display: flex;
justify-content: space-between;
padding: 10px 10px 10px 10px;
color: #18121E;
border-bottom: 5px solid #18121E;
`
const LinkMenu = styled.div`
margin: 20px 0px;
a {
    color: #18121E;
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
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
                <Link to="#">Login</Link> | <Link to="#">Sign Up</Link>  
                </LinkMenu>
                
            </BodyWrapper>
        );
    }
}

export default NavBar;