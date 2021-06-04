export interface SvelteTagOptions {
    /*
     * Your svelte component
     */
    component: any;

    /*
     * The webcomponent tag-name, must contain a dash
     */
    tagname: string;
    
    /*
     * Link to your stylesheet - optional, but required with shadow DOM.
     */
    href?: string;

    /*
     * Attributes you like your tag to forward to your component.
     * Kebab-Cased attributes will be mapped to camelCased props.
     */
    attributes?: string[];

    /*
     * Default props
     */
    defaults?: any;

    /*
     * Should this component use shadow DOM.
     */
    shadow?: boolean;
}

export default class SvelteTag {
    constructor(opts?: SvelteTagOptions);
}
