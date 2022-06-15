fetch("https://api.artic.edu/api/v1/artworks/214960")
  .then((response) => response.json())
  .then((data) => artListDetails(data));
