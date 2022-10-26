//stampa a schermo un messaggio all interno di un h1 utilizzando i data
const {createApp} = Vue

// createApp ({
//     data() {
//         return {
//             message: 'HELLO THERE!',
//             mexStyle: 'h1',
//             image: './assets/img/ObiWan.jpg',
//             imgStyle: 'img'
//         }
//     }
// }).mount('#app')

createApp ({
    data() {
        return {
            message: 'HELLO THERE!',
            mexStyle: {
                color: 'gold',
                fontSize: '60px',
                margin: '3rem'
            },
            image: './assets/img/ObiWan.jpg',
            imgStyle: {
                width: '700px',
                maxWidth: '100%' 
            }
           
        }
    }
}).mount('#app')
