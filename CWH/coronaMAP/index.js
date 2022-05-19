function updateMAP(){
  fetch("/data.json")
  .then(response => response.json())
  .then(rsp => {
    console.log(rsp);
    rsp.data.forEach(element =>{
      latitude = element.latitude;
      longitude  =element.longitude;
    })
  })
  
}

updateMAP();