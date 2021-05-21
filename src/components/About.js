import Vue from 'vue'
import router from '../router'

window.alerta = (value) => {
  alert(value)
}

export default Vue.component('About', {
  render(h) {
    console.log('roter', router.history.current.path)
    if (router.history.current.path.includes('novo')) {
      return h({
        template: `
        <div>
            <h1>Page novo</h1>
            <p>Este texto serve para testar o vue router</p>
            <router-link to="/others/nene">nene</router-link>
            <button onclick="alerta('1')">Click me</button>
        </div>
      `})
    }

    return h({
      template: `
      <div>
          <h1>Demais pages</h1>
          <p>Este texto serve para testar o vue router</p>
          <router-link to="/others/nene">nene</router-link>
          <button onclick="alerta('1')">Click me</button>
      </div>
    `})


  }
})
