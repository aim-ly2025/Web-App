
// https://api.airtable.com/v0/appBJ4NQvJJy1HhKj/Email%20Newsletter 

"use strict";

// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("opportunity");

  const options = {
    method: "GET",
    headers: {
      Authorization: 'Bearer patCTG4EnvjPQHd2E.c65bcb3ad33f45749bd6283fe0976c2c6fff3d249241298e2940b6778ed70dfc',
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appBJ4NQvJJy1HhKj/Email%20Newsletter `,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"]; // here we are getting column values
        let type = data.records[i].fields["Type of Opportunity"]; // here we are getting column values
        let subject = data.records[i].fields["Subject"]; //here we are using the Field ID to fecth the name property
        let website = data.records[i].fields["Website"];
        let description = data.records[i].fields["Description"];
        let group = data.records[i].fields["Student Group"];

        newHtml += `
        <div class ="universal-container opportunites-container">
            <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
            <div class="card h-100">
            <img src="kidsplayground.png" class="card-img-top" alt="${name}">
            <div class="card-body">
                <h5 class="card-title">${data.records[i].name}">$</h5>
                <p class="card-text">${data.records[i].description}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
        </div>
        </div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    }); 

}
    getAllRecords(); // no id given, fetch summaries
