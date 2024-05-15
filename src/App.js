import { Container, Content, Row } from './styles';
import Input from './components/Input';
import Button from './components/Button'
import { useState } from 'react';


function App() {

  const [currentNumber, setCurrentNumber] = useState(0);

  const [firstNumber, setFirstNumber] = useState(0);

  const [operation, setOperation] = useState('');

  const handleClear = () => {
    setCurrentNumber(0)
    setFirstNumber(0)
  }

  const handleAddNumber = (number)=> {
    if(currentNumber === 0) {
      setCurrentNumber('')
    }
    setCurrentNumber(prev=> `${prev}${number}`)
  }

  const handleSumNumber = ()=> {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation('+')
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(sum);
      setOperation('')
    }
  }

  const handleSubNumber = ()=> {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation('-')
    } else {
      const sum = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(sum);
      setOperation('')
    }
  }

  const handleMultNumber = ()=> {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation('x')
    } else {
      const sum = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(sum);
      setOperation('')
    }
  }

  const handleDivNumber = ()=> {
    if(firstNumber === 0) {
      setFirstNumber(currentNumber);
      setCurrentNumber(0);
      setOperation('/')
    } else {
      const sum = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(sum);
      setOperation('')
    }
  }

  const handleEqual = ()=> {
    if(currentNumber !== 0 && operation !== '' && currentNumber !== 0) {
      switch(operation) {
        case '+': 
          handleSumNumber();
          break;
        case '-':
          handleSubNumber();
          break;
        case 'x':
          handleMultNumber();
          break;
        case '/':
          handleDivNumber();
          break;
        default: break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label={"C"} onClick={handleClear} />
          <Button label={"x"} onClick={handleMultNumber} />
          <Button label={"/"} onClick={handleDivNumber} />
          <Button label={"+"} onClick={handleSumNumber} />
        </Row>
        <Row>
          <Button label={"7"} onClick={()=> handleAddNumber(7)} />
          <Button label={"8"} onClick={()=> handleAddNumber(8)} />
          <Button label={"9"} onClick={()=> handleAddNumber(9)} />
          <Button label={"-"} onClick={handleSubNumber} />
        </Row>
        <Row>
          <Button label={"4"} onClick={()=> handleAddNumber(4)} />
          <Button label={"5"} onClick={()=> handleAddNumber(5)} />
          <Button label={"6"} onClick={()=> handleAddNumber(6)} />
          <Button label={"."} onClick={()=> handleAddNumber('.')} />
        </Row>
        <Row>
          <Button label={"1"} onClick={()=> handleAddNumber(1)} />
          <Button label={"2"} onClick={()=> handleAddNumber(2)} />
          <Button label={"3"} onClick={()=> handleAddNumber(3)} />
          <Button label={"="} onClick={handleEqual} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
