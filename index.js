const loadImage = () => {
  fetch("https://api.pexels.com/v1/search?query=your-query", {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001aaaca724bb564b948d088b4b473f9bb6",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((body) => {
      // DOM MANIPULATION
      console.log(body);

      const row = document.querySelector(".album .row");
      row.innerHTML = "";

      const array = body.photos;
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        const col = document.createElement("div");
        col.className = "col-md-4";

        col.innerHTML = `

        
        <div class="card mb-4 shadow-sm">
        
        
        <img src="${obj.src.original}" class="img-fluid h-100 w-100" alt="...">
       
      

          <div class="card-body">

            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" 
                  onclick="deleteCard(this.closest('.col-md-4'))"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
       
      </div>
                `;

        row.appendChild(col);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

let photos = [];

const loadSecondImg = (query) => {
  fetch("https://api.pexels.com/v1/search?query=" + query, {
    method: "GET",
    headers: {
      Authorization: "563492ad6f91700001000001aaaca724bb564b948d088b4b473f9bb6",
    },
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((body) => {
      // DOM MANIPULATION
      console.log(body);

      const row = document.querySelector(".album .row");

      row.innerHTML = "";

      photos = body.photos;

      const array = body.photos;
      for (let i = 0; i < array.length; i++) {
        const obj = array[i];

        // const col = document.createElement("div");
        // col.className = "col";

        // col.innerHTML = `
        // `;

        // row.appendChild(col);

        row.innerHTML += `
        <div  class="col-md-4" 
        >
        <div class="card mb-4 shadow-sm">
        
        
        <img src="${obj.src.original}" class="img-fluid h-100 w-100" alt="...">
       
       

          <div class="card-body">

            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary" 
                  onclick="deleteCard(this.closest('.col-md-4'))"

                >
                  Hide
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `;
      }
    })
    .catch((err) => {
      console.error(err);
    });
};

function deleteCard(element) {
  console.log(element);
  element.remove();
  // for (let card of document.querySelectorAll(".card")) {
  //   card.remove();
  // }
}

function searchImages(query) {
  //console.log(photos.filter(photo => photo.title.toLowercase().includes(query.toLowerCase())));

  loadSecondImg(query);
}
