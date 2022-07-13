import fatIcon from '../assets/pictogrammes/fat-icon.svg'
import caloriesIcon from '../assets/pictogrammes/calories-icon.svg'
import proteinIcon from '../assets/pictogrammes/protein-icon.svg'
import carbsIcon from '../assets/pictogrammes/carbs-icon.svg'
import Card from './Card'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/**
* Display Nutritionnal cards from user performances
*
* @param userNutritionnalsDatas object with nutritonnal datas, key(nutritionnal type) value(quantity of nutritionnal item)

* @return void
* @author JP
* @version 1.0
*/

function Cards(userNutritionnalsDatas) {
  //STYLE
  const StyledLogo = styled.img`
    width: 60px;
  `
  const StyledCards = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1500px) {
      flex-direction: row;
    }
    @media (max-width: 1200px) {
      flex-direction: row;
      flex-wrap: wrap;
    }
  `

  //Transfom datas for recharts and display on charts, 4 tabs : tab with icons, value from object, name for display, units
  const logosOfNutritionalItem = [caloriesIcon, proteinIcon, carbsIcon, fatIcon]
  const valueOfNutritionalItem = [
    userNutritionnalsDatas.userNutritionnalsDatas.calorieCount,
    userNutritionnalsDatas.userNutritionnalsDatas.proteinCount,
    userNutritionnalsDatas.userNutritionnalsDatas.carbohydrateCount,
    userNutritionnalsDatas.userNutritionnalsDatas.lipidCount,
  ]
  const nameOfNutritionalItem = ['Calories', 'Proteines', 'Glucides', 'Lipides']
  const unitsOfNutritionalItem = ['kCal', 'g', 'g', 'g']

  return (
    <StyledCards>
      {valueOfNutritionalItem.map((e, index) => (
        <Card
          key={index}
          pictogramme={
            <StyledLogo
              src={logosOfNutritionalItem[index]}
              alt="Nutrition pictogramme"
            />
          }
          valueOfKeyData={valueOfNutritionalItem[index]}
          unitsOfKeyData={unitsOfNutritionalItem[index]}
          wordOfKeyData={nameOfNutritionalItem[index]}
        />
      ))}
    </StyledCards>
  )
}

Card.propTypes = {
  userNutritionnalsDatas: PropTypes.object,
}

export default Cards
