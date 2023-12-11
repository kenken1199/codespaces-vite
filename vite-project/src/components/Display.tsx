interface User {
    users:[{
    id : number ;
    userId : number ;
    title : string ;
    completed : boolean ;
    }]
  };

function Display(props:User) {
    return(
    <>
    <h1>JSON-APIテスト</h1>
          <hr/>
          {props.users.map((userdata) => (
            <div key={userdata.id}>
              <h2>user-id:{userdata.userId}</h2>
              <h3>title:{userdata.title}</h3>
              <hr/>
              </div>
          ))}
    </>
    )
}

export default Display