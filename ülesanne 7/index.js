let givenProfile = "";
let progileName = "";
let progileId = "";
let profileLink = "";
let profileRepos = "";

function renderPage() {
    document.getElementById("app").innerHTML = `
    <div>
        <h1>Github profile viewer</h1>
        <p>Please enter profile name; </p>
        <input />
        <div class="content">
        <h1 id="name">Name : ${profileName}
</h1>
    <p id="id">Id: ${profileId}
</p>
    <p id="repos">Public repos: ${profileRepos}
</p>
    <p id="profileurl">Link: ${profileLink}
<a href="${profileName}
" target="_blank">/users/</a></p>
        </div>
    </div>
    `;
}