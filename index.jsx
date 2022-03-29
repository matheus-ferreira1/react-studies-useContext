const { useEffect, useState, createContext, useContext } = React;

const userContext = createContext();

function Component1() {
  const [user, setUser] = useState('')

  return (
    <userContext.Provider value={user}>
      <input 
        type="text"
        placeholder="Insira seu nome"
        value={user}
        onChange={event => setUser(event.target.value)}
       />
       <button onClick={() => {setUser('')}}>
         Limpar
        </button>
      <h1>Component 1. Hello, {user}!</h1>
      <Component2 />
    </userContext.Provider>
  )
}

function Component2() {
  return (
    <div>
      <h2>Component 2</h2>
      <Component3 />
    </div>
  )
}

function Component3() {
  return (
    <div>
      <h3>Component 3</h3>
      <Component4 />
    </div>
  )
}

function Component4() {
  return (
    <div>
      <h4>Component 4</h4>
      <Component5 />
    </div>
  )
}

function Component5() {
  return (
    <div>
      <h5>Component 5</h5>
      <Component6 />
    </div>
  )
}

function Component6() {
  const user = useContext(userContext)
  return (
    <div>
      <h6>Component 6. Hello again, {user}!</h6>
    </div>
  )
}

ReactDOM.render(<Component1 />, document.getElementById("root"));