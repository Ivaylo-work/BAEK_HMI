declare module TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class WindowControl extends ControlUnit<Window.BaTemplateDefinition, Window.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null, attr?: WindowControl.IAttributes);
        /**
         * The window icon which displays the brightness.
         * @category Public
         */
        private __windowIcon;
        protected __attrHandler: AttributeHandler<WindowControl.IAttributes>;
        private __positionFeedbackReady;
        /**
         * If true the position will be displayed, otherwise the position feedback may be displayed.
         * @category Internal
         */
        private __useCurrentPosition;
        private static __positionDisplayName;
        private static __positionCtrlName;
        private static __positionSwitchName;
        protected __init(attr: WindowControl.IAttributes): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback when the building information have changed.
         * @category Event callbacks
         */
        private __onBuildingInformationChanged;
        createElement(): void;
        /**
         * Get the corresponding side control for this window control.
         * @category Public
         * @returns The side control for this window control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new position value to the plc.
        * @category Public
        * @param newPosition The new brightness to write.
        */
        writePosition(newPosition: boolean | number | null | undefined): void;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position or null.
         */
        private __processChangedPosition;
        /**
         * Updates the visuals of the control for the current position.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the side control depending of the position data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: WindowControl.IAttributes): this;
        getAttributes(): WindowControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position.
         * @returns The SunblindControl.
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
         * @param p The new Position.
         * @returns The SunblindControl.
         */
        setPositionFeedback(p: number | boolean | null | undefined): this;
        /**
         * Processor for the BrightnessFeedback attribute.
         * @category Internal
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
         * @param p The new ClosePosition.
         * @returns The WindowControl.
         */
        setClosePosition(p: number | null | undefined): this;
        /**
         * Getter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @returns The ClosePosition attribute.
         */
        getClosePosition(): number | null | undefined;
        /**
         * Setter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @param p The new OpenPosition.
         * @returns The WindowControl.
         */
        setOpenPosition(p: number | null | undefined): this;
        /**
         * Getter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @returns The OpenPosition attribute.
         */
        getOpenPosition(): number | null | undefined;
        /**
         * Setter for the OperationState attribute.
         * @category Attribute setter and getter
         * @param p The new OperationState.
         * @returns The WindowControl.
         */
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
         * Setter for the DisplayMode attribute.
         * @category Attribute setter and getter
         * @param p The new DisplayMode or null.
         * @returns The WindowControl.
         */
        setDisplayMode(p: Window.Icon.DisplayMode | null | undefined): this;
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
         * @returns The WindowControl.
         */
        setIconRotation(p: number | null | undefined): this;
        /**
         * Getter for the IconRotation attribute.
         * @category Attribute setter and getter
         * @returns The IconRotation attribute.
         */
        getIconRotation(): number | null | undefined;
        setFacadeName(p: string | null | undefined): this;
        /**
         * Getter for the FacadeName attribute.
         * @category Attribute setter and getter
         * @returns The FacadeName attribute.
         */
        getFacadeName(): string | null | undefined;
        processBaObject(): void;
    }
    module WindowControl {
        interface IAttributes extends Window.IAttributes, ControlUnit.IAttributes {
            positionMapping?: string;
            positionFeedbackMapping?: string;
            modeMapping?: string;
        }
    }
}
//# sourceMappingURL=WindowControl.d.ts.map