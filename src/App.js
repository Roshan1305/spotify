import React,{ useEffect,useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';//wrapper of spotify where information can be collected
import { useDataLayerValue } from './DataLayer';
import Player from "./Player";
const spotify=new SpotifyWebApi();



function App() {

  //const [token,settoken]=useState(null);
  const [{ user,token,playlists }, dispatch]=useDataLayerValue();
  


  useEffect(()=>{    //useEffect is used to run a code after a specific condition
    const hash=getTokenFromUrl();
    window.location.hash="";
    let _token = hash.access_token;
    console.log(_token);
    
    if(_token){
    //  settoken(_token);
    spotify.setAccessToken(_token);//the access token is given to spotify to safely exchange data between react and spotify
     
      dispatch({
        type:"SET_TOKEN",
        token:_token
      });
    //  console.log("h1",_token);
      
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists)=>{
        dispatch({
          type:"SET_PLAYLISTS",
          playlists:playlists

        });
      });
      spotify.getPlaylist('37i9dQZEVXcNC9QFyvN7Zx').then(response=>{
        dispatch({
          type:"SET_DISCOVER_WEEKLY",
          discover_weekly: response

        })
      })
    }
  }, []);  //[] to run only once
  console.log("h1");
  console.log(token);
  console.log(playlists);
  console.log(user); 
  return (
    <div className="App">
      {
        token?<Player spotify={spotify}/>:<Login/>
      }
    </div>
  );
}

export default App;
