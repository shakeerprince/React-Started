class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            userInfo:{
                name:"Dummy",
                location: "Default",
                avatar_url:" http://dummy "
            }
        };
    }

    async componentDidMount(){
        const data =  await fetch('https://api.github.com/users/shakeerprince')

        const json = await data.json();

        this.setState({
            userInfo : json,
        })
    }



    render(){
        return(
            <div user-card>
              
         
        <h2>Name : Shaker</h2>
        <h3>Location : Hyderabad</h3>
        <h3>Contact : hydrashaker@gmail.com</h3>
            </div>
        )
    }
} 

export default UserClass;
