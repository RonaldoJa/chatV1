const socket = io();

const formMessage = document.querySelector('#formMessage');
const userNameInput = document.querySelector('#usernameInput')
const mensajeInput = document.querySelector('#mensajeInput')
const messagePool = document.querySelector('#messagePool');

formMessage.addEventListener('submit', e => {
    e.preventDefault();

    const username = userNameInput.value;
    const message = mensajeInput.value;

    socket.emit('cliente:mensaje', { username, message })
})

socket.on('server:mensaje', data => {
    messagePool.innerHTML = ""
    data.forEach(message => {
        messagePool.innerHTML += `<h2> ${message.username}: ${message.message}</h2>`
    })
    
})