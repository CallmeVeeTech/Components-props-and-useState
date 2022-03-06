import styled from 'styled-components'
import Card from '../card/card'
import sedan from '../img/sedan.svg'
import suv from '../img/suv.svg'
import lux from '../img/lux.svg'


const Home = () => {
  
  return (
      <Container>
        <Wrapper>
        <Card tleft="10px" bleft="10px" icon={sedan} background="#E28525" carname="SEDAN" content="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next rpad trip" bcolor="#E28525"/>
        <Card icon={suv} background="#016972" carname="SUV" content="Take an SUV for its spacious interior, power, and versality. Perfect for your next family vacation and off-road adventures" bcolor="#016972"/>
        <Card tright="10px" bright="10px" icon={lux} background="#00403F" carname="LUXURY" content="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style" bcolor="#00403F"/>
        </Wrapper>
      </Container>
  )
}

export default Home;
const Container = styled.div`
display: flex;
flex-direction: column;
`
const Wrapper = styled.div`
display: flex;
`
