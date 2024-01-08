const btnSwitch = document.querySelector('.switch-btn')

btnSwitch.onclick = () => classUpdate()

function classUpdate(){
    let state = document.body.classList.contains('dark')
    let icon = document.querySelector('.icon-switch')

    document.body.classList.toggle('dark')
    document.body.classList.toggle('light')

    btnSwitch.classList.toggle('dark')
    btnSwitch.classList.toggle('light')

    if(state){
        icon.classList.remove('ri-moon-clear-line')
        icon.classList.add('ri-sun-line')
    } else{
        icon.classList.remove('ri-sun-line')
        icon.classList.add('ri-moon-clear-line')
    }
}