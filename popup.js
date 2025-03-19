let submit = document.getElementById("submit");
let links = document.getElementById("linkBox");

document.addEventListener('DOMContentLoaded', async () => {

  chrome.storage.local.get(["savedUrls"]).then((result) => {

    if(result.savedUrls) {

      links.innerText = result.savedUrls;

      console.log("Previous links returned");

    }
  
  })

})

submit.addEventListener("click", function() {

  let inputText = [];
  
  inputText = links.value;

  let urls = inputText.split('\n');

  urls.forEach((url) => {

    let trimmedUrl = url.trim(); // Removes extra spaces or hidden characters

    if (trimmedUrl) { // Ensures it's not an empty string

      chrome.tabs.create ({

        url: trimmedUrl
      
      });
      

    }
  }
  )

  chrome.storage.local.set({ savedUrls : inputText }).then(() => {

    console.log("value set");

  });
}
);



  
