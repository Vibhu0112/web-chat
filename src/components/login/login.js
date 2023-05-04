import React,{useEffect, useRef, useState} from 'react'
import data from './data';
import Hello from '../hello';

function Login(props) {
    const [isLoggedIn,setIsLoggedIn] =useState("");
    const [user,pass] = data;
    // const {username,password} ={user,pass}
    const userRef =useRef();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [errMsg , setErrMsg] = useState("hii")
    const [isNotLoggedIn,setIsNotLoggedIn] =useState("");



    // useEffect(()=> {
    //     userRef.current.focus();
    // },[])

    // useEffect(()=> {
    //     setErrMsg('');
    // }, [username,password])


    function handleErr(){
        setIsNotLoggedIn("false")
      setErrMsg("password and username doesn't match")

}


    function handleLogin(event){
        // console.log(username);
        // console.log(password);
      {data.filter(dat => {
        if((username == dat.username) && (password == dat.password)){
            console.log("in if");
            setIsLoggedIn("true")            
            console.log(isLoggedIn);
            event.preventDefault();

        }
        else{
            handleErr();
        }
       
      }
      )
    event.preventDefault();
    }
    console.log(isLoggedIn);

       
    }

  return (
    <>
    {isLoggedIn ?(
       <Hello/>
    ):( 
   <div className=' inline-grid mt-48 bg-amber-100'>
         {isNotLoggedIn ? {errMsg} : ( 
       <form action="" >
      <div className='h-64 w-64'>
         <input type='text' value={username} 
         ref={userRef}
         className=' mt-5 bg-amber-200 h-10 w-52 border border-black rounded' 
         onChange={(e)=>{setUsername(e.target.value)}} placeholder=" username..."/>
         <input type='password' value={password}
         className=' mt-5 mb-3 bg-amber-200 h-10 w-52 border border-black rounded'
         onChange={(e) => {setPassword(e.target.value)}} placeholder=" password..."/>
         <button type='submit' className=' text-white cursor-pointer list-item mt-5 ml-6  bg-blue-500 h-10 w-52 border border-black rounded' 
         onClick={handleLogin}>Login</button>
      <h1>{user.username}</h1>
      </div>
      </form>
          )}
    </div>
    )}
    </>
  )
}

export default Login