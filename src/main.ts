import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/homepage.css"
import VueSocketIO from 'vue-3-socket.io'
import SocketIO from 'socket.io-client'
const app = createApp(App)

app.use(router)
app.use(new VueSocketIO({
    debug: false,
    connection: SocketIO('http://210.245.54.243:5002/', ), //options object is Optional
  })
);

app.mount('#app')
