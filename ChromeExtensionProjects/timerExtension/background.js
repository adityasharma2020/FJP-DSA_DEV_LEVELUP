/* we are not using setinterval because as soon as our service worker
 goes to sleep that set Interal function also stops.
 * so to avoid that we are using a chrome api called alarms.
 it  schedule a code to run periodically 
*/
chrome.alarms.create({
  periodInMinutes: 1 / 60,
});

chrome.alarms.onAlarm.addListener((alarm) => {
  chrome.storage.local.get(["timer", "isRunning"], (res) => {
    const time = res.timer ?? 0;
    const isRunning = res.isRunning ?? true;
    if (!isRunning) {
      return;
    }
    chrome.storage.local.set({
      timer: time + 1,
    });
    chrome.action.setBadgeText({
      text: `${time + 1}`,
    });

    chrome.storage.sync.get(["notificationTime"], (res) => {
      const notificationTime = res.notificationTime ?? 1000;
      if (time % notificationTime == 0) {
        this.registration.showNotification("chrome timer Extension", {
          body: `${notificationTime} second has passed`,
          icon: "icon.png",
        });
      }
    });
  });
});

console.log(this);