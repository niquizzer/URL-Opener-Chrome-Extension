let submit = document.getElementById("submit");
let links = document.getElementById("linkBox");

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
function createTabs(e) {

  console.log('createTabs function executed');
  
  e = links.value;

  let urls = e.split('\n');

  urls.forEach((url) => {

    let trimmedUrl = url.trim(); 

    if (trimmedUrl) {

      chrome.tabs.create ({

        url: trimmedUrl
      
      }); 
    }

    return e;

  });

  console.log(`This is the input logged on inputText: ${e}`);
  
  }

  let inputText = createTabs.e;

  chrome.storage.local.set({ savedUrls : inputText }).then(() => {

    console.log(`value sent to local storage: ${inputText}`);

  });