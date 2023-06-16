// variables

const minusBtn = document.getElementById("tog");

const container = document.querySelector(".container");

// minusBtn.addEventListener("click", function () {
//   if (container) {
//     if (container.style.display === "none") {
//       container.style.display = "flex";
//     } else {
//       container.style.display = "none";
//     }
//   }
// });

minusBtn.addEventListener("click", function () {
  if (container) {
    container.classList.toggle("hidden");
  }
});

document.querySelector("button").addEventListener("click", () => {
  let rem = document.querySelector(".notice");

  if (rem) {
    rem.remove();
  }

  let notice = document.createElement("div");
  notice.className = "notice";
  notice.appendChild(
    document.createTextNode(
      "Your response is being submittd you may leave this window"
    )
  );
  document.querySelector("main").appendChild(notice);
  setTimeout(clearError, 2000);
});
function clearError() {
  let rem = document.querySelector(".notice");
  if (rem) {
    rem.remove();
  }
}
