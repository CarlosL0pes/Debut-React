export function TweetForm({onSubmit}){
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const name= event.target.name.value;
        const content= event.target.content.value;
        const description= event.target.description.value;

        const newTweet = {
            
            name,
            content,
            description,
            like:0,
        }
        onSubmit(newTweet);
    };
    return (
        <form  onSubmit={handleSubmit} className="tweet-form">
        <h1> New Tweet</h1>
        <input placeholder="Name" type ="text" name="name"/>
        <input placeholder="Content" type ="text" name="content"/>
        <input  placeholder="Description" type ="text" name="description" />
        <input type="submit" />
    </form>
    );
}