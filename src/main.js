import { createApp } from 'vue';
import '@/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import CKEditor from '@ckeditor/ckeditor5-vue';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
import router from './router';
import App from './App.vue';

const app = createApp( App );
app.use( router );
app.use( CKEditor );
// app.use(AOS);
app.mount('#app');
