# react-is7-schedule

Schedule Component

## Install npm

```bash
npm i react-is7-schedule
```

[https://www.npmjs.com/package/react-is7-schedule](https://www.npmjs.com/package/react-is7-schedule)

## Install yarn

```bash
yarn add react-is7-schedule
```

[https://yarnpkg.com/package/react-is7-schedule](https://yarnpkg.com/package/react-is7-schedule)

## Implementation

```javascript
import React from 'react';
import IS7Schedule from 'react-is7-schedule'

//Array of preselected
const selections = [{
  "hours": [
    {
      "key": 3,
      "label": "01:30"
    }, {
      "key": 4,
      "label": "02:00"
    }, {
      "key": 5,
      "label": "02:30"
    }, {
      "key": 6,
      "label": "03:00"
    }
  ],
  "days": [
    {
      "key": 1,
      "label": "Martes"
    }, {
      "key": 2,
      "label": "Miércoles"
    }
  ],
}]

//Method that is executed when changing the state of the schedule, returns the array of selected spaces and the space added or deleted
const handleChange = (selections, selection) => {
  console.log('Array de items: ', selections)
  console.log('Item agregado o eliminado: ', selection)
}


//Setting
// Intervals for minutes
const intervalsMinute = ['00', '30'] // ['00', '15', '30', '35']
// Start time
let hoursStart = 0
// End time
let hoursEnd = 24

class App extends React.Component {


  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { selections: [] };
  }


  handleClick (event) {
    this.setState({
      selections: selections
    });
  }

  render () {
    let { selections } = this.state
    return (
      <div>
        <button onClick={this.handleClick}>
          Add
        </button>
        <IS7Schedule
          selections={ selections }
          intervalsMinute={ intervalsMinute }
          hoursStart={ hoursStart }
          hoursEnd={ hoursEnd }
          handleChange={ handleChange }/>
      </div>
    );
  }
}

export default App;
```