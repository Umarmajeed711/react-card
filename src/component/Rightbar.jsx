
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import "./rightbar.css"
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch'
const RightBar = () => {
    return(
        <div className="rightBar">
           <div  className="d-flex justify-content-between">
            <h1>Friends</h1>
           </div>

           <div className="d-flex align-items-center gap-3">
               <input type="text" placeholder='search ' style={{width:"19vw",borderRadius:"5px",boxShadow:"0 0 3px rgba(0,0,0,.5)"}} />
               <FontAwesomeIcon icon={faSearch} />
            </div>
             
           <div className="d-flex flex-column flex-wrap gap-3">
             <div>People you may know</div>

              {/* Friend div */}
              <div className="friendRequest">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&s"  style={{borderRadius:"50%",border:"1px solid black",width:"60px",height:"60px"}}/>
                </div>
                <div className="d-flex justify-content-center column-gap-2 flex-column ">
                    <div><h5>Ashar</h5></div>
                     <div className="d-flex column-gap-2 ">
                        <p style={{backgroundColor:"blue",color:"white",padding:"2px",borderRadius:"5px"}}>Add Friend</p>
                        <p style={{backgroundColor:"gray",padding:"2px",borderRadius:"5px"}}>Remove</p>
                     </div>
                </div>
              </div>


              {/* Friend div */}
              <div className="friendRequest">
                <div>
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&s"  style={{borderRadius:"50%",border:"1px solid black",width:"60px",height:"60px"}}/>
                </div>
                <div className="d-flex justify-content-center column-gap-2 flex-column ">
                    <div><h5>Uzair</h5></div>
                     <div className="d-flex column-gap-2 ">
                        <p style={{backgroundColor:"blue",color:"white",padding:"2px",borderRadius:"5px"}}>Add Friend</p>
                        <p style={{backgroundColor:"gray",padding:"2px",borderRadius:"5px"}}>Remove</p>
                     </div>
                </div>
              </div>

              {/* Friend div */}
              <div className="friendRequest">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&s"  style={{borderRadius:"50%",border:"1px solid black",width:"60px",height:"60px"}}/>
                </div>
                <div className="d-flex justify-content-center column-gap-2 flex-column ">
                    <div><h5>Maqsood</h5></div>
                     <div className="d-flex column-gap-2 ">
                        <p style={{backgroundColor:"blue",color:"white",padding:"2px",borderRadius:"5px"}}>Add Friend</p>
                        <p style={{backgroundColor:"gray",padding:"2px",borderRadius:"5px"}}>Remove</p>
                     </div>
                </div>
              </div>

               {/* Friend div */}
              <div className="friendRequest">
                <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWUjJBF3-HVIQD4wMf392fE8Lz3HaOE__Tg&s"  style={{borderRadius:"50%",border:"1px solid black",width:"60px",height:"60px"}}/>
                </div>
                <div className="d-flex justify-content-center column-gap-2 flex-column ">
                    <div><h5>Arsalan</h5></div>
                     <div className="d-flex column-gap-2 ">
                        <p style={{backgroundColor:"blue",color:"white",padding:"2px",borderRadius:"5px"}}>Add Friend</p>
                        <p style={{backgroundColor:"gray",padding:"2px",borderRadius:"5px"}}>Remove</p>
                     </div>
                </div>
              </div>
           </div>
        </div>
    )
}

export default RightBar;