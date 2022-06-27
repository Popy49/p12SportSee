import { Link } from 'react-router-dom'
import styled from 'styled-components'
import bikeIcon from '../assets/pictogrammes/bike-icon.png'
import swimIcon from '../assets/pictogrammes/swim-icon.png'
import weightIcon from '../assets/pictogrammes/weight-icon.png'
import yogaIcon from '../assets/pictogrammes/yoga-icon.png'

function NavBarVertical() {
  //STYLES
  const StyledNav = styled.nav`
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;

    margin: auto;
    align-items: center;
    width: 117px;
    height: 90vh;
    padding-bottom: 20px;
    @media (max-width: 1350px) {
      height: 100%;
    }
    @media (max-width: 1200px) {
      width: 100%;
    }
  `
  const StyledLogo = styled.img`
    width: 60px;
    margin: 5px;
  `

  const StyledLink = styled(Link)`
    font-weight: 24px;
    color: white;
  `
  const StyledWrapLink = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    @media (max-width: 1200px) {
      flex-direction: row;
    }
  `
  const StyledVerticalText = styled.div`
    writing-mode: vertical-lr;
    transform: rotateZ(180deg);
    @media (max-width: 1200px) {
      writing-mode: horizontal-tb;
      transform: rotateZ(360deg);
    }
  `

  return (
    <div>
      <StyledNav>
        <StyledWrapLink>
          <StyledLink to="/*">
            <StyledLogo src={yogaIcon} alt="Yoga" />
          </StyledLink>
          <StyledLink to="/*">
            <StyledLogo src={swimIcon} alt="Swim" />
          </StyledLink>
          <StyledLink to="/*">
            <StyledLogo src={bikeIcon} alt="Bike" />
          </StyledLink>
          <StyledLink to="/*">
            <StyledLogo src={weightIcon} alt="Weight" />
          </StyledLink>
        </StyledWrapLink>
        <StyledVerticalText>Copiryght, SportSee 2020</StyledVerticalText>
      </StyledNav>
    </div>
  )
}

export default NavBarVertical
