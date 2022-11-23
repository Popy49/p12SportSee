import React from 'react'
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks/UseFetch'
import { TimingChartFormatting } from '../../utils/FormattingDatas'
import { useSearchParams } from 'react-router-dom'

function TimingChart() {
  //STYLES
  const StyledWrapper = styled.div`
    background-color: #ff0000;
    margin: 15px 5px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 15px;
    width: 266px;
    height: 266px;
    @media (max-width: 1200px) {
      width: auto;
      margin-right: 20px;
    }
  `
  const StyledTitle = styled.h2`
    color: white;
    opacity: 0.5;
    max-width: 147px;
    margin: 0;
  `

  // GET User ID
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  //API Call
  // const { data, isLoading, error } = useFetch(
  //   `http://localhost:3000/user/${id}/average-sessions`
  // )
  const { isLoading, data, error } = useFetch(`./session.json`)

  if (!isLoading) {
    // Format backend datas for Rechart display
    const transformedDatasForDisplay = TimingChartFormatting(data.data.sessions)

    if (error) {
      return <span>Une erreur est survenue, {error}</span>
    }
    return (
      <StyledWrapper>
        <StyledTitle>Durée moyenne des sessions</StyledTitle>
        <ResponsiveContainer width="100%" height={150}>
          <LineChart width={300} height={200} data={transformedDatasForDisplay}>
            <defs>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
              </linearGradient>
            </defs>
            <Line
              type="natural"
              dataKey="sessionLength"
              stroke="url(#linear)"
              strokeWidth={2}
              dot={false}
              name={function (value, name) {
                return ``
              }}
              padding={{ left: 0, right: 0, top: 90, bottom: 20 }}
            />
            <XAxis
              dataKey="letter"
              axisLine={false}
              tickLine={false}
              tick={{ stroke: 'white', fontSize: 12 }}
              padding={{ left: 0, right: 0, top: 90, bottom: 20 }}
              dy={15}
            />
            <Tooltip
              cursor={false}
              animationEasing="ease-in-out"
              labelFormatter={function (value) {
                return ``
              }}
              formatter={function (value, name) {
                return `${value} min`
              }}
              allowEscapeViewBox={{ x: true, y: true }}
            />
          </LineChart>
        </ResponsiveContainer>
      </StyledWrapper>
    )
  }
}

export default TimingChart
