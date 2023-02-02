import { useNavigate } from "react-router-dom";

const Profile = () => {

    const obj = JSON.parse(localStorage.getItem('user'));

    const name = obj.name;
    const email = obj.email;
    const id = obj._id;
    const navigate = useNavigate();

    const deleteUser = async(id) => {
    
    
        let result2 = await fetch(`http://localhost:5000/deleteProducts/${id}`,{
             method:"delete",
             headers:{
             authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
             }
         });
        let result = await fetch(`http://localhost:5000/deleteUser/${id}`,{
            method:'delete',
            headers:{
            authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });


        if(result && result2){
            localStorage.clear();
            navigate('/signup');
        }else{
            alert("Error")
        }
   
        

    }
        
    return(
        <div className="add-product">
            <h1>Name : {name}</h1>
            <h1>E-mail : {email}</h1>
            <button className="app-btn" onClick={()=>{deleteUser(id)}}>Delete Profile</button>
        </div>
    )
}

export default Profile;