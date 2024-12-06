
function App() {

  function handleNameChange(){
    const names = ["Earn", "Grow", "Give"]
    const int = Math.floor(Math.random()*3)
    return names[int]
  }
  return (
    <div className="App">
      Welcome
      <p> Let's {handleNameChange()} money</p>
    </div>
  );
}

export default App;
