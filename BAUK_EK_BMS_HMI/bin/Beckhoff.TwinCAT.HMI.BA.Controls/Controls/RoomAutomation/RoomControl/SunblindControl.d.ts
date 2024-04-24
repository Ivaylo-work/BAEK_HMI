declare module TcHmi.BuildingAutomation.Controls.RoomAutomation.RoomControl {
    class SunblindControl extends ControlUnit<Sunblind.BaTemplateDefinition, Sunblind.BaInterface> {
        constructor(id: string, parent?: Components.IBaseNode | null, attr?: SunblindControl.IAttributes);
        /**
         * The sunblind icon which visualizes the position and angle of the slats.
         * @category Public
         */
        private __sunblindIcon;
        /**
         * Position display.
         * @category Elements
         */
        private __positionDisplay;
        /**
         * Position display.
         * @category Elements
         */
        private __angleDisplay;
        protected __attrHandler: AttributeHandler<SunblindControl.IAttributes>;
        private __positionFeedbackReady;
        private __angleFeedbackReady;
        /**
         * If true the position will be displayed, otherwise the position feedback may be displayed.
         * @category Internal
         */
        private __useCurrentPosition;
        /**
         * If true the angle will be displayed, otherwise the angle feedback may be displayed.
         * @category Internal
         */
        private __useCurrentAngle;
        private static __positionSliderName;
        private static __positionUpButtonName;
        private static __positionDownButtonName;
        private static __angleSliderName;
        private static __angleMinusButtonName;
        private static __anglePlusButtonName;
        protected __init(attr: SunblindControl.IAttributes): void;
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
         * Get the corresponding side control for this sunblind control.
         * @category Public
         * @returns The side control for this sunblind control.
         */
        getSideControl(): JQuery<HTMLDivElement>;
        /**
        * Writes a new position value to the plc.
        * @category Public
        * @param newPosition The new brightness to write.
        */
        writePosition(newPosition: number | null | undefined): void;
        /**
         * Sends a command to drive the sunblind up.
         */
        writeOpenToPlc(): void;
        /**
         * Sends a command to drive the sunblind up.
         */
        writeCloseToPlc(): void;
        /**
        * Writes a new angle value to the plc.
        * @category Public
        * @param newPosition The new brightness to write.
        */
        writeAngle(newAngle: number | null | undefined): void;
        /**
         * Processes the position if a new position was set through the control.
         * @category Internal
         * @param newPosition The value of the new position.
         */
        private __processChangedPosition;
        /**
         * Processes the angle if a new angle was set through the control.
         * @category Internal
         * @param newAngle The value of the new angle.
         */
        private __processChangedAngle;
        /**
         * Updates the visuals of the control for the current position and angle.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the side control depending of the brightness data type.
         * @category Internal
         */
        private __updateSideControl;
        setAttributes(attr: SunblindControl.IAttributes): this;
        getAttributes(): SunblindControl.IAttributes;
        protected __processBaInterface(): void;
        /**
         * Setter for the OpenFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new OpenFeedback.
         * @returns The SunblindControl.
         */
        setOpenFeedback(p: boolean | null | undefined): this;
        /**
         * Processor for the OpenFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processOpenFeedback(): void;
        /**
         * Getter for the CloseFeedback attribute.
         * @category Attribute setter and getter
         * @returns The CloseFeedback attribute.
         */
        getCloseFeedback(): boolean | null | undefined;
        /**
         * Setter for the CloseFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new CloseFeedback.
         * @returns The SunblindControl.
         */
        setCloseFeedback(p: boolean | null | undefined): this;
        /**
         * Processor for the CloseFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processCloseFeedback(): void;
        /**
         * Getter for the OpenFeedback attribute.
         * @category Attribute setter and getter
         * @returns The OpenFeedback attribute.
         */
        getOpenFeedback(): boolean | null | undefined;
        /**
         * Setter for the UsePosition attribute.
         * @category Attribute setter and getter
         * @param p The new UsePosition.
         * @returns The SunblindControl.
         */
        setUsePosition(p: boolean | null | undefined): this;
        /**
         * Processor for the UsePosition attribute.
         * @category Attribute setter and getter
         */
        protected __processUsePosition(): void;
        /**
         * Getter for the UsePosition attribute.
         * @category Attribute setter and getter
         * @returns The UsePosition attribute.
         */
        getUsePosition(): boolean | null | undefined;
        /**
         * Setter for the Position attribute.
         * @category Attribute setter and getter
         * @param p The new Position.
         * @returns The SunblindControl.
         */
        setPosition(p: number | null | undefined): this;
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
        getPosition(): number | null | undefined;
        /**
         * Setter for the PositionFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new PositionFeedback.
         * @returns The SunblindControl.
         */
        setPositionFeedback(p: number | null | undefined): this;
        /**
         * Processor for the PositionFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processPositionFeedback(): void;
        /**
         * Getter for the Position attribute.
         * @category Attribute setter and getter
         * @returns The Position attribute.
         */
        getPositionPositionFeedback(): number | null | undefined;
        /**
         * Setter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @param p The new OpenPosition or null.
         * @returns The SunblindControl.
         */
        setOpenPosition(p: number | null | undefined): this;
        /**
         * Getter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @returns The OpenPosition attribute.
         */
        getOpenPosition(): number | null | undefined;
        /**
         * Setter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @param p The new ClosePosition or null.
         * @returns The SunblindControl.
         */
        setClosePosition(p: number | null | undefined): this;
        /**
         * Getter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @returns The ClosePosition attribute.
         */
        getClosePosition(): number | null | undefined;
        /**
         * Setter for the UseAngle attribute.
         * @category Attribute setter and getter
         * @param p The new UseAngle.
         * @returns The SunblindControl.
         */
        setUseAngle(p: boolean | null | undefined): this;
        /**
         * Processor for the UseAngle attribute.
         * @category Attribute setter and getter
         */
        protected __processUseAngle(): void;
        /**
         * Getter for the UseAngle attribute.
         * @category Attribute setter and getter
         * @returns The UseAngle attribute.
         */
        getUseAngle(): boolean | null | undefined;
        /**
         * Setter for the Angle attribute.
         * @category Attribute setter and getter
         * @param p The new Angle.
         * @returns The SunblindControl.
         */
        setAngle(p: number | null | undefined): this;
        /**
         * Processor for the Angle attribute.
         * @category Attribute setter and getter
         */
        protected __processAngle(): void;
        /**
         * Getter for the Angle attribute.
         * @category Attribute setter and getter
         * @returns The Angle attribute.
         */
        getAngle(): number | null | undefined;
        /**
         * Setter for the AngleFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new AngleFeedback.
         * @returns The SunblindControl.
         */
        setAngleFeedback(p: number | null | undefined): this;
        /**
         * Processor for the AngleFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processAngleFeedback(): void;
        /**
         * Getter for the Angle attribute.
         * @category Attribute setter and getter
         * @returns The Angle attribute.
         */
        getAngleFeedback(): number | null | undefined;
        /**
         * Setter for the MinAngle attribute.
         * @category Attribute setter and getter
         * @param p The new MinAngle or null.
         * @returns The SunblindControl.
         */
        setMinAngle(p: number | null | undefined): this;
        /**
         * Getter for the MinAngle attribute.
         * @category Attribute setter and getter
         * @returns The MinAngle attribute.
         */
        getMinAngle(): number | null | undefined;
        /**
         * Setter for the MaxAngle attribute.
         * @category Attribute setter and getter
         * @param p The new MaxAngle or null.
         * @returns The SunblindControl.
         */
        setMaxAngle(p: number | null | undefined): this;
        /**
         * Getter for the MaxAngle attribute.
         * @category Attribute setter and getter
         * @returns The MaxAngle attribute.
         */
        getMaxAngle(): number | null | undefined;
        /**
         * Setter for the AngleStep attribute.
         * @category Attribute setter and getter
         * @param p The new AngleStep or null.
         * @returns The SunblindControl.
         */
        setAngleStep(p: number | null | undefined): this;
        /**
         * Getter for the AngleStep attribute.
         * @category Attribute setter and getter
         * @returns The AngleStep attribute.
         */
        getAngleStep(): number | null | undefined;
        /**
         * Setter for the OperationState attribute.
         * @category Attribute setter and getter
         * @param p The new OperationState.
         * @returns The SunblindControl.
         */
        setOperationState(p: Sunblind.OperationState | null | undefined): this;
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
        getOperationState(): Sunblind.OperationState | null | undefined;
        setOpenedColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Getter for the OpenedColor attribute.
         * @category Attribute setter and getter
         * @returns The OpenedColor attribute.
         */
        getOpenedColor(): Color.RGBAColor | null | undefined;
        setClosedColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Getter for the ClosedColor attribute.
         * @category Attribute setter and getter
         * @returns The ClosedColor attribute.
         */
        getClosedColor(): Color.RGBAColor | null | undefined;
        setSlatColor(p: Color.RGBAColor | null | undefined): this;
        /**
         * Getter for the SlatColor attribute.
         * @category Attribute setter and getter
         * @returns The SlatColor attribute.
         */
        getSlatColor(): Color.RGBAColor | null | undefined;
        setFacadeName(p: string | null | undefined): this;
        /**
         * Getter for the FacadeName attribute.
         * @category Attribute setter and getter
         * @returns The FacadeName attribute.
         */
        getFacadeName(): string | null | undefined;
        processBaObject(): void;
    }
    module SunblindControl {
        interface IAttributes extends Sunblind.IAttributes, ControlUnit.IAttributes {
            positionMapping?: string;
            positionFeedbackMapping?: string;
            angleMapping?: string;
            angleFeedbackMapping?: string;
            modeMapping?: string;
        }
    }
}
//# sourceMappingURL=SunblindControl.d.ts.map