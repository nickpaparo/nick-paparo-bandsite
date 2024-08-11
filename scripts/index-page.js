const comments = [
  {
    name: `Victor Pinto`,
    time: `11/02/2023`,
    comment: `This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.
`,
  },
  {
    name: `Chsitina Cabrera`,
    time: `10/28/2023`,
    comment: `I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day`,
  },
  {
    name: `Isaac Tadesse`,
    time: `10/20/2023`,
    comment: `I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.`,
  },
];

function createCommentCard(comments) {
  const commentElement = document.createElement("div");
  commentElement.classList.add("comments__new");

  const avatarContainer = document.createElement("div");
  avatarContainer.classList.add("comments__new-avatar");

  const avatarImage = document.createElement("img");
  avatarImage.classList.add("comments__newavatarimg");
  console.log(avatarImage);

  const commentContainer = document.createElement("div");
  commentContainer.classList.add("comments__new-comment");

  const headingContainer = document.createElement("div");
  headingContainer.classList.add("comments__new-heading");

  const heading = document.createElement("h3");
  heading.classList.add("comments__new-name");
  heading.innerText = comments.name;

  const timeElement = document.createElement("div");
  timeElement.classList.add("comments__new-time");
  timeElement.innerText = comments.time;

  const commentCopy = document.createElement("p");
  commentCopy.classList.add("comments__new-copy");
  commentCopy.innerText = comments.comment;

  commentElement.appendChild(avatarContainer);
  avatarContainer.appendChild(avatarImage);
  commentElement.appendChild(commentContainer);
  commentContainer.appendChild(headingContainer);
  headingContainer.appendChild(heading);
  headingContainer.appendChild(timeElement);
  commentContainer.appendChild(commentCopy);

  return commentElement;
}

const newCommentsElement = document.querySelector(".comments__new-container");

for (let i = 0; i < comments.length; i++) {
  const commentCard = createCommentCard(comments[i]);
  newCommentsElement.appendChild(commentCard);
}

const formElement = document.querySelector("#comments-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let userName = event.target.name.value;
  const userTime = new Date();
  const timestamp = userTime.toLocaleDateString();
  let userComment = event.target.comment.value;

  const cardData = {
    name: userName,
    time: timestamp,
    comment: userComment,
  };

  comments.unshift(cardData);

  renderComments();
});

let renderComments = () => {
  const formElement = document.querySelector(".comments__new-container");
  formElement.replaceChildren();

  for (let i = 0; i < comments.length; i++) {
    const commentCard = createCommentCard(comments[i]);
    newCommentsElement.appendChild(commentCard);
  }
};

renderComments();
console.log(newCommentsElement);
