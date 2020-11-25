import { Component, Host, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'toggle-switch',
  styleUrl: 'toggle-switch.css',
  shadow: true,
})
export class ToggleSwitch {
  @Prop({ reflect: true, mutable: true }) checked: boolean;

  @Prop() type: string;

  @Prop() count: number;

  @Prop() disabled: boolean = false;

  @Event({ eventName: 'toggle-change-event' }) switch: EventEmitter<boolean>;

  handleClick = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.switch.emit(this.checked);
  };

  setTypeClass() {
    return `slider ${this.type}`;
  }

  reflectPortalCounter() {
    this.count += 1;
  }

  render() {
    return (
      <Host>
        <div>Open Portal count is {this.count}</div>
        <label class="toggle-switch">
          <input type="checkbox" onClick={this.handleClick} checked={this.checked} disabled={this.disabled} data-test-id="toggle-input" />
          <span class={this.setTypeClass()}></span>
        </label>
        {/* <portal-container onClick={this.reflectPortalCounter} count={this.count}></portal-container> */}
      </Host>
    );
  }
}
