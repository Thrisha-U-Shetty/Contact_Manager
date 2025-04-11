import React from "react";
class AddContact extends React.Component 
{
  state = {
    name:"",
    email:"",
  };

   add = (e)=>
  {
     e.preventDefault();

     if(this.state.name == "" || this.state.email == "")
     {
         alert("All the fields are mandatory !!")
         return
     }
     this.props.addContactHandler(this.state)
     this.setState({name :"", email:""});
  }
  render(){
  return (
    
      <div className="AddContact">
        <h2>ADD CONTACT : </h2>
        <form className="form" onSubmit={this.add}>
        <div className="name">
           <label>Name : </label>
           <input type="text" name="name" placeholder="Type your name here" value={this.state.name} onChange={(e)=>
     this.setState({name : e.target.value})}></input>
        </div>

        <div className="email">
           <label>Email : </label>
           <input type="email" name="email" placeholder="Type your email here" value={this.state.email} onChange={(e)=>
     this.setState({email : e.target.value})}></input>
        </div>
          <button className="btn">Add</button>
        </form>
      </div>
   
  );
}
}
export default AddContact;