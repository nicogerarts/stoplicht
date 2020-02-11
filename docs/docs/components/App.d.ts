import { CSSResult, LitElement } from 'lit-element';
import { TemplateResult } from 'lit-html';
/**
 * App root component
 */
export declare class App extends LitElement {
    static get styles(): CSSResult;
    private sorting;
    private dotsOpen?;
    private items;
    private shiftOn;
    private get displayItems();
    /**
     * Render function
     */
    render: () => TemplateResult;
    private readonly addItem;
    private readonly toggleDots;
    private readonly removeItem;
    private readonly writeName;
    private readonly writeStatus;
    private createItem;
}
declare global {
    interface HTMLElementTagNameMap {
        'stop-app': App;
    }
}
