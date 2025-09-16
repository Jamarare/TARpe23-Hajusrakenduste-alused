function loadXml(filename) {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filename, false);
    xmlhttp.send();
    return xmlhttp.responseXML;
}

function generateTableRows(XMLContent) {
    let tableRows = "<tr><th>Title</th><th>Price</th><th>Platforms</th><th>Language</th></tr>";
    let gameElements = XMLContent.getElementsByTagName("game");

    for (let i = 0; i < gameElements.length; i++) {
        const titleElement = gameElements[i].getElementsByTagName("title")[0];
        const title = titleElement.textContent;
        const price = gameElements[i].getElementsByTagName("price")[0].textContent;

        const platforms = Array.from(gameElements[i].getElementsByTagName("platform"))
                               .map(p => p.textContent)
                               .join(", ");

        const lang = titleElement.getAttribute("lang");

        tableRows += 
            "<tr><td>" + title +
            "</td><td>" + price +
            "</td><td>" + platforms +
            "</td><td>" + lang +
            "</td></tr>";
    }
    return tableRows;
}

document.getElementById("app").innerHTML = `<table id="xmlTable" border="1"></table>`;
document.getElementById("xmlTable").innerHTML = generateTableRows(loadXml("games.xml"));
