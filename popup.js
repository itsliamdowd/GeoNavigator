chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  document.getElementById("street").innerHTML = message.street;
  document.getElementById("city").innerHTML = message.city;
  document.getElementById("link").href = "https://www.google.com/maps/search/" + message.street + " " + message.city + "/";
  document.getElementById("link").style.display = "block";
  sendResponse({
    data: "Response from popup.js",
  });
});
