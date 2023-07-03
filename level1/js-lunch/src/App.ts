class App {
  private $target: HTMLElement;

  constructor($target: HTMLElement) {
    this.$target = $target;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  template() {
    return `
      <header class="header"></header>
      <main>
        <section class="restaurant-filter-container"></section>
        <section class="restaurant-list-container"></section>
      </main>
      <div class="modal"></div>
    `;
  }

  mounted() {}

  setEvent() {}
}

export default App;

// header

// filter

// restaurant list - restaurant item

// modal

// store에 bind(this)를 해서 rerender를 만들고 적용하자!

// store을 싱글톤과 옵저버 패턴으로 작성해보자
