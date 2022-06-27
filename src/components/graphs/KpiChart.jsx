import React, { PureComponent } from 'react'
import {
  RadialBarChart,
  RadialBar,
  Legend,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import styled from 'styled-components'
import '../../style/kpi.css'
import PropTypes from 'prop-types'

/**
* Display Nutritionnal cards from user performances
*
* @param userDailyScore number of the user score

* @return void
* @author JP
* @version 1.0
*/

function KpiChart({ userDailyScore }) {
  //STYLES
  const StyledWrapper = styled.div`
    background-color: '#FBFBFB';
    margin: 15px 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 266px;
    height: 266px;
    @media (max-width: 1200px) {
      width: auto;
      margin-right: 20px;
    }
  `
  const StyledTitle = styled.h2`
    font-size: 15px;
    text-align: right;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: -50px;
  `
  const StyledComment = styled.div`
    text-align: center;
    max-width: 147px;
    position: absolute;
    margin-top: 20px;
  `
  const StyledScore = styled.div`
    font-size: 20px;
    font-weight: 800;
  `
  // Transform datas for recharts display, number to array with score and total
  const scoreDataForRecharts = [
    {
      value: userDailyScore * 100,
    },
    {
      value: 100 - userDailyScore * 100,
    },
  ]

  //Colors of Pies
  const colorsOfPiesCharts = ['#FF0000', '#FFFFFF']

  return (
    <StyledWrapper>
      <StyledTitle>Score</StyledTitle>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart width={730} height={250}>
          <Pie
            data={scoreDataForRecharts}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={90}
            startAngle={-180}
            endAngle={-540}
            fill="#8884d8"
            cornerRadius={20}
            stroke="none"
          >
            {scoreDataForRecharts.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colorsOfPiesCharts[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <StyledComment>
        <StyledScore>{userDailyScore * 100}%</StyledScore> de votre objectif
      </StyledComment>
    </StyledWrapper>
  )
}

KpiChart.propTypes = {
  userDailyScore: PropTypes.number.isRequired,
}

export default KpiChart
