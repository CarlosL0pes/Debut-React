export function Tweet({id,name,content,description,like, onDelete}) {
    const onLike = () => {

    };
    return (
        <div className="tweet">
            <button onClick={()=>onDelete(id)} className="delete" > X</button>
            <h3>Name: {name}</h3>
            <p>Content: {content}</p>
            <p>Description: {description}</p>
            <button onClick={ () => onLike() }>{like}</button>
        </div>
    );
};