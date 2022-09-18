chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  document.getElementById("street").innerHTML = message.street;
  document.getElementById("city").innerHTML = message.city;
  sendResponse({
    data: "Response from popup.js",
  });
});
