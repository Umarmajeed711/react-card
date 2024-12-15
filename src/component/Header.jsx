import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAssistiveListeningSystems, faBell, faEllipsisV, faFileVideo, faHamburger, faHomeUser, faLayerGroup, faMobileScreenButton, faVideo, faVideoCamera } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons/faHome'
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons/faPhotoVideo'
import { faBurger } from '@fortawesome/free-solid-svg-icons/faBurger'
import { faLineChart } from '@fortawesome/free-solid-svg-icons/faLineChart'
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay'
import { faClose } from '@fortawesome/free-solid-svg-icons/faClose'

const Header = () => {
    return(
        <div style={{height: 65, display: "flex", alignItems: "center", justifyContent: "space-between",top:"0",position:"-webkit-sticky",position:"sticky",zIndex:"1" ,padding:"0 7px", backgroundColor:"white" ,borderBottom:"2px solid rgb(243, 232, 232)"}}>
            <div className="d-flex column-gap-2 align-items-center" >
                 <h2 style={{color:"blue"}}>Facebook</h2>
            </div>
            <div className="d-flex column-gap-2" style={{marginRight:"80px"}}>
                            
                        <div className='d-flex column-gap-4 '  >   
                            <FontAwesomeIcon icon={faHome} style={{fontSize:"20px"}} />
                            <FontAwesomeIcon icon={faPlay}  style={{border:"2px solid black",padding:"1px 5px"}}/>
                            <FontAwesomeIcon icon={faHomeUser}  style={{fontSize:"20px"}}/>
                            <FontAwesomeIcon icon={faBell} style={{fontSize:"20px"}} />
                         </div>
            </div>
            <div className="d-flex column-gap-2">
                         <div className='d-flex column-gap-3' > 
                            <FontAwesomeIcon icon={faLayerGroup} style={{fontSize:"20px"}} />
                            <FontAwesomeIcon icon={faEllipsisV} style={{fontSize:"20px"}}/>
                            </div>
            </div>
        </div>
    )
}

export default Header;