class Component {
  $target;
  $props;
  $state;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}
  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }

  // 이벤트 위임을 위한 함수
  // 이벤트 위임이란? 자식 요소에 각각 이벤트를 주는 것이 아니라 부모 요소에 이벤트를 주고
  // 자식 요소에서 이벤트가 발생했을 때 부모 요소에서 이벤트를 처리하는 방식
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }
}

export default Component;
