fetch("https://api.artic.edu/api/v1/artworks/214960")
  .then((response) => response.json())
  .then((data) => artListDetails(data));

function artListDetails(art) {
  console.log(art.data.title);

  const refNum = document.querySelector("#main_reference_number");
  refNum.textContent = art.data.main_reference_number;
  // const img = document.querySelector("#image_id");
  // img.src = art.data.image_id;

  const date = document.querySelector("#date_display");
  date.textContent = art.data.date_display;

  const title = document.querySelector("#title");
  title.textContent = art.data.title;

  const medium = document.querySelector("#medium_display");
  medium.textContent = art.data.medium_display;

  const size = document.querySelector("#dimensions");
  size.textContent = art.data.dimensions;

  const artist = document.querySelector("#artist_display");
  artist.textContent = art.data.artist_display;

  const onLoan = document.querySelector("#on_loan_display");
  onLoan.textContent = art.data.on_loan_display;

  const subject = document.querySelector("#subject_titles");
  subject.textContent = art.data.subject_titles;

  const category = document.querySelector("#category_titles");
  category.textContent = art.data.category_titles;

  const classify = document.querySelector("#classification_titles");
  classify.textContent = art.data.classification_titles;
}
