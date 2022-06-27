import { useFetch } from '../utils/hooks/UseFetch'
import { useSearchParams } from 'react-router-dom'
import WeightAndCalorieChart from '../components/graphs/WeightAndCalorieChart'
import TimingChart from '../components/graphs/TimingChart'
import PerformancesRadarChart from '../components/graphs/PerformancesRadarChart'
import KpiChart from '../components/graphs/KpiChart'
import Cards from '../components/Cards'
import Header from '../components/Header'
import styled from 'styled-components'
import NavBarVertical from '../components/NavBarVertical'
import Test from '../components/graphs/Test'

function Home() {
  //STYLES
  const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
  `
  const StyledWrapperSub = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `
  const StyledWrapperTest = styled.div`
    width: 100%;
    min-width: 0;
    min-height: 0;
  `
  const StyledWrapperParent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1500px) {
      flex-direction: column;
    }
  `
  const StyledWrapperMain = styled.div`
    display: flex;
    flex-direction: row;
    @media (max-width: 1200px) {
      flex-direction: column;
    }
  `
  const StyledWrapperMainChild = styled.div`
    width: 100%;
    margin: 40px 90px 0 100px;
    @media (max-width: 1350px) {
      margin: 40px 20px 0 20px;
    }
  `
  const StyledWrapperChild = styled.div`
    margin: 30px 30px 0 0;
  `

  // GET User ID
  const [searchParams, setSearchParams] = useSearchParams()
  const id = searchParams.get('id')

  //API Call
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/user/${id}`
  )

  if (!isLoading) {
    if (error) {
      return <span>Une erreur est survenue, {error}</span>
    }
    const userFirstName = data.data.userInfos.firstName
    const userDailyScore = data.data.todayScore
    const userNutritionnalsDatas = data.data.keyData
    return (
      <main>
        <StyledWrapperMain>
          <NavBarVertical />
          <StyledWrapperMainChild>
            <StyledWrapperParent>
              <StyledWrapper>
                <Header userFirstName={userFirstName} />
                <StyledWrapperChild>
                  <StyledWrapperTest>
                    <WeightAndCalorieChart />
                  </StyledWrapperTest>
                  <StyledWrapperSub>
                    <TimingChart />
                    <PerformancesRadarChart />
                    <KpiChart userDailyScore={userDailyScore} />
                  </StyledWrapperSub>
                </StyledWrapperChild>
              </StyledWrapper>
              <Cards userNutritionnalsDatas={userNutritionnalsDatas} />
            </StyledWrapperParent>
          </StyledWrapperMainChild>
        </StyledWrapperMain>
      </main>
    )
  }
}

export default Home
