import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
* Display welcome message 
*
* @param userFirstName string of the user to be connected with

* @return void
* @author JP
* @version 1.0
*/

function Header({ userFirstName }) {
  //STYLES
  const StyledName = styled.span`
    color: #ff0000;
  `

  return (
    <div>
      <h1>
        Bonjour <StyledName>{userFirstName}</StyledName>
      </h1>
      <div className="subtitle">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </div>
    </div>
  )
}

Header.propTypes = {
  userFirstName: PropTypes.string.isRequired,
}

export default Header
