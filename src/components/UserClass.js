class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            count2: 2,
        };
    }
    render(){
        return(
            <div user-card>
         <h1>count : {count}</h1>       
         <h1>count2 : {count2}</h1>       
         <button onClick={()=>{
            this.setState({
                count: this.state.count + 1
            })
         }}>Click</button>
        <h2>Name : Shaker</h2>
        <h3>Location : Hyderabad</h3>
        <h3>Contact : hydrashaker@gmail.com</h3>
            </div>
        )
    }
} 

export default UserClass;
