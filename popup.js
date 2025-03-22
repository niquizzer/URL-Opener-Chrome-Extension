let submit = document.getElementById("submit");
let links = document.getElementById("linkBox");
let save = document.getElementById("save");
let listName = prompt;

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

let oldSaves;
let saveInfo = links.value;

if (saveInfo) {

  listName = prompt("What would you like to name this list?");

  console.log(`You named your saved list ${listName}`);

  chrome.storage.local.get(["savedUrls"]).then((result) => {

  oldSaves = result.savedUrls.value;

  });

} else return;

  if (listName == oldSaves) {
    
    let overwrite = confirm("Overwrite exising list?");

  } else if (listName == null) {

    return;

  }

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

