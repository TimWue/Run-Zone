self.addEventListener("fetch", function (event) {
  // do nothing here, just log all the network requests
  console.log(event.request.url);
});

self.addEventListener('message', function (evt) {
  console.log('postMessage received', evt.data);
  setTimeout(()=>  self.registration.showNotification(evt.data),10000)
})