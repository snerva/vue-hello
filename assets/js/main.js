//stampa a schermo un messaggio all interno di un h1 utilizzando i data
const {createApp} = Vue

createApp ({
    data() {
        return {
            message: 'HELLO THERE!',
            mexStyle: 'h1',
            image: './assets/img/ObiWan.jpg',
            imgStyle: 'img'
        }
    }
}).mount('#app')


