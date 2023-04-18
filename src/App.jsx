
import { useState } from "react";
import {TweetForm} from "./TweetForm";
import {TweetList} from "./TweetList";
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

    const useTweets = () => {
        const[ tweets, setTweets] = useState(DEFAULT_TWEETS);

        const addTweet = (tweet) => {  
            setTweets((curr) => {
                const newTweet = {
                    id: curr[curr.length - 1]?.id + 1 || 0,
                    name:tweet.name,
                    content:tweet.content,
                    description:tweet.description,
                    like:0,
                };
             return   [...tweets,newTweet]
            });
        
        };
        const onDelete = (tweetId) => {
            setTweets((curr)=> curr.filter((tweet) => tweet.id !== tweetId ));
        };
    
        const onLike = (tweetId) => {
            setTweets(curr => {
                const copyTweet = [...curr]
                const likedTweet = copyTweet.find((tweet) => tweet.id === tweetId);
                likedTweet.like += 1;
                return copyTweet;
            })
        };
        return { onLike, onDelete, addTweet, tweets} 
    }

function App(){
   const  { onLike, onDelete, addTweet, tweets}  = useTweets();

    return (
    <div>
            <TweetForm onSubmit={addTweet} />
            <TweetList tweets={tweets} onDelete={onDelete} onLike={onLike} />
    </div>
        );
}

export default App;