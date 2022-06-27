/**
* Custom tooltip for Rechart BarChart, weight and calories charts
*
* @param active boolean, statut of tooltip visibility
* @param payload object of the source data of the content to be displayed in the tooltip

* @return void
* @author JP
* @version 1.0
*/

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div>
        <div>
          <p>{payload[0].payload.kilogram}Kg</p>
          {payload[0].payload.temp ? (
            <p>Temp {payload[0].payload.temp}&#8457;</p>
          ) : (
            <p>{payload[0].payload.calories}Kcal</p>
          )}
        </div>
      </div>
    )
  }

  return null
}

export default CustomTooltip
