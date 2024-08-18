const API_KEY = "a817234e-74ad-4433-89c0-1128cd9ffde6";
const commentsApi = new BandSiteApi(API_KEY);

async function commentsApiCall() {
  try {
    const commentsResults = await commentsApi.getComments();
    renderComments(commentsResults);
    return commentsResults;
  } catch (error) {
    console.log(error);
  }
}

commentsApiCall();

const renderComments = () => {
  const commentsInjectionSite = document.querySelector(
    ".comments__new-container"
  );
  commentsInjectionSite.replaceChildren();
  createCommentCard();
};

async function createCommentCard() {
  try {
    const commentsCall = await commentsApi.getComments();
    commentsCall.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });

    commentsCall.forEach((comment) => {
      const commentElement = document.createElement("div");
      commentElement.classList.add("comments__new");

      const avatarContainer = document.createElement("div");
      avatarContainer.classList.add("comments__new-avatar");

      const avatarImage = document.createElement("img");
      avatarImage.classList.add("comments__newavatarimg");

      const commentContainer = document.createElement("div");
      commentContainer.classList.add("comments__new-comment");

      const headingContainer = document.createElement("div");
      headingContainer.classList.add("comments__new-heading");

      const heading = document.createElement("h3");
      heading.classList.add("comments__new-name");
      heading.innerText = comment.name;

      const timeElement = document.createElement("div");
      timeElement.classList.add("comments__new-time");
      const localDate = new Date(comment.timestamp);
      let day = localDate.getDate();
      let month = localDate.getMonth() + 1;
      let year = localDate.getFullYear();
      timeElement.innerText = `${month}/${day}/${year}`;

      const commentCopy = document.createElement("p");
      commentCopy.classList.add("comments__new-copy");
      commentCopy.innerText = comment.comment;

      newCommentsElement.appendChild(commentElement);
      commentElement.appendChild(avatarContainer);
      avatarContainer.appendChild(avatarImage);
      commentElement.appendChild(commentContainer);
      commentContainer.appendChild(headingContainer);
      headingContainer.appendChild(heading);
      headingContainer.appendChild(timeElement);
      commentContainer.appendChild(commentCopy);
    });
  } catch (error) {
    console.log();
  }
}

const newCommentsElement = document.querySelector(".comments__new-container");

const formElement = document.querySelector("#comments-form");

formElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userName = event.target.name.value;
  const userComment = event.target.comment.value;

  const cardData = {
    name: userName,
    comment: userComment,
  };

  await commentsApi.postComment(cardData);
  try {
    event.target.reset();
  } catch (error) {}

  renderComments(cardData);
});

