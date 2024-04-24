declare module TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control a light zone.
     * @category Control
     */
    class LightZone extends System.BaseControl implements BaInterfaceHandler.IUsesBaInterface<LightZone.BaInterface>, BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        baInterfaceHandler: BaInterfaceHandler<LightZone.BaInterface>;
        private __container;
        private __manualValueInput;
        private __writeManualValueButton;
        private __resetControlModeButton;
        private __activationModeCombobox;
        private __unregisterManualValueChange;
        private __unregisterActivationModeChanged;
        protected __attrHandler: AttributeHandler<LightZone.IAttributes>;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        private __setManualValue;
        private __setControlModeActive;
        private __setActivationMode;
        protected __processReadOnly(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<LightZone.BaInterface> | null | undefined): this;
        getBaInterface(): BaInterfaceHandler.BaInterfaceSymbol<LightZone.BaInterface> | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<LightZone.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<LightZone.BaInterface> | null | undefined;
        processBaObject(): void;
    }
    module LightZone {
        interface IAttributes extends System.BaseRoomControl.IAttributes {
            /** Manual value for the light zone. */
            manualValue?: number | boolean | null;
            /** Defines if the control mode is active or inactive. */
            controlModeActive?: boolean | null;
            /** Activation mode of the light zone. */
            activationMode?: ActivationMode | null;
        }
        enum ActivationMode {
            fullAutomatic = 0,
            semiAutomatic = 1
        }
        type BaInterface = {
            /** Manual value for the light zone. */
            manualValue: number;
            /** Write the manual value to the lights of the zone. */
            writeManualValue: boolean;
            /** Defines if the control mode is active or inactive. */
            controlModeActive: boolean;
            /** Set to true to activate the alarm mode. */
            activateControlMode: boolean;
            /** Activation mode of the light zone. */
            activationMode: ActivationMode;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        /**
         * Opens a dialog with a LightZone control.
         * @param baObj The BaObject which will be bound to the LightZone control.
         */
        function openLightZoneDialog(baObj: BA.BaBasicObject | Symbol | null): void;
    }
}
//# sourceMappingURL=LightZone.d.ts.map