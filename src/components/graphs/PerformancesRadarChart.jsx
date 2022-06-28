import React from 'react'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'
import { useFetch } from '../../utils/hooks/UseFetch'
import { useSearchParams } from 'react-router-dom'
import { PerformancesRadarChartFormatting } from '../../utils/FormattingDatas'

function PerformancesRadarChart() {
  //STYLES
  const StyledWrapper = styled.div`
    background-color: #282d30;
    color: white;
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

  //MOCKED DATAS
  // const perf = [
  //   {
  //     userId: 12,
  //     kind: {
  //       1: 'cardio',
  //       2: 'energy',
  //       3: 'endurance',
  //       4: 'strength',
  //       5: 'speed',
  //       6: 'intensity',
  //     },
  //     data: [
  //       {
  //         value: 80,
  //         kind: 1,
  //       },
  //       {
  //         value: 120,
  //         kind: 2,
  //       },
  //       {
  //         value: 140,
  //         kind: 3,
  //       },
  //       {
  //         value: 50,
  //         kind: 4,
  //       },
  //       {
  //         value: 200,
  //         kind: 5,
  //       },
  //       {
  //         value: 90,
  //         kind: 6,
  //       },
  //     ],
  //   },
  // ]

  // GET User ID
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  //API Call
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/user/${id}/performance`
  )

  if (!isLoading) {
    // const mergeArray = data.data.data
    // //Transform data number to kind word for rechart display
    // mergeArray.map((e, index) => {
    //   if (parseInt(Object.keys(data.data.kind)[index]) === e.kind) {
    //     e.kind = Object.values(data.data.kind)[index]
    //   }
    // })
    // Format backend datas for Rechart display
    const mergeArray = PerformancesRadarChartFormatting(data)

    if (error) {
      return <span>Une erreur est survenue, {error}</span>
    }
    return (
      <StyledWrapper>
        <h1 hidden="true">Performances</h1>
        <ResponsiveContainer width="100%" height={266}>
          <RadarChart
            outerRadius={80}
            width={790}
            height={250}
            data={mergeArray}
          >
            <PolarGrid radialLines={false} />
            <PolarAngleAxis
              tick={{ fontSize: 12 }}
              dataKey="kind"
              stroke="white"
            />

            <PolarRadiusAxis
              angle={30}
              domain={[0, 150]}
              axisLine={false}
              tickLine={false}
              tick={false}
            />
            <Radar
              name="Performances"
              dataKey="value"
              fill="#E60000"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </StyledWrapper>
    )
  }
}

export default PerformancesRadarChart
