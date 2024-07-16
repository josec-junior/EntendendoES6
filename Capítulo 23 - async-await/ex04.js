import fetch from "node-fetch"

async function fetchFromGitHub(path) {
    const url = `https://api.github.com${path}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

async function showGitHubUserAndRepos(username) {
    const [user, repos] = await Promise.all([
        fetchFromGitHub(`/users/${username}`),
        fetchFromGitHub(`/users/${username}/repos`)
    ])
    console.log(user.name)
    console.log(repos.length)
}

showGitHubUserAndRepos("josec-junior")