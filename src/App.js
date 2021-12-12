import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faEnvelope, faQuestionCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect, TextInput, form} from 'react';
import ScrollToTop from "react-scroll-to-top";
import {
   FacebookShareButton,
   EmailShareButton,
 } from "react-share";


function Recomend() {

   const [rating, setRating] = useState(1) 
   const [search, setSearch] = useState("");
   const [description, setDescription] = useState("");
   const [question, setQuestion] = useState("");

   const searchOnChange = (e) => {
      setSearch(e.target.value);
    }

   const describeOnChange = (e) => {
      setDescription(e.target.value);
    }

   const questionOnChange = () => {
      const DEL1 = "Here you can search for movies and then save them in your list. You can also review movies and share them with family and friends via email or Facebook. On the home page, you can be inspired by the most popular movies right now. Click on a specific movie to get more information about it. There are two more icons here. Click on the star icon to recommend and review the movie to friends and family. Click the list icon to add the movie to your list. If you click on the magnifying glass in the menu bar, you will come to the search page where you can search for a movie using the movie title. Click on the movie to get more information about it, add it to your list or review it. From the user icon in the menu bar, you can reach your profile. Here you can access your list of saved movies. ";
      const DEL2 = "Now you have everything you need to plan all movie nights in the future! Do not forget the popcorn! ";
      const DEL3 = "EVERY TIME I GO TO A MOVIE, IT'S MAGIC, NO MATTER WHAT THE MOVIE'S ABOUT.";
      const DEL4 = "- Steven Spielberg";
     setQuestion(DEL1 + "\n\n" + DEL2 + "\n\n\n" + DEL3 + "\n" + DEL4);
   }


  return (
   <>

<ScrollToTop smooth color="#000000" />

  <div className="App">
      
      <div classname="App-content">
      
      <header className="App-header">
        <h2> Recomend a movie </h2>
      </header>

      <body>

  <button className="info">
   <FontAwesomeIcon className="Questionmark" icon={faQuestionCircle} color="yellow" onClick={() => questionOnChange()}  />
  </button>

    <div className="question">
     {question}
    </div>

      <div className="text"> 

        <p> Movie: </p>

        <input className="Search" placeholder="Add the movie title..." value={search} onChange={searchOnChange}/>

        <p> Rate: </p>

         <div className="star">
            <FontAwesomeIcon icon={faStar} color={rating>0 ? "yellow": "grey"} onClick={()=> setRating(1)}/>
            <FontAwesomeIcon icon={faStar} color={rating>1 ? "yellow": "grey"} onClick={()=> setRating(2)}/>
            <FontAwesomeIcon icon={faStar} color={rating>2 ? "yellow": "grey"} onClick={()=> setRating(3)}/>
            <FontAwesomeIcon icon={faStar} color={rating>3 ? "yellow": "grey"} onClick={()=> setRating(4)}/>
            <FontAwesomeIcon icon={faStar} color={rating>4 ? "yellow": "grey"} onClick={()=> setRating(5)}/>
         </div>

        <p> Give your thoughts on this movie: </p>

        <textArea className="Description" placeholder="Add a description..." value={description} onChange={describeOnChange}/>


    <div className="dela">
         <h1>share this recomendation:</h1>


      <div className="share">
         <div className="shareFacebook">
            <FacebookShareButton quote={"Hejsan, jag har sett den här filmen:  " 
            +  search + "\n\n" 
            + "betyg: " + rating + "/5 stjärnor" + "\n\n" 
            + "Beskrivning: " + description + "\n\n" + "Gör din rekomendation du också men appen BioBuddy:"}

            url={"https://github.com/Mosmelon/Projekt-bb/blob/master/src/App.js"}>
               <FontAwesomeIcon icon={faFacebookSquare} color={"grey"}></FontAwesomeIcon> </FacebookShareButton>
         </div>

         
         <div className="shareEmail">
            <EmailShareButton subject={"Filmrekommendation"} 
            body={"Hejsan, jag har sett den här filmen:  " 
            +  search + "\n\n" 
            + "betyg: " + rating + "/5 stjärnor" + "\n\n" 
            + "Beskrivning: " + description + "\n\n" + "Gör din rekomendation du också men appen BioBuddy:"}
            separator={"\n"}
            url={"https://github.com/Mosmelon/Projekt-bb/blob/master/src/App.js"}> 
            <FontAwesomeIcon icon={faEnvelope} color={"grey"}></FontAwesomeIcon> </EmailShareButton>
         </div>

      </div>


      <p> . </p> <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p> 
      <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p>  <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 
      <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 
      <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 
      <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 
      <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 
      <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> <p> . </p> 

    </div>

 
     </div>   
      </body>
    </div>
  </div>

  </>
  );
}

  export default Recomend;
