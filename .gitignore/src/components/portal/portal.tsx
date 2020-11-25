import { Component, h, Prop, EventEmitter, Event } from '@stencil/core';

@Component({
  tag: 'portal-container',
  styleUrl: 'portal.css',
  shadow: true,
})
export class Portal {
  @Prop() count: number = 0;

  // @Event({ eventName: 'count-clicks' }) counter: EventEmitter<number>;

  // handleClick = () => {
  //   this.count += 1;
  //   this.counter.emit(this.count);
  // };

  render() {
    return (
      <div class="portal-div">
        <button>{this.count}</button>
      </div>
    );
  }
}
