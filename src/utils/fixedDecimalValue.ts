export function fixedDecimalValue(value:number){
  return value.toFixed(2)
}

export function fixedDecimalValueOfTwoAddedValues(x:number, y:number){
  return Number(((x*100 + y*100)/100).toFixed(2))
}
