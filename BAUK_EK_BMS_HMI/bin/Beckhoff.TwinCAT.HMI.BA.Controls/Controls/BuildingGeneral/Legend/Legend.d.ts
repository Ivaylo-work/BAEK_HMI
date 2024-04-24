declare module TcHmi.BuildingAutomation.Controls.BuildingGeneral {
    class Legend extends System.BaseControl {
        /**
         * The Legend can be used to display BA icons with description.
         * @category Control
         */
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Legend;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Sets the VisibilityHeadline attribute.
         * @category Attribute setter and getter
         * @param p The new VisibilityHeadline or null.
         * @returns The Legend.
         */
        setVisibilityHeadline(p: boolean | null | undefined): this;
        /**
         * Gets the VisibilityHeadline attribute.
         * @category Attribute setter and getter
         * @returns The VisibilityHeadline attribute.
         */
        getVisibilityHeadline(): boolean | null | undefined;
        /**
         * Sets the TabPosition attribute.
         * @category Attribute setter and getter
         * @param p The new TabPosition or null.
         * @returns The Legend.
         */
        setTabPosition(p: Position | null | undefined): this;
        /**
         * Gets the TabPosition attribute.
         * @category Attribute setter and getter
         * @returns The TabPosition attribute.
         */
        getTabPosition(): Position | null | undefined;
        /**
         * Sets the EntryWidth attribute.
        * @category Attribute setter and getter
        * @param p The new EntryWidth or null.
        * @returns The Legend.
         */
        setEntryWidth(p: number | string | null | undefined): this;
        /**
         * Gets the EntryWidth attribute.
        * @category Attribute setter and getter
        * @returns The EntryWidth attribute.
         */
        getEntryWidth(): number | null | undefined;
        /**
        * Sets the EntryWidthUnit attribute.
        * @category Attribute setter and getter
        * @param p The new EntryWidthUnit or null.
        * @returns The Legend.
        */
        setEntryWidthUnit(p: DimensionUnit | null | undefined): this;
        /**
        * Gets the EntryWidthUnit attribute.
        * @category Attribute setter and getter
        * @returns The EntryWidthUnit attribute.
        */
        getEntryWidthUnit(): "px" | "%" | null | undefined;
        /**
        * Sets the IconDataSource attribute.
        * @category Attribute setter and getter
        * @param p The new IconDataSource or null.
        * @returns The Legend.
        */
        setIconDataSource(p: Components.Legend.IconDataSource | string | null | undefined): this;
        /**
         * Gets the IconDataSource attribute.
         * @category Attribute setter and getter
         * @returns The IconDataSource attribute.
         */
        getIconDataSource(): Components.Legend.IconDataSource | null | undefined;
        /**
         * Sets the IconDataCustom attribute.
         * @category Attribute setter and getter
         * @param p The new IconDataCustom or null.
         * @returns The Legend.
         */
        setIconDataCustom(p: Icons.IconData[] | null | undefined): this;
        /**
         * Gets the IconDataCustom attribute.
         * @category Attribute setter and getter
         * @returns The IconDataCustom attribute.
         */
        getIconDataCustom(): Icons.IconData[] | null | undefined;
    }
}
//# sourceMappingURL=Legend.d.ts.map