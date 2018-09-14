import React from 'react';
import CalculatorWrapper from '../components/CalculatorWrapper';
import Grid, { GridItem } from '../components/Grid';
import Input from '../components/Input';
import Button from '../components/Buttons/Button';
import NumericButton from '../components/Buttons/NumericButton';

const buttonNumbers = [1,2,3,4,5,6,7,8,9];

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValues: ['', ''],
      selectedInput: 0,
      operation: '+',
      result: ''
    }
  }

  // Append the value from the button pressed to the selected input
  handleNumericButtonClick = (value) => {
    const { inputValues, selectedInput } = this.state;
    const newInputValues = [...inputValues];
    const newValue = '' + inputValues[selectedInput] + value;
    newInputValues[selectedInput] = parseInt(newValue, 10);

    this.setState({
      inputValues: newInputValues,
    })
  }

  // Set + or - and auto select the second input
  handleAddSubtractClick = (value) => {
    this.secondInput.focus();

    this.setState({
      operation: value,
    });
  }

  // Update the value of inputs when they change
  handleInputChange = (e) => {
    e.preventDefault();

    const value = e.target.value && parseInt(e.target.value, 10);

    // Ensure the value is an integer or empty string, otherwise ignore
    if (!Number.isInteger(value) && value !== '') return;

    const { inputValues, selectedInput } = this.state;
    const newInputValues = [...inputValues];

    newInputValues[selectedInput] = value;

    this.setState({
      inputValues: newInputValues
    });
  }

  handleInputFocus = (input) => () => {
    this.setState({
      selectedInput: input
    });
  }

  // Handle specific keys when pressed into and input
  handleInputKeyUp = (e) => {
    if (e.key === '+' || e.key === '-') {
      this.handleAddSubtractClick(e.key);
    } else if (e.key === 'Enter') {
      this.calculate();
    }
  }

  calculate = () => {
    const { inputValues, operation } = this.state;
    let result = null;

    if (operation === '+') {
      result = inputValues[0] + inputValues[1];
    } else {
      result = inputValues[0] - inputValues[1];
    }

    this.setState({
      result
    });
  }

  render() {
    const { inputValues, operation, result } = this.state;

    return (
      <CalculatorWrapper>
        <Grid columns={'auto auto auto auto auto'}>
          <GridItem>
            <Input
              value={inputValues[0]}
              onChange={this.handleInputChange}
              onKeyUp={this.handleInputKeyUp}
              onFocus={this.handleInputFocus(0)}
            />
          </GridItem>
          <GridItem>{operation}</GridItem>
          <GridItem>
            <Input
              inputRef={(input) => { this.secondInput = input }}
              value={inputValues[1]}
              onChange={this.handleInputChange}
              onKeyUp={this.handleInputKeyUp}
              onFocus={this.handleInputFocus(1)}
            />
          </GridItem>
          <GridItem>=</GridItem>
          <GridItem>
            <Input value={result} disabled />
          </GridItem>
        </Grid>
        <Grid>
          {buttonNumbers.map((value) => (
            <NumericButton key={value} value={value} onClick={this.handleNumericButtonClick} />
          ))}
          <GridItem gridColumnStart={2} gridColumnEnd={3}>
            <NumericButton key={0} value={0} onClick={this.handleNumericButtonClick} />
          </GridItem>
        </Grid>
        <Grid columns={2}>
          <Button onClick={this.handleAddSubtractClick.bind(null, '+')} color="green">+</Button>
          <Button onClick={this.handleAddSubtractClick.bind(null, '-')} color="red">-</Button>
          <GridItem gridColumnStart={1} gridColumnEnd={3}>
            <Button onClick={this.calculate} color="grey">Calculate!</Button>
          </GridItem>
        </Grid>
      </CalculatorWrapper>
    )
  }
}
