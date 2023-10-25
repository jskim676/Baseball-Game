import styled from 'styled-components';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputArray, setInputArray] = useState([]);



  return (
    <Wrapper>
      <ContentsWrapper>
        <Header>
          <h1>숫자 야구 게임</h1>
        </Header>
        <Main>
          <InputWrapper>
            {[0, 1, 2].map(index => (
              <InputValue key={index}>{inputArray[index]}</InputValue>
            ))}
          </InputWrapper>
          <CardList></CardList>
        </Main>
        <Footer>
          <ButtonWrapper>
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
              <NumerButton
                key={number}
                onClick={() => {
                  if (inputArray.length < 3 && !inputArray.includes(number)) {
                    setInputArray([...inputArray, number]);
                  }
                }}
              >{number}
              </NumerButton>
            ))}
          </ButtonWrapper>
        </Footer>
      </ContentsWrapper>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div `
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const ContentsWrapper = styled.div `
  width: 500px;
  height: 100%;
  padding: 0 10px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #cdcdcd;
`;

const Header = styled.div `
  width:100%;
  
  display:flex;
  justify-content: center;
`

const Main = styled.div `
  width:100%;
  height:400px;
  border:1px solid red;
`

const Footer = styled.div `
  width:100%;
  height:100px;
  border:1px solid green;
`


const InputWrapper = styled.div `
width: 100%;
height: 100px;
display:flex;
justify-content: center;
border:1px solid blue;
`;

const InputValue = styled.div `
width: 30%;
height: 50px;
border:1px solid blue;
`;

const CardList = styled.div `
width: 100%;
height: 300px;
border:1px solid green;
`;

const ButtonWrapper = styled.div `
display:grid;
grid-template-columns:repeat(5,1fr);
`;

const NumerButton = styled.button `
  border-radius: 5px;
  border:1px solid blue;
  padding:10px;
`