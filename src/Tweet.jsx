export function Tweet({name,content,description,like}) {
    const onLike = () => {

    };
    return (
        <div className="tweet">
            <h3>Name: {name}</h3>
            <p>Content: {content}</p>
            <p>Description: {description}</p>
            <button onClick={ () => onLike() }>{like}</button>
        </div>
    );
};