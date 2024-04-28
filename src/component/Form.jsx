import { useState } from "react"
import '../component/Style.css'


function Form() {

    const[login,setlogin]= useState(false)

    const[email,setemail] = useState('')
    const[pass,setpass] = useState('')

    let useremail = "radhe@mail.com";
    let password = "123";
    
    function del() {
        if(email== useremail && pass==password){
            setlogin(true)
        }
    }
    

  return (
    <div>
        <div className="contactforms">
            {
                login ?

                <div className="logout">
                    <h1>logout....</h1>

                    {/* <button onClick={()=>setlogin(false)}>logout</button> */}
                    <input type="submit" onClick={()=>setlogin(false)} className="submit" />
                </div>

                :

                <div className="login">
                    <h1>please login....</h1>

                    <form action="">

                        <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="enter email" />
                        {/* <h4>{email}</h4> */}

                        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)} placeholder="enter password" className="border-2 border-black border-solid bg-slate-950"/>
                        {/* <h4>{pass}</h4> */}

                        <input type="submit" onClick={(e)=>del(e.preventDefault())} className="submit" />

                    </form>

                    {/* <button onClick={()=>setlogin(true)}>login</button> */}
                </div>
            }

        </div>
    </div>
  )
}

export default Form