async function userProfile(list, repos) {
    let dataUser = await list
    let dataRepos = await repos

    renderProfile(dataUser)
    renderRepository(dataRepos)
}

function getUserStorage() {
    return JSON.parse(localStorage.getItem('dateUser')) || []
}

function getRepositoryUserStorage() {
    return JSON.parse(localStorage.getItem('dateUserRepository')) || []
}

userProfile(getUserStorage(), getRepositoryUserStorage())
