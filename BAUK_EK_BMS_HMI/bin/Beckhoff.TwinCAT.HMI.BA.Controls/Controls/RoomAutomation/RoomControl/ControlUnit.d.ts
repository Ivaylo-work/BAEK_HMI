declare module TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class ControlUnit<T extends BA.BaView.BaTemplateStructure, I extends System.BaseRoomControl.BaInterface> extends Components.TextControl implements BA.IBaTemplateHandler<T>, BaInterfaceHandler.IUsesBaInterface<I>, BaObjectHandler.IUsesBaObject {
        constructor(id: string, parent?: Components.IBaseNode | null, attr?: ControlUnit.IAttributes);
        protected __baParent: RoomControl.Control;
        baObjectHandler: BaObjectHandler;
        baTemplateHandler: BA.BaTemplateHandler<T>;
        baInterfaceHandler: BaInterfaceHandler<I>;
        /**
         * The container where the icon of the control unit will be placed.
         * @category Elements
         */
        protected __iconContainer: JQuery<HTMLDivElement> | undefined;
        /**
         * The container where all the content will be placed.
         * @category Elements
         */
        protected __controlContainer: Components.ControlContainer | undefined;
        /**
         * The side control container for this LightControl.
         * @category Elements
         */
        protected __sideControlContainer: JQuery<HTMLDivElement> | undefined;
        /**
         * The header for the control of this LightControl.
         * @category Elements
         */
        protected __sideControlHeader: Components.ControlContainer | undefined;
        /**
         * The side control for this LightControl.
         * @category Elements
         */
        protected __sideControl: Components.ControlContainer | undefined;
        /**
         * If true a reset symbol is available in the BaObject or BaInterface.
         * @category Internal
         */
        protected __hasResetSymbol: boolean;
        protected __elementCreated: boolean;
        protected __attrHandler: AttributeHandler<ControlUnit.IAttributes>;
        protected __operationStateLegenIconHandler: Components.LegendIconHandler;
        private __resetManualModeLegendIconHandler;
        private __subscriptionIds;
        private __propSymbols;
        private static __nameFieldName;
        private static __resetManualOperationStateButtonName;
        protected static __operationStateIconName: string;
        protected __init(attr: ControlUnit.IAttributes): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        processBaObject(): void;
        /**
         * Get the corresponding side control for this light control.
         * @category Public
         * @returns The side control for this light control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
         * Create the HTML representation of the class.
         * @category Internal
         */
        createElement(): void;
        /**
         * Handles a property by converting it and calling the corresponding processor.
         * @param propName The name of the property in the options object.
         * @param setter The setter to be called when converting was successfully.
         * @param dataType The possible type / types for the property. If array -> the first successfully conversion wins.
         */
        protected __handleProperty(attributes: ControlUnit.IAttributes, propName: string, setter: (val: any) => any, type: PrimitiveType | PrimitiveType[]): void;
        /**
         * Appends the operation state display to the corner of the control.
         * @category Internal
         * @param append If true the display will be appended, otherwise it will be detached.
         */
        protected __appendOperationStateDisplay(append: boolean): void;
        /**
         * Appends a button to the control container drop down to reset the manual mode.
         * @category Internal
         * @param append If true the button will be appended, otherwise it will be detached.
         */
        protected __appendResetManualOperationStateButton(append: boolean): void;
        setAttributes(attr: ControlUnit.IAttributes): this;
        getAttributes(): ControlUnit.IAttributes;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<System.BaseRoomControl.BaInterface> | null | undefined): this;
        /**
         * Processor for the BaInterface attribute.
         */
        protected __processBaInterface(): void;
        getBaInterface(): Symbol | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<I> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<I> | null | undefined;
        /**
         * Setter for the Name attribute.
         * @category Attribute setter and getter
         * @param p The new Name.
         * @returns The ControlUnit.
         */
        setName(p: string | null | undefined): this;
        /**
         * Processor for the Name attribute.
         * @category Attribute setter and getter
         */
        protected __processName(): void;
        /**
         * Getter for the Name attribute.
         * @category Attribute setter and getter
         * @returns The Name attribute.
         */
        getName(): string | null | undefined;
        setBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | BA.BaView.BaTemplateDescription<T> | null | undefined): this;
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<any> | null | undefined;
    }
    module ControlUnit {
        interface IAttributes extends Components.TextControl.IAttributes {
            type?: ControlUnitType;
            name?: string | null;
            nameSym?: Symbol<string>;
            resetManualOperationStateSym?: Symbol<boolean>;
            /** The BaObject for the class. */
            baObject?: BA.BaBasicObject | Symbol | null;
        }
    }
}
//# sourceMappingURL=ControlUnit.d.ts.map