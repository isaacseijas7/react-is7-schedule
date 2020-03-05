export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}

export const parseString = (json) => {
  return JSON.stringify(json)
}

export const parseJson = (json) => {
  return JSON.parse(json)
}

export const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `${color}7a`;
}

export const getIntervalo = (firstNumber, secondNumber) => {
  let latest, first, numbers = [], i;
  if (firstNumber > secondNumber) {
    latest = firstNumber;
    first = secondNumber;
  } else if (secondNumber > firstNumber) {
    latest = secondNumber;
    first = firstNumber;
  } else {
    latest = secondNumber;
    first = firstNumber;
  }
  for (i = first; i <= latest; i++) {
    numbers.push(i);
  }
  return numbers;
}


export const getTopLeft = (selection) => {
  let element = null
  if (selection.days && selection.days.length > 0 && selection.hours && selection.hours.length > 0){
    element = document.getElementById(`${selection.hours[0].key}-${selection.days[0].key}`)
  }
  return element
}

export const removeDuplicates = (originalArray, prop) => {
  let newArray = []
    let lookupObject  = {}
    for(let key in originalArray) {
        lookupObject[originalArray[key][prop]] = originalArray[key]
    }
    for(let key in lookupObject) {
        newArray.push(lookupObject[key])
    }
    return newArray
}
