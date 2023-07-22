chrome.runtime.onInstalled.addListener((details) => {
  chrome.contextMenus.create({
    id: "contextMenu1",
    title: "Text context menu",
    contexts: ["page", "selection"],
  });

  chrome.contextMenus.onClicked.addListener((event) => {
    console.log(event);
    chrome.tabs.create({
      url: `https://www.youtube.com/results?search_query=${event.selectionText}`,
    });
  });
});

console.log("background script runnig");

chrome.storage.local.get(["text"], (res) => {
  console.log(res);
});

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  console.log(msg);
  console.log(sender);
  console.log(sendResponse);
});
