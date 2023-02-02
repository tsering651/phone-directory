import { Component } from "react";
import Header from "./Header";
import "./ShowSubscribers.css";
import {  Link } from "react-router-dom";

class ShowSubscribers extends Component {
  // let subscriberList=this.state.addSubscribersList;
  // subscriberList.push({newSubscriber});
  // this.setState(subscriberList);

  clickHandler(subscriberId) {
    this.props.deleteHandler(subscriberId);
  }

  render() {
    console.log(this.props.subscribersList);

    return (
      <div>
        <Header heading="Phone Directory" />

        <div className="component-body-container">
          <Link to="/addSubscriber">
            <button className="custom-btn add-btn">Add</button>
          </Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscribersList.map((item) => {
            return (
              <div key={item.id} className="grid-container">
                <span className="grid-item">{item.name}</span>
                <span className="grid-item">{item.number}</span>
                <span className="grid-item action-btn-container">
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.clickHandler.bind(this, item.id)}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ShowSubscribers;
