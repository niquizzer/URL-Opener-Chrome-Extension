let submit = document.getElementById("submit");
let links = document.getElementById("linkBox");
let e;

document.addEventListener('DOMContentLoaded', async () => {

  chrome.storage.local.get(["savedUrls"]).then((result) => {

    if(result.savedUrls) {

      result.savedUrls.split('\n');

      console.log(`Links formatted ${result.savedUrls}`);

      links.innerText = result.savedUrls;

      console.log(`Previous links returned: ${result.savedUrls}`);

    }
  });
});

submit.addEventListener("click", createTabs);

//Create new chrome tab function
function createTabs() {
  
  let e = links.value;

  console.log(`the current e value is ${e}`);

  let urls = e.split('\n');

  urls.forEach((url) => {

    let trimmedUrl = url.trim(); 

    if (trimmedUrl) {

      chrome.tabs.create ({

        url: trimmedUrl
      
      }); 
    }

  });

  console.log(e);

  chrome.storage.local.set({ savedUrls : e }).then(() => {

    console.log(`value sent to local storage: ${e}`);

  });
  
  return e;

  }

