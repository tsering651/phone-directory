import React,{ Component } from "react";
import Header from "./Header";
import './addSubscriber.css'
// import PhoneDirectory from "./PhoneDirectory";
// import { useNavigate } from 'react-router-dom';
import{Link} from 'react-router-dom'
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class AddSubscriber extends Component{
    constructor(){
        super();
        this.state={
            id:0,
            name:'',
            number: ''
        }
    }
    inputChangeHandler=(e)=>{
        const state=this.state;
        state[e.target.name]=e.target.value;
        this.setState(state);
        console.log(this.state);


    }
    // const navigate=this.useNavigate();
    formSubmittedHandler=(e)=>{
          e.preventDefault();
          this.props.addSubscriberHandler(this.state);
          this.setState({id:0,name:'',number:''});
        //   this.navigate('/');


    }
    render(){
        const {name,number}=this.state;
        return(
            <div>
                <Header heading="Add Subscribers"></Header>
                <div className="component-body-container">
                   <Link to='/' ><button className="custom-btn">Back</button></Link>
                    <ValidatorForm className="subscriber-form" onSubmit={this.formSubmittedHandler.bind(this)}>
                      {/* <label htmlFor="name" className="label-control">Name:</label> <br/>
                      <input id="name" className="input-control" type="text" name="name" onChange={this.inputChangeHandler}></input> */}
                      <TextValidator
                      id="name" 
                       type="text"
                       name="name" 
                       value={this.state.name}
                       onChange={this.inputChangeHandler} 
                       validators={['required']}
                       errorMessages={['Name cannot be empty']}
                       label="Enter your name"


                      
                      >

                      </TextValidator>
                      
                      <br/><br/>


                      {/* <label htmlFor="phone" className="label-control" >Phone:</label><br/>
                      <input id="phone" className="input-control" name="number" type="number"onChange={this.inputChangeHandler}></input> */}

                      <TextValidator
                      
                      id="phone" 
                      name="number"
                      type="number"
                      value={this.state.number}
                      onChange={this.inputChangeHandler}
                      validators={['required']}
                      errorMessages={['Number cannot be empty']}
                      label="Enter your Phone Number"
                      >

                      </TextValidator>
                      
                      <br/><br/>
                      <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to be added</span><br/>
                            <span className="subscriber-info">Name:{name}</span><br/>
                            <span className="subscriber-info">Phone:{number}</span>
                      </div>
                      <button type="submit" className="custom-btn add-btn">Add</button>
                    </ValidatorForm>
                    
                </div>
            </div>
        )
    }

}
export default AddSubscriber;