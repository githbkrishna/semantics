import React, { useState } from 'react'
import { useEffect } from 'react'
import '../DevFetch/Fetch.css'

function FetchComp() {

    const[fdata,setfdata] = useState([])
    
    // get method 
    // console.log(fetch('http://localhost:8000/devlopres'));
    useEffect(()=>{
        fetch('http://localhost:8000/devlopres').then((result)=>{
            // console.log(result);
            // console.log(result.json())
            result.json().then((respo)=>{
                // console.log(respo)
                setfdata(respo)
                // console.log(setfdata(respo));
                console.log(fdata);
            })
        })
    },[])

    const[fullname,setfullname]= useState("")
    const[userid,setuserid]= useState("")
    const[age,setage]= useState("")
    const[role,setrole]= useState("")
    const[imgurl,setimgurl]= useState("")

    function sub() {
        let data = {fullname, userid, age, role,imgurl}
        console.log(data);

        refresh()
    }

    function refresh() {
        setfullname("")
        setage("")
        setimgurl("")
        setrole("")
        setuserid("")
    }

  return (
    <div className='mainfetchcomp'>
        <h1>FetchComp</h1>
        
        <div className='fetchgrid'>
            {
                fdata.map((val)=>{
                    return(
                        <div className='gridcont'>
                            <div>
                                <img src={val.imgurl} alt="" />
                            </div>
                            <p><span>UserId:</span> {val.userId}</p>
                            <p><span>Fullname:</span> {val.fullname}</p>
                            <p><span>Age:</span> {val.age}</p>
                            <p><span>Role:</span> {val.role}</p>
                            {/* <p><span>Desc:</span> {val.desc}</p> */}
                        </div>
                    )
                })
            }
        </div>

        <div className="form">
            <input type="text" value={imgurl} onChange={(e)=>{setimgurl(e.target.value)}}    placeholder='enter img'/> <br /><br />
            <input type="text" value={userid} onChange={(e)=>{setuserid(e.target.value)}}    placeholder='enter uerid'/> <br /><br />
            <input type="text" value={fullname} onChange={(e)=>{setfullname(e.target.value)}}    placeholder='enter fullname'/> <br /><br />
            <input type="text" value={age} onChange={(e)=>{setage(e.target.value)}}     placeholder='enter age'/> <br /><br />
            <input type="text" value={role} onChange={(e)=>{setrole(e.target.value)}}   placeholder='enter role'/> <br /><br />

            <button onClick={sub}>submit</button>
        </div>

    </div>
  )
}

export default FetchComp