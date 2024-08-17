const API_KEY = "a817234e-74ad-4433-89c0-1128cd9ffde6";
const showsApi = new BandSiteApi(API_KEY);

async function showsApiCall() {
  try {
    const showsResults = await showsApi.getShows();
    renderShows(showsResults);
    return showsResults;
  } catch (error) {
    console.log(error);
  }
}
showsApiCall();

const newShowsCardElement = document.querySelector(".shows__card-container");

function createShowsCard(showsRendered) {
  const showsCard = document.createElement("ul");
  showsCard.classList.add("shows__card");
  showsCard.setAttribute("id", "shows-card");

  const showsSubheaderDate = document.createElement("li");
  showsSubheaderDate.classList.add("shows__subheader--mobile");
  showsSubheaderDate.innerText = "DATE";

  const showsSubheaderVenue = document.createElement("li");
  showsSubheaderVenue.classList.add("shows__subheader--mobile");
  showsSubheaderVenue.innerText = "VENUE";

  const showsSubheaderLocation = document.createElement("li");
  showsSubheaderLocation.classList.add("shows__subheader--mobile");
  showsSubheaderLocation.innerText = "LOCATION";

  const showsDate = document.createElement("li");
  showsDate.classList.add("shows__details--bold");
  showsDate.innerText = showsRendered.date;
  showsDate.innerText = new Date(showsRendered.date).toDateString();

  const showsVenue = document.createElement("li");
  showsVenue.classList.add("shows__details");
  showsVenue.innerText = showsRendered.place;

  const showsLocation = document.createElement("li");
  showsLocation.classList.add("shows__details");
  showsLocation.innerText = showsRendered.location;

  const showsButton = document.createElement("button");
  showsButton.classList.add("shows__details--cta");

  const showsButtonCopy = document.createTextNode("BUY TICKETS");
  showsButton.appendChild(showsButtonCopy);

  newShowsCardElement.appendChild(showsCard);
  showsCard.appendChild(showsSubheaderDate);
  showsCard.appendChild(showsDate);
  showsCard.appendChild(showsSubheaderVenue);
  showsCard.appendChild(showsVenue);
  showsCard.appendChild(showsSubheaderLocation);
  showsCard.appendChild(showsLocation);
  showsCard.appendChild(showsButton);

  return showsCard;
}

const renderShows = (showsRendered = []) => {
  const showsElement = document.querySelector(".shows__card-container");
  showsElement.innerHTML = "";

  const showsFragment = document.createDocumentFragment();

  showsRendered.forEach((show) => {
    const showsCard = createShowsCard(show);
    showsFragment.appendChild(showsCard);
  });
  showsElement.appendChild(showsFragment);
};

renderShows();


document.addEventListener("DOMLoaded", function () {
  const showsCard = document.querySelector(".shows__card");

  if (showsCard) {
    showsCard.addEventListener("click", function (event) {
      event.preventDefault();
      event.target.classList.toggle("shows__card--active");
    });
  } else {
    console.log(error);
  }
});

