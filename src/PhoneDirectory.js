import react, { Component } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class PhoneDirectory extends Component {
  constructor() {
    super();
    this.state = {
      subscribersList: [
        {
          id: 1,
          name: "Tsering",

          number: 9971707580,
        },
        {
          id: 2,
          name: "Wangchu",

          number: 9127427442,
        },
      ],
    };
  }
  addSubscriberHandler = (newSubscriber) => {
    let subscriber = this.state.subscribersList;
    if (subscriber.length > 0) {
      newSubscriber.id = subscriber[subscriber.length - 1].id + 1;
    } else {
      newSubscriber.id = 1;
    }
    subscriber.push(newSubscriber);
    this.setState({ subscriberList: subscriber });
    console.log("Phone directory");
    console.log(this.state.subscribersList);
  };

  deleteHandler=(subscriberId)=>{
      let subscriberList=this.state.subscribersList;
      let subscriberIndex=0;
      subscriberList.forEach(function(subscriber,index){
              if(subscriber.id==subscriberId){
                subscriberIndex=index;
              }
      },this)
      let newSubscriber=subscriberList;
      newSubscriber.splice(subscriberIndex,1);
      this.setState({subscribersList:newSubscriber});
  }
  render() {
    let name = "Tsering";
    return (
      <div>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <ShowSubscribers subscribersList={this.state.subscribersList} deleteHandler={this.deleteHandler}/>
              }
            />

            <Route
              path="/addSubscriber"
              element={
                <AddSubscriber
                  addSubscriberHandler={this.addSubscriberHandler}
                 
                />
              }
            />
          </Routes>
        </Router>

        {/* */}
      </div>

      // <Router>
      //     <Route exact path='/' render={{props}= <ShowSubscribers {...props} subscribersList={this.state.subscribersList} /> } />
      // </Router>
    );
  }
}
export default PhoneDirectory;
