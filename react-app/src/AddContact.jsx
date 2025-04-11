function AddContact()
{
  state ={
    name:"",
    email:""
  };
  return (

    <>
    
      <div className="AddContact">
        <h2>ADD CONTACT : </h2>
        <form className="form">
        <div className="name">
           <label>Name : </label>
           <input type="text" name="name" placeholder="Type your name here" onChange={(e)=>
     this.setState({name : e.target.value})
           }></input>
        </div>

        <div className="email">
           <label>Email : </label>
           <input type="email" name="email" placeholder="Type your email here"></input>
        </div>
          <button className="btn">Add</button>
        </form>
      </div>
    </>
  );
}
export default AddContact;