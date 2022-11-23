import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'
import CustomTooltip from '../../utils/graph/CustomTooltip'
import { useFetch } from '../../utils/hooks/UseFetch'
import { useSearchParams } from 'react-router-dom'
import '../../style/kpi.css'

function WeightAndCalorieChart() {
  //STYLES
  const StyledWrapper = styled.div`
    background-color: '#FBFBFB';
    width: 98%;
    height: 300px;
    margin: 15px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    position: relative;
  `
  const StyledTitle = styled.h1`
    font-size: 15px;
    position: absolute;
    top: -5px;
    left: 10px;
  `
  const StyledLegend = styled.span`
    color: black;
    margin-bottom: -15px;
  `

  // GET User ID
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  //API Call
  // const { data, isLoading, error } = useFetch(
  //   `http://localhost:3000/user/${id}/activity`
  // )
  const { isLoading, data, error } = useFetch(`./activity.json`)

  if (!isLoading) {
    if (error) {
      return <span>Une erreur est survenue, {error}</span>
    }
    return (
      <StyledWrapper>
        <StyledTitle>Activité quotidienne</StyledTitle>
        <ResponsiveContainer width="99%" height="99%">
          <BarChart
            width="99%"
            height="99%"
            data={data.data.sessions}
            barSize={7}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis tickFormatter={(index) => `${index + 1}`} />
            <YAxis orientation="right" axisLine={false} tickLine={false} />
            <Tooltip
              wrapperStyle={{
                background: '#E60000',
                color: 'white',
                textAlign: 'center',
                padding: '5px',
              }}
              contentStyle={{
                backgroundColor: '#E60000',
                width: '40px',
                fontSize: '16px',
              }}
              labelFormatter={function (value) {
                return ``
              }}
              formatter={function (value, name) {
                return `${value}`
              }}
              itemStyle={{ color: 'white' }}
              content={CustomTooltip}
            />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="circle"
              iconSize="10"
              margin={{
                top: 5,
                right: 20,
                left: 0,
                bottom: 20,
              }}
              wrapperStyle={{
                paddingBottom: 5,
                paddingRight: 60,
              }}
              formatter={(value, entry, index) => (
                <StyledLegend>{value}</StyledLegend>
              )}
            />
            <Bar
              dataKey="kilogram"
              name="Poids (kg)"
              fill="#282D30"
              radius={[10, 10, 0, 0]}
            />
            <Bar
              dataKey="calories"
              name="Calories brûlées (kCal)"
              fill="#E60000"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </StyledWrapper>
    )
  }
}

export default WeightAndCalorieChart
