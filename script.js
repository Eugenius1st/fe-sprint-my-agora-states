// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  // image
  const avatarImg = document.createElement("img");
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of" + obj.author;
  avatarWrapper.append(avatarImg);

  // contents
  const discussionTitle = document.createElement("h4");
  const titleAnchor = document.createElement("a");
  discussionTitle.append(titleAnchor);
  titleAnchor.href = obj.url;
  titleAnchor.textContent = obj.title;

  const discussionInfo = document.createElement("div");
  discussionInfo.textContent = `${obj.author} / ${new Date(
    obj.createdAt
  ).toLocaleString()}`;
  //answer
  const answerCheck = document.createElement("p");
  discussionAnswered.append(answerCheck);
  answerCheck.textContent = "☑";

  //form data
  discussionContent.append(discussionTitle, discussionInfo);
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  console.log(li);
  return li;
};

const form = document.querySelector("form.form");
const inputName = document.querySelector("div.form__input--name > input");
const inputTitle = document.querySelector("div.form__input--title > input");
const inputText = document.querySelector("div.form__textbox > textarea");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    id: "Eugenius1st",
    createdAt: new Date().toLocaleString(),
    title: inputTitle.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: inputName.value,
    answer: null,
    bodyHTML: inputText.value,
    avatarUrl: "./eugene.jpg",
  };
  agoraStatesDiscussions.unshift(obj);
  const newDiscussions = convertToDiscussion(obj);
  ul.prepend(newDiscussions);
  inputTitle.textContent = "";
  inputName.textContent = "";
  inputText.textContent = "";
});

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  console.log(2);
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);
