declare module TcHmi.BuildingAutomation.Controls.Common {
    /**
     * A basic textblock to display texts.
     * @category Control
     */
    class Textblock extends System.TextControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.Textblock;
        baObjectHandler: BaObjectHandler;
        private __bValue;
        private __activeText;
        private __inactiveText;
        private __rValue;
        private __unit;
        private __stateTexts;
        private __iValue;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        private __updateBaObjectDisplay;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the Text attribute.
         * @category Attribute setter and getter
         * @param p The new Text or null.
         * @returns The TextControl.
         */
        setText(p: string | null | undefined): this;
        /**
         * Processor for the Text attribute.
         * @category Attribute setter and getter
         */
        protected __processText(): void;
        /**
         * Getter for the Text attribute.
         * @category Attribute setter and getter
         * @returns The Text attribute.
         */
        getText(): string | null | undefined;
        processBaObject(): void;
    }
}
//# sourceMappingURL=Textblock.d.ts.map