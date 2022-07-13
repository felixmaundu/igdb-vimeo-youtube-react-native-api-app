// https://www.googleapis.com/youtube/v3

// /search
// https://www.youtube.com/embed/${video.id.videoId}
// params:{
//     part:'snippet',
//     maxResults:5,
//     key:Key
// }
//https://www.googleapis.com/youtube/v3/playlistItems
//https://www.googleapis.com/youtube/v3/playlists

//key AIzaSyCcqKUoT2fxC0IO2-Ei-YVDIiDN5qckM-8 




export const getYoutube = async url => {
    const API_URL = 
    `https://www.googleapis.com/youtube/v3/${url}?key=AIzaSyCcqKUoT2fxC0IO2-Ei-YVDIiDN5qckM-8&maxResults=50`;
    //`https://api-v3.igdb.com/${url}`; //games

    //api.igdb.com/v4/covers
 
    let response = await fetch(
        API_URL, {
        method: 'GET',
        // params:{
        //         part:'snippet',
                
        //         key:'AIzaSyCcqKUoT2fxC0IO2-Ei-YVDIiDN5qckM-8'
        //     }
        // headers: {
        //     'Accept': 'application/json',
        //     'Client-ID': 'nnwcbehargneibi9tyuxrpcnc3jfoj',
        //     'Authorization': 'Bearer 4jkb50c4yzquwiaz89bw0t2rxi10lc',
        // },
     }
    );
    response = response.json();
    return response;
};
