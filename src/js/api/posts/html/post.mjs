import { deletePost } from "../deletePost.mjs";
import { updatePostForm } from "../updatePost.mjs";

/**
 * This functions builds the media element for the posts
 * @param {string} postMedia Contains the post media from API.
 * @returns a constructed HTML element of the post media.
 */
export const postHeader = (postMedia) => {
  const postHeadImg = document.createElement("div");
  const headImg = document.createElement("img");
  headImg.className = "card-img-top";
  headImg.src = postMedia;
  postHeadImg.appendChild(headImg);

  const postHead = postHeadImg;

  return postHead;
};

/**
 * Creates a div/container for the post body content.
 * @returns a div element.
 */
export const postWrapper = () => {
  const postBodyContainer = document.createElement("div");
  postBodyContainer.className = "card-body row pb-0";

  return postBodyContainer;
};

/**
 * This function create's post information HTML element.
 * @param {string} author Contains the author of the post
 * @param {string} dateCreated Contains the date of the post
 * @returns a constructed HTML element of the post information.
 */
export const postInfo = (author, dateCreated) => {
  const postInfoWrapper = document.createElement("div");
  postInfoWrapper.className = "d-flex flex-column align-self-center w-50 col-6";

  // Creating author name text
  const authorName = document.createElement("p");
  authorName.className = "mb-0 bold-calibri";
  authorName.textContent = author;

  // Creating post date text
  const postDate = document.createElement("p");
  postDate.className = "mb-1 regular-calibri";
  postDate.textContent = dateCreated;

  postInfoWrapper.append(authorName, postDate);
  let postInfo = postInfoWrapper;

  return postInfo;
};

/**
 * This function creates the user avatar HTML.
 * @param {string} author Contains the author of the post.
 * @param {string} userAvatar Contains the avatar of the user.
 * @returns a constructed HTML element of the user avatar.
 */
export const userAvatar = (author, userAvatar) => {
  const postAvatarContainer = document.createElement("div");
  postAvatarContainer.className = "col-1 p-0";

  const avatar = document.createElement("img");
  avatar.className = "rounded-circle w-100";
  avatar.src = userAvatar;
  avatar.alt = `${author}'s avatar`;

  postAvatarContainer.appendChild(avatar);

  const postAvatar = postAvatarContainer;
  return postAvatar;
};

/**
 * This function creates the body content HTML of the post.
 * @param {string} title Contains the title of the post.
 * @param {string} body Contains the body of the post.
 * @returns a constructed HTML element of the post body content.
 */
export const postContent = (title, body) => {
  const postContentWrapper = document.createElement("div");
  postContentWrapper.className = "mt-4 container-md ps-0";

  const postTitle = document.createElement("h2");
  postTitle.className = "fs-5 bold-calibri";
  postTitle.textContent = title;

  const postBody = document.createElement("p");
  postBody.className = "w-100 regular-calibri";
  postBody.textContent = body;

  postContentWrapper.append(postTitle, postBody);

  const postContent = postContentWrapper;

  return postContent;
};

/**
 * This functions create's the reaction section of the post HTML.
 * @param {string} comments contains the comments of the post.
 * @param {string} likes Contains the likes of the post.
 * @returns a constructed HTML object of reactions.
 */
export const postReactions = (comments, likes) => {
  const reactionWrapper = document.createElement("div");
  reactionWrapper.className = "d-flex align-items-end justify-content-end flex-fill me-3 me-lg-5";

  // creating comments HTML.
  const commentWrapper = document.createElement("div");
  commentWrapper.className = "d-flex me-4 me-lg-5 align-items-center fs-5";

  const commentIcon = document.createElement("i");
  commentIcon.className = "fa-solid fa-comment";

  const commentCount = document.createElement("p");
  commentCount.className = "m-0 ms-2";
  commentCount.textContent = comments;

  // assembling the comment HTML.
  commentWrapper.append(commentIcon, commentCount);

  // creating likes HTML.
  const likeWrapper = document.createElement("div");
  likeWrapper.className = "d-flex align-items-center fs-5";

  const likeIcon = document.createElement("i");
  likeIcon.className = "fa-solid fa-heart";

  const likeCounter = document.createElement("p");
  likeCounter.className = "m-0 ms-2";
  likeCounter.textContent = likes;

  // assembling the like HTML.
  likeWrapper.append(likeIcon, likeCounter);

  // assembling the whole element and returning.
  reactionWrapper.append(commentWrapper, likeWrapper);

  const reactionElement = reactionWrapper;

  return reactionElement;
};

/**
 * This creates the delete button for the post
 * @param {number} id contains the id value of the post.
 * @returns a constructed HTML object of an cross icon.
 */
export const deleteButton = (id) => {
  const btnContainer = document.createElement("div");
  btnContainer.className = "d-flex justify-content-end";

  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fa-solid fa-xmark fs-4";
  deleteIcon.id = id;

  deleteIcon.addEventListener("click", deletePost);

  btnContainer.appendChild(deleteIcon);

  const deleteButton = btnContainer;

  return deleteButton;
};

export const editButton = (id) => {
  const editContainer = document.createElement("div");
  editContainer.className = "d-flex justify-content-start ps-0 mt-3";

  const edit = document.createElement("p");
  edit.className = "mb-0 edit-btn";
  edit.textContent = "Edit post";
  edit.id = id;

  edit.addEventListener("click", updatePostForm);

  editContainer.appendChild(edit);

  const editBtn = editContainer;

  return editBtn;
};
