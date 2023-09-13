
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import Friends from './Friends';

function App() {

  function handleClick() {
    alert('Button clicked')
  }

  const handleClick2 = () => {
    alert('button two clicked')
  }

  const addToFive = (num) => {
    alert(num + 5);
  }
  return (
    <>
      <h1>React Core Concepts 2</h1>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={() => { alert('Third Clicked') }}>Third</button>
      {/* //Vejailla */}
      <button onClick={() => addToFive(3)}>Five</button>
    </>
  )
}

export default App
