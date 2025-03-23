let submit = document.getElementById("submit");
let links = document.getElementById("linkBox");
let save = document.getElementById("save");
let load = document.getElementById("load");

let listName;
let oldSaves;


document.addEventListener('DOMContentLoaded', async () => {

  chrome.storage.local.get(["urlBox"]).then((result) => {

    if(result.urlBox) {

      result.urlBox.split('\n');

      links.value = result.urlBox;

    }
  });
});

submit.addEventListener("click", createTabs);
save.addEventListener("click", saveList);

function saveList () {

let saveInfo = links.value;

if (!saveInfo) {

  alert("Nothing to save");

  return;

} else if (saveInfo) {

  listName = prompt("What would you like to name this list?");

  if (listName) {

    let result = confirm(`Are you sure you want to name your list ${listName}`);

    if(result) {

      chrome.storage.local.set({savedLists : listName, savedValues : saveInfo }).then(() => {

        alert(`${listName} has been saved as the list name with ${saveInfo} as the links.`);

      }) 

    }
  
  } else {

    alert("No name entered");

    return;
  
  }

} else return;



}

function loadlist () {



}



//Create new chrome tab function
function createTabs() {
  
  let e = links.value;
  let urls = e.split('\n');

  urls.forEach((url) => {

    let trimmedUrl = url.trim(); 

    if (trimmedUrl) {

      chrome.tabs.create ({

        url: trimmedUrl
      
      }); 
    }

  });

  chrome.storage.local.set({ urlBox : e }).then(() => {

    console.log(`value sent to local storage: ${e}`);

  });
  
  return e;

  }

