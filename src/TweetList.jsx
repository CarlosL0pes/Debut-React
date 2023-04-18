import {Tweet} from "./Tweet";

export function TweetList({tweets, onDelete, onLike}) {

    if(!tweets || tweets.length === 0) {
        return " No tweets found in this page!"
    }

    return (
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
         onDelete = { onDelete}
        onLike={ onLike}
         />
         );
        })}
    </div>
    );
}