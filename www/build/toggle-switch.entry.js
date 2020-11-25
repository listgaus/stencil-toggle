import { r as registerInstance, e as createEvent, h, f as Host } from './index-e7bc3681.js';

const toggleSwitchCss = ":host{display:block}.toggle-switch{position:relative;display:inline-block;width:60px;height:34px}.toggle-switch input{opacity:0;width:0;height:0}.slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:#ccc;-webkit-transition:.4s;transition:.4s}.slider:before{position:absolute;content:\"\";height:26px;width:26px;left:4px;bottom:4px;background-color:white;-webkit-transition:.4s;transition:.4s}input:checked+.slider{background-color:#2196F3}input:focus+.slider{box-shadow:0 0 1px #2196F3}input:checked+.slider:before{-webkit-transform:translateX(26px);-ms-transform:translateX(26px);transform:translateX(26px)}.slider.round{border-radius:34px}.slider.round:before{border-radius:50%}";

const ToggleSwitch = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.switch = createEvent(this, "toggle-change-event", 7);
    this.disabled = false;
    this.handleClick = () => {
      if (this.disabled)
        return;
      this.checked = !this.checked;
      this.switch.emit(this.checked);
    };
  }
  setTypeClass() {
    return `slider ${this.type}`;
  }
  reflectPortalCounter() {
    this.count += 1;
  }
  render() {
    return (h(Host, null, h("div", null, "Open Portal count is ", this.count), h("label", { class: "toggle-switch" }, h("input", { type: "checkbox", onClick: this.handleClick, checked: this.checked, disabled: this.disabled, "data-test-id": "toggle-input" }), h("span", { class: this.setTypeClass() }))));
  }
};
ToggleSwitch.style = toggleSwitchCss;

export { ToggleSwitch as toggle_switch };
