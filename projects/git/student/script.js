function addStudent() {
    const input = document.getElementById("studentInput");
    const name = input.value.trim();
    if (!name) return;

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${name}</span>
        <button onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("studentList").appendChild(li);
    input.value = "";
}

/* Dark Mode Toggle */
function toggleDarkMode() {
    document.body.classList.toggle("dark");

    const btn = document.querySelector(".theme-toggle");
    btn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
}
