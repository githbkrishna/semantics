import data from '../../../public/data'
import { Link } from "react-router-dom"
import "../../component/Style.css"


function Partnerlist() {
    // console.log(data);
  return (
    <div className='partnerlist'>
        <h1>Partner list</h1>

        <div>
            {
                data.map((val)=> {
                    return(
                        <div key={val.id} className='prtnrlist'>
                            <Link to={`/partnerlist/partnerdetails/${val.id}`}><h2>{val.id}.  {val.fname}</h2></Link>
                            {/* we can also send /fname in link to like /${val.fname} */}
                        </div>
                    )
                })
            }
            <button className='submit'>
                <Link to="/partners">go back</Link>
            </button>
        </div>
    </div>
  )
}

export default Partnerlist