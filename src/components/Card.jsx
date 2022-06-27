import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
* Display one Nutritionnal card from cards datas
*
* @param pictogramme string with path of the pictogramme
* @param valueOfKeyData number of the nutritionnal value quantity
* @param unitsOfKeyData string with units 
* @param wordOfKeyData string with name

* @return void
* @author JP
* @version 1.0
*/

function Card({ pictogramme, valueOfKeyData, unitsOfKeyData, wordOfKeyData }) {
  //STYLES
  const StyledLogo = styled.div`
    margin: auto;
    display: flex;
    background-color: #fbfbfb;
    padding: 32px 51px 32px 32px;
    border-radius: 5px;
  `
  const CardText = styled.div`
    font-weight: 900;
  `
  const CardTextWrap = styled.div`
    margin-left: 24px;
  `

  return (
    <StyledLogo>
      {pictogramme}
      <CardTextWrap>
        <CardText>
          {valueOfKeyData}
          {unitsOfKeyData}
        </CardText>
        <p>{wordOfKeyData}</p>
      </CardTextWrap>
    </StyledLogo>
  )
}

Card.propTypes = {
  pictogramme: PropTypes.object.isRequired,
  valueOfKeyData: PropTypes.number.isRequired,
  unitsOfKeyData: PropTypes.string.isRequired,
  wordOfKeyData: PropTypes.string.isRequired,
}

export default Card
