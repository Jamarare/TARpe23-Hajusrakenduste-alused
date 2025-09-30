const people = [
    {
      id: 1,
      name: "Elizabeth II",
      birthYear: 1926,
      parents: [],
      children: [2, 3, 4, 5]
    },
    {
      id: 2,
      name: "Charles III",
      birthYear: 1948,
      parents: [1],
      children: [6, 7]
    },
    {
      id: 3,
      name: "Anne, Princess Royal",
      birthYear: 1950,
      parents: [1],
      children: [8, 9]
    },
    {
      id: 4,
      name: "Andrew, Duke of York",
      birthYear: 1960,
      parents: [1],
      children: [10, 11]
    },
    {
      id: 5,
      name: "Edward, Earl of Wessex",
      birthYear: 1964,
      parents: [1],
      children: [12, 13]
    },
    {
      id: 6,
      name: "William, Prince of Wales",
      birthYear: 1982,
      parents: [2],
      children: [14, 15, 16]
    },
    {
      id: 7,
      name: "Harry, Duke of Sussex",
      birthYear: 1984,
      parents: [2],
      children: [17, 18]
    },
    {
      id: 8,
      name: "Peter Phillips",
      birthYear: 1977,
      parents: [3],
      children: [19, 20]
    },
    {
      id: 9,
      name: "Zara Tindall",
      birthYear: 1981,
      parents: [3],
      children: [21, 22, 23]
    },
    {
      id: 10,
      name: "Princess Beatrice",
      birthYear: 1988,
      parents: [4],
      children: []
    },
    {
      id: 11,
      name: "Princess Eugenie",
      birthYear: 1990,
      parents: [4],
      children: []
    },
    {
      id: 12,
      name: "Lady Louise Mountbatten-Windsor",
      birthYear: 2003,
      parents: [5],
      children: []
    },
    {
      id: 13,
      name: "James, Earl of Wessex",
      birthYear: 2007,
      parents: [5],
      children: []
    },
    {
      id: 14,
      name: "Prince George",
      birthYear: 2013,
      parents: [6],
      children: []
    },
    {
      id: 15,
      name: "Princess Charlotte",
      birthYear: 2015,
      parents: [6],
      children: []
    },
    {
      id: 16,
      name: "Prince Louis",
      birthYear: 2018,
      parents: [6],
      children: []
    },
    {
      id: 17,
      name: "Prince Archie",
      birthYear: 2019,
      parents: [7],
      children: []
    },
    {
      id: 18,
      name: "Princess Lilibet",
      birthYear: 2021,
      parents: [7],
      children: []
    },
    {
      id: 19,
      name: "Savannah Phillips",
      birthYear: 2010,
      parents: [8],
      children: []
    },
    {
      id: 20,
      name: "Isla Phillips",
      birthYear: 2012,
      parents: [8],
      children: []
    },
    {
      id: 21,
      name: "Mia Tindall",
      birthYear: 2014,
      parents: [9],
      children: []
    },
    {
      id: 22,
      name: "Lena Tindall",
      birthYear: 2018,
      parents: [9],
      children: []
    },
    {
      id: 23,
      name: "Lucas Tindall",
      birthYear: 2021,
      parents: [9],
      children: []
    },
  ];
  
  const currentYear = 2025;
  
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
  
  renderTable();
  