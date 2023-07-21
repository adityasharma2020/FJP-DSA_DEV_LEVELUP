const timeElement = document.getElementById("time");
const currentTime = new Date().toLocaleTimeString();
const nameElement = document.getElementById("name");

timeElement.textContent = `the time is ${currentTime}`;

chrome.action.setBadgeText(
  {
    text: "TIME",
  },
  () => {
    console.log("finished settting badge text");
  }
);

chrome.storage.sync.get(["name"], (res) => {
  const name = res.name ?? "???";
  nameElement.textContent = `your name  is ${name}`;
});

console.log(this);
