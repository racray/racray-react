import './App.css';

export default function App(){
  // const users =[{name:"Achyut",pic:"http://www."},{name:"Rayed",pic:"http://www."},{name:"Robin",pic:"http://www."},{name:"Akash",pic:"http://www."}];
  const movies = [{title:"Fight Club", picture:"http://cdn.shopify.com/s/files/1/0151/0741/products/PGX0013_1024x1024.jpg?v=1578633303", rating: 8.8},
  {title:"Avengers: End Game", picture:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/d1pklzbuyaab0la-1552597012.jpg", rating: 8.4},
  {title:"The Prestige", picture:"https://alternativemovieposters.com/wp-content/uploads/2021/02/FaronFlood_ThePrestige.jpg", rating: 8.5},
  {title:"Interstellar", picture:"https://i.pinimg.com/originals/26/ee/c3/26eec32582fabc16d00cb64f37f2a393.jpg", rating: 8.6},
  {title:"Avatar", picture:"https://movieposters2.com/images/670908-b.jpg", rating: 7.8},
  {title:"Inception", picture:"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg", rating: 8.8}];
  return(
    <div className="App">
          {/* {users.map((ur)=>  <Msg name={ur.name} pic={ur.pic}/>  )} */}
          {movies.map((mv)=>  <Mvs title={mv.title} picture={mv.picture} rating={mv.rating}/>  )}

    </div>
  )
}
// function Msg({name,pic}) {
//   return(
//     <div>
//       <img src={pic} alt={name}/>
//       <h1>{name} 5 </h1>
//     </div>
//   )
// }

function Mvs({title,picture,rating}) {
  return (
    <div>
    <h1> {title} </h1>
    <img className="movie-picture" src={picture} alt={title} />
    <h3> Rating: {rating} </h3>
    </div>
    )
}
