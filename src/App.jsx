
import { useState } from "react";
import {Tweet} from "./Tweet";


const DEFAULT_TWEETS= [
    
        {
        id:0,
        name: "WazzaBee",
        content:"Je vais bien, je suis un NPC d'un jeu video",
        description:"Leeeeeeroy Jenkins",
        like:100
        },
        {
        id:1,  
        name: "JuJu",
        content:"Je suis adorable",
        description:"Of the Nightfall",
        like:10000
        },
        {
        id:2,
        name: "Camille",
        content:"Je suis a pro player",
        description:"The Explorer",
        like:10
        },
        {
        id:3,
        name: "WazzaBee",
        content:"Yeah je vais super bien",
        description:"The Seeker",
        like:5
        }
]

function App(){
    let [ tweets, setTweets] = useState(DEFAULT_TWEETS);
  
    return (
    <div>
    
        <div className="tweet-container"> 
        {tweets.map((tweet) =>{
        return(
        <Tweet 
        key= {tweet.id}
         name= {tweet.name}
         content={tweet.content}
         description={tweet.description}
         like= {tweet.like}
         />
         );
        })}
    </div>
    </div>
        );
}

export default App;