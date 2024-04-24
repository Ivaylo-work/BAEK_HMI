declare module TcHmi.BuildingAutomation.Controls.Common {
    class Icon extends TcHmi.Controls.System.TcHmiControl {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Base;
        /**
         * The path of the icon.
         * @category Attribute
         */
        protected __icon: string | null;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Setter for the Icon attribute.
         * @category Attribute setter and getter
         * @param p The new icon or null.
         * @returns The Icon
         */
        setIcon(p: string | null | undefined): this;
        /**
         * Processor the icon attribute
         * @category Attribute setter and getter
         */
        protected __processIcon(): void;
        /**
         * Getter for the Icon attribute.
         * @category Attribute setter and getter
         * @returns The Icon attribute.
         */
        getIcon(): string | null | undefined;
        /**
         * Setter for the IconWidth attribute.
         * @category Attribute setter and getter
         * @param p The new IconWidth or null.
         * @returns The Icon.
         */
        setIconWidth(p: number | null | undefined): this;
        getIconWidth(): number | null | undefined;
        /**
         * Setter for the IconWidthUnit attribute.
         * @category Attribute setter and getter
         * @param p The new IconWidthUnit or null.
         * @returns The Icon.
         */
        setIconWidthUnit(p: DimensionUnit | null | undefined): this;
        /**
         * Getter for the IconWidthUnit attribute.
         * @category Attribute setter and getter
         * @returns The IconWidthUnit attribute.
         */
        getIconWidthUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the IconHeight attribute.
         * @category Attribute setter and getter
         * @param p The new IconHeight or null.
         * @returns The UiIIconcon.
         */
        setIconHeight(p: number | null | undefined): this;
        /**
         * Getter for the IconHeight attribute.
         * @category Attribute setter and getter
         * @returns The IconHeight attribute.
         */
        getIconHeight(): number | null | undefined;
        /**
         * Setter for the IconHeightUnit attribute.
         * @category Attribute setter and getter
         * @param p The new IconHeightUnit or null.
         * @r
         */
        setIconHeightUnit(p: DimensionUnit | null | undefined): this;
        /**
         * Getter for the IconHeightUnit attribute.
         * @category Attribute setter and getter
         * @returns The IconHeightUnit attribute.
         */
        getIconHeightUnit(): DimensionUnit | null | undefined;
        /**
         * Setter for the IconHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new IconHorizontalAlignment or null.
         * @returns The Icon.
         */
        setIconHorizontalAlignment(p: HorizontalAlignment | null | undefined): this;
        /**
         * Getter for the IconHorizontalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The IconHorizontalAlignment attribute.
         */
        getIconHorizontalAlignment(): HorizontalAlignment | null | undefined;
        /**
         * Setter for the IconVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @param p The new IconVerticalAlignment or null.
         * @returns The Icon.
         */
        setIconVerticalAlignment(p: VerticalAlignment | null | undefined): this;
        /**
         * Getter for the IconVerticalAlignment attribute.
         * @category Attribute setter and getter
         * @returns The IconVerticalAlignment attribute.
         */
        getIconVerticalAlignment(): VerticalAlignment | null | undefined;
        /**
         * Setter for the IconColor attribute.
         * @category Attribute setter and getter
         * @param p The new IconColor or null.
         * @returns The Icon.
         */
        setIconColor(p: SolidColor | null | undefined): this;
        /**
         * Getter for the IconColor attribute.
         * @category Attribute setter and getter
         * @returns The IconColor attribute.
         */
        getIconColor(): SolidColor | null;
        /**
         * Setter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotation or null.
         * @returns The Icon.
         */
        setIconRotation(p: number | null | undefined): this;
        /**
         * Getter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @returns The IconRotation attribute.
         */
        getIconRotation(): number | null | undefined;
        /**
         * Setter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotationSpeed or null.
         * @returns The Icon.
         */
        setIconRotationSpeed(p: number | null | undefined): this;
        /**
         * Getter for the IconRotationSpeed attribute.
         * @category Attribute setter and getter
         * @returns The IconRotationSpeed attribute.
         */
        getIconRotationSpeed(): number | null | undefined;
        /**
         * Setter for the IconRotationDirection attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotationDirection or null.
         * @returns The Icon.
         */
        setIconRotationDirection(p: Components.BackgroundStyler.RotationDirection | null): this;
        /**
         * Getter for the IconRotationDirection attribute.
         * @category Attribute setter and getter
         * @returns The IconRotationDirection attribute.
         */
        getIconRotationDirection(): Components.BackgroundStyler.RotationDirection | null | undefined;
    }
}
//# sourceMappingURL=Icon.d.ts.map