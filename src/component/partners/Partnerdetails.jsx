import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import data from "../../../public/data";
import "../../component/Style.css";

function Partnerdetails() {
  const id = useParams().id;

  const [datainfo, setdatainfo] = useState(data);

  useEffect(() => {
    let filterdata = datainfo.filter((filt) => {
      return filt.id == id;
    });
    setdatainfo(filterdata);
  }, []);
  // })
  // it will give too many re-renders so i have use blank [] as adependency

  const[count,setcount] =  useState(1)

  return (
    <div className="partnerdetails">
      <h1>Partner details {id}</h1>

      <div>
        {
            datainfo.map((val) => {
                return (
                    <div key={val.id} className="prtnrdtls">
                    <h1>
                        <span>Id:</span> {val.id}
                    </h1>
                    <h1>
                        <span>fname:</span> {val.fname}
                    </h1>
                    <h1>
                        <span>lname:</span> {val.lname}
                    </h1>
                    <p>Rating: {count}</p>
                    <div className="rate">
                        <span onClick={()=>setcount(count + 1)}>+</span>
                        <span onClick={()=>setcount(count - 1)}>-</span>
                    </div>
                    </div>
                );
            })
        }
        <button className="submit">
          <Link to="/partnerlist" className="prtrdtla">
            go back
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Partnerdetails;
