async function newFormHandler(event) {
  event.preventDefault();

  const animal_name = document.querySelector('input[name="pet_name"]').value;
  const species = document.querySelector('input[name="pet_species"]').value;
  const age = document.querySelector('input[name="pet_age"]').value;
  const gender = document.querySelector('input[name="pet_gender"]').value;
  const location_city = document.querySelector('input[name="pet_city"]').value;
  const location_state = document.querySelector('input[name="pet_state"]').value;
  const maintenance = document.querySelector('input[name="pet_maintenance"]').value;
  const temperament = document.querySelector('input[name="pet_temperament"]').value;

  if(email && password) {
    const response = await fetch("api/animals", {
      method: "post",
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
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
}
document.querySelector(".add-pet-form").addEventListener("submit", loginFormHander);

