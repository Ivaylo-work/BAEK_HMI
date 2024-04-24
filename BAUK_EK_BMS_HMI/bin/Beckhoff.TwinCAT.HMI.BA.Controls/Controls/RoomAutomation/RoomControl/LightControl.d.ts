declare module TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class LightControl extends ControlUnit<Light.BaTemplateDefinition, Light.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null, attr?: LightControl.IAttributes);
        /**
         * The light icon which displays the brightness.
         * @category Public
         */
        private __lightIcon;
        protected __attrHandler: AttributeHandler<LightControl.IAttributes>;
        private __brightnessFeedbackReady;
        /**
         * If true the brightness will be displayed, otherwise the brightness feedback may be displayed.
         * @category Internal
         */
        private __useCurrentBrightness;
        private static __brightnessDisplayName;
        private static __brightnessCtrlName;
        private static __lightSwitchName;
        protected __init(attr: LightControl.IAttributes): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        createElement(): void;
        /**
         * Get the corresponding side control for this light control.
         * @category Public
         * @returns The side control for this light control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new brightness value to the plc.
        * @category Public
        * @param newBrightness The new brightness to write.
        */
        writeBrightness(brightness: boolean | number | null | undefined): void;
        /**
         * Setter for the Brightness attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness or null.
         */
        private __processChangedBrightness;
        /**
         * Updates the visuals of the control for the current brightness.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the side control depending of the brightness data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: LightControl.IAttributes): this;
        getAttributes(): LightControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the Brightness attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness.
         * @returns The LightControl.
         */
        setBrightness(p: number | boolean | null | undefined): this;
        /**
         * Processor for the Brightness attribute.
         * @category Attribute setter and getter
         */
        protected __processBrightness(): void;
        /**
         * Getter for the Brightness attribute.
         * @category Attribute setter and getter
         * @returns The Brightness attribute.
         */
        getBrightness(): number | boolean | null | undefined;
        /**
         * Setter for the BrightnessFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new Brightness.
         * @returns The LightControl.
         */
        setBrightnessFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the BrightnessFeedback attribute.
         * @category Internal
         */
        protected __processBrightnessFeedback(): void;
        /**
         * Getter for the Brightness attribute.
         * @category Attribute setter and getter
         * @returns The Brightness attribute.
         */
        getBrightnessFeedback(): number | boolean | null | undefined;
        /**
         * Setter for the MinBrightness attribute.
         * @category Attribute setter and getter
         * @param p The new MinBrightness.
         * @returns The LightControl.
         */
        setMinBrightness(p: number | null | undefined): this;
        /**
         * Getter for the MinBrightness attribute.
         * @category Attribute setter and getter
         * @returns The MinBrightness attribute.
         */
        getMinBrightness(): number | null | undefined;
        /**
         * Setter for the MaxBrightness attribute.
         * @category Attribute setter and getter
         * @param p The new MaxBrightness.
         * @returns The LightControl.
         */
        setMaxBrightness(p: number | null | undefined): this;
        /**
         * Getter for the MaxBrightness attribute.
         * @category Attribute setter and getter
         * @returns The MaxBrightness attribute.
         */
        getMaxBrightness(): number | null | undefined;
        /**
         * Setter for the OperationState attribute.
         * @category Attribute setter and getter
         * @param p The new OperationState.
         * @returns The LightControl.
         */
        setOperationState(p: Light.OperationState | null | undefined): this;
        /**
         * Processor for the OperationState attribute.
         * @category Attribute setter and getter
         */
        protected __processOperationState(): void;
        /**
         * Getter for the OperationState attribute.
         * @category Attribute setter and getter
         * @returns The OperationState attribute.
         */
        getOperationState(): Light.OperationState | null | undefined;
        setLightColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Getter for the LightColor attribute.
         * @category Attribute setter and getter
         * @returns The LightColor attribute.
         */
        getLightColor(): Color.RGBAColor | null | undefined;
        processBaObject(): void;
    }
    module LightControl {
        interface IAttributes extends ControlUnit.IAttributes, Light.IAttributes {
            brightnessMapping?: string;
            brightnessFeedbackMapping?: string;
            modeMapping?: string;
        }
    }
}
//# sourceMappingURL=LightControl.d.ts.map