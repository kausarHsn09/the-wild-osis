import styled from "styled-components"

const H1=styled.h1`
  font-size: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
const Button = styled.button`
  font-size: 1.4rem;
  font-weight:400;
  border:none;
  background-color: red;
  padding: 0.8rem 1.2rem;
`

const StyledApp = styled.div`
  background-color: green;
`
const App = () => {
  return (
    <StyledApp>
      <H1>This is Noting</H1>
      <Button>Click</Button>
    </StyledApp>
  )
}

export default App