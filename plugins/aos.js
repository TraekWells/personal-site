import Vue from 'vue'

import AOS from 'aos'
import 'aos/dist/aos.css'

Vue.use(
  AOS.init({
    disable: window.innerWidth < 640,
    // offset: 200,
    duration: 500,
    easing: 'ease-in-out-cubic',
  })
)

// export default ({ app }) => {
//   app.AOS = new AOS.init({

//   })
// }
