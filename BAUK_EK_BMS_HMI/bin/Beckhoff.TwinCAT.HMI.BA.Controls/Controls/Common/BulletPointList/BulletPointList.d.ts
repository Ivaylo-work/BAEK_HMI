declare module TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A control to display a bullet point list.
     * @category Control
     */
    class BulletPointList extends System.TextControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __elementTemplateRoot: JQuery;
        private __list;
        private __entries;
        private __listStyleImage;
        private __localeSymbols;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Setter for the Entries attribute.
         * @category Attribute setter and getter
         * @param p The new Entries or null.
         * @returns The BuildingInformation.
         */
        setEntries(p: string[] | null | undefined): this;
        /**
         * Processor for the Entries attribute.
         * @category Attribute setter and getter
         */
        protected __processEntries(): void;
        /**
         * Getter for the Entries attribute.
         * @category Attribute setter and getter
         * @returns The Entries attribute.
         */
        getEntries(): string[] | null | undefined;
        /**
         * Setter for the ListStyleImage attribute.
         * @category Attribute setter and getter
         * @param p The new ListStyleImage or null.
         * @returns The BuildingInformation.
         */
        setListStyleImage(p: string | null | undefined): this;
        /**
         * Processor for the ListStyleImage attribute.
         * @category Attribute setter and getter
         */
        protected __processListStyleImage(): void;
        /**
         * Getter for the ListStyleImage attribute.
         * @category Attribute setter and getter
         * @returns The ListStyleImage attribute.
         */
        getListStyleImage(): string | null | undefined;
        protected __processTextColor(): void;
    }
}
//# sourceMappingURL=BulletPointList.d.ts.map