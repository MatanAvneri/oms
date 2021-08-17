import React from 'react'
import styled from 'styled-components'
import { StylesProvider } from '@material-ui/core/styles';
import './App.css'
import EmailInputs from './components/EmailInputs'
import EmailPreview from './components/EmailPreview'
import EmailStyles from './components/EmailStyles';

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
  padding: 5rem;
  grid-gap: 5rem;
`

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <AppContainer>
        <EmailPreview />
        <EmailInputs />
        <EmailStyles />
      </AppContainer>
    </StylesProvider>
  )
}

export default App
