const comments = [
  { name: "", time: "", copy: "" },
  { name: "", time: "", copy: "" },
  { name: "", time: "", copy: "" },
];

// insert comment HTML here

// check comment is created correctly
// console.log(commentElement);

// Use line 10-25 inside function that create comment
// upon Event listener as shown below

function createCommentCard(comments) {
  const commentElement = document.createElement("article");
  commentElement.classList.add("comments__card-container");

  // create elements to go inside the wrapping div
  const heading = document.createElement("h3");
  heading.classList.add("comments__card-heading");
  heading.innerText = comments.name;

  const timeElement = document.createElement("div");
  timeElement.classList.add("comments__card-time");
  timeElement.innerText = comments.time;

  const commentCopy = document.createElement("p");
  commentCopy.classList.add("comments__card-copy");
  commentCopy.innerText = comments.copy;

  // add those elements that should go inside the wrapping div
  commentElement.appendChild(heading);
  commentElement.appendChild(timeElement);
  commentElement.appendChild(commentCopy);

  return commentElement;
}

const newCommentsElement = document.querySelector("#comments__new");

// loop time

for (let i = 0; i < comments.length; i++);
{
  const commentCard = createCommentCard(comments[i]);
  newCommentsElement.appendChild(commentCard);
  console.log(commentCard);
}

// because I used an object before, I can use it again
// store form in a variable

const formElement = document.querySelector("#comments-form");

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  let userName = event.target.name.value;
  let userComment = event.target.comment.value;

  if (userName.length < 3) {
    alert();
  }

  const cardData = {
    name: userName,
    // time: Date() to be able to view the timestamp ("3 min ago" or "5 sec ago")
    comment: userComment,
  };

  comments.unshift(cardData);

  renderComments();
});

let renderComments = () => {
  const formElement = document.querySelector("#comments-form");

  // clear appointments from div first
  formElement.replaceChildren();

  for (let i = 0; i < comments.length; i++);
  {
    const commentCard = createCommentCard(comments[i]);
    newCommentsElement.appendChild(commentCard);
  }
};

renderComments();
