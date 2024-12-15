
import './leftbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGreaterThan, faLayerGroup } from '@fortawesome/free-solid-svg-icons'



const LeftBar = () => {
    return(
        <div  className='leftBar'>
            

             {/* profile div */}
            <div className='profileDiv p-2'>
            <div className="d-flex column-gap-2 align-items-center justify-content-between ">

                <div className="d-flex column-gap-2 align-items-center mt-3 ">
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&s"  style={{borderRadius:"50%",border:"1px solid black",width:"40px",height:"40px"}}/>
                 <h5>Muhammad Umar</h5>
                 </div>

                 <div>
                    {/* Icons for dropdown */}
                    <FontAwesomeIcon icon={faGreaterThan} />
                 </div>

            </div>

            <hr />
            <div className="d-flex justify-content-between column-gap-3 align-items-center align-content-center">
                <div>
                    <h4 style={{border:"1px solid black", borderRadius:"50%", width:"30px", height:"30px",textAlign:"center"}}>+</h4>
                </div>
                <div>
                    <h5 style={{marginBottom:"0"}}>Create new profile or Page</h5>
                    <p>switch between profile with one login</p>
                </div>
            </div>
            </div>


            {/* option cards */}

            <div className="d-flex justify-content-center flex-column gap-4">

            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Memories</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Saved</h6>
                </div>
            </div>    
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Groups</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Video</h6>
                </div>
            </div>   
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Marketplace</h6>
                </div>
                <div className="box">
                    <h4>🚀</h4>
                    <h6>Find friends</h6>
                </div>
            </div>   
            <div className="d-flex column-gap-2">
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Feeds</h6>
                </div>
                <div className="box" >
                    <h4>🚀</h4>
                    <h6>Events</h6>
                </div>
            </div>   

            </div>

        </div>
    )
}

export default LeftBar;