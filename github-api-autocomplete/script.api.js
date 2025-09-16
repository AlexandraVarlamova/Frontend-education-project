let containerForm = document.querySelector(".container-form");
let containerRepo = document.querySelector(".container-repo");
let form = document.querySelector(".form");
let input = document.querySelector(".search-field");
let message = document.querySelector(".hidden");
let autoComplete;
let repos;

containerForm.addEventListener("submit", submitForm);
containerRepo.addEventListener("click", closeRepo);


function submitForm(event) {
  event.preventDefault();
  clearAutoComplete(autoComplete);
  clearMessage();
  input.value = "";
}


function closeRepo(event) {
  if (event.target.tagName !== "BUTTON") return;
  toClearRepo(event.target.closest("div"));
}

const debounce = (fn, debounceTime) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, debounceTime);
  };
};


async function inputChange() {
  console.log("inputChange вызвана!"); 
  try {
    const searchTerm = input.value.trim(); 
    const url = `https://api.github.com/search/repositories?q=${searchTerm}&per_page=5`; 
    console.log("URL запроса:", url); 

    const response = await fetch(url); 
    if (!response.ok) {
      throw new Error(`Ошибка при запросе: ${response.status}`);
    }
    const data = await response.json();
    repos = data.items;

    console.log("Результаты поиска:", repos); 

    if (!repos.length) {
      throw new Error("Не найден репозиторий. Попробуйте изменить имя");
    }
    if (containerForm.contains(autoComplete)) {
      clearAutoComplete(autoComplete);
      clearMessage();
      autoComplete = createElements();
      containerForm.append(autoComplete);
    } else if (!containerForm.contains(autoComplete)) {
      clearMessage();
      autoComplete = createElements();
      containerForm.append(autoComplete);
    }
  } catch (error) {
    console.error("Ошибка:", error); 
    clearAutoComplete(autoComplete);
    createMessage(error.message);
  }
  if (!input.value.trim()) {
    clearAutoComplete(autoComplete);
    clearMessage();
  }
}

const debounceFn = debounce(inputChange, 400);
input.addEventListener("input", debounceFn);


function createElements() {
  let autoComplete = document.createElement("div");
  autoComplete.classList.add("autoComplete");
  repos.forEach((repo) => {
    const item = document.createElement("div");
    item.classList.add("autoComplete-item");
    item.textContent = repo.name;
    item.addEventListener("click", toSelectRepo); 
    autoComplete.append(item);
  });
  return autoComplete;
}


function createMessage(text) {
  message.classList.remove("hidden");
  message.classList.add("message");
  message.textContent = text;
}


function clearMessage() {
  message.classList.remove("message");
  message.classList.add("hidden");
  message.textContent = "";
}


function clearAutoComplete(item) {
  if (item) {
    item.remove();
  }
}


function toSelectRepo(event) {
  let selectedRepo = document.createElement("div");
  let selectedRepoInfo = document.createElement("div");
  let selectedRepoButton = document.createElement("button");
  selectedRepo.classList.add("selectedRepo");
  selectedRepoInfo.classList.add("selectedRepo-info");
  selectedRepoButton.classList.add("selectedRepo-button");
  repos.forEach((repo) => {
    if (repo.name === event.target.textContent) {
      selectedRepoInfo.innerHTML = `
            <div>name: ${repo.name}</div> 
            <div>owner: ${repo.owner.login}</div>
            <div>stars: ${repo.stargazers_count}</div>`;
    }
  });
  selectedRepo.append(selectedRepoInfo);
  selectedRepo.append(selectedRepoButton);
  containerRepo.append(selectedRepo);
  submitForm(event);
}


function toClearRepo(item) {
  item.remove();
}
