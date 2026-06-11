async function submitForm() {
  const action = document.getElementById("action").value;
  const name = document.getElementById("name").value;
  const vehicle_number = document.getElementById("vehicle").value;

  let url = action === "park"
    ? "http://localhost:5000/park"
    : "http://localhost:5000/exit";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name, vehicle_number })
  });

  const data = await res.json();

  // 🔥 CONDITION BASED OUTPUT
  if (action === "park") {
    document.getElementById("result").innerHTML = `
      ${data.message}<br>
      Slot: ${data.slot || ""}
    `;
  } else {
    document.getElementById("result").innerHTML = `
      ${data.message}<br>
      Slot: ${data.slot || ""}<br>
      Duration: ${data.duration || 0} min<br>
      Cost: ₹${data.cost || 0}
    `;
  }
}