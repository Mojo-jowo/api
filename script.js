const url =
  "https://api.nasa.gov/planetary/apod?api_key=HshxIfJIURkMJqKw5GyARuBXmHsikOg1m34GpURl";

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const { hdurl, title, explanation, date, copyright } = data;
  document.getElementById("card-img-top").src = hdurl;
  document.getElementById("card-title").innerHTML = title;
  document.getElementById("card-text1").innerHTML = explanation;
  document.getElementById("card-text2").innerHTML = date;
  document.getElementById("card-text3").innerHTML = copyright;
  console.log(hdurl);
  console.log(title);
  console.log(explanation);
  console.log(date);
  console.log(copyright);
}

getData();
