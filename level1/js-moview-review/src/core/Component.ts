/**
 * Component
 *
 * @template P: props
 * @template S: state
 */
abstract class Component<P = {}, S = {}> {
  readonly $target: HTMLElement;
  readonly props: P;
  state: S = {} as S;

  constructor($taregt: HTMLElement, props: P = {} as P) {
    this.$target = $taregt;
    this.props = props;
    this.setup();
    this.render();
    this.componentDidMount();
    this.setEvent();
  }

  setState(nextState: Partial<S>): void {
    this.state = { ...this.state, ...nextState };
    console.log(this.state);

    this.render();
    this.componentDidUpdate();
  }

  setup(): void {}

  template(): {
    htmlTemplate: string;
    renderComponents?: () => void;
  } {
    return { htmlTemplate: '', renderComponents: () => {} };
  }

  render(): void {
    console.log(this.constructor.name, 'render');

    this.$target.innerHTML = this.template().htmlTemplate;
    this.template().renderComponents?.();
  }

  /**
   * @description 마운트: 아래 메서드들은 컴포넌트의 인스턴스가 생성되어 DOM 상에 삽입될 때에 순서대로 호출됩니다.
   * @cycle constructor -> render -> componentDidMount
   */
  componentDidMount(): void {}

  /**
   * @descriton 업데이트: props 또는 state가 변경되면 갱신이 발생합니다.
   * @cycle render -> componentDidUpdate
   */
  componentDidUpdate(): void {}

  setEvent(): void {}
}

export default Component;
