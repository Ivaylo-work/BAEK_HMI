declare module TcHmi.BuildingAutomation.Controls.Plants {
    /**
     * A control to display and control an analog sensor.
     * @category Control
     */
    class SensorAnalog extends Controls.System.UiIconFdbStp<SensorAnalog.DisplayMode, SensorAnalog.BaTemplateDefinition> {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<SensorAnalog.BaTemplateDefinition>;
        private __fdb;
        private __stpDesigner;
        private __legendIconHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /** @ignore
        * Process feedback and setpoint value.
        * @category Internal
        */
        private __processValues;
        /**
        * Sets setpoint.
        * @category Attribute setter
        * @param p The new value or NULL.
        * @returns SensorAnalog.
        */
        setSetpointDesigner(p: BA.BaBasicObject | Symbol | null | undefined): this;
        processBaObject(): void;
        /** @ignore
         * Process display mode.
         * @category Internal
         */
        protected __processDisplayMode(): void;
    }
    module SensorAnalog {
        enum DisplayMode {
            invalid = -1,
            temperature = 0,
            pressure = 1,
            humidity = 2,
            custom
        }
        type BaTemplateDefinition = {
            feedback: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
    }
}
//# sourceMappingURL=SensorAnalog.d.ts.map