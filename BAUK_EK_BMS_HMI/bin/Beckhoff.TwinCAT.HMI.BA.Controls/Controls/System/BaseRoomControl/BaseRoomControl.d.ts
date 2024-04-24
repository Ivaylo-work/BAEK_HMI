declare module TcHmi.BuildingAutomation.Controls.System {
    /**
     * The BaseRoomControl is the base class of all room automation controls.
     * @category Hidden control
     */
    class BaseRoomControl<T extends BA.BaView.BaTemplateStructure, I extends BaseRoomControl.BaInterface> extends System.TextControl implements BA.IBaTemplateHandler<T>, BaInterfaceHandler.IUsesBaInterface<I>, BaObjectHandler.IUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        protected __baFc: Components.Button;
        protected __attrHandler: AttributeHandler<BaseRoomControl.IAttributes>;
        protected __operationStateLegenIconHandler: Components.LegendIconHandler;
        private __resetManualModeLegendIconHandler;
        baTemplateHandler: BA.BaTemplateHandler<T>;
        baInterfaceHandler: BaInterfaceHandler<I>;
        /**
         * Overwrite in derived class to load all children when a BaObject (as an BaView) was set.
         * @category BA
         */
        protected __loadBaChildren: boolean;
        /**
         * Overwrite in derived class to load all texts when a BaObject (as an BaView) was set.
         * @category BA
         */
        protected __loadTexts: boolean;
        /**
         * Overwrite in derived class to set the default template description that will be used for this control.
         * @category BA
         */
        protected __defaultBaTemplateDescription: BA.BaView.BaTemplateDescription<T> | undefined;
        /**
         * Container for the different control elements.
         * @category Elements
         */
        protected __controlContainerElement: JQuery<HTMLElement>;
        /**
         * Containers for the different control elements.
         * @category Elements
         */
        private __controlContainers;
        /**
         * A base component which is used to display the operation state on the corner of a room control.
         * @category Elements
         */
        protected __operationStateDisplay: Components.Base | undefined;
        /**
         * If true a reset symbol is available in the BaObject or BaInterface.
         * @category Internal
         */
        protected __hasResetSymbol: boolean;
        private __oldZIndex;
        private __transitionendProcessed;
        private static __resetManualOperationStateButtonName;
        private static __openBaObjectButtonName;
        private static __buttonsContainerName;
        /**
         * Handler when the body was pressed.
         * @category Event handler
         */
        protected __bodyPressedHandler: (ev: JQuery.TriggeredEvent<any, any, any, HTMLElement>) => void;
        /**
         * Handler when the transition for closing the control container has ended.
         * @category Event handler
         */
        protected __closeTransitionEndHandler: () => void;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Event callback when the body was pressed.
         * @category Event callback
         */
        protected __onBodyPressed(ev: JQuery.TriggeredEvent<any, any, any, HTMLElement>): void;
        /**
         * Event callback when the reset manual operation state button was pressed.
         * @category Event callback
         */
        protected __onResetManualOperationStateButtonPressed(): void;
        /**
         * Adds a control to the control container drop down.
         * @category Internal
         * @param containerName The control container where the new control will be added to. Control container will be created if none is existing.
         * @param control The control options or the control.
         * @param order The order where the control container will be placed in the drop down.
         */
        protected __addControl<T extends Components.Base>(containerName: string, control: Components.ControlContainer.IControlOptions | Components.Base, order?: number): T;
        /**
         * Adds a control to the control container drop down.
         * @category Internal
         * @param containerName The control container where the new control will be added to. Control container will be created if none is existing.
         * @param controls The controls options or the controls.
         * @param order The order where the control container will be placed in the drop down.
         */
        protected __addControls(containerName: string, controls: (Components.ControlContainer.IControlOptions | Components.Base)[], order?: number): Components.Base[];
        /**
         * Get a specific control from the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         * @param controlName The name of the control.
         */
        protected __getControl<T extends Components.Base>(containerName: string, controlName: string): T | undefined;
        /**
         * Get all controls from a container in the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         */
        protected __getControls(containerName: string): Components.Base[];
        /**
         * Remove a control from the control container drop down.
         * @category Internal
         * @param containerName The name of the control container.
         * @param control The control which should be removed.
         */
        protected __removeControl(containerName: string, control: Components.Base | string | null | undefined): boolean;
        /**
         * Remove all controls of a control container from the control cotainer drop down.
         * @category Internal
         * @param containerName The name of the control container.
         */
        protected __removeAllControls(containerName: string): boolean;
        /**
         * Updates the height of the control container drop down.
         * @category Internal
         */
        private __updateControlContainerHeight;
        /**
         * Opens the control container drop down.
         * @category Internal
         */
        protected __openControlContainer(): void;
        /**
         * Closes the control container drop down.
         * @category Internal
         */
        protected __closeControlContainer(): void;
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
        /**
         * Resets the manual operation state to automatic operation state.
         * @category Public
         */
        resetManualOperationStateToPlc(): void;
        processBaObject(): void;
        setBaInterface(p: BaInterfaceHandler.BaInterfaceSymbol<BaseRoomControl.BaInterface> | null | undefined): this;
        getBaInterface(): Symbol | null | undefined;
        setBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<I> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
        getBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<I> | null | undefined;
        setBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
        getBaTemplateDescription(): BA.BaView.BaTemplateDescription<any> | null | undefined;
        protected __processReadOnly(): void;
    }
    module BaseRoomControl {
        interface IAttributes extends System.BaseControl.IAttributes {
        }
        type BaInterface = {
            name?: string;
        };
        const BaInterfaceDef: BaInterfaceHandler.BaInterfaceDefinition<BaInterface>;
        let BaInterfaceSymbolNames: BaInterfaceHandler.BaInterfaceSymbolNames<BaInterface>;
    }
}
//# sourceMappingURL=BaseRoomControl.d.ts.map