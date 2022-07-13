const IgdbApiKey = "1d2f2ddd5bccde50d26b0fd178c09be7"


export const getIgdbGames = async url => {
    const API_URL = `https://api.igdb.com/v4/${url}`


    let response = await fetch(
        API_URL, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/Json',
            'Client-ID': 'nnwcbehargneibi9tyuxrpcnc3jfoj',
            Authorization: 'Bearer 4jkb50c4yzquwiaz89bw0t2rxi10lc',
        },
        
      // data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
       //data: "fields id,artworks,bundles,category,checksum,collection,cover.*,created_at,first_release_date,follows,game_engines.*,game_modes.*,genres.*,hypes,keywords.*,multiplayer_modes,name,parent_game, platforms.*, platforms.platform_logo.*,player_perspectives.*,popularity,rating,rating_count,screenshots.*, slug,standalone_expansions,status,storyline,summary,tags,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos.*;sort popularity desc;"
       //data: "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
   
        body:
        "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
  
      
    }
    );
    response = response.json();
    return response;
};





///////////////////////////////////////////////////

// [
//     {
//         "id": 33260,
//         "category": 0,
//         "cover": 129073,
//         "created_at": 1495739021,
//         "external_games": [
//             5526,
//             107828,
//             1927694
//         ],
//         "first_release_date": 1459987200,
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             15,
//             32
//         ],
//         "name": "The Fifth Expedition",
//         "platforms": [
//             3,
//             6
//         ],
//         "release_dates": [
//             77732,
//             77733
//         ],
//         "screenshots": [
//             58357,
//             58358,
//             58359,
//             58360,
//             58361
//         ],
//         "similar_games": [
//             25311,
//             25640,
//             34024,
//             36553,
//             37419,
//             65827,
//             111043,
//             111130,
//             113895,
//             118091
//         ],
//         "slug": "the-fifth-expedition",
//         "status": 4,
//         "summary": "Guide your team of explorers into the treacherous depths of an ancient machine. \n \nOn a mission to restore the old mechanisms to life and to save your people on the surface, who rely on the age old construct for food and shelter.",
//         "tags": [
//             1,
//             268435471,
//             268435488
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1643442946,
//         "url": "https://www.igdb.com/games/the-fifth-expedition",
//         "websites": [
//             33480,
//             33481
//         ],
//         "checksum": "bddffda7-802c-e138-9939-9f961ee98579"
//     },
//     {
//         "id": 40104,
//         "category": 0,
//         "created_at": 1498435200,
//         "external_games": [
//             20127,
//             1988884
//         ],
//         "first_release_date": 536457600,
//         "genres": [
//             5
//         ],
//         "name": "Dogou Souken",
//         "platforms": [
//             52
//         ],
//         "release_dates": [
//             91007
//         ],
//         "similar_games": [
//             12364,
//             27270,
//             43367,
//             103281,
//             103292,
//             103298,
//             103301,
//             105049,
//             106805
//         ],
//         "slug": "dogou-souken",
//         "summary": "An overhead-view shoot'em up game.",
//         "tags": [
//             268435461
//         ],
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/dogou-souken",
//         "checksum": "5e7446ff-58d9-e744-f0d3-5e10241304c1"
//     },
//     {
//         "id": 85031,
//         "age_ratings": [
//             37944
//         ],
//         "category": 0,
//         "cover": 61466,
//         "created_at": 1517392813,
//         "external_games": [
//             216805,
//             1969751,
//             2005770
//         ],
//         "first_release_date": 1404345600,
//         "genres": [
//             9
//         ],
//         "involved_companies": [
//             130531,
//             130532
//         ],
//         "name": "City Mysteries",
//         "platforms": [
//             37
//         ],
//         "release_dates": [
//             138333
//         ],
//         "screenshots": [
//             155025,
//             155026,
//             155027
//         ],
//         "similar_games": [
//             10603,
//             19222,
//             25905,
//             41349,
//             86974,
//             87507,
//             88511,
//             90788,
//             95776,
//             106992
//         ],
//         "slug": "city-mysteries",
//         "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
//         "tags": [
//             268435465
//         ],
//         "updated_at": 1641425677,
//         "url": "https://www.igdb.com/games/city-mysteries",
//         "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870"
//     },
//     {
//         "id": 161757,
//         "alternative_names": [
//             70253
//         ],
//         "category": 1,
//         "created_at": 1628007985,
//         "external_games": [
//             2028338
//         ],
//         "name": "Earth Defense Force: World Brothers - Riho Futaba, Merry Santa Costume",
//         "parent_game": 139067,
//         "screenshots": [
//             567675,
//             567676,
//             567677,
//             567678,
//             567679
//         ],
//         "similar_games": [
//             25636,
//             100800,
//             103298,
//             103301,
//             103302,
//             106805,
//             112589,
//             113895,
//             115276,
//             120268
//         ],
//         "slug": "earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
//         "summary": "Riho Futaba (voiced by Yuko Goto), a virtual idol who has appeared in numerous video games including the \"Dream Club\" series, is now joining the EDF. And what's more, she's appearing in Santa Costume. She also comes equipped with an exclusive weapon available only with this content.",
//         "tags": [
//             1
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1643475000,
//         "url": "https://www.igdb.com/games/earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
//         "websites": [
//             208872
//         ],
//         "checksum": "0c23575e-d0c8-f838-49ca-832c7cc0ca48"
//     },
//     {
//         "id": 2802,
//         "age_ratings": [
//             48643
//         ],
//         "aggregated_rating": 62.5,
//         "aggregated_rating_count": 3,
//         "alternative_names": [
//             275
//         ],
//         "bundles": [
//             86074
//         ],
//         "category": 0,
//         "collection": 2968,
//         "cover": 141924,
//         "created_at": 1374959551,
//         "external_games": [
//             56691,
//             130682,
//             213235,
//             1305103,
//             1709697,
//             1743789
//         ],
//         "first_release_date": 1256601600,
//         "franchise": 101,
//         "franchises": [
//             101
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             4,
//             31
//         ],
//         "involved_companies": [
//             6726,
//             6727,
//             6728
//         ],
//         "keywords": [
//             1027,
//             1293,
//             4134,
//             4142,
//             4245,
//             4381,
//             5328,
//             6363,
//             12729
//         ],
//         "name": "Ben 10 Alien Force: Vilgax Attacks",
//         "platforms": [
//             5,
//             8,
//             12,
//             20,
//             38
//         ],
//         "rating": 52.0716462534934,
//         "rating_count": 6,
//         "release_dates": [
//             5978,
//             5979,
//             5980,
//             5981,
//             5982
//         ],
//         "screenshots": [
//             677366,
//             677367,
//             677368,
//             677369,
//             677370,
//             677371
//         ],
//         "similar_games": [
//             11423,
//             17548,
//             22387,
//             28309,
//             35994,
//             51945,
//             55190,
//             56033,
//             101608,
//             105049
//         ],
//         "slug": "ben-10-alien-force-vilgax-attacks",
//         "summary": "BEN 10 ALIEN FORCE: Vilgax Attacks is the latest game in the multi-million unit selling video game series. Players will have the opportunity to experience the vast ALIEN FORCE universe in a brand new action-adventure game, taking Ben into outer space and distant planets for the first time ever in the series to battle against a terrifying threat that only he can stop!\n\nBen Tennyson’s greatest enemy of all time, Vilgax, has been busy assembling his own extreme team of Ben’s most fearsome foes in a grand scheme to take over the universe one planet at a time, culminating with the destruction of Ben’s home planet, the Earth!\nOne planet after another—including some of the home worlds of Ben’s alien forms—has quietly been falling under the control of Vilgax and the villainous underling bosses he’s been stationing on each conquered world to rule ruthlessly in his stead, each more eager than the next to rid the universe of the bane of their collective evil existence, Ben Tennyson, once and for all!\n\nNow it’s the Earth’s turn and Ben’s the only person for the job! The fate of the whole universe lies in your hands!",
//         "tags": [
//             1,
//             268435460,
//             268435487,
//             536871939,
//             536872205,
//             536875046,
//             536875054,
//             536875157,
//             536875293,
//             536876240,
//             536877275,
//             536883641
//         ],
//         "themes": [
//             1
//         ],
//         "total_rating": 57.2858231267467,
//         "total_rating_count": 9,
//         "updated_at": 1652301813,
//         "url": "https://www.igdb.com/games/ben-10-alien-force-vilgax-attacks",
//         "checksum": "a0532df7-6e2f-60e3-efb2-16fb58f946aa"
//     },
//     {
//         "id": 139538,
//         "category": 0,
//         "cover": 117024,
//         "created_at": 1602368467,
//         "external_games": [
//             1966278
//         ],
//         "first_release_date": 1525910400,
//         "game_engines": [
//             837
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             32
//         ],
//         "involved_companies": [
//             117090
//         ],
//         "keywords": [
//             26070
//         ],
//         "name": "sun machine",
//         "platforms": [
//             82
//         ],
//         "player_perspectives": [
//             3
//         ],
//         "release_dates": [
//             213594
//         ],
//         "screenshots": [
//             403247,
//             403248
//         ],
//         "similar_games": [
//             11666,
//             13200,
//             13660,
//             17130,
//             25311,
//             28070,
//             34823,
//             105269,
//             111187,
//             113895
//         ],
//         "slug": "sun-machine",
//         "summary": "a story of dark days, chronic fatigue, optimism, and nostalgia",
//         "tags": [
//             18,
//             268435488,
//             536896982
//         ],
//         "themes": [
//             18
//         ],
//         "updated_at": 1639609570,
//         "url": "https://www.igdb.com/games/sun-machine",
//         "websites": [
//             156114
//         ],
//         "checksum": "9986cb06-667c-bb20-d9cf-cb239d7020df"
//     },
//     {
//         "id": 85450,
//         "age_ratings": [
//             67799
//         ],
//         "category": 0,
//         "created_at": 1517405808,
//         "external_games": [
//             221231,
//             1748471,
//             1991656
//         ],
//         "involved_companies": [
//             85230
//         ],
//         "name": "Transformers Prime: The Game",
//         "slug": "transformers-prime-the-game",
//         "updated_at": 1651604097,
//         "url": "https://www.igdb.com/games/transformers-prime-the-game",
//         "checksum": "50b54ee2-8d2c-1231-750e-161a1ff246cc"
//     },
//     {
//         "id": 33284,
//         "category": 0,
//         "created_at": 1495670400,
//         "external_games": [
//             5560,
//             1947044
//         ],
//         "first_release_date": 1457740800,
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             32
//         ],
//         "name": "One way to exit",
//         "platforms": [
//             6
//         ],
//         "release_dates": [
//             77755
//         ],
//         "screenshots": [
//             58492,
//             58493,
//             58494,
//             58495,
//             58496
//         ],
//         "similar_games": [
//             32902,
//             37419,
//             40524,
//             43367,
//             105233,
//             111130,
//             113895,
//             119121,
//             119493
//         ],
//         "slug": "one-way-to-exit",
//         "summary": "Move forward or backward in search of an exit, but remember, if you started moving you can not stop, and in any case, do not touch the walls, otherwise you have to start all over again.",
//         "tags": [
//             1,
//             268435488
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/one-way-to-exit",
//         "checksum": "334d534d-8f5b-3cf8-90b4-240e6daa97fc"
//     },
//     {
//         "id": 89616,
//         "category": 0,
//         "cover": 192106,
//         "created_at": 1519986874,
//         "external_games": [
//             269608,
//             1949905
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             9,
//             33
//         ],
//         "involved_companies": [
//             154613
//         ],
//         "name": "Bubble Whirl Shooter",
//         "slug": "bubble-whirl-shooter",
//         "status": 8,
//         "summary": "Shoot bubbles and match colors to pop your way up to victory in this bubble shooting adventure, win magic keys to unlock more secret colorful bubble world, it’s time to enjoy the endless bubble shooting fun!",
//         "updated_at": 1635254871,
//         "url": "https://www.igdb.com/games/bubble-whirl-shooter",
//         "checksum": "a46d66e1-7b4e-c024-4ac8-f5253f805df2"
//     },
//     {
//         "id": 104748,
//         "category": 0,
//         "created_at": 1530489600,
//         "external_games": [
//             1155919,
//             1972586
//         ],
//         "name": "Space station - build your own ISS",
//         "slug": "space-station-build-your-own-iss",
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/space-station-build-your-own-iss",
//         "checksum": "d49fe10f-a810-bb6a-3946-3c0b83f7fe44"
//     }
// ]


/////////////////////

// [
//     {
//         "id": 33260,
//         "category": 0,
//         "cover": 129073,
//         "created_at": 1495739021,
//         "external_games": [
//             5526,
//             107828,
//             1927694
//         ],
//         "first_release_date": 1459987200,
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             15,
//             32
//         ],
//         "name": "The Fifth Expedition",
//         "platforms": [
//             3,
//             6
//         ],
//         "release_dates": [
//             77732,
//             77733
//         ],
//         "screenshots": [
//             58357,
//             58358,
//             58359,
//             58360,
//             58361
//         ],
//         "similar_games": [
//             25311,
//             25640,
//             34024,
//             36553,
//             37419,
//             65827,
//             111043,
//             111130,
//             113895,
//             118091
//         ],
//         "slug": "the-fifth-expedition",
//         "status": 4,
//         "summary": "Guide your team of explorers into the treacherous depths of an ancient machine. \n \nOn a mission to restore the old mechanisms to life and to save your people on the surface, who rely on the age old construct for food and shelter.",
//         "tags": [
//             1,
//             268435471,
//             268435488
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1643442946,
//         "url": "https://www.igdb.com/games/the-fifth-expedition",
//         "websites": [
//             33480,
//             33481
//         ],
//         "checksum": "bddffda7-802c-e138-9939-9f961ee98579"
//     },
//     {
//         "id": 40104,
//         "category": 0,
//         "created_at": 1498435200,
//         "external_games": [
//             20127,
//             1988884
//         ],
//         "first_release_date": 536457600,
//         "genres": [
//             5
//         ],
//         "name": "Dogou Souken",
//         "platforms": [
//             52
//         ],
//         "release_dates": [
//             91007
//         ],
//         "similar_games": [
//             12364,
//             27270,
//             43367,
//             103281,
//             103292,
//             103298,
//             103301,
//             105049,
//             106805
//         ],
//         "slug": "dogou-souken",
//         "summary": "An overhead-view shoot'em up game.",
//         "tags": [
//             268435461
//         ],
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/dogou-souken",
//         "checksum": "5e7446ff-58d9-e744-f0d3-5e10241304c1"
//     },
//     {
//         "id": 85031,
//         "age_ratings": [
//             37944
//         ],
//         "category": 0,
//         "cover": 61466,
//         "created_at": 1517392813,
//         "external_games": [
//             216805,
//             1969751,
//             2005770
//         ],
//         "first_release_date": 1404345600,
//         "genres": [
//             9
//         ],
//         "involved_companies": [
//             130531,
//             130532
//         ],
//         "name": "City Mysteries",
//         "platforms": [
//             37
//         ],
//         "release_dates": [
//             138333
//         ],
//         "screenshots": [
//             155025,
//             155026,
//             155027
//         ],
//         "similar_games": [
//             10603,
//             19222,
//             25905,
//             41349,
//             86974,
//             87507,
//             88511,
//             90788,
//             95776,
//             106992
//         ],
//         "slug": "city-mysteries",
//         "summary": "Search buildings, streets, landmarks as you seek and find hidden objects in New York, Paris, Moscow and London!",
//         "tags": [
//             268435465
//         ],
//         "updated_at": 1641425677,
//         "url": "https://www.igdb.com/games/city-mysteries",
//         "checksum": "87b342e7-b912-ca8d-4ffb-f91f9e4f1870"
//     },
//     {
//         "id": 161757,
//         "alternative_names": [
//             70253
//         ],
//         "category": 1,
//         "created_at": 1628007985,
//         "external_games": [
//             2028338
//         ],
//         "name": "Earth Defense Force: World Brothers - Riho Futaba, Merry Santa Costume",
//         "parent_game": 139067,
//         "screenshots": [
//             567675,
//             567676,
//             567677,
//             567678,
//             567679
//         ],
//         "similar_games": [
//             25636,
//             100800,
//             103298,
//             103301,
//             103302,
//             106805,
//             112589,
//             113895,
//             115276,
//             120268
//         ],
//         "slug": "earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
//         "summary": "Riho Futaba (voiced by Yuko Goto), a virtual idol who has appeared in numerous video games including the \"Dream Club\" series, is now joining the EDF. And what's more, she's appearing in Santa Costume. She also comes equipped with an exclusive weapon available only with this content.",
//         "tags": [
//             1
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1643475000,
//         "url": "https://www.igdb.com/games/earth-defense-force-world-brothers-riho-futaba-merry-santa-costume",
//         "websites": [
//             208872
//         ],
//         "checksum": "0c23575e-d0c8-f838-49ca-832c7cc0ca48"
//     },
//     {
//         "id": 2802,
//         "age_ratings": [
//             48643
//         ],
//         "aggregated_rating": 62.5,
//         "aggregated_rating_count": 3,
//         "alternative_names": [
//             275
//         ],
//         "bundles": [
//             86074
//         ],
//         "category": 0,
//         "collection": 2968,
//         "cover": 141924,
//         "created_at": 1374959551,
//         "external_games": [
//             56691,
//             130682,
//             213235,
//             1305103,
//             1709697,
//             1743789
//         ],
//         "first_release_date": 1256601600,
//         "franchise": 101,
//         "franchises": [
//             101
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             4,
//             31
//         ],
//         "involved_companies": [
//             6726,
//             6727,
//             6728
//         ],
//         "keywords": [
//             1027,
//             1293,
//             4134,
//             4142,
//             4245,
//             4381,
//             5328,
//             6363,
//             12729
//         ],
//         "name": "Ben 10 Alien Force: Vilgax Attacks",
//         "platforms": [
//             5,
//             8,
//             12,
//             20,
//             38
//         ],
//         "rating": 52.0716462534934,
//         "rating_count": 6,
//         "release_dates": [
//             5978,
//             5979,
//             5980,
//             5981,
//             5982
//         ],
//         "screenshots": [
//             677366,
//             677367,
//             677368,
//             677369,
//             677370,
//             677371
//         ],
//         "similar_games": [
//             11423,
//             17548,
//             22387,
//             28309,
//             35994,
//             51945,
//             55190,
//             56033,
//             101608,
//             105049
//         ],
//         "slug": "ben-10-alien-force-vilgax-attacks",
//         "summary": "BEN 10 ALIEN FORCE: Vilgax Attacks is the latest game in the multi-million unit selling video game series. Players will have the opportunity to experience the vast ALIEN FORCE universe in a brand new action-adventure game, taking Ben into outer space and distant planets for the first time ever in the series to battle against a terrifying threat that only he can stop!\n\nBen Tennyson’s greatest enemy of all time, Vilgax, has been busy assembling his own extreme team of Ben’s most fearsome foes in a grand scheme to take over the universe one planet at a time, culminating with the destruction of Ben’s home planet, the Earth!\nOne planet after another—including some of the home worlds of Ben’s alien forms—has quietly been falling under the control of Vilgax and the villainous underling bosses he’s been stationing on each conquered world to rule ruthlessly in his stead, each more eager than the next to rid the universe of the bane of their collective evil existence, Ben Tennyson, once and for all!\n\nNow it’s the Earth’s turn and Ben’s the only person for the job! The fate of the whole universe lies in your hands!",
//         "tags": [
//             1,
//             268435460,
//             268435487,
//             536871939,
//             536872205,
//             536875046,
//             536875054,
//             536875157,
//             536875293,
//             536876240,
//             536877275,
//             536883641
//         ],
//         "themes": [
//             1
//         ],
//         "total_rating": 57.2858231267467,
//         "total_rating_count": 9,
//         "updated_at": 1652301813,
//         "url": "https://www.igdb.com/games/ben-10-alien-force-vilgax-attacks",
//         "checksum": "a0532df7-6e2f-60e3-efb2-16fb58f946aa"
//     },
//     {
//         "id": 139538,
//         "category": 0,
//         "cover": 117024,
//         "created_at": 1602368467,
//         "external_games": [
//             1966278
//         ],
//         "first_release_date": 1525910400,
//         "game_engines": [
//             837
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             32
//         ],
//         "involved_companies": [
//             117090
//         ],
//         "keywords": [
//             26070
//         ],
//         "name": "sun machine",
//         "platforms": [
//             82
//         ],
//         "player_perspectives": [
//             3
//         ],
//         "release_dates": [
//             213594
//         ],
//         "screenshots": [
//             403247,
//             403248
//         ],
//         "similar_games": [
//             11666,
//             13200,
//             13660,
//             17130,
//             25311,
//             28070,
//             34823,
//             105269,
//             111187,
//             113895
//         ],
//         "slug": "sun-machine",
//         "summary": "a story of dark days, chronic fatigue, optimism, and nostalgia",
//         "tags": [
//             18,
//             268435488,
//             536896982
//         ],
//         "themes": [
//             18
//         ],
//         "updated_at": 1639609570,
//         "url": "https://www.igdb.com/games/sun-machine",
//         "websites": [
//             156114
//         ],
//         "checksum": "9986cb06-667c-bb20-d9cf-cb239d7020df"
//     },
//     {
//         "id": 85450,
//         "age_ratings": [
//             67799
//         ],
//         "category": 0,
//         "created_at": 1517405808,
//         "external_games": [
//             221231,
//             1748471,
//             1991656
//         ],
//         "involved_companies": [
//             85230
//         ],
//         "name": "Transformers Prime: The Game",
//         "slug": "transformers-prime-the-game",
//         "updated_at": 1651604097,
//         "url": "https://www.igdb.com/games/transformers-prime-the-game",
//         "checksum": "50b54ee2-8d2c-1231-750e-161a1ff246cc"
//     },
//     {
//         "id": 33284,
//         "category": 0,
//         "created_at": 1495670400,
//         "external_games": [
//             5560,
//             1947044
//         ],
//         "first_release_date": 1457740800,
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             32
//         ],
//         "name": "One way to exit",
//         "platforms": [
//             6
//         ],
//         "release_dates": [
//             77755
//         ],
//         "screenshots": [
//             58492,
//             58493,
//             58494,
//             58495,
//             58496
//         ],
//         "similar_games": [
//             32902,
//             37419,
//             40524,
//             43367,
//             105233,
//             111130,
//             113895,
//             119121,
//             119493
//         ],
//         "slug": "one-way-to-exit",
//         "summary": "Move forward or backward in search of an exit, but remember, if you started moving you can not stop, and in any case, do not touch the walls, otherwise you have to start all over again.",
//         "tags": [
//             1,
//             268435488
//         ],
//         "themes": [
//             1
//         ],
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/one-way-to-exit",
//         "checksum": "334d534d-8f5b-3cf8-90b4-240e6daa97fc"
//     },
//     {
//         "id": 89616,
//         "category": 0,
//         "cover": 192106,
//         "created_at": 1519986874,
//         "external_games": [
//             269608,
//             1949905
//         ],
//         "game_modes": [
//             1
//         ],
//         "genres": [
//             9,
//             33
//         ],
//         "involved_companies": [
//             154613
//         ],
//         "name": "Bubble Whirl Shooter",
//         "slug": "bubble-whirl-shooter",
//         "status": 8,
//         "summary": "Shoot bubbles and match colors to pop your way up to victory in this bubble shooting adventure, win magic keys to unlock more secret colorful bubble world, it’s time to enjoy the endless bubble shooting fun!",
//         "updated_at": 1635254871,
//         "url": "https://www.igdb.com/games/bubble-whirl-shooter",
//         "checksum": "a46d66e1-7b4e-c024-4ac8-f5253f805df2"
//     },
//     {
//         "id": 104748,
//         "category": 0,
//         "created_at": 1530489600,
//         "external_games": [
//             1155919,
//             1972586
//         ],
//         "name": "Space station - build your own ISS",
//         "slug": "space-station-build-your-own-iss",
//         "updated_at": 1604620800,
//         "url": "https://www.igdb.com/games/space-station-build-your-own-iss",
//         "checksum": "d49fe10f-a810-bb6a-3946-3c0b83f7fe44"
//     }
// ]