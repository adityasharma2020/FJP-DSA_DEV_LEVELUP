/* we are not using setinterval because as soon as our service worker
 goes to sleep that set Interal function also stops.
 * so to avoid that we are using a chrome api called alarms.
 it  schedule a code to run periodically 
*/
chrome.alarms.create({
  periodInMinutes: 1 / 10,
});
