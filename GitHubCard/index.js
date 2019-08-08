/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/Suffyan-T')
  .then( data => {
    console.log(data.data);
  })
  .catch (err => {
    console.log(err.message);
  })
  

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

function cardCreator(user) {
  const div = document.createElement('div');
  div.classList.add('card');

  const image = document.createElement('img');
  image.src = user.avatar_url; 
  div.appendChild(image);
  image.classList.add('card-img');
  
  const infoCont = document.createElement('div');
  infoCont.classList.add('card-info');
  div.appendChild(infoCont);

  const cardName = document.createElement('h3');
  cardName.classList.add('card-name');
  cardName.textContent = user.name;
  infoCont.appendChild(cardName);

  const userName = document.createElement('p');
  userName.classList.add('card-username');
  userName.textContent = user.login; 
  infoCont.appendChild(userName);

  const userLocation = document.createElement('p');
  userLocation.classList.add('card-p');
  userLocation.textContent = `Location: ${user.location}`; 
  infoCont.appendChild(userLocation);

  const userUrl = document.createElement('p');
  userUrl.classList.add('card-p');
  const userUrls = user.url;
  userUrl.innerHTML = userUrls.link(user.url);
  infoCont.appendChild(userUrl);

  const userFollowers = document.createElement('p');
  userFollowers.classList.add('card-p');
  userFollowers.textContent = `Followers: ${user.followers}`; 
  infoCont.appendChild(userFollowers);

  const userFollowing = document.createElement('p');
  userFollowing.classList.add('card-p');
  userFollowing.textContent = `Following: ${user.following}`; 
  infoCont.appendChild(userFollowing);

  const userBio = document.createElement('p');
  userBio.classList.add('card-p');
  userBio.textContent = `Bio: ${user.bio}`; 
  infoCont.appendChild(userBio);



  //let card = cardCreator(user);
  let cards = document.querySelector(".cards");
  cards.appendChild(div);
  
  return cards;

}


axios.get('https://api.github.com/users/Suffyan-T')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})


/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
axios.get('https://api.github.com/users/tetondan')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})

axios.get('https://api.github.com/users/dustinmyers')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})

axios.get('https://api.github.com/users/navalta3030')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})

axios.get('https://api.github.com/users/luishrd')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})

axios.get('https://api.github.com/users/bigknell')
.then((axiosData) => {
  console.log('axiosData.data: ', axiosData.data);
  cardCreator(axiosData.data)
})
.catch((err) => {
  console.log('error: ', err);
})


