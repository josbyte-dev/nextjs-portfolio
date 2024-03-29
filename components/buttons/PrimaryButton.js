import Link from 'next/link'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

const Button = styled.button`
        font-size: 24px;
        font-weight: bold;
        border: none;
        border-radius: ${props => props.theme.button_radius};
        background: ${props => props.theme.button_outline_color};
        
    `
const Span = styled.span`
        display: block;
        box-sizing: border-box;
        border: 2px solid ${props => props.theme.button_outline_color};
        border-radius: ${props => props.theme.button_radius};
        padding: 0.75em 1.5em;
        background: ${props => props.theme.button_color};
        color: ${props => props.theme.button_outline_color};
        transform: translateY(-0.2em);
        transition: transform 0.1s ease;
        &:hover {
            transform: translateY(-0.33em);
        }
        &::active {
            transform: translateY(0);
        }
    
    `

const PrimaryButton = ({ text, color, link, noLinkPage, target }) => {
    let buttonRadius = '0.75em';
    let buttonOutlineColor = '#000000';

    const variables = {
        button_radius: buttonRadius,
        button_color: color,
        button_outline_color: buttonOutlineColor,
    }
    return (
        !noLinkPage ? (
            <Link href={link} >
              
                    <ThemeProvider theme={variables}>
                        <Button>
                            <Span>
                                {text}
                            </Span>
                        </Button>
                    </ThemeProvider>
             
            </Link>
        )
            :
            (
                <a href={link} target={target}>
                    <ThemeProvider theme={variables}>
                        <Button>
                            <Span>
                                {text}
                            </Span>
                        </Button>
                    </ThemeProvider>
                </a>
            )
    )
}

export default PrimaryButton