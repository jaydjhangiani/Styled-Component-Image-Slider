import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#000d1a' : '#cd853f')};
    white-space: nowrap;
    text-decoration: none;
    padding: ${({big}) => (big ? '16px 40px' :'14px 24px')};
    color: ${({primary}) => (primary ? '#fff' : '#000d1a')};
    font-size: ${({big}) => (big? '20px' : '14px')};
    outline: none;
    border: none;
    cursor: pointer;
    display:flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover{
        transform: translateY(-2px) ;
        /* background: ${({primary}) => (primary ? '#fff' : '#01bf71' )}; */
    }
`