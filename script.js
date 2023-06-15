// const data = new Promise((resolve, reject) => {
//     let user = {
//         name: 'Alex',
//         age: 20
//     }
//     setTimeout(() => {
//         console.log("Загрузка данных с сервера...")
//         resolve(user)
//     }, 2000);
// }).then(data => {
//     console.log(data)
// })

// const video = document.querySelector('video')

// navigator.mediaDevices.getUserMedia({
//     video: true,
// }).then(stream => {
//     video.srcObject = stream
//     video.play()
// }).catch((error) => {
//     console.log('Ошибка подключения', error);
// })

const btn = document.querySelector('button')

btn.addEventListener('click', () => getInfo())

function getInfo() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => console.log(data))
}