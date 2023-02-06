function transferItemApi() {

    const buttonUser = document.querySelector('#btn-user-git')
    let inputUser = document.querySelector('.input-user')
    let btnGit = document.querySelector('#btn-user-git')

    inputUser.addEventListener('input', () => {
        if (inputUser.value.length > 0) {

            btnGit.style.background = '#C2255C'
            btnGit.style.color = '#fff'
            btnGit.style.cursor = 'pointer'

        } else {

            btnGit.style.background = 'rgba(214, 51, 108, 0.4)'
            btnGit.style.color = 'rgba(255, 255, 255, 0.35);'
            btnGit.style.cursor = 'auto'
        }
    })

    buttonUser.addEventListener('click', () => {

        let userGit = inputUser.value;

        buttonUser.innerHTML = ''
        btnGit.style.background = 'rgba(214, 51, 108, 0.4)'
        buttonUser.classList.add('btn-user-spinner')

        let img = document.createElement('img')
        img.src = '../assets/spinner.svg'

        buttonUser.append(img)

        setTimeout(() => {

            validation(userGit)

            buttonUser.innerText = 'Ver perfil do github'

        }, 2000)


    })

}

transferItemApi()

function setRecentSearch(user, repository) {

    let dataBaseUser = user
    let dataRepository = repository

    let newArr = getUserHome()
    let newArrResp = getRepositoryHome()

    itemExist(dataBaseUser, newArr)
    itemExist(dataRepository, newArrResp)

    newArr = [dataBaseUser, ...newArr]
    newArrResp = [dataRepository, ...newArrResp]

    localStorage.setItem('homeUser', JSON.stringify(newArr))
    localStorage.setItem('homeRepository', JSON.stringify(newArrResp))
}

function itemExist(user, data) {

    data.forEach(element => {
        if (element.id !== user.id) {
            if (data.length >= 2) {
                data.splice(2, 1)
            }
        } else {
            return true
        }
    });
}