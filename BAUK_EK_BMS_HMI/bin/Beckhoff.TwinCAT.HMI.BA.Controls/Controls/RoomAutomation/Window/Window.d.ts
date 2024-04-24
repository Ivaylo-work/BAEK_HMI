declare module TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control a window.
     * @category Control
     */
    class Window extends System.BaseRoomControl<Window.BaTemplateDefinition, Window.BaInterface> implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Window.BaTemplateDefinition>;
        protected __baFc: Window.Icon;
        protected __attrHandler: AttributeHandler<Window.IAttributes>;
        /**
         * The slider to control the position of the window.
         * @cateogry Elements
         */
        private __positionSlider;
        /**
         * The switch to control the position of the window.
         * @cateogry Elements
         */
        private __positionSwitch;
        /**
         * IReadyFunction to reset the busy invoking after changing the position.
         * @category Internal
         */
        private __positionFeedbackReady;
        /**
         * If true the position will be displayed, otherwise the positon feedback may be displayed.
         * @category Internal
         */
        private __useCurrentPosition;
        private __destroyOnPositionSliderChanged;
        private __destroyOnPositionSwitchUIFinised;
        private __destroyOnPositionSliderUIFinised;
        /**
         * Handler when the user interaction on a slider has finished.
         * @category Event handler
         */
        private __uiFinishedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback when the building information have changed.
         * @category Event callbacks
         */
        private __onBuildingInformationChanged;
        /**
         * Processes the new position if it was changed from the user through the control.
         * @category Internal
         * @param newPosition The value of the new position.
         */
        private __processChangedPosition;
        /**
         * Updates the visuals of the control.
         * @category Internal
         */
        private __createOrUpdateElements;
        /**
         * Create the quick links for certain position values if position data type is number.
         * @category Internal
         */
        private __createOrUpdateQuickLinks;
        /**
         * Updates the position display.
         * @param pos The position whose percentage will be calculated and displayed.
         */
        private __updateDisplay;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject & BA.IBaTemplateHandler<Window.BaTemplateDefinition>, attr: Window.IProcessorAttributes): void;
        /**
         * Get the operation state icon.
         * @param operationState The operation state.
         * @returns The operation state icon for the operation state.
         */
        static getOperationStateDisplayIcon(operationState: Window.OperationState | null | undefined): Icons.IconData | null;
        /**
         * Get the background attributes for a certain operation state.
         * @param operationState The operation state which shall be displayed by the background.
         * @returns The background attributes for the operation state.
         */
        static getOperationStateDisplayBackgroundAttributes(operationState: Window.OperationState | null | undefined): Components.BackgroundStyler.IAttributes;
        /**
         * Writes a new position value to the plc.
         * @category Public
         * @param newPosition The new position to write.
         */
        static writePositionToPlc(newPosition: number | boolean | null | undefined, target: BA.BaView<Window.BaTemplateDefinition> | BA.BaObject<Window.BaInterface> | BaInterfaceHandler<Window.BaInterface>): void;
        /**
         * Writes a new position value to the plc.
         * @category Public
         * @param newPosition The new position to write.
         */
        writePositionToPlc(newPosition: number | boolean | null | undefined): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setAttributes(attr: Window.IAttributes): this;
        getAttributes(): AttributeHandler<Window.IAttributes>;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Window.BaInterface> | null | undefined): this;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position or null.
         * @returns The Window.
         */
        setPosition(p: number | boolean | null | undefined): this;
        /**
         * Processor for the Position attribute.
         * @category Attribute setter and getter
         */
        protected __processPosition(): void;
        /**
         * Getter for the Position attribute.
         * @category Attribute setter and getter
         * @returns The Position attribute.
         */
        getPosition(): number | boolean | null | undefined;
        /**
         * Setter for the PositionFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new PositionFeedback or null.
         * @returns The Window.
         */
        setPositionFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the PositionFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processPositionFeedback(): void;
        /**
         * Getter for the PositionFeedback attribute.
         * @category Attribute setter and getter
         * @returns The PositionFeedback attribute.
         */
        getPositionFeedback(): number | boolean | null | undefined;
        /**
         * Setter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @param p The new ClosePosition or null.
         * @returns The Window.
         */
        setClosePosition(p: number | null | undefined): this;
        /**
         * Processor for the MinPosition attribute.
         * @category Attribute setter and getter
         */
        protected __processClosePosition(): void;
        /**
         * Getter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @returns The ClosePosition attribute.
         */
        getClosePosition(): number | null | undefined;
        /**
         * Setter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @param p The new OpenPosition or null.
         * @returns The Window.
         */
        setOpenPosition(p: number | null | undefined): this;
        /**
         * Processor for the MaxPosition attribute.
         * @category Attribute setter and getter
         */
        protected __processOpenPosition(): void;
        /**
         * Getter for the MaxPosition attribute.
         * @category Attribute setter and getter
         * @returns The MaxPosition attribute.
         */
        getMaxPosition(): number | null | undefined;
        setFacadeName(p: string | null | undefined): this;
        /**
         * Processor for the FacadeName attribute.
         * @category Attribute setter and getter
         */
        protected __processFacadeName(): void;
        /**
         * Getter for the FacadeName attribute.
         * @category Attribute setter and getter
         * @returns The FacadeName attribute.
         */
        getFacadeName(): string | null | undefined;
        /**
         * Setter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayMode or null.
         * @returns The Window.
         */
        setDisplayMode(p: Window.Icon.DisplayMode | null | undefined): this;
        /**
         * Processor for the DisplayMode attribute.
         * @category Attribute setter and getter
         */
        protected __processDisplayMode(): void;
        /**
         * Getter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @returns The DisplayMode attribute.
         */
        getDisplayMode(): Window.Icon.DisplayMode | null | undefined;
        /**
         * Setter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @param p The new IconRotation or null.
         * @returns The Button.
         */
        setIconRotation(p: number | null | undefined): this;
        /**
         * Getter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @returns The IconRotation attribute.
         */
        getIconRotation(): number | null | undefined;
        setOperationState(p: Window.OperationState | null | undefined): this;
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
        getOperationState(): Window.OperationState | null | undefined;
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The Window.
         */
        setShowValue(p: boolean | null | undefined): this;
        /**
         * Processor for the ShowValue attribute.
         * @category Attribute setter and getter
         */
        protected __processShowValue(): void;
        /**
         * Getter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @returns The ShowValue attribute.
         */
        getShowValue(): boolean | null | undefined;
        processBaObject(): void;
        static processBaInterface(ctrl: Window | RoomControl.WindowControl, attr: Window.IProcessorAttributes): void;
    }
    module Window {
        interface IGeneralAttributes {
            /** The value where the window is completely closed. */
            closePosition?: number | null;
            /** The value where the window is completely opened. */
            openPosition?: number | null;
            /** The type of the used window icon. */
            displayMode?: Window.Icon.DisplayMode | null;
            /** The rotation of the icon in degree (0°-360°). */
            iconRotation?: number | null;
        }
        interface IAttributes extends System.BaseRoomControl.IAttributes, IGeneralAttributes {
            /** The position of the blind. */
            position?: number | boolean | null;
            /** The acknowledge of the position of the blind. */
            positionFeedback?: number | boolean | null;
            /** Defines the facade where the window is mounted. (Equal to the name in BuildingInformation control) */
            facadeName?: string | null;
            /** The operation state of the window. */
            operationState?: Window.OperationState | null;
            /** Defines if the percentage of the position is shown. */
            showValue?: boolean | null;
        }
        type BaTemplateDefinition = {
            commandOpen: {};
            commandClose: {};
            feedback?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
        type BaInterface = System.BaseRoomControl.BaInterface & {
            commandOpen: boolean;
            commandClose: boolean;
            feedback?: boolean;
            operationState?: Window.OperationState;
            reset?: boolean;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        const BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        interface IProcessorAttributes {
            processOperationState: (operationState: Window.OperationState | null | undefined) => any;
            processPosition: (position: number | boolean | null | undefined) => any;
            processPositionFeedback: (positionFeedback: number | boolean | null | undefined) => any;
            processHasResetSymbol: (hasResetSymbol: boolean) => any;
        }
        enum OperationState {
            invalid = 0,
            autoActive = 1,
            manual = 2,
            autoInactive = 3,
            maintenance = 4,
            safetyPosition = 5
        }
        /** Defines if the quick links are displayed or not. Default is false. */
        let ShowQuickLinks: boolean;
        /**
         * Icon that displays the position of a window.
        */
        class Icon extends Components.Button implements Components.ResizeHandler.IOnResized {
            constructor(id: string, parent?: Components.IBaseNode | null, attr?: Icon.IAttributes);
            readonly resizeHandler: Components.ResizeHandler;
            protected __attrHandler: AttributeHandler<Icon.IAttributes>;
            private __legendIconHandler;
            protected __init(attr: Icon.IAttributes): void;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            onResized(): void;
            /**
             * Animates the position of the window.
             * @category Internal
             */
            private __animatePosition;
            /**
             * Get a converted text with the current position in percent.
             * @category Public
             * @param attr Attributes for the position text.
             * @param cb Callback which will be raised when the text has changed. The text contains the current position in percent.
             */
            static getPositionText(position: number | boolean | null | undefined, closePosition: number | null | undefined, openPosition: number | null | undefined, cb: (text: string) => void): void;
            setAttributes(attr: Icon.IAttributes): this;
            getAttributes(): Icon.IAttributes;
            /**
             * Setter for the Position attribute.
             * @category Attribute setter and getter
             * @param p The new Position or null.
             * @returns The Icon.
             */
            setPosition(p: number | boolean | null | undefined): this;
            /**
             * Processor for the Position attribute.
             * @category Attribute setter and getter
             */
            protected __processPosition(): void;
            /**
             * Getter for the Position attribute.
             * @category Attribute setter and getter
             * @returns The Position attribute.
             */
            getPosition(): number | boolean | null | undefined;
            /**
             * Setter for the ClosePosition attribute.
             * @category Attribute setter and getter
             * @param p The new ClosePosition or null.
             * @returns The Icon.
             */
            setClosePosition(p: number | null | undefined): this;
            /**
             * Processor for the ClosePosition attribute.
             * @category Attribute setter and getter
             */
            protected __processClosePosition(): void;
            /**
             * Getter for the ClosePosition attribute.
             * @category Attribute setter and getter
             * @returns The ClosePosition attribute.
             */
            getClosePosition(): number | null | undefined;
            /**
             * Setter for the OpenPosition attribute.
             * @category Attribute setter and getter
             * @param p The new OpenPosition or null.
             * @returns The Icon.
             */
            setOpenPosition(p: number | null | undefined): this;
            /**
             * Processor for the OpenPosition attribute.
             * @category Attribute setter and getter
             */
            protected __processOpenPosition(): void;
            /**
             * Getter for the OpenPosition attribute.
             * @category Attribute setter and getter
             * @returns The OpenPosition attribute.
             */
            getOpenPosition(): number | null | undefined;
            /**
             * Setter for the DisplayMode attribute.
             * @category Attribute setter and getter
             * @param p The new DisplayMode or null.
             * @returns The Icon.
             */
            setDisplayMode(p: Icon.DisplayMode | null | undefined): this;
            /**
             * Processor for the DisplayMode attribute.
             * @category Attribute setter and getter
             */
            protected __processDisplayMode(): void;
            /**
             * Getter for the DisplayMode attribute.
             * @category Attribute setter and getter
             * @returns The DisplayMode attribute.
             */
            getDisplayMode(): Icon.DisplayMode | null | undefined;
            protected __processReadOnly(): void;
        }
        module Icon {
            interface IAttributes extends Components.Button.IAttributes {
                position?: number | boolean | null;
                closePosition?: number | null;
                openPosition?: number | null;
                displayMode?: DisplayMode | null;
            }
            enum DisplayMode {
                standard = 0,
                roofDome = 1
            }
        }
    }
}
//# sourceMappingURL=Window.d.ts.map