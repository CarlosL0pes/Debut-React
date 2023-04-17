
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
    const[ tweets, setTweets] = useState(DEFAULT_TWEETS);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name= event.target.name.value;
        const content= event.target.content.value;
        const description= event.target.description.value;

        const newTweet = {
            id: tweets[tweets.length-1]?.id +1 ?? 0,
            name,
            content,
            description,
            like:0,
        }
        setTweets([...tweets,newTweet]);
    };

    const onDelete = (tweetId) => {
        setTweets((curr)=> curr.filter((tweet) => tweet.id !== tweetId ));
    };
    return (
    <div>
            <form  onSubmit={handleSubmit} className="tweet-form">
                <h1> New Tweet</h1>
                <input placeholder="Name" type ="text" name="name"/>
                <input placeholder="Content" type ="text" name="content"/>
                <input  placeholder="Description" type ="text" name="description" />
                <input type="submit" />
            </form>
        <div className="tweet-container"> 
        {tweets.map((tweet) =>{
        return(
        <Tweet 
        key= {tweet.id}
        id={tweet.id}
         name= {tweet.name}
         content={tweet.content}
         description={tweet.description}
         like= {tweet.like}
         onDelete = { (id) => {
                onDelete(id);    
         }}
         />
         );
        })}
    </div>
    </div>
        );
}

export default App;