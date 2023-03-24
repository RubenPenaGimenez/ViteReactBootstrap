import reactLogo from './assets/skull.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <div className="App">
      <div>
        <a target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Rubén Peña Giménez student from 2GS DAW</h1>
      <br></br>
      <button type="button" class="btn btn-danger spinner"><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true">
        </span>&nbsp;Este botón no hace nada es inútil, peroooo funciona el bootstrap</button>
    </div>
  )
}

export default App
