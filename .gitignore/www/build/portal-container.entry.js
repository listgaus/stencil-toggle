import { r as registerInstance, h } from './index-e7bc3681.js';

const portalCss = ".portal{position:fixed;width:100px;height:200px;border:2px solid red}";

const Portal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.count = 0;
  }
  // @Event({ eventName: 'count-clicks' }) counter: EventEmitter<number>;
  // handleClick = () => {
  //   this.count += 1;
  //   this.counter.emit(this.count);
  // };
  render() {
    return (h("div", { class: "portal-div" }, h("button", null, this.count)));
  }
};
Portal.style = portalCss;

export { Portal as portal_container };
