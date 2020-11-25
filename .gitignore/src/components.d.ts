/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PortalContainer {
        "count": number;
    }
    interface ToggleSwitch {
        "checked": boolean;
        "count": number;
        "disabled": boolean;
        "type": string;
    }
}
declare global {
    interface HTMLPortalContainerElement extends Components.PortalContainer, HTMLStencilElement {
    }
    var HTMLPortalContainerElement: {
        prototype: HTMLPortalContainerElement;
        new (): HTMLPortalContainerElement;
    };
    interface HTMLToggleSwitchElement extends Components.ToggleSwitch, HTMLStencilElement {
    }
    var HTMLToggleSwitchElement: {
        prototype: HTMLToggleSwitchElement;
        new (): HTMLToggleSwitchElement;
    };
    interface HTMLElementTagNameMap {
        "portal-container": HTMLPortalContainerElement;
        "toggle-switch": HTMLToggleSwitchElement;
    }
}
declare namespace LocalJSX {
    interface PortalContainer {
        "count"?: number;
    }
    interface ToggleSwitch {
        "checked"?: boolean;
        "count"?: number;
        "disabled"?: boolean;
        "onToggle-change-event"?: (event: CustomEvent<boolean>) => void;
        "type"?: string;
    }
    interface IntrinsicElements {
        "portal-container": PortalContainer;
        "toggle-switch": ToggleSwitch;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "portal-container": LocalJSX.PortalContainer & JSXBase.HTMLAttributes<HTMLPortalContainerElement>;
            "toggle-switch": LocalJSX.ToggleSwitch & JSXBase.HTMLAttributes<HTMLToggleSwitchElement>;
        }
    }
}