import fetch from "node-fetch";

async function showGitHubUser(username) {
    try {
        const url = `https://api.github.com/users/${username}`;
        const resposta = await fetch(url)
        const user = await resposta.json()
	    console.log(user)
    } catch(error) {
        console.log(error.message)
    }
}

showGitHubUser("juniorrr.py")