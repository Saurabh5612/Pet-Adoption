async function interestedHandler(event) {
  event.preventDefault();

  const username = ;

  if("click") {
    const response = await fetch("api/animals", {
      method: "POST",
      body: JSON.stringify({
        username
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
}
document.querySelector("").addEventListener("submit", interestedHandler);

