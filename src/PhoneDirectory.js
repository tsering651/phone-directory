import react,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import ShowSubscribers from './ShowSubscribers';

class PhoneDirectory extends Component{
    constructor(){
        super();
        this.state={
            subscribersList:[
                {
                    id:1,
                    name:"Tsering",
                    
                    number:9971707580
                },
                {
                    id:2,
                    name:"Wangchu",
                    
                    number:9127427442
                }
            ]
        }
    }
    addSubscriberHandler=(newSubscriber)=>{
        let subscriberList=this.state.subscribersList;
        if(subscriberList.length>0){
            newSubscriber.id=subscriberList[subscriberList.length-1].id+1;
        }
        else{
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList:subscriberList});
        console.log("Phone directory");
        console.log(this.state.subscribersList);
    }
    render(){
        return(
            // <AddSubscriber addSubscriberHandler={this.addSubscriberHandler}/>
            <ShowSubscribers subscribersList={this.state.subscribersList}/>
        )
    }
}
export default PhoneDirectory;
