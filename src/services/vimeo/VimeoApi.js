const Client_identifier = "69e8c27c47a17578949a63194d331a87d015babe"
const     personal_access_token = "4a19e42aabfbd1e2e62337f688a2d777"
const      Client_secret = "iqhSj99lYyvnHYfqZCJ03GVTpiMWFbZdKsYCA/7Zs+c/9rId0M/drEqwgnvuCRyZBqecG9UM/LoeHlEWrnMdkmasZYbT65ce3ick3y+4pfjAxd7v9qr8nlWqgLz187iR"



export const getOnAirToday = async url => {
    const API_URL = 
    //`https://api.themoviedb.org/3/${url}?api_key=53939b3da3d575c42c212fb77c52c5a5`;
    `https://api.vimeo.com/categories`
  
    let response = await fetch(
      API_URL, {
        method: 'GET'
      }
      );
    response = response.json();
    return response;
  };
   




  let Vimeo = require('vimeo').Vimeo;
  let client = new Vimeo("{client_id}", "{client_secret}", "{access_token}");

  client.request({
    method: 'GET',
    path: '/tutorial'
  }, function (error, body, status_code, headers) {
    if (error) {
      console.log(error);
    }

    console.log(body);
  })

