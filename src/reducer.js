export const initialState ={
    user:null,
    playlists:[],
    playing:false,
    item:null,
   // token:'BQDe1ZnxNfA5yN3FjfXiiaLQitil-06vtSmPaO7qZsXQ3huwI-c3OksPIj0Qz6h27l_jyQ-EFmkeZCKjG3J2Lr56REGVheg4DQd5n05WW5Kr0mTtL3r6Hr6K22wKle6h_sLwkWv_dd9N4Ykc7ghjRzgrd-rMH-ZpTmo52P5bKaBac1t5pMz4'
};

const reducer = (state,action) => {
console.log(action);
switch(action.type){
    
    case"SET_USER":
    return{
        ...state,
        user:action.user
    }
    case"SET_TOKEN":
    return{
        ...state,
        token:action.token
    }
    case "SET_PLAYLISTS":
    return{
        ...state,
        playlists:action.playlists
    }        
    case "SET_DISCOVER_WEEKLY":
        return{
            ...state,
            discover_weekly:action.discover_weekly
        }
    default:return state;

}
}

export default reducer;