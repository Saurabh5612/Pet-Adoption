async function interestedHandler(event) {
  event.preventDefault();

  const response = await fetch("api/animals", {
    method: "PUT",
    body: JSON.stringify({
      species,
      age,
      gender,
      animal_name,
      location_city,
      location_state,
      maintenance,
      temperament
    }),
    headers: { "Content-Type": "application/json" }
  });

  // check the response status
  if (response.ok) {
    window.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.getElementById('adopt_button').addEventListener('submit', interestedHandler);

//   event.preventDefault();

//   const id = window.location.toString().split("/") [
//     window.location.toString().split('/').length - 1
//   ];

//   const response = await fetch(`api/animals/${id}`, {
//     method: "PUT",
//     body: JSON.stringify({
//       username
//     }),
//     headers: { "Content-Type": "application/json" }
//   });

//   // check the response status
//   if (response.ok) {
//     window.location.place();
//   } else {
//     alert(response.statusText);
//   }
// }

