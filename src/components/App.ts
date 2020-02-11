import { css, CSSResult, customElement, html, LitElement, property } from 'lit-element';
import { TemplateResult } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { add, dots, remove } from '../icons';

enum Status {
    Red,
    Orange,
    Yellow,
    Green,
}

enum Sorting {
    Original = 'Ongesorteerd',
    Name = 'Naam',
    Status = 'Status',
}
const SORTING_DEFAULT: Sorting = Sorting.Original;

const status: {[key: number]: string} = ({
    [Status.Red]: 'red',
    [Status.Orange]: 'orange',
    [Status.Yellow]: 'yellow',
    [Status.Green]: 'green',
});

interface Item {
    name: string;
    status: Status;
    key: symbol;
}

interface IndexedItem extends Item {
    index: {[key: string]: number};
}

console.log(Object.keys(Status));

/**
 * App root component
 */
@customElement('stop-app')
export class App extends LitElement {
    public static get styles(): CSSResult {
        return css`
            :host {
                --red: #FF2600;
                --dark-red: #941100;
                --orange: #FF9300;
                --dark-orange: #945200;
                --yellow: #FFFB00;
                --dark-yellow: #929000;
                --green: #00F900;
                --dark-green: #008F00;

                --item-height: 52px;

                display: block;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgb(36, 39, 46);
            }
            .topControls {
                display: flex;
                justify-content: center;
            }
            .tabs {
                margin: 10px;
                border: 1px solid rgba(255, 255, 255, 0.12);
                height: 24px;
                border-radius: 5px;
                display: inline-flex;
                overflow: hidden;
            }
            .tab {
                height: 24px;
                line-height: 24px;
                padding: 0 10px;
                color: rgba(255, 255, 255, 0.24);
                border-right: 1px solid rgba(255, 255, 255, 0.12);
                cursor: pointer;
            }
            .tab:hover {
                color: rgb(0, 0, 0);
                background-color: rgba(255, 255, 255, 0.24);
            }
            .tab.active {
                color: rgb(0, 0, 0);
                background-color: rgba(255, 255, 255, 0.5);
            }
            .tab:last-of-type {
                border-right: 0;
            }
            .items {
                display: flex;
                flex-wrap: wrap;
            }
            .add {
                height: var(--item-height);
                width: calc(100% - 50px);
                padding: 0 25px;
                display: flex;
                align-items: center;
                font-size: 24px;
                color: white;
                opacity: 0.5;
                font-weight: 300;
                cursor: pointer;
            }
            .add:hover {
                opacity: 0.8;
            }
            .add svg {
                fill: white;
                height: 20px;
                width: 20px;
                margin-right: 10px;
            }
            .item {
                height: var(--item-height);
                width: 100%;
                background-color: var(--item-color);
                display: flex;
                align-items: center;
                margin-bottom: 2px;
            }
            @media screen and (min-width: 900px) {
                .item {
                    width: calc(50% - 1px);
                }
                .item.even {
                    margin-right: 2px;
                }
            }
            .name {
                color: white;
                background-color: rgba(0, 0, 0, 0);
                border: 0;
                padding: 0;
                font-size: 36px;
                font-weight: bold;
                margin: 0 0 2px 25px;
                flex-grow: 1;
                flex-shrink: 1;
                outline: none;
                width: 1px;
            }
            .controls {
                margin: 0 20px;
                display: inline-flex;
                height: 100%;
                align-items: center;
            }
            .control {
                margin-left: 20px;
                cursor: pointer;
            }
            .control:first-of-type {
                margin-left: 0;
            }
            .svgWrapper {
                height: 16px;
                width: 16px;
            }
            .svgWrapper svg {
                width: 16px;
                height: 16px;
                --svg-color: rgba(255, 255, 255, 0.6);
            }
            .svgWrapper:hover svg {
                --svg-color: rgba(255, 255, 255, 1);
            }
            .svgWrapper.stroke svg {
                stroke: var(--svg-color);
            }
            .svgWrapper.fill svg {
                fill: var(--svg-color);
            }
            .dots {
                background-color: white;
                display: inline-flex;
                flex-direction: column;
                border-radius: 5px;
                overflow: hidden;
                -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.6);
                position: fixed;
                z-index: 900;
            }
            .dot {
                width: 24px;
                height: 24px;
                position: relative;
                border-top: 1px solid #ccc;
                cursor: pointer;
            }
            .dot:hover {
                background-color: #eee;
            }
            .dot:first-of-type {
                border-top: 0;
            }
            .dot::after {
                content: ' ';
                display: block;
                background-color: var(--dot-color, black);
                height: 16px;
                width: 16px;
                border-radius: 8px;
                position: absolute;
                top: 4px;
                left: 4px;
            }
            .dot.red {
                --dot-color: var(--red);
            }
            .dot.orange {
                --dot-color: var(--orange);
            }
            .dot.yellow {
                --dot-color: var(--yellow);
            }
            .dot.green {
                --dot-color: var(--green);
            }
        `;
    }

    @property()
    private sorting: Sorting = SORTING_DEFAULT;

    @property({ type: Number })
    private dotsOpen?: number;

    @property({ type: Array })
    private items: Item[] = [];

    private shiftOn: boolean = false;

    private get displayItems(): IndexedItem[] {
        return this.items.map(
            (o: Item, index: number): IndexedItem => ({ ...o, index: { [Sorting.Original]: index } }),
        ).sort(
            (a: IndexedItem, b: IndexedItem) => a.name.toLowerCase().localeCompare(b.name.toLowerCase()),
        ).sort(
            (a: IndexedItem, b: IndexedItem) => {
                if (a.name.length > 0 && b.name.length > 0) {
                    return 0;
                } else if (a.name.length === b.name.length) {
                    return 0;
                } else if (a.name.length > 0) {
                    return -1;
                } else {
                    return 1;
                }
            },
        ).map(
            (o: IndexedItem, index: number): IndexedItem => ({ ...o, index: { ...o.index, [Sorting.Name]: index } }),
        ).sort(
            (a: IndexedItem, b: IndexedItem) => a.status - b.status,
        ).map(
            (o: IndexedItem, index: number): IndexedItem => ({ ...o, index: { ...o.index, [Sorting.Status]: index } }),
        ).sort(
            (a: IndexedItem, b: IndexedItem) => a.index[Sorting.Original] - b.index[Sorting.Original],
        );
    }

    /**
     * Render function
     */
    // tslint:disable-next-line:max-func-body-length
    public render = (): TemplateResult => {
        const items: IndexedItem[] = this.displayItems;

        return html`
            <div class="appRoot">
                <div class="topControls">
                    <div class="tabs">
                        ${Object.keys(Sorting).map((k: string) => html`
                            <div
                                class="tab ${Sorting[<keyof typeof Sorting>k] === this.sorting ? 'active' : ''}"
                                @click="${(): void => {
                                    this.sorting = Sorting[<keyof typeof Sorting>k];
                                }}"
                            >
                                ${Sorting[<keyof typeof Sorting>k]}
                            </div>
                        `)}
                    </div>
                </div>
                <div class="items">
                    ${repeat(items, (o: IndexedItem) => o.key, (o: IndexedItem) => html`
                        <div
                            class="item ${o.index[this.sorting] % 2 === 0 ? 'even' : ''}"
                            style="--item-color: var(--dark-${status[o.status]}); order: ${o.index[this.sorting] + 1};"
                        >
                            <input
                                id="input_${o.index[Sorting.Original]}"
                                class="name"
                                value="${o.name}"
                                @input="${(): void => {
                                    const root: ShadowRoot | null = this.shadowRoot;
                                    if (root) {
                                        const input: HTMLInputElement | null = root.querySelector(`#input_${o.index[Sorting.Original]}`);
                                        if (input) {
                                            this.writeName(o.index[Sorting.Original], input.value);
                                        }
                                    }
                                }}"
                                @keyup="${(e: KeyboardEvent): void => {
                                    if ((e.keyCode === 9 && !this.shiftOn) || e.keyCode === 13 || e.keyCode === 40) {
                                        // Handle enter or down
                                        const found: IndexedItem | undefined = items.find(
                                            (m: IndexedItem): boolean => m.index[this.sorting] === o.index[this.sorting] + 1,
                                        );
                                        if (found) {
                                            const root: ShadowRoot | null = this.shadowRoot;
                                            if (root) {
                                                const input: HTMLInputElement | null = root.querySelector(
                                                    `#input_${found.index[Sorting.Original]}`,
                                                );
                                                if (input) {
                                                    input.focus();
                                                }
                                            }
                                        } else if ((e.keyCode === 9 && !this.shiftOn) || e.keyCode === 13) {
                                            this.addItem();
                                        }
                                    } else if ((e.keyCode === 9 && this.shiftOn) || e.keyCode === 38) {
                                        // Handle up
                                        const found: IndexedItem | undefined = items.find(
                                            (m: IndexedItem): boolean => m.index[this.sorting] === o.index[this.sorting] - 1,
                                        );
                                        if (found) {
                                            const root: ShadowRoot | null = this.shadowRoot;
                                            if (root) {
                                                const input: HTMLInputElement | null = root.querySelector(
                                                    `#input_${found.index[Sorting.Original]}`,
                                                );
                                                if (input) {
                                                    input.focus();
                                                }
                                            }
                                        }
                                    } else if (e.keyCode === 16) {
                                        this.shiftOn = false;
                                    }
                                }}"
                                @keydown="${(e: KeyboardEvent): void => {
                                    if (e.keyCode === 9) {
                                        e.preventDefault();
                                    } else if (e.keyCode === 16) {
                                        this.shiftOn = true;
                                    }
                                }}"
                            >
                            <div class="controls">
                                <div @click="${(): void => {
                                    this.toggleDots(o.index[Sorting.Original]);
                                }}" class="control svgWrapper fill">
                                    ${dots}
                                    ${
                                        o.index[Sorting.Original] === this.dotsOpen ? html`
                                            <div class="dots">
                                                ${Object.keys(status).map((k: string): TemplateResult => html`
                                                    <div
                                                        class="dot ${status[Number(k)]}"
                                                        @click="${(e: MouseEvent): void => {
                                                            e.preventDefault();
                                                            e.stopPropagation();

                                                            this.writeStatus(o.index[Sorting.Original], Number(k));

                                                            this.dotsOpen = undefined;
                                                        }}"
                                                    ></div>
                                                `)}
                                            </div>
                                        ` : undefined
                                    }
                                </div>
                                <div @click="${(): void => {
                                    this.removeItem(o.index[Sorting.Original]);
                                }}" class="control svgWrapper fill">
                                    ${remove}
                                </div>
                            </div>
                        </div>
                    `)}
                    <div @click="${this.addItem}" class="add" style="order: ${this.items.length + 1};">
                        ${add} Nieuwe toevoegen...
                    </div>
                </div>
            </div>
        `;
    }

    private readonly addItem = (): void => {
        const nextIndex: number = this.items.length;

        this.items = [
            ...this.items,
            this.createItem(),
        ];

        setTimeout(() => {
            const root: ShadowRoot | null = this.shadowRoot;
            if (root) {
                const input: HTMLInputElement | null = root.querySelector(`#input_${nextIndex}`);
                if (input) {
                    input.focus();
                }
            }
        }, 30);
    }

    private readonly toggleDots = (i: number): void => {
        this.dotsOpen = this.dotsOpen === i ? undefined : i;
    }

    private readonly removeItem = (i: number): void => {
        this.items = this.items.filter((_: Item, j: number) => j !== i);
    }

    private readonly writeName = (k: number, n: string): void => {
        this.items = this.items.map((o: Item, i: number) => i === k ? { ...o, name: n } : o);
    }

    private readonly writeStatus = (k: number, s: Status): void => {
        this.items = this.items.map((o: Item, i: number) => i === k ? { ...o, status: s } : o);
    }

    private createItem(n: string = '', s: Status = Status.Green): Item {
        return {
            name: n,
            status: s,
            key: Symbol(),
        };
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'stop-app': App;
    }
}
