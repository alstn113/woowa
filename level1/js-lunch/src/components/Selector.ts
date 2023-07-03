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
    return `
      <select name="${this.props.data.name}" id="#${
      this.props.data.id
    }-filter" class="restaurant-filter">
        ${this.props.data.options
          .map(
            (option) =>
              `<option value="${option.value}">${option.name}</option>`,
          )
          .join('')}
      </select>
      `;
  }

  setEvent() {}
}

export default Selector;
