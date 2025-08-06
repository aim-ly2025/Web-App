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

        newHtml += `
        
          <div class="col-md-4">
            <div class="card h-100">
              <img src="kidsplayground.png" class="card-img-top" alt="${name}">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
              </div>
              <div class="card-footer">
                <small class="text-muted">${website}</small>
              </div>
            </div>
          </div>
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();

      {/* //        <div class="opportunity-container">
      // <div class="container">
      //   <div class="row mb-4"> <!-- 1.5rem of margin bottom -->
      //       <div class="col-md-4 col-sm-6 col-12"> <!-- Sizes: medium sized screens, small sized screens, extra-small screens-->
      //           <div class="card"> <!-- Us a Bootstrap Utility Class-->
      //               <img class="card-img-top" src="" alt="${name}">
      //               <div class="card-body">
      //                   <h5 class="card-title">${name}</h5>
      //                   <p class="card-text">${description}</p>
      //                   <a href="#" class=" custom-button btn btn-primary">Go somewhere</a>
      //               </div>
      //           </div>
      //       </div> */}
   
