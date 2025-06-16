document.getElementById("activity-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const mood = document.getElementById("mood").value;
  const time = document.getElementById("time").value;
  const location = document.getElementById("location").value;

  const resDiv = document.getElementById("result");
  resDiv.innerText = "생각 중... 🧠";

  const response = await fetch("http://localhost:3000/api/suggest", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ mood, time, location })
  });

  const data = await response.json();
  resDiv.innerText = data.suggestion || "추천을 받지 못했어요 😢";
});
