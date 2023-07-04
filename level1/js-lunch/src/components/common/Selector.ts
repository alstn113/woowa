import Component from '../../core/Component';

interface SelectorProps {
  info: {
    name: string;
    id: string;
    options: { value: string; name: string }[];
  };
  onChange: (event: Event) => void;
}

class Selector extends Component<SelectorProps> {
  template() {
    const { options } = this.props.info;

    return options
      .map(
        (option) => `<option value="${option.value}">${option.name}</option>`,
      )
      .join('');
  }

  setEvent() {
    const { info, onChange } = this.props;
    this.addEvent('change', `#${info.id}`, onChange);
  }
}

export default Selector;
