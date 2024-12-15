import { useState } from "react";
import Header from "./component/Header";
import LeftBar from "./component/Leftbar";
import PostCard from "./component/MainSec";
import RightBar from "./component/Rightbar";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {

  const [userName, setUserName] = useState("")
  const [data, setData] = useState(
    [
      {
        profilePic: "https://templates.simplified.co/usetldr/971783/tmpt/2cdc224e-defe-458c-917e-1659ee0f72c6/thumbs/green-national-sports-day-facebook-post-1.png",
        userName: "Sports Club",
        postTime: "4 December at 12:36",
        postText: "🚀 Ready to elevate your Sport career? 🌟 Join us for the ** Sport Professional** Entrance Exam! 🏢✨ 📅 Date: Thursday, 5th December 2024",
        postImage: "https://templates.simplified.co/usetldr/971783/tmpt/2cdc224e-defe-458c-917e-1659ee0f72c6/thumbs/green-national-sports-day-facebook-post-1.png"
      },
      {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJvtYlpDCdqklxzH9oZnmu-1W_oMXqCOJFg&s",
        userName: "1st Step",
        postTime: "1 December at 7:36",
        postText: "🚀 Ready to elevate your HR career? 🌟 Join us for the **Flow HCM Certified HR Professional** Entrance Exam! 🏢✨ 📅 Date: Thursday, 5th December 2024",
        postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMJvtYlpDCdqklxzH9oZnmu-1W_oMXqCOJFg&s"
      },
      {
        profilePic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA95UZxUx58WCMvw6K4YzgA7X32EA9Zbsf8g&s",
        userName: "Quotes world",
        postTime: "24 November at 2:35",
        postText: "🚀 Ready to elevate your HR career? 🌟 Join us for the **Flow HCM Certified HR Professional** Entrance Exam! 🏢✨ 📅 Date: Thursday, 5th December 2024",
        postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA95UZxUx58WCMvw6K4YzgA7X32EA9Zbsf8g&s"
      },
      {
        profilePic: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg",
        userName: "Nature",
        postTime: "13 December at 9:21",
        postText: "🚀 Ready to elevate your HR career? 🌟 Join us for the **Flow HCM Certified HR Professional** Entrance Exam! 🏢✨ 📅 Date: Thursday, 5th December 2024",
        postImage: "https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg"
      },
      {
        profilePic: "https://img.freepik.com/free-psd/travel-tour-social-media-post-instagram-post-web-banner-template_501970-212.jpg",
        userName: "Explore world",
        postTime: "3 December at 4:45",
        postText: "🚀 Ready to elevate your HR career? 🌟 Join us for the **Flow HCM Certified HR Professional** Entrance Exam! 🏢✨ 📅 Date: Thursday, 5th December 2024",
        postImage: "https://img.freepik.com/free-psd/travel-tour-social-media-post-instagram-post-web-banner-template_501970-212.jpg"
      }
    ]
  )

  return(
    <div className="App" >
      <Header />
      <div style={{display: "flex", justifyContent: "center"}}>
        <LeftBar />
        <div className="pt-4 d-flex flex-column row-gap-4">
          {
            data?.map((ele , i) => {
              return(
                <PostCard key={i} data={ele} />
              )
            })
          }
        </div>
        <RightBar />
      </div>
    </div>
  );
}

export default App;