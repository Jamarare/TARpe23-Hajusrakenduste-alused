const currentYear = 2025;
let people = [];

async function loadXML() {
  const response = await fetch('family.xml');
  const text = await response.text();
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(text, "application/xml");

  const personElements = xmlDoc.querySelectorAll("person");
  people = Array.from(personElements).map(personEl => {
    return {
      id: parseInt(personEl.getAttribute("id")),
      name: personEl.querySelector("name").textContent,
      birthYear: parseInt(personEl.querySelector("birthYear").textContent),
      parents: parseIds(personEl.querySelector("parents").textContent),
      children: parseIds(personEl.querySelector("children").textContent)
    };
  });

  renderTable();
}

function parseIds(text) {
  if (!text || text.trim() === "") return [];
  return text.split(",").map(s => parseInt(s.trim()));
}

function findPersonById(id) {
  return people.find(p => p.id === id);
}

function getParentName(person) {
  if (person.parents.length === 0) return "-";
  const parent = findPersonById(person.parents[0]);
  return parent ? parent.name : "-";
}

function getGrandparentName(person) {
  if (person.parents.length === 0) return "-";
  const parent = findPersonById(person.parents[0]);
  if (!parent || parent.parents.length === 0) return "-";
  const grandparent = findPersonById(parent.parents[0]);
  return grandparent ? grandparent.name : "-";
}

function getAge(person) {
  if (person.children.length === 0) {
    return currentYear - person.birthYear;
  }
  return "-";
}

function getBirthYearVsParent(person) {
  if (person.parents.length === 0) return "-";
  const parent = findPersonById(person.parents[0]);
  if (!parent) return "-";
  return person.birthYear - parent.birthYear;
}

function hasAtLeastTwoChildren(person) {
  return person.children.length >= 2;
}

function renderTable() {
  const tbody = document.querySelector("#familyTree tbody");
  tbody.innerHTML = "";

  const searchName = document.getElementById("searchName").value.toLowerCase();
  const searchSymbol = document.getElementById("searchSymbol").value.toLowerCase();
  const searchLength = document.getElementById("searchLength").value;

  people.forEach(person => {
    if (!hasAtLeastTwoChildren(person)) return;

    if (searchName && !person.name.toLowerCase().includes(searchName)) return;
    if (searchSymbol && !person.name.toLowerCase().includes(searchSymbol)) return;
    if (searchLength === "lt7" && person.name.length >= 7) return;
    if (searchLength === "gte7" && person.name.length < 7) return;

    const tr = document.createElement("tr");

    if (person.name.length < 7) tr.classList.add("short-name");

    const tdName = document.createElement("td");
    tdName.textContent = person.name;

    const tdBirthYear = document.createElement("td");
    tdBirthYear.textContent = person.birthYear;

    const tdParent = document.createElement("td");
    tdParent.textContent = getParentName(person);

    const tdGrandparent = document.createElement("td");
    tdGrandparent.textContent = getGrandparentName(person);

    const tdChildrenCount = document.createElement("td");
    tdChildrenCount.textContent = person.children.length;

    const tdAge = document.createElement("td");
    tdAge.textContent = getAge(person);

    const tdBirthVsParent = document.createElement("td");
    tdBirthVsParent.textContent = getBirthYearVsParent(person);

    tr.appendChild(tdName);
    tr.appendChild(tdBirthYear);
    tr.appendChild(tdParent);
    tr.appendChild(tdGrandparent);
    tr.appendChild(tdChildrenCount);
    tr.appendChild(tdAge);
    tr.appendChild(tdBirthVsParent);

    tbody.appendChild(tr);
  });
}

document.getElementById("searchName").addEventListener("input", renderTable);
document.getElementById("searchSymbol").addEventListener("input", renderTable);
document.getElementById("searchLength").addEventListener("change", renderTable);

loadXML();
