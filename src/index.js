import React from 'react';

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r && 0x3 | 0x8);
    return v.toString(16);
  });
}

function parseString (json){
  return JSON.stringify(json)
}

function parseJson (json){
  return JSON.parse(json)
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return `${color}7a`;
}


function getIntervalo(firstNumber, secondNumber) {
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

function getTopLeft (selection) {
  let element = null
  if (selection.days && selection.days.length > 0 && selection.hours && selection.hours.length > 0){
    element = document.getElementById(`${selection.hours[0].key}-${selection.days[0].key}`)
  }
  return element
}

function removeDuplicates (originalArray, prop) {
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

class Selectable extends React.Component {
  render () {
    const { hour, day } = this.props
    return <div className="item selectable"
      data-info={parseString({
        hour,
        day
      })}
      title={`${day.label} - ${hour.label}`}
      id={`${hour.key}-${day.key}`}></div>
  }
}

class IS7Schedule extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    let hours = []
    let key = 0;
    let hoursStart = (this.props.hoursStart)? this.props.hoursStart: 0
    let hoursEnd = (this.props.hoursEnd)? this.props.hoursEnd: 24
    for (let index = hoursStart; index < hoursEnd; index++) {
      let intervalsMinute = (this.props.intervalsMinute)? this.props.intervalsMinute: ['00', '15', '30', '45']
      for (const item of intervalsMinute) {
        let $index = (index < 10)? `0${index}`: index
        hours.push({
          key: key++,
          label: `${$index}:${item}`
        })
      }
    }
    let days = [
      {
        key: 0,
        label: 'Lunes'
      },
      {
        key: 1,
        label: 'Martes'
      },
      {
        key: 2,
        label: 'Miércoles'
      },
      {
        key: 3,
        label: 'Jueves'
      },
      {
        key: 4,
        label: 'Viernes'
      },
      {
        key: 5,
        label: 'Sábado'
      },
      {
        key: 6,
        label: 'Domingo'
      }
    ]

    this.state = {
      hours,
      days,
      elementStart: null,
      elementEnd: null,
      selections: (this.props.selections && Array.isArray(this.props.selections))? this.props.selections: []
    };

  }

  componentDidMount() {
    document.addEventListener('selectionchange', (event) => {
      document.getSelection().removeAllRanges()
    })
    this.buildPictures()
  }
  
  handleMouseDown(event) {
    let target = event.target
    if (target && target.classList && target.classList.contains('active')) {
      this.setState({
        elementStart: null
      });
      //console.error('Está seleccionando espacios ocupados')
    }else {
      let elementStart = this.getInfo(target)
      this.setState({
        elementStart
      });
    }
  }

  handleMouseUp(event) {
    let target = event.target
    if (target && target.classList && target.classList.contains('active')) {
      this.setState({
        elementEnd: null
      });
      //console.error('Está seleccionando espacios ocupados')
    }else {
      let elementEnd = this.getInfo(target)
      this.setState({
        elementEnd
      });
    }
    setTimeout(() => {
      if( this.state.elementStart && this.state.elementEnd ) {
        this.getInterval()
      }
    }, 100);
  }

  getInterval () {
    let intervalHours = getIntervalo(this.state.elementStart.hour.key, this.state.elementEnd.hour.key);
    let intervalDay = getIntervalo(this.state.elementStart.day.key, this.state.elementEnd.day.key);
    let selection = this.buildPicture(intervalHours, intervalDay)
    let elementTopLeft = getTopLeft(selection)
    this.addSelection(selection)
    if (elementTopLeft) {
      this.addCloseButton(elementTopLeft, selection.uuidv4)
    }
  }

  addSelection(selection) {
    if (selection.hours && selection.hours.length > 0 && selection.days && selection.days.length > 0) {
      selection.uuidv4 = uuidv4()
      //selection.backgroundColor = getRandomColor()
      this.state.selections.push(selection)
      if (this.props.handleChange) {
        this.props.handleChange(this.state.selections, selection)
      }
    }

  }

  buildPicture (intervalHours, intervalDay, element) {
    let days = [];
    let hours = [];

    let isNew = (element) ? false: true

    let elements = this.getSelectedItems(intervalHours, intervalDay, isNew)

    let backgroundColor = getRandomColor()
    
    if ((!isNew && element.backgroundColor && element.backgroundColor.length > 0)) {
      backgroundColor = element.backgroundColor
    }

    for (const element of elements) {
      let info = this.getInfo(element)
      info.backgroundColor = backgroundColor
      if(info) {
        this.addClassActive(element)
        element.style.backgroundColor = backgroundColor
        hours.push(info.hour);
        days.push(info.day);
      }
    }

    hours = removeDuplicates(hours, 'key')
    days = removeDuplicates(days, 'key')
    return {
      hours, 
      days
    }
  }

  buildPictures () {
    let selections = this.state.selections 
    if(selections && Array.isArray(selections)) {
      for (const selection of selections) {
        selection.uuidv4 = (selection.uuidv4)? selection.uuidv4: uuidv4()
        if(selection.hours && selection.days) {
          let intervalHours = selection.hours.map(item => {
            return item.key
          })
          let intervalDay = selection.days.map(item => {
            return item.key
          })
          let picture =  this.buildPicture(intervalHours, intervalDay, selection)
          let elementTopLeft = getTopLeft(picture)
          if (elementTopLeft) {
            this.addCloseButton(elementTopLeft, selection.uuidv4)
          }
        }
      }
    }
  }

  addCloseButton (element, uuidv4) {
    let node = document.createElement("SPAN")
    node.classList.add('close')
    let textnode = document.createTextNode("X")
    node.appendChild(textnode)
    node.setAttribute('data-uuidv4', uuidv4)
    node.addEventListener('click', (event) => {
      let target = event.target
      if (target.dataset.uuidv4) {
        this.removePicture(target.dataset.uuidv4)
      }
    })
    element.appendChild(node)
  }

  removePicture (uuidv4) {
    let selection = this.state.selections.find(item => item.uuidv4 === uuidv4)
    if (selection && selection.uuidv4) {
      this.setState({
        selections: this.state.selections.filter(item => item.uuidv4 !== selection.uuidv4) 
      })
      if (selection.hours && selection.days) {
        let intervalHours = selection.hours.map(item => {
          return item.key
        })
        let intervalDay = selection.days.map(item => {
          return item.key
        })
        let elements = this.getSelectedItems(intervalHours, intervalDay)
        let backgroundColor = '#fff'
        for (const element of elements) {
          let info = this.getInfo(element)
          if(info) {
            element.style.backgroundColor = backgroundColor
            element.classList.remove('active')
            element.innerHTML = ''
          }
        }
        if (this.props.handleChange) {
          this.props.handleChange(this.state.selections, selection)
        }
      }
    }
  }

  getSelectedItems (intervalHours, intervalDay, isNew){
    let elements = []
    let validItems = true
    for(let x in intervalHours) {
      for(let y in intervalDay) {
        let element = document.getElementById(`${intervalHours[x]}-${intervalDay[y]}`)
        if (element) {
          elements.push(element)
        }
        if(element.classList.contains('active') && isNew) {
          validItems = false
          //console.error('Está seleccionando espacios ocupados')
        }
      }
    }
    return (validItems)? elements: []
  }

  addClassActive (element) {
    if(element.classList && element.classList.add && !element.classList.contains('active')){
      element.classList.add('active')
      return true
    }
    return false
  }

  getInfo (target){
    let info = null
    if (target && target.dataset && target.dataset.info) {
      let { hour, day } = parseJson(target.dataset.info)
      info = {
        element: document.getElementById(`${hour.key}-${day.key}`),
        hour,
        day
      }
    }
    return info;
  }

  render() {
    const { hours, days } = this.state
    return (
      <div className="schedule"
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}>
        <div className="items">
          <div className="title">
            Horas
          </div>
          {hours.map(item => {
            return (
              <div key={item.label} className="item times">{item.label}</div>
            )
          })}
        </div>
        {
          days.map(day => {
            return (
              <div key={day.key} className="items">
                <div className="title">
                  {day.label}
                </div>
                {hours.map(hour => {
                  return (
                    <Selectable 
                      key={hour.label}
                      hour={hour} day={day}/>
                  )
                })}
              </div>
            )
          })
        }
        <style jsx=''>{`
          .schedule {
            display: grid;
            grid-template-columns: 0.5fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .schedule .title {
            background-color: #333;
            color: #fff;
            border-color: #333!important;
          }
          .schedule .item, .schedule .title {
            font-family: sans-serif;
            border: solid 0.5px #ddd;
            min-height: 40px;
            display: flex;
            align-items: center;
            padding: 0 5px;
          }
          .schedule .title {
            justify-content: center;
          }
          .schedule .item.selectable:hover {
            background-color: #ddd;
          }
          .schedule .item.selectable.active {
            background-color: #d4edda;
            border-color: #3333337a!important;
          }
          .schedule .item.times {
            background-color: #dddddda7;
          }
          .schedule span.close {
            position: relative;
            top: -22px;
            font-size: 13px;
            left: -13px;
            background: red;
            color: #fff;
            width: 16px;
            border-radius: 50%;
            height: 16px;
            display: flex;
            justify-content: center;
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}

export default IS7Schedule