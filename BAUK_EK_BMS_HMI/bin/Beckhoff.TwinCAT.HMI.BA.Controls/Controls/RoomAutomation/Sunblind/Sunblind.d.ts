declare module TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /**
     * A control to display and control a sunblind.
     * @category Control
     */
    class Sunblind extends System.BaseRoomControl<Sunblind.BaTemplateDefinition, Sunblind.BaInterface> implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<Sunblind.BaTemplateDefinition>;
        protected __baFc: Sunblind.Icon;
        protected __attrHandler: AttributeHandler<Sunblind.IAttributes>;
        /**
         * The step to change the position when pressing the up / down step button.
         * @category Attribute
         */
        private __positionStep;
        /**
         * The slider to control the position of the sunblind.
         * @cateogry Elements
         */
        private __positionSlider;
        /**
         * The slider to control the angle of the sunblind.
         * @cateogry Elements
         */
        private __angleSlider;
        /**
         * Identifies if the control buttons control the angle.
         * @category Internal
         */
        private __angleMode;
        /**
         * IReadyFunction to reset the busy invoking after changing the position.
         * @category Internal
         */
        private __positionFeedbackReady;
        /**
         * IReadyFunction to reset the busy invoking after changing the angle.
         * @category Internal
         */
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
        private __destroyOnPositionSliderChanged;
        private __destroyOnPositionSliderFinished;
        private __destroyOnAngleSliderChanged;
        private __destroyOnAngleSliderFinished;
        private static __positionUpButtonName;
        private static __positionDownButtonName;
        private static __anglePlusButtonName;
        private static __angleMinusButtonName;
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
         * Destroys the current layout.
         * @category Internal
         */
        private __destroyLayout;
        /**
         * Destroys and deletes the sliders and executes the corresponding event destroy functions.
         * @category Internal
         */
        private __destroySliders;
        /**
         * Processes the new position if it was changed from the user through the control.
         * @category Internal
         * @param newPosition The value of the new brightness.
         */
        private __processChangedPosition;
        /**
         * Processes the new position if it was changed from the user through the control.
         * @category Internal
         * @param newAngle The value of the new brightness.
         */
        private __processChangedAngle;
        /**
         * Updates the visuals of the control for the current position and angle.
         * @category Internal
         */
        private __updateElements;
        /**
         * Updates the position (and angle) display.
         * @param pos The position whose percentage will be calculated and displayed.
         * @param angle The angle to be displayed.
         */
        private __updateDisplay;
        static processBaObject(ctrl: BaObjectHandler.IUsesBaObject & BA.IBaTemplateHandler<Sunblind.BaTemplateDefinition>, attr: Sunblind.IProcessorAttributes): void;
        /**
         * Get the operation state icon.
         * @param operationState The operation state.
         * @returns The operation state icon for the operation state.
         */
        static getOperationStateDisplayIcon(operationState: Sunblind.OperationState | null | undefined): Icons.IconData | null;
        /**
         * Get the background attributes for a certain operation state.
         * @param operationState The operation state which shall be displayed by the background.
         * @returns The background attributes for the operation state.
         */
        static getOperationStateDisplayBackgroundAttributes(operationState: Sunblind.OperationState | null | undefined): Components.BackgroundStyler.IAttributes;
        /**
         * Sends a command to drive the sunblind up.
         */
        static writeOpenToPlc(target: BA.BaObject<Sunblind.BaInterface> | BaInterfaceHandler<Sunblind.BaInterface>): void;
        /**
         * Sends a command to drive the sunblind up.
         */
        writeOpenToPlc(): void;
        /**
         * Sends a command to drive the sunblind down.
         */
        static writeCloseToPlc(target: BA.BaObject<Sunblind.BaInterface> | BaInterfaceHandler<Sunblind.BaInterface>): void;
        /**
         * Sends a command to drive the sunblind up.
         */
        writeCloseToPlc(): void;
        /**
         * Writes a new position value to the plc.
         * @category Public
         * @param newPosition The new position to write.
         */
        static writePositionToPlc(newPosition: number | null, target: BA.BaView<Sunblind.BaTemplateDefinition> | BA.BaObject<Sunblind.BaInterface> | BaInterfaceHandler<Sunblind.BaInterface>): void;
        /**
         * Writes a new position value to the plc.
         * @category Public
         * @param newPosition The new position to write.
         */
        writePositionToPlc(newPosition: number | null): void;
        /**
         * Writes a new angle value to the plc.
         * @category Public
         * @param newAngle The new angle to write.
         */
        static writeAngleToPlc(newAngle: number | null, target: BA.BaView<Sunblind.BaTemplateDefinition> | BA.BaObject<Sunblind.BaInterface> | BaInterfaceHandler<Sunblind.BaInterface>): void;
        /**
         * Writes a new angle value to the plc.
         * @category Public
         * @param newAngle The new angle to write.
         */
        writeAngleToPlc(newAngle: number | null): void;
        /**
         * Resets the manual operation state to automatic operation state.
         * @category Public
         */
        static resetManualOperationStateToPlc(target: BA.BaObject<Sunblind.BaInterface> | BaInterfaceHandler<Sunblind.BaInterface>): void;
        resetManualOperationStateToPlc(): void;
        /**
         * Get the position of the sunblind in percent.
         * @category Public
         */
        static getPercentagePosition(position?: number | null, closePosition?: number | null, openPosition?: number | null): number | null;
        /**
         * Get the building information for this sunblind from a BuildingInformation control.
         * @category Public
         * @returns The building information control instance.
         */
        static getBuildingInformation(ctrl: System.BaseControl | Components.Base, facadeName?: string | null): BuildingGeneral.BuildingInformation | undefined;
        /**
         * Handles building information.
         * @param ctrl The control instance.
         * @param alarmContainer The container, where the alarm icons shall be appended.
         * @returns The alarm container to append where it is needed.
         */
        static handleBuildingInformation(ctrl: System.BaseControl | Components.Base, facadeName?: string | null, alarmContainer?: JQuery): JQuery<HTMLElement> | undefined;
        /**
         * Destroys all alarm icons that have been created to visualize building information.
         * @category Public
         * @param ctrl The control instance.
         */
        static destroyBuildingInformationAlarms(ctrl: System.BaseControl | Components.Base): void;
        /**
         * Determines the position state depending on the open and close feedback.
         * @category Public
         * @param openFdb The open feedback.
         * @param closeFdb The close feedback.
         * @returns The determined position state.
         */
        static determinePositionState(openFdb: boolean | null | undefined, closeFdb: boolean | null | undefined): Sunblind.PositionState;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        setAttributes(attr: Sunblind.IAttributes): this;
        getAttributes(): AttributeHandler<Sunblind.IAttributes>;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<Sunblind.BaInterface> | null | undefined): this;
        /**
         * Setter for the OpenFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new OpenFeedback or null.
         * @returns The Sunblind.
         */
        setOpenFeedback(p: boolean | null | undefined): this;
        /**
         * Processor for the OpenFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processOpenFeedback(): void;
        /**
         * Getter for the OpenFeedback attribute.
         * @category Attribute setter and getter
         * @returns The OpenFeedback attribute.
         */
        getOpenFeedback(): boolean | null | undefined;
        /**
         * Setter for the CloseFeedback attribute.
         * @category Attribute setter and getter
         * @param p The new CloseFeedback or null.
         * @returns The Sunblind.
         */
        setCloseFeedback(p: boolean | null | undefined): this;
        /**
         * Processor for the CloseFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processCloseFeedback(): void;
        /**
         * Getter for the CloseFeedback attribute.
         * @category Attribute setter and getter
         * @returns The CloseFeedback attribute.
         */
        getCloseFeedback(): boolean | null | undefined;
        /**
         * Setter for the UsePosition attribute.
         * @category Attribute setter and getter
         * @param p The new UsePosition or null.
         * @returns The Sunblind.
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
         * @param p The new Position or null.
         * @returns The Sunblind.
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
         * @param p The new PositionFeedback or null.
         * @returns The Sunblind.
         */
        setPositionFeedback(p: number | null | undefined): this;
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
        getPositionFeedback(): number | null | undefined;
        /**
         * Setter for the OpenPosition attribute.
         * @category Attribute setter and getter
         * @param p The new OpenPosition or null.
         * @returns The Sunblind.
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
         * Setter for the ClosePosition attribute.
         * @category Attribute setter and getter
         * @param p The new ClosePosition or null.
         * @returns The Sunblind.
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
         * Setter for the UseAngle attribute.
         * @category Attribute setter and getter
         * @param p The new UseAngle or null.
         * @returns The Sunblind.
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
         * @param p The new Angle or null.
         * @returns The Sunblind.
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
         * @param p The new AngleFeedback or null.
         * @returns The Sunblind.
         */
        setAngleFeedback(p: number | null | undefined): this;
        /**
         * Processor for the AngleFeedback attribute.
         * @category Attribute setter and getter
         */
        protected __processAngleFeedback(): void;
        /**
         * Getter for the AngleFeedback attribute.
         * @category Attribute setter and getter
         * @returns The AngleFeedback attribute.
         */
        getAngleFeedback(): number | null | undefined;
        /**
         * Setter for the MinAngle attribute.
         * @category Attribute setter and getter
         * @param p The new MinAngle or null.
         * @returns The Sunblind.
         */
        setMinAngle(p: number | null | undefined): this;
        /**
         * Processor for the MinAngle attribute.
         * @category Attribute setter and getter
         */
        protected __processMinAngle(): void;
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
         * @returns The Sunblind.
         */
        setMaxAngle(p: number | null | undefined): this;
        /**
         * Processor for the MaxAngle attribute.
         * @category Attribute setter and getter
         */
        protected __processMaxAngle(): void;
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
         * @returns The Sunblind.
         */
        setAngleStep(p: number | null | undefined): this;
        /**
         * Getter for the AngleStep attribute.
         * @category Attribute setter and getter
         * @returns The AngleStep attribute.
         */
        getAngleStep(): number | null | undefined;
        setOpenedColor(p: SolidColor | Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the OpenedColor attribute.
         * @category Attribute setter and getter
         */
        protected __processOpenedColor(): void;
        /**
         * Getter for the OpenedColor attribute.
         * @category Attribute setter and getter
         * @returns The OpenedColor attribute.
         */
        getOpenedColor(): SolidColor | null | undefined;
        setClosedColor(p: SolidColor | Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the ClosedColor attribute.
         * @category Attribute setter and getter
         */
        protected __processClosedColor(): void;
        /**
         * Getter for the ClosedColor attribute.
         * @category Attribute setter and getter
         * @returns The ClosedColor attribute.
         */
        getClosedColor(): SolidColor | null | undefined;
        setSlatColor(p: SolidColor | Color.RGBAColor | null | undefined): this;
        /**
         * Processor for the SlatColor attribute.
         * @category Attribute setter and getter
         */
        protected __processSlatColor(): void;
        /**
         * Getter for the SlatColor attribute.
         * @category Attribute setter and getter
         * @returns The SlatColor attribute.
         */
        getSlatColor(): SolidColor | null | undefined;
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
        setControls(p: Sunblind.Controls | null | undefined): this;
        /**
         * Processor for the Controls attribute.
         * @category Attribute setter and getter
         */
        protected __processControls(): void;
        /**
         * Getter for the Controls attribute.
         * @category Attribute setter and getter
         * @returns The Controls attribute.
         */
        getControls(): Sunblind.Controls | null | undefined;
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
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The Sunblind.
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
        protected __processReadOnly(): void;
        static processBaInterface(ctrl: Sunblind | RoomControl.SunblindControl, attr: Sunblind.IProcessorAttributes): void;
    }
    module Sunblind {
        interface IGeneralAttributes {
            /** Defines if the position should be considered or not. */
            usePosition?: boolean | null;
            /** The position where the sunblind is completely opened. */
            openPosition?: number | null;
            /** The position where the sunblind is completely closed. */
            closePosition?: number | null;
            /** Defines if the angle should be considered or not. */
            useAngle?: boolean | null;
            /** The min angle of the position of the blind. */
            minAngle?: number | null;
            /** The max angle of the position of the blind. */
            maxAngle?: number | null;
            /** Value to which the angle is changed when an angle button was pressed. */
            angleStep?: number | null;
            /** The color of the background when the sunblind is completly opened. */
            openedColor?: Color.RGBAColor | null;
            /** The color of the background when the sunblind is completly closed. */
            closedColor?: Color.RGBAColor | null;
            /** The color of the slats. */
            slatColor?: Color.RGBAColor | null;
        }
        interface IAttributes extends System.BaseRoomControl.IAttributes, IGeneralAttributes {
            /** Feedback if the sunblind is completely open. */
            openFeedback?: boolean | null;
            /** Feedback if the sunblind is completely close. */
            closeFeedback?: boolean | null;
            /** The position of the blind. */
            position?: number | null;
            /** The acknowledge of the position of the blind. */
            positionFeedback?: number | null;
            /** The angle of the slats. */
            angle?: number | null;
            /** The acknowledge of the position of the blind. */
            angleFeedback?: number | null;
            /** Defines the facade where the sunblind is mounted. (Equal to the name in BuildingInformation control) */
            facadeName?: string | null;
            /** The layout of the sunblind control. */
            controls?: Controls | null;
            /** The operation state of the sunblind. */
            operationState?: Sunblind.OperationState | null;
            /** Defines if the percentage of the position is shown. */
            showValue?: boolean | null;
        }
        /** This angle will be used for the minimum angle when a BaObject/BaView was set. */
        let DefaultMinimumAngle: number;
        /** This angle will be used for the maximum angle when a BaObject/BaView was set. */
        let DefaultMaximumAngle: number;
        /** Defines if buttons are used to adjust the angle. */
        let UseButtonsForAngle: boolean;
        type BaTemplateDefinition = {
            positionFeedback: {};
            positionCommand: {};
            angleFeedback?: {};
            angleCommand?: {};
        };
        const BaTemplateDefinition: BA.BaView.BaTemplateDefinition<BaTemplateDefinition>;
        let BaTemplateDescription: BA.BaView.BaTemplateDescription<BaTemplateDefinition>;
        type BaInterface = System.BaseRoomControl.BaInterface & {
            cmdUp: boolean;
            cmdDown: boolean;
            fdbOpen?: boolean;
            fdbClose?: boolean;
            initialize?: boolean;
            operationState?: OperationState;
            resetManual?: boolean;
            positionCmd?: number;
            positionFdb?: number;
            angleCmd?: number;
            angleFdb?: number;
            minAngle?: number;
            maxAngle?: number;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
        interface IProcessorAttributes {
            processOpenFeedback: (fdbOpen: boolean | null | undefined) => any;
            processCloseFeedback: (fdbCls: boolean | null | undefined) => any;
            processOperationState: (operationState: Sunblind.OperationState | null | undefined) => any;
            processHasResetSymbol: (hasResetSymbol: boolean) => any;
            processUsePosition: (usePosition: boolean) => any;
            processPosition: (position: number | null | undefined) => any;
            processPositionFeedback: (positionFeedback: number | null | undefined) => any;
            processUseAngle: (useAngle: boolean) => any;
            processAngle: (angle: number | null | undefined) => any;
            processAngleFeedback: (angleFeedback: number | null | undefined) => any;
            processMinAngle: (minAngle: number | null | undefined) => any;
            processMaxAngle: (maxAngle: number | null | undefined) => any;
        }
        enum Controls {
            buttons = "buttons",
            sliderHorizontal = "sliderHorizontal"
        }
        enum OperationState {
            invalid = 0,
            autoActive = 1,
            manual = 2,
            autoInactive = 3,
            maintenance = 4,
            safetyPosition = 5
        }
        enum PositionState {
            invalid = 0,
            closed = 1,
            opened = 2,
            moving = 3
        }
        /**
         * Icon that displays the position and angle of a sunblind.
        */
        class Icon extends Components.Button implements Components.ResizeHandler.IOnResized {
            constructor(id: string, parent?: Components.IBaseNode | null, attr?: Icon.IAttributes);
            resizeHandler: Components.ResizeHandler;
            smallMode: boolean;
            protected __attrHandler: AttributeHandler<Icon.IAttributes>;
            private __legendIconHandler;
            private __useSmallImage;
            protected __init(attr: Icon.IAttributes): void;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            onResized(): void;
            /**
             * Animates the position of the sunblind.
             * @param pos The position which should be displayed.
             * @category Internal
             */
            private __animatePosition;
            /**
             * Animates the angle of the sunblind.
             * @param pos The angle which should be displayed.
             * @category Internal
             */
            private __animateAngle;
            /**
             * Animates the sun exposure by coloring the background color depeding on the current position and angle.
             * @category Internal
             */
            private __animateSunExposure;
            setAttributes(attr: Icon.IAttributes): this;
            getAttributes(): Icon.IAttributes;
            /**
             * Setter for the Position attribute.
             * @category Attribute setter and getter
             * @param p The new Position or null.
             * @returns The Icon.
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
             * Setter for the OpenPosition attribute.
             * @category Attribute setter and getter
             * @param p The new OpenPosition or null.
             * @returns The Icon.
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
             * @returns The Icon.
             */
            setClosePosition(p: number | null | undefined): this;
            /**
             * Getter for the ClosePosition attribute.
             * @category Attribute setter and getter
             * @returns The ClosePosition attribute.
             */
            getClosePosition(): number | null | undefined;
            /**
             * Setter for the Angle attribute.
             * @category Attribute setter and getter
             * @param p The new Angle or null.
             * @returns The Icon.
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
             * Setter for the MinAngle attribute.
             * @category Attribute setter and getter
             * @param p The new MinAngle or null.
             * @returns The Icon.
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
             * @returns The Icon.
             */
            setMaxAngle(p: number | null | undefined): this;
            /**
             * Getter for the MaxAngle attribute.
             * @category Attribute setter and getter
             * @returns The MaxAngle attribute.
             */
            getMaxAngle(): number | null | undefined;
            setOpenedColor(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the OpenedColor attribute.
             * @category Attribute setter and getter
             */
            protected __processOpenedColor(): void;
            /**
             * Getter for the OpenedColor attribute.
             * @category Attribute setter and getter
             * @returns The OpenedColor attribute.
             */
            getOpenedColor(): Color.RGBAColor | null | undefined;
            setClosedColor(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the ClosedColor attribute.
             * @category Attribute setter and getter
             */
            protected __processClosedColor(): void;
            /**
             * Getter for the ClosedColor attribute.
             * @category Attribute setter and getter
             * @returns The ClosedColor attribute.
             */
            getClosedColor(): Color.RGBAColor | null | undefined;
            setSlatColor(p: Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the SlatColor attribute.
             * @category Attribute setter and getter
             */
            protected __processSlatColor(): void;
            /**
             * Getter for the SlatColor attribute.
             * @category Attribute setter and getter
             * @returns The SlatColor attribute.
             */
            getSlatColor(): Color.RGBAColor | null | undefined;
            protected __processReadOnly(): void;
        }
        module Icon {
            interface IAttributes extends Components.Button.IAttributes {
                position?: number | null;
                openPosition?: number | null;
                closePosition?: number | null;
                angle?: number | null;
                minAngle?: number | null;
                maxAngle?: number | null;
                openedColor?: Color.RGBAColor | null;
                closedColor?: Color.RGBAColor | null;
                slatColor?: Color.RGBAColor | null;
            }
        }
    }
}
//# sourceMappingURL=Sunblind.d.ts.map