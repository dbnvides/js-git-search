function getUserHome() {
    return JSON.parse(localStorage.getItem('homeUser')) || []
}

function getRepositoryHome() {
    return JSON.parse(localStorage.getItem('homeRepository')) || []
}

function renderUserHome() {

    const ulHome = document.querySelector('.list-serach-recent')

    let user = getUserHome()

    ulHome.innerHTML = ''

    user.map(element => {

        let liUser = document.createElement('li')
        let img = document.createElement('img')
        img.classList.add('img-user-profile')

        let pText = document.createElement('p')
        pText.classList.add('click-view')
        pText.innerText = 'Acessar esse perfil'

        img.id = element.id
        img.src = element.avatar_url

        img.addEventListener('click', (event) => {

            if(event.target.id == element.id){
                validation(element.login)
            }
        })


        liUser.append(img,pText)
        ulHome.appendChild(liUser)
    });

}

renderUserHome()
