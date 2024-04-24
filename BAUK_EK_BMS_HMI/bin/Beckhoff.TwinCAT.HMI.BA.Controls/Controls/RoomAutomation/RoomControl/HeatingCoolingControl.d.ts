declare module TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class HeatingCoolingControl extends ControlUnit<HeatingCooling.BaTemplateDefinition, HeatingCooling.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null, attr?: HeatingCoolingControl.IAttributes);
        /**
         * The HC icon which displays the status of the AC.
         * @category Public
         */
        private __acIcon;
        protected __attrHandler: AttributeHandler<HeatingCoolingControl.IAttributes>;
        private __oldHeatingActive;
        private __oldCoolingActive;
        private __tempAdjustFeedbackReady;
        private __tempAdjustStep;
        private static __temperatureDisplayName;
        private static __statusIconSideMenuName;
        private static __tempAdjustSliderName;
        private static __tempAdjustMinusButtonName;
        private static __tempAdjustPlusButtonName;
        protected __init(attr: HeatingCoolingControl.IAttributes): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        createElement(): void;
        /**
         * Get the corresponding side control for this hc control.
         * @category Public
         * @returns The side control for this hc control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
         * Processor for the TempAdjust attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjust or null.
         */
        private __processChangedTempAdjust;
        /**
         * Updates the elements which depend on the status.
         * @category Internal
         */
        private __processStatus;
        /**
         * Updates the elements which depend on the temp values.
         * @category Internal
         */
        private __updateTempElements;
        /**
         * Updates the side control depending of the brightness data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: HeatingCoolingControl.IAttributes): this;
        getAttributes(): HeatingCoolingControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the CurremtTemp attribute.
         * @category Attribute setter and getter
         * @param p The new CurremtTemp.
         * @returns The HeatingCoolingControl.
         */
        setCurrentTemp(p: number | null | undefined): this;
        /**
         * Processor for the CurrentTemperature attribute.
         * @category Attribute setter and getter
         */
        protected __processCurrentTemp(): void;
        /**
         * Getter for the CurremtTemp attribute.
         * @category Attribute setter and getter
         * @returns The CurremtTemp attribute.
         */
        getCurremtTemp(): number | null | undefined;
        /**
         * Setter for the TempAdjust attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjust.
         * @returns The HeatingCoolingControl.
         */
        setTempAdjust(p: number | null | undefined): this;
        /**
         * Processor for the TempAdjust attribute.
         * @category Attribute setter and getter
         */
        protected __processTempAdjust(): void;
        /**
         * Getter for the TempAdjust attribute.
         * @category Attribute setter and getter
         * @returns The TempAdjust attribute.
         */
        getTempAdjust(): number | null | undefined;
        /**
         * Setter for the TempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjustFeedback.
         * @returns The HeatingCoolingControl.
         */
        setTempAdjustFeedback(p: number | null | undefined): this;
        /**
         * Processor for the TempAdjustFeedback attribute.
         * @category Internal
         */
        protected __processTempAdjustFeedback(): void;
        /**
         * Getter for the TempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @returns The TempAdjustFeedback attribute.
         */
        getTempAdjustFeedback(): number | null | undefined;
        /**
         * Setter for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingSetpoint.
         * @returns The HeatingCoolingControl.
         */
        setHeatingSetpoint(p: number | null | undefined): this;
        /**
         * Processor for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         */
        protected __processHeatingSetpoint(): void;
        /**
         * Getter for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         * @returns The HeatingSetpoint attribute.
         */
        getHeatingSetpoint(): number | null | undefined;
        /**
         * Setter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingActive.
         * @returns The HeatingCoolingControl.
         */
        setHeatingActive(p: boolean | null | undefined): this;
        /**
         * Processor for the HeatingActive attribute.
         * @category Attribute setter and getter
         */
        protected __processHeatingActive(): void;
        /**
         * Getter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @returns The HeatingActive attribute.
         */
        getHeatingActive(): boolean | null | undefined;
        /**
         * Setter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingSetpoint.
         * @returns The HeatingCoolingControl.
         */
        setCoolingSetpoint(p: number | null | undefined): this;
        /**
         * Processor for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         */
        protected __processCoolingSetpoint(): void;
        /**
         * Getter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @returns The CoolingSetpoint attribute.
         */
        getCoolingSetpoint(): number | null | undefined;
        /**
         * Setter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingActive.
         * @returns The HeatingCoolingControl.
         */
        setCoolingActive(p: boolean | null | undefined): this;
        /**
         * Processor for the CoolingActive attribute.
         * @category Internal
         */
        protected __processCoolingActive(): void;
        /**
         * Getter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @returns The CoolingActive attribute.
         */
        getCoolingActive(): boolean | null | undefined;
        /**
         * Setter for the TempAdjustRange attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjustRange or null.
         * @returns The HeatingCooling
         */
        setTempAdjustRange(p: number | null | undefined): this;
        /**
         * Getter for the TempAdjustRange attribute.
         * @category Attribute setter and getter
         * @returns The TempAdjustRange attribute.
         */
        getTempAdjustRange(): number | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The HeatingCooling
         */
        setUnit(p: string | null | undefined): this;
        /**
         * Getter for the Unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        processBaObject(): void;
    }
    module HeatingCoolingControl {
        interface IAttributes extends ControlUnit.IAttributes, HeatingCooling.IBaseAttributes {
            currentTempMapping?: string;
            tempAdjustMapping?: string;
            tempAdjustFeedbackMapping?: string;
            heatingSetpointMapping?: string;
            coolingSetpointMapping?: string;
            heatingActiveMapping?: string;
            coolingActiveMapping?: string;
        }
    }
}
//# sourceMappingURL=HeatingCoolingControl.d.ts.map