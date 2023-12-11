function App(){

    const tittle = 'Block Post';
    const para = 'I am block post component';
    const arr = [
        {id:1,'name':'blog 1'},
        {id:2,'name':'blog 2'},
        {id:3,'name':'blog 3'},
    ];
    const loading = false;
    const showComments = true;
    const comments = (
        <div className="comments">
        <h3>posts:({arr.length})</h3>
        <ul>
        {arr.map((post,index)=>
            <li key={index}> {post.name}</li>
            )}     
        </ul>
    </div>
    )
    if(loading) return (<h1>Loading...</h1>)
    return(
        <div className="container">
        <h1>{tittle.toUpperCase()}</h1>
        <p>{para}</p>
         {showComments && comments}
        </div>
    )
}

export default App;