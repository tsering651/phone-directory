import React,{ Component } from "react";
import Header from "./Header";
import './addSubscriber.css'
import PhoneDirectory from "./PhoneDirectory";

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            phone:''
        }
    }
    inputChangeHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);


    }
    formSubmittedHandler=(e)=>{
          e.preventDefault();
          this.props.addSubscriberHandler(this.state);
          this.setState({id:0,name:'',phone:''});

    }
    render(){
        const {name,phone}=this.state;
        return(
            <div>
                <Header heading="Add Subscribers"></Header>
                <div className="component-body-container">
                    <button className="custom-btn">Back</button>
                    <form className="subscriber-form" onSubmit={this.formSubmittedHandler.bind(this)}>
                      <label htmlFor="name" className="label-control">Name:</label><br/>
                      <input id="name" className="input-control" type="text" name="name" onChange={this.inputChangeHandler}></input><br/><br/>
                      <label htmlFor="phone" className="label-control" >Phone:</label><br/>
                      <input id="phone" className="input-control" name="phone" type="number"onChange={this.inputChangeHandler}></input><br/><br/>
                      <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
                            <span className="subscriber-info">Name:{name}</span><br/>
                            <span className="subscriber-info">Phone:{phone}</span>
                      </div>
                      <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                    
                </div>
            </div>
        )
    }

}
export default AddSubscriber;