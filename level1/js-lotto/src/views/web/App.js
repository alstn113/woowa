import Component from './core/Component.js';

import './css';

class App extends Component {
  setup() {
    this.$state = {};
  }

  template() {
    return `
      <header class="header">🎱 행운의 로또</header/>
      <footer class="footer">&copy Copyright 2023 woowacourse</footer>
    `;
  }

  mounted() {}
}

export default App;
