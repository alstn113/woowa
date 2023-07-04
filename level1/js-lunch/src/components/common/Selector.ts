import Component from '../../core/Component';

interface SelectorProps {
  info: {
    name: string;
    id: string;
    className: string;
    options: { value: string; name: string }[];
  };
  onChange: (event: Event) => void;
}

class Selector extends Component<SelectorProps> {
  template() {
    const { options, name, id, className } = this.props.info;

    return `
      <select name="${name}" id="${id}" class="${className}">
        ${options
          .map(
            (option) =>
              `<option value="${option.value}">${option.name}</option>`,
          )
          .join('')}
      </select>
    `;
  }

  render() {
    this.$target.innerHTML += this.template();
    this.mounted();
  }

  setEvent() {
    const { info, onChange } = this.props;
    this.addEvent('change', `#${info.id}`, onChange);
  }
}

export default Selector;
