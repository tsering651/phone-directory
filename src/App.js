import { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render(){
    let subscribers=[
      { 
        id:1,
        name:"Tsering",
        number:"9127427442"
      },
      { 
        id:2,
        name:"Wangchu",
        number:"9971707580"
      }

    ]
    
    return (
      <div>
         <Header/>
         
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          
          {subscribers.map(item=>{
              return <div key={item.id}className="grid-container">
                      <span className="grid-item">{item.name}</span>
                      <span className="grid-item">{item.number}</span>
                      </div>
          })}
          </div>
       

        
      </div>
    );

  }
 
}

export default App;
