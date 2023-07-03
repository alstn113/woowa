class Component {
  private $target: Element;

  constructor($target: Element) {
    this.$target = $target;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  mounted() {}
  setEvent() {}
  addEvent(
    eventType: string,
    selector: string,
    callback: (event: Event) => void,
  ) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target: HTMLElement) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target as HTMLElement)) return false;
      callback(event);
    });
  }
}

export default Component;
