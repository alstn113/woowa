import Component from '../core/Component';

interface SelectorProps {
  data: {
    name: string;
    id: string;
    options: { value: string; name: string }[];
  };
  onChange: (event: Event) => void;
}

class Selector extends Component<SelectorProps> {
  template() {
    return this.props.data.options
      .map(
        (option) => `<option value="${option.value}">${option.name}</option>`,
      )
      .join('');
  }

  setEvent() {
    this.addEvent('change', `#${this.props.data.id}`, this.props.onChange);
  }
}

export default Selector;
