import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Home from './components/homescreen/home'


// const LightTheme = {
//   generalbackground: "#fff",

// }
// const DarkTheme = {
//   generalbackground: "#fff",
// }
// const Theme = {
//   light: LightTheme,
//   dark: DarkTheme
// }
const App = () => {
  return (
    <Container>
      <Home/>
    </Container>
  )
}
export default App;

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`