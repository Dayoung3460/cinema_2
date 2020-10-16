// ==================== display blocks ========================

const viewMovie = document.getElementById('viewByMovie');
const viewDate = document.getElementById('viewByDate');
const sec1 = document.getElementById('sec1');
const sec2 = document.getElementById('sec2');
const home = document.getElementById('home');
const upcomingM = document.getElementById('upcomingM');
const upcomingDetail1 = document.getElementById('upcomingDetail1');
const announcement = document.getElementById('announcement');
const membership = document.getElementById('membership');

function logo(){
  sec1.style.display = 'block';
  sec2.style.display = 'contents';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
  upcomingM.style.display = 'none';
  membership.style.display = 'none';
}

function openMovie(){
  sec2.style.display = 'block';
  sec2.style.marginTop = "100px";
  sec2.style.width = "100%";
  sec1.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
  upcomingM.style.display = 'none';
  announcement.style.display = 'none';
  membership.style.display = 'none';
}

function viewByMovie(){
  viewMovie.style.display = 'block';
  viewDate.style.display = 'none';
}

function viewByDate(){
  viewMovie.style.display = 'none';
  viewDate.style.display = 'block';
}

function login(){
    sec1.style.display = 'none';
    sec2.style.display = 'none';
    signupCon.style.display = 'none';
    loginCon.style.display = 'block';
    membership.style.display = 'none';
    announcement.style.display = 'none';
  }

function signup(){
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'block';
  membership.style.display = 'none';
  announcement.style.display = 'none';

}



function upcomingMovies(){
  upcomingM.style.display = 'block';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  upcomingDetail1.style.display = 'none';
  announcement.style.display = 'none';
  membership.style.display = 'none';
}

function upcomingM1(){
  upcomingDetail1.style.display = 'block';
  upcomingM.style.display = 'none';
  announcement.style.display = 'none';
  membership.style.display = 'none';
}

function openAnnouncement(){
  announcement.style.display = 'block';
  upcomingM.style.display = 'none';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  membership.style.display = 'none';

}

function OpenMembership(){
  membership.style.display = 'block';
  upcomingM.style.display = 'none';
  sec1.style.display = 'none';
  sec2.style.display = 'none';
  loginCon.style.display = 'none';
  signupCon.style.display = 'none';
  announcement.style.display = 'none';

}


// ==================================================

// const movieList = document.querySelector('.movieList');

// function loadItems(){
//   return fetch('json/movie_list.json')
//   .then(response => response.json()) 
//   .then(json => json.movies); 
// }

// function displayItems(movies){
//   const movieList = document.querySelector('.movieList');
//   movieList.innerHTML = movies.map(movie => createHTMLString(movie)).join('');
// }

// function createHTMLString(movie){
//   var htmlString = ``;

//   for (i = 0; i < movie.length; i ++) {

//     htmlString += `<div class="row my-5 py-3 mDetail">
//     <div class="col-sm-3 col-md-2 col-lg-2 mx-3">
//       <div class="thumbnail">
//         <a href="movie detail page" target="_blank">
//           <img src="${movie[i].image}">
//         </a>
//       </div>
//     </div>
//     <div class="col-sm-3 col-md-4 col-lg-4 border mx-3 p-2">${movie[i].title}</div>
//     <div class="col-sm-3 col-md-4 col-lg-4 mx-3 p-2">`

//       for (ii = 0; ii < movie[i].time.length; ii ++) {
//         htmlString += `<button type="button" class="btn btn-info my-1">${movie[i].time[ii]}</button>`
//       }

//       htmlString += `</div></div>`;
//   }
//   return htmlString;  
// }

// function setEventListeners(movies) {
//   document.addEventListener('load', () => displayItems(movies));
// }

// loadItems()
// .then(movies => {
//     displayItems(movies);
//     setEventListeners(movies);
// })
// .catch(console.log)













// document.addEventListener("load", () => {
//   var request = new XMLHttpRequest();
//                 request.open('GET', 'json/movie_list.json', true);
//                 request.onload = function () {
//                     if (request.status >= 200 && request.status < 400) {
//                         var ourData = JSON.parse(request.responseText);
//                         renderHTML(ourData);
//                     } else {
//                         console.log("We connected to the server, but it returned an error.");
//                     }

//                 };

//                 request.onerror = function () {
//                     console.log("Connection error");
//                 };

//                 request.send();

                
                
// });

// function renderHTML(data) {
//   var htmlString = ``;

//   for (i = 0; i < data.length; i ++) {

//     htmlString += `<div class="row my-5 py-3 mDetail">
//     <div class="col-sm-3 col-md-2 col-lg-2 mx-3">
//       <div class="thumbnail">
//         <a href="movie detail page" target="_blank">
//           <img src="${data[i].image}">
//         </a>
//       </div>
//     </div>
//     <div class="col-sm-3 col-md-4 col-lg-4 border mx-3 p-2">${data[i].title}</div>
//     <div class="col-sm-3 col-md-4 col-lg-4 mx-3 p-2">`

//       for (ii = 0; ii < data[i].time.length; ii ++) {
//         htmlString += `<button type="button" class="btn btn-info my-1">${data[i].time[ii]}</button>`
//       }

//       htmlString += `</div></div>`;
//   }

//   movieList.innerHTML = htmlString;
  
// }
