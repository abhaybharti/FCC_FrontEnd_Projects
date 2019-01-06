import * as types from '../constants/types';

export const calculate = (key) => {
  console.log("inside actions->calculate : calculate");
  return {
    type: types.SET_EXPRESSION,
    payload: key
  }
}


export const clear = () => {
  console.log("inside actions->calculate : clear");
  return {
    type: types.CLEAR_EXPRESSION
  }
}

export const square = () => {
  console.log("inside actions->calculate : square");
  return {
    type: types.SQUARE
  }
}
export const squareRoot = () => {
  console.log("inside actions->calculate : squareRoot");
  return {
    type: types.SQUARE_ROOT
  }
}


export const deleteLastEntry = () => {
  console.log("inside actions->calculate : deleteLastEntry");
  return {
    type: types.DELETE_LAST_EXPRESSION_ENTRY
  }
}


export const evaluateExpression = () => {
  console.log("inside actions->calculate : evaluateExpression");
  return {
    type: types.EVALUATE_EXPRESSION
  }
}