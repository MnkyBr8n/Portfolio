function addRecommendation() {
  let recommendationText = document.getElementById("new_recommendation").value;
  if (recommendationText.trim() === "") {
    alert("Please enter a recommendation before submitting.");
    return;
  }
  
  let recommendationSection = document.getElementById("all_recommendations");
  let newRec = document.createElement("div");
  newRec.classList.add("recommendation");
  newRec.innerHTML = `<span>&#8220;</span> ${recommendationText} <span>&#8221;</span>`;
  
  recommendationSection.appendChild(newRec);
  
  // Show pop-up
  showPopup(true);
  
  // Clear textarea
  document.getElementById("new_recommendation").value = "";
}

function showPopup(show) {
  let popup = document.getElementById("popup");
  popup.style.display = show ? "block" : "none";
}
