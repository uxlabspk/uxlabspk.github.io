
// finding the card container.
var container = document.getElementById("cardContainer");


// fetching the data from JSON and appending the card in the card container.
fetch('js/data.json')
    .then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
            container.innerHTML += '<div class="col"><div class="card shadow-sm"><img src="' + data[index].img + '" alt=""><div class="card-body"><h3>' + data[index].title + '</h3><p class="card-text">' + data[index].discription + '</p><div class="d-flex justify-content-between align-items-center"><a href="' + data[index].url + '" class="btn-blue"><i class="bi-github"> </i>View</a><small class="text-muted"><i class="bi-tags"> </i>' + data[index].tag + '</small></div></div></div></div>';
        }
    })
    .catch(error => console.log(error))
