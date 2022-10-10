import { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";



class ShowSubscribers extends Component {

  
  // let subscriberList=this.state.addSubscribersList;
  // subscriberList.push({newSubscriber});
  // this.setState(subscriberList);

  clickHandler(message){
    alert(message);
  }


  render(){
    // let subscribers=[
    //   { 
    //     id:1,
    //     name:"Tsering",
    //     number:"9127427442"
    //   },
    //   { 
    //     id:2,
    //     name:"Wangchu",
    //     number:"9971707580"
    //   }

    // ]
    
    return (
      <div>
         <Header heading="Phone Directory" />
         
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          
          {this.props.subscribersList.map(item=>{
              return <div key={item.id}className="grid-container">
                      <span className="grid-item">{item.name}</span>
                      <span className="grid-item">{item.number}</span>
                      <span className="grid-item action-btn-container">
                        <button className="custom-btn delete-btn" onClick={this.clickHandler.bind(this,"okkk")}>Delete</button>
                      </span>
                     
                      </div>
          })}
          </div>
       

        
      </div>
    );

  }
 
}

export default ShowSubscribers;
