class Component<P = {}> {
  protected $target: Element;
  protected props: P;

  constructor($target: Element, props = {} as P) {
    this.$target = $target;
    this.props = props;

    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {}
  template() {
    return '';
  }
  render() {
    console.log(this.constructor.name, 'render');

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
    this.$target.addEventListener(eventType, (event) => {
      if (!(event.target as HTMLElement).closest(selector)) return;
      callback(event);
    });
  }
}

export default Component;
