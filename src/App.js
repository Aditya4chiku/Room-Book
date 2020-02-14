import React from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './component/panel'

function App() {

  const [rooms, setRooms] = React.useState(0)
  const [adults, setAdults] = React.useState(0)
  const [children, setChildren] = React.useState(0)
  const [count, setCount] = React.useState(0)

  function inc(type) {
    switch (type) {
      case "ROOMS":
        if (rooms > 4) {
          setRooms(rooms)
          if (adults < rooms) {
            setAdults(rooms)
          }
        } else {
          setRooms(rooms + 1)
        }
        break;
      case "ADULTS":
        setAdults(adults + 1)
        if (parseInt(count / 4) > rooms) {
          setRooms(parseInt(count / 4))
        }
        //setCount(count + 1)
        break;
      case "CHILDREN":
        setChildren(children + 1)
        if (parseInt(count / 4) > rooms) {
          setRooms(parseInt(count / 4))
        }
        console.log(adults + children)
        //setCount(count + 1)
        break;
      default:
        break;
    }
    setRooms(parseInt((count - 1) / 4) + 1)
  }


  function dec(type) {
    setCount(adults + children)
    switch (type) {
      case "ROOMS":
        console.log(type)
        setRooms(rooms - 1)
        break;
      case "ADULTS":
        setAdults(adults - 1)
        //setCount(count - 1)
        break;
      case "CHILDREN":
        setChildren(children - 1)
        //setCount(count - 1)
        break;
      default:
        break;
    }

  }

  React.useEffect(() => {
    setCount(adults + children)
    if (count / 4 > rooms) {

    }

    if (rooms > adults) {
      setAdults(rooms)
    }

  })

  return (
    <div className="App">
      <div className="box">
        <Panel name="ROOMS" data={rooms} increment={inc} decrement={dec} />
        <div className="divider" />
        <Panel name="ADULTS" data={adults} increment={inc} decrement={dec} />
        <div className="divider" />
        <Panel name="CHILDREN" data={children} increment={inc} decrement={dec} />
      </div>
      {count}
    </div>
  );
}

export default App;
