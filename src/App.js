import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import Formcomp from './Component/Form/Form'
// import Testcomp from './Testcomponent/Test'
import Newcomp from './Testcomponent/Newcomp/Newcomp'

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-4"></div>
          <div className="col-sm-4">
        {/* <Formcomp /> */}
        {/* <Testcomp /> */}
        <Newcomp />
        </div>
      </div>    
    </div>
   </div>

  )}

export default App
