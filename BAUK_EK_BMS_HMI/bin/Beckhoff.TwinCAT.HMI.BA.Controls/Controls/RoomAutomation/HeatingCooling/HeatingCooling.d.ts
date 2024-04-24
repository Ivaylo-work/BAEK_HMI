declare module TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control heating and cooling application in a room.
     * @category Control
     */
    class HeatingCooling extends System.BaseRoomControl<HeatingCooling.BaTemplateDefinition, HeatingCooling.BaInterface> implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<HeatingCooling.BaTemplateDefinition>;
        protected __baFc: HeatingCooling.Icon;
        protected __attrHandler: AttributeHandler<HeatingCooling.IAttributes>;
        /**
         * The slider to control the temp adjustment.
         * @cateogry Elements
         */
        private __tempAdjustSlider;
        /**
         * IReadyFunction to reset the busy invoking after changing the temp adjust.
         * @category Internal
         */
        private __tempAdjustFeedbackReady;
        private static __tempAdjustSliderName;
        private static __controlContainerName;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Processes the brightness if a new brightness was set through the control.
         * @category Internal
         * @param newTempAdjust The value of the new brightness.
         */
        private __processChangedTempAdjust;
        /**
         * Updates the visuals of the control.
         * @category Internal
         */
        private __createOrUpdateElements;
        /**
         * Updates the temperature displays of the control.
         * @category Internal
         */
        private __updateDisplay;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject & BA.IBaTemplateHandler<HeatingCooling.BaTemplateDefinition>, attr: HeatingCooling.IProcessorAttributes): void;
        /**
         * Writes a new temp adjust value to the plc.
         * @category Public
         * @param newTempAdjust The new temp adjust to write.
         */
        static writeTempAdjustToPlc(newTempAdjust: number | null, target: BA.BaView<HeatingCooling.BaTemplateDefinition> | BaInterfaceHandler<HeatingCooling.BaInterface>): void;
        /**
         * Writes a new temp adjust value to the plc.
         * @category Public
         * @param newTempAdjust The new temp adjust to write.
         */
        writeTempAdjustToPlc(newTempAdjust: number | null): void;
        /**
         * Get the converted text with the current temperature and the current setpoint.
         * @category Public
         * @returns The converted text with the current temperature and the current setpoint.
         */
        static getTemperatureText(attr: HeatingCooling.IBaseAttributes, currentSetpoint: HeatingCooling.CurrentSetpoint): string;
        /**
         * Get the converted text with the current temperature and the current setpoint.
         * @category Public
         * @returns The converted text with the current temperature and the current setpoint.
         */
        getTemperatureText(): string;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setAttributes(attr: HeatingCooling.IAttributes): this;
        getAttributes(): AttributeHandler<HeatingCooling.IAttributes>;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<HeatingCooling.BaInterface> | null | undefined): this;
        /**
         * Setter for the CurrentTemperature attribute.
         * @category Attribute setter and getter
         * @param p The new CurrentTemperature or null.
         * @returns The HeatingCooling
         */
        setCurrentTemperature(p: number | null | undefined): this;
        /**
         * Processor for the CurrentTemperature attribute.
         * @category Attribute setter and getter
         */
        protected __processCurrentTemperature(): void;
        /**
         * Getter for the CurrentTemperature attribute.
         * @category Attribute setter and getter
         * @returns The CurrentTemperature attribute.
         */
        getCurrentTemperature(): number | null | undefined;
        /**
         * Setter for the TempAdjust attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjust or null.
         * @returns The HeatingCooling
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
         * @param p The new TempAdjustFeedback or null.
         * @returns The HeatingCooling.
         */
        setTempAdjustFeedback(p: number | null | undefined): this;
        /**
         * Processor for the TempAdjustFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processTempAdjustFeedback(): void;
        /**
         * Getter for the TempAdjustFeedback attribute.
         * @category Attribute setter and getter
         * @returns The TempAdjustFeedback attribute.
         */
        getTempAdjustFeedback(): number | null | undefined;
        /**
         * Setter for the TempAdjustRange attribute.
         * @category Attribute setter and getter
         * @param p The new TempAdjustRange or null.
         * @returns The HeatingCooling
         */
        setTempAdjustRange(p: number | null | undefined): this;
        /**
         * Processor for the TempAdjustRange attribute.
         * @category Attribute setter and getter
         */
        protected __processTempAdjustRange(): void;
        /**
         * Getter for the TempAdjustRange attribute.
         * @category Attribute setter and getter
         * @returns The TempAdjustRange attribute.
         */
        getTempAdjustRange(): number | null | undefined;
        /**
         * Setter for the HeatingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingSetpoint or null.
         * @returns The HeatingCooling
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
         * Setter for the CoolingSetpoint attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingSetpoint or null.
         * @returns The HeatingCooling
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
         * Setter for the HeatingActive attribute.
         * @category Attribute setter and getter
         * @param p The new HeatingActive or null.
         * @returns The HeatingCooling
         */
        setHeatingActive(p: boolean | number | null | undefined): this;
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
        getHeatingActive(): boolean | number | null | undefined;
        /**
         * Setter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @param p The new CoolingActive or null.
         * @returns The HeatingCooling
         */
        setCoolingActive(p: boolean | number | null | undefined): this;
        /**
         * Processor for the CoolingActive attribute.
         * @category Attribute setter and getter
         */
        protected __processCoolingActive(): void;
        /**
         * Getter for the CoolingActive attribute.
         * @category Attribute setter and getter
         * @returns The CoolingActive attribute.
         */
        getCoolingActive(): boolean | number | null | undefined;
        /**
         * Setter for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTemperatures or null.
         * @returns The HeatingCooling.
         */
        setShowTemperatures(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         */
        protected __processShowTemperatures(): void;
        /**
         * Getter for the ShowTemperatures attribute.
         * @category Attribute setter and getter
         * @returns The ShowTemperatures attribute.
         */
        getShowTemperatures(): boolean | null | undefined;
        /**
         * Setter for the Unit attribute.
         * @category Attribute setter and getter
         * @param p The new Unit or null.
         * @returns The HeatingCooling.
         */
        setUnit(p: string | null | undefined): this;
        /**
         * Processor for the Unit attribute.
         * @category Attribute setter and getter
         */
        protected __processUnit(): void;
        /**
         * Getter for the Unit attribute.
         * @category Attribute setter and getter
         * @returns The Unit attribute.
         */
        getUnit(): string | null | undefined;
        processBaObject(): void;
        static processBaInterface(ctrl: HeatingCooling | RoomControl.HeatingCoolingControl, attr: HeatingCooling.IProcessorAttributes): void;
    }
    module HeatingCooling {
        interface IGeneralAttributes {
            /** The range of the temperature adjustment in Kelvin. */
            tempAdjustRange?: number | null;
            /** Temperature unit. */
            unit?: string | null;
        }
        interface IBaseAttributes extends IGeneralAttributes {
            /** The current temperature.*/
            currentTemp?: number | null;
            /** The temperature adjustment. */
            tempAdjust?: number | null;
            /** The feedback for the temperature adjustment. */
            tempAdjustFeedback?: number | null;
            /** Defines if the temperature adjustment is editable or not. */
            tempAdjustReadOnly?: boolean | null;
            /** The heating setpoint. */
            heatingSetpoint?: number | null;
            /** The cooling setpoint. */
            coolingSetpoint?: number | null;
            /** Identifies if heating is active or not. */
            heatingActive?: boolean | null;
            /** Identifies if cooling is active or not. */
            coolingActive?: boolean | null;
        }
        interface IAttributes extends System.BaseRoomControl.IAttributes, IBaseAttributes {
            /** Defines if the current temperature and the current active setpoint is displayed or not. */
            showTemperatures?: boolean | null;
        }
        enum CurrentSetpoint {
            invalid = 0,
            heating = 1,
            cooling = 2
        }
        type BaInterface = System.BaseRoomControl.BaInterface & {
            roomTemp: number;
            roomTempAdj: number;
            heatingSetpoint: number;
            heatingActive: boolean | number;
            coolingSetpoint: number;
            coolingActive: boolean | number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        type BaTemplateDefinition = {
            currentTemperature: {};
            temperatureAdjust: {};
            controlHeating: {};
            controlCooling: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
        interface IProcessorAttributes {
            processCurrentTemperature: (currentTemp: number | null | undefined) => any;
            processTempAdjust: (tempAdjust: number | null | undefined) => any;
            processTempAdjustFeedback: (tempAdjust: number | null | undefined) => any;
            processTempAdjustReadOnly: (ediable: boolean) => any;
            processHeatingSetpoint: (heatingSp: number | null | undefined) => any;
            processHeatingActive: (heatingActive: boolean | null | undefined) => any;
            processCoolingSetpoint: (coolingSp: number | null | undefined) => any;
            processCoolingActive: (coolingActive: boolean | null | undefined) => any;
        }
        /**
         * Icon that displays the ac state of a room.
        */
        class Icon extends Components.Button {
            constructor(id: string, parent?: Components.IBaseNode | null, attr?: Icon.IAttributes);
            currentSetpoint: HeatingCooling.CurrentSetpoint;
            protected __attrHandler: AttributeHandler<Icon.IAttributes>;
            private __legendIconHandler;
            protected __init(attr: Icon.IAttributes): void;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            /**
             * Updates the visuals of the control.
             * @category Internal
             */
            private __updateElements;
            setAttributes(attr: Icon.IAttributes): this;
            getAttributes(): Icon.IAttributes;
            /**
             * Setter for the HeatingActive attribute.
             * @category Attribute setter and getter
             * @param p The new HeatingActive or null.
             * @returns The Icon
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
             * Setter for the CoolingActive attribute.
             * @category Attribute setter and getter
             * @param p The new CoolingActive or null.
             * @returns The Icon
             */
            setCoolingActive(p: boolean | null | undefined): this;
            /**
             * Processor for the CoolingActive attribute.
             * @category Attribute setter and getter
             */
            protected __processCoolingActive(): void;
            /**
             * Getter for the CoolingActive attribute.
             * @category Attribute setter and getter
             * @returns The CoolingActive attribute.
             */
            getCoolingActive(): boolean | null | undefined;
            protected __processReadOnly(): void;
        }
        module Icon {
            interface IAttributes extends Components.Button.IAttributes {
                heatingActive?: boolean | null;
                coolingActive?: boolean | null;
            }
        }
    }
}
//# sourceMappingURL=HeatingCooling.d.ts.map