import fetch from "node-fetch";

async function showGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    const resposta = await fetch(url)
    const user = await resposta.json()
	console.log(user)
}

showGitHubUser("josec-junior")