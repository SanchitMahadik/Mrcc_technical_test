const cardWrapper = document.getElementById("card__wrapper");
let tbody = document.querySelector("tbody");

fetch("data/data.json")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    data.forEach((val) => {
      const card = `<div class="card">
                        <p>${val.cname}</p>
                        <button>${val.btnname}</button>
                    </div>`;
      const tableData = `<tr>
                            <td>${val.days}</td>
                            <td>${val.usage}</td>
                            <td>${val.totalCost}</td>
                        </tr>`;
      cardWrapper.innerHTML += card;
      tbody.innerHTML += tableData;
    });
  })
  .catch((error) => {
    swal("Oh no!", "Somthing Wrong Here!", "error");
  });
