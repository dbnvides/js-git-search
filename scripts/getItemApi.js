async function getAPI(url) {
    try {
        const data = await fetch(url)
        const dataJson = await data.json()
        return dataJson
    } catch (error) {
        return error
    }
}

async function validation(user) {
    const baseURL = `https://api.github.com/users/${user}`

    const userDetails = await getAPI(baseURL)
    const repositories = await getAPI(`${baseURL}/repos`)

    let validationMessage = userDetails.message;

    if (validationMessage == 'Not Found') {
        
        let userNofFound = document.querySelector('.user-not-found')
        let inputUser = document.querySelector('.input-user')
        inputUser.classList.add('input-user-not-found')
        userNofFound.style.display = 'block'

    } else {

        let dataBaseUser = userDetails
        localStorage.setItem('dateUser', JSON.stringify(dataBaseUser))

        let dataRepository = repositories
        localStorage.setItem('dateUserRepository', JSON.stringify(dataRepository))

        setRecentSearch(userDetails, repositories)

        let local = window.location.origin
        location.replace(`${local}/pages/profile/index.html`)
    }

}

