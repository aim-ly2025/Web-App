"use strict";

async function getAllRecords() {
  let getResultElement = document.getElementById("opportunity");

  const options = {
    method: "GET",
    headers: {
      Authorization: 'Bearer patCTG4EnvjPQHd2E.c65bcb3ad33f45749bd6283fe0976c2c6fff3d249241298e2940b6778ed70dfc',
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appBJ4NQvJJy1HhKj/Opportunities%20List`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      getResultElement.innerHTML = "";

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let name = data.records[i].fields["Name"];
        let description = data.records[i].fields["Description"];
        let website = data.records[i].fields["Website"];
        let image = data.records[i].fields["Image"];

        newHtml += `
        
          <div class="col-md-4">
            <div class="card h-100">
               <a href="opportunity.html?id=${data.records[i].id}">${
                  image
                    ? `<img class="card-img-top rounded" alt="${name}" src="${image[0].url}">`
                    : ``
                }
                  </a>
              <div class="card-body">
                <h4 class="card-title">${name}</h4>
                <br>
                <p class="card-text">${description}</p>
                <a class="" href="opportunity.html?id=${data.records[i].id}">Website Link</a>
              </div>
              <div class="card-footer">
                   <a href="${website}" class="card-link blue"  >For more information</a>
              </div>
            </div>
          </div>

        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

async function getOneRecord(id) {
  let jobsResultElement = document.getElementById("opportunity");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patCTG4EnvjPQHd2E.c65bcb3ad33f45749bd6283fe0976c2c6fff3d249241298e2940b6778ed70dfc`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appBJ4NQvJJy1HhKj/Opportunities%20List/${id}`,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is a single object



      let name = data.fields["Name"];
        let description = data.fields["Description"];
        let website = data.fields["Website"];
        let image = data.fields["Image"];
      let subject = data.fields["Subject"];
      let group = data.fields["Student Group"];
      let type = data.fields["Type of Opportunity"];


      let newHtml = `

      
      <div class="card" style="width: 30rem;">
      <img class="card-img-top rounded" alt="${name}" src="${image[0].url}">        
      <div class="card-body">
          <h4 class="card-title">${name}</h4>
          <br>
          <p class="card-text">${description}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Subject: ${subject}</li>
          <li class="list-group-item">Student Group: ${group}</li>
          <li class="list-group-item">Type of opportunity: ${type}</li>
        </ul>
        <div class="card-body">
          <a href="${website}" class="card-link blue"  >For more information</a>
        </div>
    </div>

      `;

      jobsResultElement.innerHTML = newHtml;
    });
}
// look up window.location.search and split, so this would take
// https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// and look at the ?id=receHhOzntTGZ44I5 part, then split that into an array
// ["?id=", "receHhOzntTGZ44I5"] and then we only choose the second one
let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  getOneRecord(idParams[1]); // create detail view HTML w/ our id
} else {
  getAllRecords(); // no id given, fetch summaries
}

// getOneRecord();

/*  //change to the code from above
    <div class="col-md-4">
            <div class="card h-100">
               <a href="breweries.html?id=${data.records[i].id}">${
                  image
                    ? `<img class="card-img-top rounded" alt="${name}" src="${image[0].url}">`
                    : ``
                }
                  </a>
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <a class="" href="index.html?id=${data.records[i].id}">Website Link</a>
              </div>
              <div class="card-footer">
                <small class="text-muted">${website}</small>               

              </div>
            </div>
          </div>
//change stop

<div class="card list mb-3">
  <div class="row g-0">
    <div class="col-md-4 d-flex justify-content-center ">
    ${
      picture
        ? `<img class="img-fluid front" alt="${name}" src="${}">`
        : ``
    }
       </div>
       <div class="col-md-6 d-flex justify-content-center align-items-center">
       <div class="card-body">
       <div class="card-group hours mx-auto">    
  <div class="card list hours shift">
    <div class="card-body">
      <h4 class="card-title">🕔 Hours</h4>
      <p class="card-text">${}</p>
      
    </div>
  </div>
  <div class="card list hours">
    <div class="card-body">
      <h4 class="card-title">😁 🕔 Happy Hours</h4>
      <p class="card-text">${}</p>
     
    </div>
  </div>
</div>
<div class="moves">
<table class="table misc">
    <tbody>
    <tr>
      <th scope="row misc">Age Group</th>
      <td class="card-text">${group}</td>
    </tr>
    <tr>
      <th scope="row misc">Opportunity Type</th>
      <td>${type}</td>
    </tr>
    <tr>
      <th scope="row misc">Subject</th>
      <td colspan="2">${subject}</td>
    </tr>
     <tr>
      <th scope="row misc">Merchandise</th>
      <td colspan="2">${}</td>
    </tr>
    <tr>
      <th scope="row misc">Links</th>
      <td colspan="2"><a href="${website}" target="_blank"><button type="button" class="btn btn-primary btn-sm go">Website</button></a> <a href="${yelp}" target="_blank"><button type="button" class="btn btn-primary btn-sm go">Yelp</button></a></td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>
</div>
</div> */