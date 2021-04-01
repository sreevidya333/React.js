import logo from './logo.svg';
import './App.css';

//  these r functional-components
// import First from './component/First-component/first'
// import Second from './component/Second-component/second'

  //  this is page
// import Third from './component/Third-component/third'
// import Fourth from './component/Fourth-component/fourth'
// import Fifth from './component/Fifth-component/fifth'
// import Sixth from './component/Sixth-component/sixth'


  //  this is Card
import '../node_modules/bootstrap/dist/css/bootstrap.css'
// import Navcomp from './Cards/Navcomponent/Navcomp'
// import Bodycomp from './Cards/Bodycomponent/Bodycomp'

// this is card with image
import Image from './Image-cards/Image-card'

function App() {
  return (
    <div className="App">
      {/* <First />
      <Second /> */}


      {/* <Third />
      <Fourth />
      <Fifth />
      <Sixth /> */}
      

      {/* <Navcomp />
      <div className="container">
       <div className="row">
        <div className="col-sm-3">
      <Bodycomp title="React.js" footer="A2N acadamy"/>
      </div>
      <div className="col-sm-3">
        <Bodycomp title="angular.js" footer="A2Z academy"/>
      </div>
      <div className="col-sm-3">
        <Bodycomp title="viu js" footer="A2B academy"/>
      </div>
      <div className="col-sm-3">
        <Bodycomp title="Java script" footer="A2w academy"/>
      </div>
       </div>
       </div>
 */}

       <Image />


      </div>
  );
}
export default App
