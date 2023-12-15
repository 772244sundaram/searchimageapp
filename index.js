const searchBtn = document.getElementById('submit');
const searchInp = document.getElementById('searchbar');
const firstrow = document.getElementById("firstrow");
const showMore = document.getElementById('showmore');

let accessKey = 'BrB9u-CjtkqSAWI9-h8hPMxH9RToP-_YP4HgG4Fk24E';
let inputSearch = "";
let page = 1;

async function searchImages()   {
    inputSearch = searchInp.value;
    const url = `https://api.unsplash.com/search/photos?query=${inputSearch}&page=${page}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;
    if (page === 1) {
        firstrow.innerHTML = "";
    }
    results.map((result)=>{
        container1 = document.createElement("div");
        container1.classList.add("container");
        image1 = document.createElement("img");
        image1.classList.add("image1");
        image1.src =result.urls.small;
        container1.appendChild(image1);
        firstrow.appendChild(container1);
    });

    page++;

    if (page>1){
        showMore.style.display = "block";
    }
};


showMore.addEventListener("click", searchImages);
searchBtn.addEventListener("click", searchImages);



