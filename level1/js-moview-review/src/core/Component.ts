abstract class Component<P = {}> {
  protected readonly $target: HTMLElement;
  protected readonly props: P;

  constructor($taregt: HTMLElement, props: P = {} as P) {
    this.$target = $taregt;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup(): void {}

  template(): string {
    return ``;
  }

  render(): void {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  mounted(): void {}

  setEvent(): void {}
}

export default Component;
