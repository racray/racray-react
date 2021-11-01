import './App.css';

export default function App(){
  const users =[{name:"Achyut",pic:"http://www."},{name:"Rayed",pic:"http://www."},{name:"Robin",pic:"http://www."},{name:"Akash",pic:"http://www."}]
  return(
    <div className="App">
 
      {users.map((ur)=> <Msg name={ur.name} pic={ur.pic} /> )}
    </div>
  )
}
function Msg({name,pic}) {
  return(
    <div>
      <img src={pic} alt={name}/>
      <h1>{name} 5 </h1>
    </div>
  )

}


