//Formatting function for diplay in recharts

/**
* Display Nutritionnal cards from user performances graphs/TimingChart
*
* @param datas object of data session time

* @return transformedDatasForDisplay object of data session time formatted
* @author JP
* @version 1.0
*/
export function TimingChartFormatting(datas) {
  // Transform backend datas for Rechart display

  const sessionsDatas = datas
  const transformedDatasForDisplay = [...sessionsDatas]
  const firstValueOfChart = { ...transformedDatasForDisplay[0] }
  const lastValueOfChart = {
    ...transformedDatasForDisplay[transformedDatasForDisplay.length - 1],
  }
  firstValueOfChart.day = 0
  lastValueOfChart.day = transformedDatasForDisplay.length
  lastValueOfChart.sessionLength = lastValueOfChart.sessionLength + 10
  transformedDatasForDisplay.unshift(firstValueOfChart)
  transformedDatasForDisplay.push(lastValueOfChart)
  const fisrtLetterOfTheDay = ['', 'L', 'M', 'M', 'J', 'V', 'S', 'D', '']
  transformedDatasForDisplay.map((e, index) => {
    e.letter = fisrtLetterOfTheDay[index]
  })

  return transformedDatasForDisplay
}

/**
* Display Nutritionnal cards from user performances graphs/PerformancesRadarChart
*
* @param datas object of perfomrances datas

* @return transformedDatasForDisplay object of perfomrances datas formatted
* @author JP
* @version 1.0
*/
export function PerformancesRadarChartFormatting(datas) {
  // Transform backend datas for Rechart display
  console.log(datas)
  const mergeArray = datas.data.data
  //Transform data number to kind word for rechart display
  mergeArray.map((e, index) => {
    if (parseInt(Object.keys(datas.data.kind)[index]) === e.kind) {
      e.kind = Object.values(datas.data.kind)[index]
    }
  })
  return mergeArray
}

/**
* Display Nutritionnal cards from user performances graphs/KpiChart
*
* @param userDailyScore number of user daily score

* @return scoreDataForRecharts array of user daily score and maximum score
* @author JP
* @version 1.0
*/
export function KpiChartFormatting(userDailyScore) {
  // Transform datas for recharts display, number to array with score and total
  const scoreDataForRecharts = [
    {
      value: userDailyScore * 100,
    },
    {
      value: 100 - userDailyScore * 100,
    },
  ]
  return scoreDataForRecharts
}
