let submit = document.getElementById("submit");
  
submit.addEventListener("click", function() {

  let links = document.getElementById("linkBox").value;

  let urls = links.split('\n');

  urls.forEach((url) => {
    let trimmedUrl = url.trim(); // Removes extra spaces or hidden characters
    if (trimmedUrl) { // Ensures it's not an empty string
      chrome.tabs.create({ url: trimmedUrl });
    }
  });

});

/*chrome.runtime.onInstalled.addListener(({reason}) => {
    if (reason === 'install') {
      chrome.tabs.create({
        url: "onboarding.html"
      });
    }
  });*/