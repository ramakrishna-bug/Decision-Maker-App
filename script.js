let options = [];

function addOption() {
    const input = document.getElementById("optionInput");
    const value = input.value.trim();

    if (value === "") return;

    options.push(value);
    input.value = "";
    renderOptions();
}

function renderOptions() {
    const list = document.getElementById("optionsList");
    list.innerHTML = "";

    options.forEach((opt, index) => {
        const li = document.createElement("li");
        li.textContent = opt;

        li.onclick = () => removeOption(index);

        list.appendChild(li);
    });
}

function removeOption(index) {
    options.splice(index, 1);
    renderOptions();
}

function decide() {
    if (options.length === 0) {
        document.getElementById("result").textContent = "Add options first!";
        return;
    }

    const randomIndex = Math.floor(Math.random() * options.length);
    const choice = options[randomIndex];

    document.getElementById("result").textContent = "👉 " + choice;
}
