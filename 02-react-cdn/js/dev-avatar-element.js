// create our own html element from the built-in HTMLElement
class DevJobsAvatar extends HTMLElement {
  constructor() {
    // call the father's constructor
    super();

    // active the shadow DOM to encapsulate styles and markup
    this.attachShadow({ mode: "open" });
  }

  createURL({ service, username }) {
    return `https://unavatar.io/${service}/${username}`;
  }

  // this method is called when the element is added to the DOM
  render() {
    // from the render we can acces to the attributes of the element
    // convert into a regular object the attributes
    const attributes = Object.fromEntries(
      // first we convert the NamedNodeMap into an array
      // with the map we create an array of [name, value] pairs
      Array.from(this.attributes).map(({ name, value }) => [name, value]),
    );
    const { service, username, size = 32 } = attributes;

    const url = this.createURL({ service, username });
    // write the innerHTML in the shadow root, because our element is apart of the rest of the DOM
    this.shadowRoot.innerHTML = `
      <style>
        img {
          width: ${size}px;
          border-radius: 50%;
        }
      </style>
      <img src="${url}" alt="Dev Avatar"/>
    `;
  }

  // this method is called when the element is added to the DOM
  connectedCallback() {
    // then we render the element with our method
    this.render();
  }
}

// define the new element
// first argument: the name of the new element (must contain a dash)
// second argument: the class that defines its behavior
customElements.define("devjobs-avatar", DevJobsAvatar);
