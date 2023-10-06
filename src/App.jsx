import Search from "./Search"

function App() {

  return (
    <div style = {{display : "flex", justifyContent : "center", flexDirection : "column", alignItems : "center"}}>
      <div style = {{width : "100vw", height : "50px", color : "black", backgroundColor : "grey", display : "flex", flexDirection : "column", alignItems : "center", justifyContent : "center"}}>
        Auto Complete Search Feature Using Random Data.
      </div>

      <Search> </Search>

    </div>
  )
}

export default App
