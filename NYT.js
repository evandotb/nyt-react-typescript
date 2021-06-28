// const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //api endpoint
// const key = 'Q4VzyZDHiTLidN47dHsdbjjT9XIeK2Ir'; // api key
// let url;

// const searchTerm = document.querySelector('.search'); //defining a variable to store searchTerm class
// const startDate = document.querySelector('.start-date'); //defining a variable to store startDate class
// const endDate = document.querySelector('.end-date'); //defining a variable to store endDate class
// const searchForm = document.querySelector('form'); //defining a variable to refer to the form
// const submitBtn = document.querySelector('.submit'); //defining a variable to refer to submitBtn
// const nextBtn = document.querySelector('.next'); //defining a variable to refer to the nextBtn
// const previousBtn = document.querySelector('.prev'); //defining a variable to refer to the previousBtn
// const nav = document.querySelector('nav'); //defining a variable to refer to the nav
// const section = document.querySelector('section'); //defining a variable to refer to the section

// nav.style.display = 'none'; //style resent on nav (don't show it)
// let pageNumber = 0; //set intitial pageNumber to 0
// // console.log('PageNumber:', pageNumber);
// searchForm.addEventListener('submit', fetchResults); //listening for submitBtn, then calls the fetchResults function
// nextBtn.addEventListener('click', nextPage); //listening for nextBtn then runs nextPage function
// previousBtn.addEventListener('click', previousPage); //listening for previousBtn then runs previousPage functionfunction

// function fetchResults(e) { //function to display returned data
//     // console.log(e);
//     e.preventDefault();
//     url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //compiling the url with interpolation
//     // console.log('URL:', url);
//     if (startDate.value !== '') { // tests if startDate is not blank
//         console.log(startDate.value)
//         url += '&begin_date=' + startDate.value; // adds startDateValue to url (with required syntax)
//         console.log('URL:', url); 
//     }
//     if (endDate.value !== '') { // tests if endDate is not blank
//         console.log(endDate.value)
//         url += '&end_date=' + endDate.value; // adds endDateValue to url (with required syntax)
//         console.log('URL:', url);
//     }
//     fetch(url) //fetch the url
//         .then(function (result) { //promise resolver
//             console.log(result)
//             return result.json(); //returns our request in JSON format or JSON-ifies data
//         })
//         .then(function (json) {  //chaining promise resolver
//             console.log(json);
//             displayResults(json); // grabs JSON-ified results and feeds to the displayResults function
//         })
// }
// function displayResults(json) { //function to display data fetched
//     console.log('Display Results', json);
//     // console.log(json.response.docs);
//     while (section.firstChild) { //while previous data is there (while section has a firstchild)
//         section.removeChild(section.firstChild); //remove previous search data (remove the section firstChild)
//     }
//     let articles = json.response.docs; //declaring and initializing the articles to JSON-ified results
//     // console.log(articles);
//     if (articles.length === 0) { //checking for zero article results
//         console.log('No results');
//     } else { //if there are results...
//         for (let i = 0; i < articles.length; i++) {  //numbering the articles
//             // console.log(i);
//             let article = document.createElement('article'); //creating the article element
//             let heading = document.createElement('h2'); //creating the heading element
//             let link = document.createElement('a'); // creating the link element
//             let img = document.createElement('img'); // creating the img element
//             let para = document.createElement('p'); // creating the paragraph element
//             let clearfix = document.createElement('div'); //creating a div element put them all in

//             let current = articles[i]; //defining what index article is in the results
//             console.log('Current:', current);
//             link.href = current.web_url; //defines url for corresponding article
//             link.textContent = current.headline.main; //assigning headline to the link text
//             para.textContent = 'Keywords: '; //adds the word "Keywords" to DOM
//             for (let j = 0; j < current.keywords.length; j++) { //determines how many keywords 
//                 let span = document.createElement('span'); //creates a span tag
//                 span.textContent += current.keywords[j].value + ' '; //adds keywords separated by a space to the span tag
//                 para.appendChild(span); //adds span to p tag with keywords in it
//             }
//             if (current.multimedia.length > 0) { //checks if there is multimedia
//                 img.src = 'http://www.nytimes.com/' + current.multimedia[0].url; //assigns multimedia url to img.src
//                 img.alt = current.headline.main; //assings headline to img alt tag
//             }
//             clearfix.setAttribute('class', 'clearfix'); //sets attribute for div
//             heading.appendChild(link); //adds link to heading
//             article.appendChild(heading); //adds heading to article
//             article.appendChild(img); //adds img to article
//             article.appendChild(para); //adds para to article
//             article.appendChild(clearfix); // adds clearfix to article
//             section.appendChild(article); //adds article to section - this is what makes it show on the DOM
//         }
//     }
//     if (articles.length === 10) { // if the number of articles equals 10
//         nav.style.display = 'block'; //show nav in block style
//     } else { //otherwise
//         nav.style.display = 'none'; //don't show the nav
//      }
// }
// function nextPage(e) { //sets function nextPage to change pageNumber
//     // console.log('Next button clicked');
//     pageNumber++; //adds one to pageNumber
//     fetchResults(e); //update url for next page of results
//     console.log('Page Number:', pageNumber); 
// }
// function previousPage(e) { //changes page to previous page
//     // console.log('Previous button clicked');
//     if (pageNumber > 0) { //checks if pageNumber is greater than 0
//         pageNumber--; //subtracts one from pageNumber
//     } else { //otherwise 
//         return; //return nothing - breaks the loop
//     }
//     fetchResults(e); // re-compiles the url
//     console.log('Page:', pageNumber);
// }