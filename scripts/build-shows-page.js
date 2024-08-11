const showsArray = [
  {
    date: "Mon Sept 09 2024",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button_copy: "Buy tickets",
  },
  {
    date: "Tue Sept 17 2024",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Oct 12 2024",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 16 2024",
    venue: "Hyatt Regency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 29 2024",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 18 2024",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

console.log(showsArray);

const newShowsCardElement = document.querySelector(".shows__card-container");

function createShowsCard(shows) {
  const showsCard = document.createElement("ul");
  showsCard.classList.add("shows__card");

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
  showsDate.innerText = shows.date;

  const showsVenue = document.createElement("li");
  showsVenue.classList.add("shows__details");
  showsVenue.innerText = shows.venue;

  const showsLocation = document.createElement("li");
  showsLocation.classList.add("shows__details");
  showsLocation.innerText = shows.location;

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

let renderShows = () => {
  const showsElement = document.querySelector(".shows__card-container");
  showsElement.innerHTML = "";

  const showsFragment = document.createDocumentFragment();

  showsArray.forEach((show) => {
    const showsCard = createShowsCard(show);
    showsFragment.appendChild(showsCard);
  });
  showsElement.appendChild(showsFragment);
};

renderShows();

console.log(renderShows);
