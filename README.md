# react-is7-schedule

Componente de horario

## Install npm

```bash
npm i react-is7-schedule
```

## Install yarn

```bash
yarn add react-is7-schedule
```

You need to add the provider to AdonisJS at `start/app.js`:

```javascript
import React from 'react';

import IS7Schedule from 'react-is7-schedule'

//Array de pre-seleccionados
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

//Método que se ejecuta al cambiar el estado del horario, retorna el array de espacios seleccionados y el espacio agregado o eliminado
const handleChange = (selections, selection) => {
  console.log('Array de items: ', selections)
  console.log('Item agregado o eliminado: ', selection)
}


//Configuración
  //Intervalos por minutos
  const intervalsMinute = ['00', '30'] // ['00', '15', '30', '35']
  //Hora de inicio
  let hoursStart = 0
  //Hora de final
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
          Añadir
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