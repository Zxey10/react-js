import styled from 'styled-components'

const Nav = styled.nav.attrs(props => ({
    className: props.className
}))`
    background-color:#212121;
    color: white;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding 0.6rem 0;
`;

const NavLogo = styled.img.attrs(props => ({
    src: props.logo,
    alt: 'Loading ...'
}))`
  width: 32px;
  height: 32px; 
`;

const NavText = styled.h2`
    font-family: 'Oswald', sans-serif;
    color: white;
    font-size: 1.2rem;
    margin: 0 0.2rem;
`;

const NavBrand = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;


export {
    Nav, 
    NavBrand, 
    NavText, 
    NavLogo,
    
}
