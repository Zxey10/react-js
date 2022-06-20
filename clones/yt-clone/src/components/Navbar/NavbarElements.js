import styled from 'styled-components'

export const Nav = styled.nav.attrs(props => ({
    className: props.className
}))`
    background-color:#212121;
    color: white;
    width:100%;
`;

export const NavLogo = styled.img.attrs(props => ({
    src: props.logo,
    alt: 'Loading ...'
}))`
  width: 32px;
  height: 32px; 
`;

export const NavText = styled.h2`
    font-family: 'Oswald', sans-serif;
    color: white;
    font-size: 1.5rem;
`;

export const NavBrand = styled.div`
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;
`;

