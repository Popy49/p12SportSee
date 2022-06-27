import { Link } from 'react-router-dom'
import logos from '../assets/logo.png'
import styled from 'styled-components'

function NavBar() {
  //STYLES
  const StyledNav = styled.nav`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    padding: 18px 83px 12px 26px;
  `
  const StyledLogo = styled.img`
    width: 178px;
  `

  const StyledLink = styled(Link)`
    font-size: 24px;
    color: white;
  `

  const logo = <StyledLogo src={logos} alt="Sportsee Logo" />

  return (
    <header>
      <StyledNav className="header">
        <Link className="header__logo" to="/">
          {logo}
        </Link>
        <StyledLink className="header__link" to="/">
          Accueil
        </StyledLink>
        <StyledLink className="header__link" to="/test">
          Profil
        </StyledLink>
        <StyledLink className="header__link" to="/about">
          Réglage
        </StyledLink>
        <StyledLink className="header__link" to="/about">
          Communauté
        </StyledLink>
      </StyledNav>
    </header>
  )
}

export default NavBar
