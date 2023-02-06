function renderProfile(userDate) {

    let btnBackToHome = document.querySelector('.back-to-search-user')
    btnBackToHome.addEventListener('click', () => {
        let local = window.location.origin
        location.replace(`${local}/pages/home/index.html`)
    })

    let imgProfile = document.querySelector('#img-profile')
    imgProfile.src = userDate.avatar_url

    let nameProfile = document.querySelector('#name-user')
    nameProfile.innerText = userDate.name

    let carrerUser = document.querySelector('#carrer-user')
    carrerUser.innerText = userDate.bio

    let emailUser = userDate.email
    if (!emailUser == null) {
        let buttonEmail = document.querySelector('.bnt-email-user')
        buttonEmail.href = userDate.email
    } else {
        let buttonEmail = document.querySelector('.bnt-email-user')
        buttonEmail.classList.add('bnt-email-user-not')
    }

}

function renderRepository(repository) {
    const ulList = document.querySelector('.list-repositories')

    repository.forEach(element => {

    let liCard = document.createElement('li')
    liCard.classList.add('card')

    let boxText = document.createElement('div')
    boxText.classList.add('box-text-desc')

    let nameRepository = document.createElement('h2')
    nameRepository.classList.add('name-repository')
    nameRepository.innerText = element.name

    let descRepository = document.createElement('p')
    descRepository.classList.add('description-repository', 'text-desc')
    descRepository.innerText = element.description

    let boxButtons = document.createElement('div')
    boxButtons.classList.add('box-buttons-redirect', 'box-repository')

    let btnRepository = document.createElement('a')
    btnRepository.classList.add('btn-repository', 'btn-default-rep')
    btnRepository.setAttribute('href', `${element.html_url}`)
    btnRepository.setAttribute('target', '_blank')
    btnRepository.innerText = 'Respositório'

    let btnDemo = document.createElement('a')
    btnDemo.classList.add('btn-demo-site', 'btn-default-rep')
    if(element.homepage){
        btnDemo.setAttribute('href', `${element.homepage}`)
        btnDemo.setAttribute('target', '_blank')
    }else{
        btnDemo.style.display = 'none'
    }
    btnDemo.innerText = 'Demo'

    boxText.append(descRepository)
    boxButtons.append(btnRepository,btnDemo)
    liCard.append(nameRepository,boxText,boxButtons)
    ulList.appendChild(liCard)
    });
}