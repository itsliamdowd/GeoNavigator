var street = document.getElementsByClassName(
  "gm-iv-short-address-description"
)[0].innerText;
var city = document.getElementsByClassName("gm-iv-long-address-description")[0]
  .innerText;

var timer = 0;
var si = setInterval(() => {
  try {
    chrome.runtime.sendMessage(
      {
        street: street,
        city: city,
      },
      function (response) {
        console.dir(response);
      }
    );
    timer++;
    if (timer === 5) {
      clearInterval(si);
    }
  } catch (error) {
    console.log(error);
  }
}, 2000);
