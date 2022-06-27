import styled from 'styled-components'
import Test from '../components/graphs/Test'

function Home() {
  const StyledWrapperTest = styled.div`
    height: 400px;
    width: 100%;
    min-width: 0;
    min-height: 0;
  `

  const StyledWrapperMain = styled.div`
    width: 60vw;
    display: flex;
  `

  return (
    <main>
      <Test />
    </main>
  )
}

export default Home
