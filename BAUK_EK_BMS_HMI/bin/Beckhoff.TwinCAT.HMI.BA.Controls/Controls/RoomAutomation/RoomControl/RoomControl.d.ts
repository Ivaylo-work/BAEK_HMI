declare module TcHmi.BuildingAutomation.Controls.RoomAutomation {
    /** Defines if room automation controls show the busy indicator or not. */
    let showBusyIndicator: boolean;
    /** Defines if the BaObject access should be ignored for room automation controls. */
    let ignoreBaObjectAccess: boolean;
    module RoomControl {
        /**
         * A control to display HeatingCooling, Light, Sunblind and Window units in a room.
         * @category Control
         */
        class Control extends System.TextControl implements Components.ResizeHandler.IOnResized, BaObjectHandler.IFCUsesBaObject {
            constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
            baObjectHandler: BaObjectHandler;
            eventHandler: EventHandler<Control>;
            protected __loadBaChildren: boolean;
            protected __attrHandler: AttributeHandler<Control.IAttributes>;
            readonly resizeHandler: Components.ResizeHandler;
            private __presenceLegendIconHandler;
            private __switchOffDelayLegendIconHandler;
            /**
             * Side menu for the room control.
             * @category Elements
             */
            private __sideMenu;
            /**
             * The side control container.
             * @category Elements
             */
            private __sideControlContainer;
            /**
             * The control container for the header of the side menu.
             * @category Elements
             */
            private __headerSideMenu;
            /**
             * The control container for the status of the room in the control.
             * @category Elements
             */
            private __roomStatus;
            /**
             * The control container for the status of the room in the side menu.
             * @category Elements
             */
            private __roomStatusSideMenu;
            /**
             * Collection for the header of the different control unit types (0: Lights, 1: Sunblinds, 2 ACs)
             * @category Elements
             */
            private __controlUnitHeader;
            /**
             * The control unit options and the created control units for the room control.
             * @category Attribute
             */
            private __controlUnits;
            /**
             * Identifies if the side menu is opened or closed.
             * @category Internal
             */
            private __sideMenuOpen;
            /**
             * Identifies if the side menu is opened or closed.
             */
            get sideMenuOpen(): boolean;
            /**
             * Stores the number of created control units.
             *@category Internal
             */
            private __ctrlCnt;
            /**
             * If true the current value (e.g. brightness or position) will be displayed, otherwise the value feedback may be displayed.
             * @category Internal
             */
            private __useCurrentValues;
            /**
             * Stores the control units that are currently added, because adding is asynchrone.
             */
            private __currentlyAddedControlUnits;
            /**
             * Handler when the element was pressed.
             * @category Event handler
             */
            private __pressedHandler;
            /**
             * Handler to close the menu when the window was pressed somewhere.
             * @category Event handler
             */
            private __windowPressedHandler;
            private static __headlineSideMenuName;
            private static __nameDisplayName;
            private static __lightIconName;
            private static __operationStateIconName;
            private static __resetManualOperationStateButtonName;
            private static __presenceIconName;
            private static __switchOffDelayIconName;
            private static __openBaObjectListButtonName;
            private static __controlUnitHeaderSwitchName;
            private static __controlUnitHeaderSliderName;
            __previnit(): void;
            __init(): void;
            __attach(): void;
            __detach(): void;
            destroy(): void;
            /**
             * Callback when the size of the control unit has changed.
             * @category Event callbacks
             */
            onResized(): void;
            /**
             * Callback when the element was pressed.
             * @category Event callbacks
             */
            private __onPressed;
            /**
             * Callback when the window was pressed.
             * @category Event callbacks
             */
            private __onWindowPressed;
            /**
             * Callback when the brightness of a light control has changed.
             * Will be called from the light control units.
             * @category Event callbacks
             */
            onBrightnessChanged(): void;
            /**
             * Callback when the position of a window control has changed.
             * Will be called from the window control units.
             * @category Event callbacks
             */
            onWindowPositionChanged(): void;
            /**
             * Callback when the operation state of a light, sunblind or window control has changed.
             * Will be called from the light or sunblind control units.
             * @category Event callbacks
             */
            onOperationStateChanged(): void;
            /**
             * Add a control unit to the RoomControl.
             * @category Internal
             * @param type The type of the new control unit.
             * @returns The created control unit.
             */
            private __addControlUnit;
            /**
             * Create the side menu and its content.
             * @category Internal
             * @returns The created menu.
             */
            private __createSideMenu;
            /**
             * Get the header for a type of control units.
             * @category Internal
             * @param type The type of the control units.
             * @returns The header for the control units.
             */
            private __createControlUnitHeader;
            /**
             * Creates the headline container for the different control unit headers.
             * @param id The id of the headline container.
             * @param type The type of control units under the header.
             * @param controlsControlContainer The container for the different control units.
             * @returns The created ControlContainer.
             */
            private __createHeadlineContainer;
            /**
             * Updates the header of a certain control unit type.
             * @param type The type of the control unit header.
             */
            private __updateControlUnitHeader;
            /**
             * Destroys the side menu.
             * @category Internal
             */
            private __destroySideMenu;
            /**
             * Toggles the side menu between open and closed.
             * @category Internal
             */
            private __toggleMenu;
            /**
             * Detect the control unit type from the IAttributes interface
             * @category Internal
             * @param attr The options whose type should be detected.
             * @returns The detected type.
             */
            private __detectControlUnitType;
            /**
             * Processes the current status of the room.
             * @category Internal
             */
            private __processRoomStatus;
            private __processSideMenuHeader;
            private __processShowControlUnits;
            private __updateControlHeight;
            processBaObject(): void;
            setAllLights(newVal: number | boolean): void;
            setAllWindows(newVal: number | boolean): void;
            setAllSunblinds(newPos: number | null | undefined, newAngle: number | null | undefined): void;
            setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
            getBaObject(): BA.BaBasicObject<any> | null | undefined;
            setAttributes(attr: Control.IAttributes): this;
            /**
             * Setter for the Name attribute.
             * @category Attribute setter and getter
             * @param p The new Name or null.
             * @returns The Control.
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
            /**
             * Setter for the ControlUnits attribute.
             * @category Attribute setter and getter
             * @param p The new ControlUnits or null.
             * @returns The Control.
             */
            setControlUnits(p: ControlUnit.IAttributes[] | null | undefined): this;
            /**
             * Processor for the ControlUnits attribute.
             * @category Attribute setter and getter
             */
            protected __processControlUnits(): Promise<void>;
            /**
             * Getter for the ControlUnits attribute.
             * @category Attribute setter and getter
             * @returns The ControlUnits attribute.
             */
            getControlUnits(): ControlUnit.IAttributes[] | null | undefined;
            /**
             * Setter for the Presence attribute.
             * @category Attribute setter and getter
             * @param p The new Presence or null.
             * @returns The Control.
             */
            setPresence(p: boolean | null | undefined): this;
            /**
             * Processor for the Presence attribute.
             * @category Attribute setter and getter
             */
            protected __processPresence(): void;
            /**
             * Getter for the Presence attribute.
             * @category Attribute setter and getter
             * @returns The Presence attribute.
             */
            getPresence(): boolean | null | undefined;
            /**
             * Setter for the SwitchOffDelayActive attribute.
             * @category Attribute setter and getter
             * @param p The new DelayActive or null.
             * @returns The Control.
             */
            setSwitchOffDelayActive(p: boolean | null | undefined): this;
            /**
             * Processor for the SwitchOffDelayActive attribute.
             * @category Attribute setter and getter
             */
            protected __processSwitchOffDelayActive(): void;
            /**
             * Getter for the SwitchOffDelayActive attribute.
             * @category Attribute setter and getter
             * @returns The SwitchOffDelayActive attribute.
             */
            getSwitchOffDelayActive(): boolean | null | undefined;
            /**
             * Setter for the HideRoomStatus attribute.
             * @category Attribute setter and getter
             * @param p The new HideRoomStatus or null.
             * @returns The Control.
             */
            setHideRoomStatus(p: boolean | null | undefined): this;
            /**
             * Processor for the HideRoomStatus attribute.
             * @category Attribute setter and getter
             */
            protected __processHideRoomStatus(): void;
            /**
             * Getter for the HideRoomStatus attribute.
             * @category Attribute setter and getter
             * @returns The HideRoomStatus attribute.
             */
            getHideRoomStatus(): boolean | null | undefined;
            /**
             * Setter for the ShowRoomName attribute.
             * @category Attribute setter and getter
             * @param p The new ShowRoomName or null.
             * @returns The Control.
             */
            setShowRoomName(p: boolean | null | undefined): this;
            /**
             * Processor for the ShowRoomName attribute.
             * @category Attribute setter and getter
             */
            protected __processShowRoomName(): void;
            /**
             * Getter for the ShowRoomName attribute.
             * @category Attribute setter and getter
             * @returns The ShowRoomName attribute.
             */
            getShowRoomName(): boolean | null | undefined;
            /**
             * Setter for the ShowLights attribute.
             * @category Attribute setter and getter
             * @param p The new ShowLights or null.
             * @returns The Control.
             */
            setShowLights(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowLights attribute.
             * @category Attribute setter and getter
             * @returns The ShowLights attribute.
             */
            getShowLights(): boolean | null | undefined;
            /**
             * Setter for the MinBrightness attribute.
             * @category Attribute setter and getter
             * @param p The new MinBrightness or null.
             * @returns The Control.
             */
            setMinBrightness(p: number | null | undefined): this;
            /**
             * Processor for the MinBrightness attribute.
             * @category Attribute setter and getter
             */
            protected __processMinBrightness(): void;
            /**
             * Getter for the MinBrightness attribute.
             * @category Attribute setter and getter
             * @returns The MinBrightness attribute.
             */
            getMinBrightness(): number | null | undefined;
            /**
             * Setter for the MaxBrightness attribute.
             * @category Attribute setter and getter
             * @param p The new MaxBrightness or null.
             * @returns The Control.
             */
            setMaxBrightness(p: number | null | undefined): this;
            /**
             * Processor for the MaxBrightness attribute.
             * @category Attribute setter and getter
             */
            protected __processMaxBrightness(): void;
            /**
             * Getter for the MaxBrightness attribute.
             * @category Attribute setter and getter
             * @returns The MaxBrightness attribute.
             */
            getMaxBrightness(): number | null | undefined;
            /**
             * Setter for the LightsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @param p The new LightBaTemplateDescription attribute or null.
             * @returns The control.
             */
            setLightsBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
            /**
             * Getter for the LightsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @returns The LightsBaTemplateDescription attribute.
             */
            getLightsBaTemplateDescription(): BA.BaView.BaTemplateDescription<Light.BaTemplateDefinition> | null | undefined;
            /**
             * Setter for the LightsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @param p The new LightsBaInterfaceSymbolNames attribute or null.
             * @returns The control.
             */
            setLightsBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Light.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
            /**
             * Processor for the LightsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             */
            protected __processLightsBaInterfaceSymbolNames(): void;
            /**
             * Getter for the LightsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @returns The LightsBaInterfaceSymbolNames attribute.
             */
            getLightsBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<Light.BaInterface> | null | undefined;
            setLightColor(p: SolidColor | Color.RGBAColor | null | undefined): this;
            /**
             * Processor for the LightColor attribute.
             * @category Attribute setter and getter
             */
            protected __processLightColor(): void;
            /**
             * Getter for the LightColor attribute.
             * @category Attribute setter and getter
             * @returns The LightColor attribute.
             */
            getLightColor(): SolidColor | null | undefined;
            /**
             * Setter for the ShowSunblinds attribute.
             * @category Attribute setter and getter
             * @param p The new ShowSunblinds or null.
             * @returns The Control.
             */
            setShowSunblinds(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowSunblinds attribute.
             * @category Attribute setter and getter
             * @returns The ShowSunblinds attribute.
             */
            getShowSunblinds(): boolean | null | undefined;
            /**
             * Setter for the UsePosition attribute.
             * @category Attribute setter and getter
             * @param p The new UsePosition or null.
             * @returns The Control.
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
             * Setter for the SunblindOpenPosition attribute.
             * @category Attribute setter and getter
             * @param p The new SunblindOpenPosition or null.
             * @returns The Control.
             */
            setSunblindOpenPosition(p: number | null | undefined): this;
            /**
             * Processor for the SunblindOpenPosition attribute.
             * @category Attribute setter and getter
             */
            protected __processSunblindOpenPosition(): void;
            /**
             * Getter for the SunblindOpenPosition attribute.
             * @category Attribute setter and getter
             * @returns The SunblindOpenPosition attribute.
             */
            getSunblindOpenPosition(): number | null | undefined;
            /**
             * Setter for the SunblindClosePosition attribute.
             * @category Attribute setter and getter
             * @param p The new SunblindClosePosition or null.
             * @returns The Control.
             */
            setSunblindClosePosition(p: number | null | undefined): this;
            /**
             * Processor for the SunblindClosePosition attribute.
             * @category Attribute setter and getter
             */
            protected __processSunblindClosePosition(): void;
            /**
             * Getter for the SunblindClosePosition attribute.
             * @category Attribute setter and getter
             * @returns The SunblindClosePosition attribute.
             */
            getSunblindClosePosition(): number | null | undefined;
            /**
             * Setter for the UseAngle attribute.
             * @category Attribute setter and getter
             * @param p The new UseAngle or null.
             * @returns The Control.
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
             * Setter for the MinAngle attribute.
             * @category Attribute setter and getter
             * @param p The new MinAngle or null.
             * @returns The Control.
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
             * @returns The Control.
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
             * Processor for the AngleStep attribute.
             * @category Attribute setter and getter
             */
            protected __processAngleStep(): void;
            /**
             * Getter for the AngleStep attribute.
             * @category Attribute setter and getter
             * @returns The AngleStep attribute.
             */
            getAngleStep(): number | null | undefined;
            /**
             * Setter for the SunblindsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @param p The new SunblindsBaTemplateDescription attribute or null.
             * @returns The control.
             */
            setSunblindsBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
            /**
             * Getter for the SunblindsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @returns The SunblindsBaTemplateDescription attribute.
             */
            getSunblindsBaTemplateDescription(): BA.BaView.BaTemplateDescription<Sunblind.BaTemplateDefinition> | null | undefined;
            /**
             * Setter for the SunblindsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @param p The new SunblindsBaInterfaceSymbolNames attribute or null.
             * @returns The control.
             */
            setSunblindsBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Sunblind.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
            /**
             * Processor for the LightsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             */
            protected __processSunblindssBaInterfaceSymbolNames(): void;
            /**
             * Getter for the SunblindsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @returns The SunblindsBaInterfaceSymbolNames attribute.
             */
            getSunblindsBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<Sunblind.BaInterface> | null | undefined;
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
            /**
             * Setter for the ShowAirConditionings attribute.
             * @category Attribute setter and getter
             * @param p The new ShowAirConditionings or null.
             * @returns The Control.
             */
            setShowAirConditionings(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowAirConditionings attribute.
             * @category Attribute setter and getter
             * @returns The ShowAirConditionings attribute.
             */
            getShowAirConditionings(): boolean | null | undefined;
            /**
             * Setter for the TempAdjustRange attribute.
             * @category Attribute setter and getter
             * @param p The new TempAdjustRange or null.
             * @returns The Control
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
             * Setter for the Unit attribute.
             * @category Attribute setter and getter
             * @param p The new Unit or null.
             * @returns The Control.
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
            /**
             * Setter for the HCsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @param p The new HCsBaTemplateDescription attribute or null.
             * @returns The control.
             */
            setHCsBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
            /**
             * Getter for the HCsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @returns The HCsBaTemplateDescription attribute.
             */
            getAHCsBaTemplateDescription(): BA.BaView.BaTemplateDescription<HeatingCooling.BaTemplateDefinition> | null | undefined;
            /**
             * Setter for the HCsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @param p The new HCsBaInterfaceSymbolNames attribute or null.
             * @returns The control.
             */
            setHCsBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<HeatingCooling.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
            /**
             * Processor for the HCsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             */
            protected __processHCsBaInterfaceSymbolNames(): void;
            /**
             * Getter for the HCsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @returns The HCsBaInterfaceSymbolNames attribute.
             */
            getHCsBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<HeatingCooling.BaInterface> | null | undefined;
            /**
             * Setter for the ShowWindows attribute.
             * @category Attribute setter and getter
             * @param p The new ShowWindows or null.
             * @returns The Control.
             */
            setShowWindows(p: boolean | null | undefined): this;
            /**
             * Getter for the ShowWindows attribute.
             * @category Attribute setter and getter
             * @returns The ShowWindows attribute.
             */
            getShowWindows(): boolean | null | undefined;
            /**
             * Setter for the WindowClosePosition attribute.
             * @category Attribute setter and getter
             * @param p The new WindowClosePosition or null.
             * @returns The Control.
             */
            setWindowClosePosition(p: number | null | undefined): this;
            /**
             * Processor for the WindowClosePosition attribute.
             * @category Attribute setter and getter
             */
            protected __processWindowClosePosition(): void;
            /**
             * Getter for the WindowClosePosition attribute.
             * @category Attribute setter and getter
             * @returns The WindowClosePosition attribute.
             */
            getWindowClosePosition(): number | null | undefined;
            /**
             * Setter for the WindowOpenPosition attribute.
             * @category Attribute setter and getter
             * @param p The new WindowOpenPosition or null.
             * @returns The Control.
             */
            setWindowOpenPosition(p: number | null | undefined): this;
            /**
             * Processor for the WindowOpenPosition attribute.
             * @category Attribute setter and getter
             */
            protected __processWindowOpenPosition(): void;
            /**
             * Getter for the WindowOpenPosition attribute.
             * @category Attribute setter and getter
             * @returns The WindowOpenPosition attribute.
             */
            getWindowOpenPosition(): number | null | undefined;
            /**
             * Setter for the WindowsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @param p The new WindowsBaTemplateDescription attribute or null.
             * @returns The control.
             */
            setWindowsBaTemplateDescription(p: BA.BaTemplateDescriptionDesigner | null | undefined): this;
            /**
             * Getter for the WindowsBaTemplateDescription attribute.
             * @category Attribute setter and getter
             * @returns The WindowsBaTemplateDescription attribute.
             */
            getWindowsBaTemplateDescription(): BA.BaView.BaTemplateDescription<Window.BaTemplateDefinition> | null | undefined;
            /**
             * Setter for the WindowsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @param p The new WindowsBaInterfaceSymbolNames attribute or null.
             * @returns The control.
             */
            setWindowsBaInterfaceSymbolNames(p: BaInterfaceHandler.BaInterfaceSymbolNames<Window.BaInterface> | BaInterfaceHandler.BaInterfaceSymbolNamesDesigner | null | undefined): this;
            /**
             * Processor for the WindowsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             */
            protected __processWindowsBaInterfaceSymbolNames(): void;
            /**
             * Getter for the WindowsBaInterfaceSymbolNames attribute.
             * @category Attribute setter and getter
             * @returns The WindowsBaInterfaceSymbolNames attribute.
             */
            getWindowsBaInterfaceSymbolNames(): BaInterfaceHandler.BaInterfaceSymbolNames<Window.BaInterface> | null | undefined;
        }
        module Control {
            interface IAttributes extends System.TextControl.IAttributes {
                /** The name for the room control. */
                name?: string | null;
                /** The control unit options for the room control. */
                controlUnitOptions?: ControlUnit.IAttributes[] | null;
                /** Identifies if presence was detected or not. */
                presence?: boolean | null;
                /** Identifies if a switch-off delay is active or not. */
                switchOffDelayActive?: boolean | null;
                /** If true the header of the control with general room information hided. */
                hideRoomStatus?: boolean | null;
                /** If true the room name will be displayed in the header instead of the room information icons. */
                showRoomName?: boolean | null;
                hcs?: HeatingCooling.IGeneralAttributes & {
                    baInterfaceSymbolNames?: BaInterfaceHandler.BaInterfaceSymbolNames<HeatingCooling.BaInterface> | null;
                    baBaTemplateDescription?: BA.BaView.BaTemplateDescription<HeatingCooling.BaTemplateDefinition> | null;
                };
                /** Identifies if air conditionings will be shown in the control or not. */
                showAirConditionings?: boolean | null;
                lights?: Light.IGeneralAttributes & {
                    baInterfaceSymbolNames?: BaInterfaceHandler.BaInterfaceSymbolNames<Light.BaInterface> | null;
                    baBaTemplateDescription?: BA.BaView.BaTemplateDescription<Light.BaTemplateDefinition> | null;
                };
                /** Identifies if lights will be shown in the control or not. */
                showLights?: boolean | null;
                sunblinds?: Sunblind.IGeneralAttributes & {
                    baInterfaceSymbolNames?: BaInterfaceHandler.BaInterfaceSymbolNames<Sunblind.BaInterface> | null;
                    baBaTemplateDescription?: BA.BaView.BaTemplateDescription<Sunblind.BaTemplateDefinition> | null;
                };
                /** Identifies if sunblinds will be shown in the control or not. */
                showSunblinds?: boolean | null;
                /** Identifies if windows will be shown in the control or not. */
                showWindows?: boolean | null;
                windows?: Window.IGeneralAttributes & {
                    baInterfaceSymbolNames?: BaInterfaceHandler.BaInterfaceSymbolNames<Window.BaInterface> | null;
                    baBaTemplateDescription?: BA.BaView.BaTemplateDescription<Window.BaTemplateDefinition> | null;
                };
                /** The BaObject for the class. */
                baObject?: BA.BaBasicObject | null;
            }
            /** The events that can be fired by a BaseNode */
            enum ControlEvents {
                /** Is fired when the side menu of the control was opened. */
                onSideMenuOpened = "onSideMenuOpened",
                /** Is fired when the side menu of the control was closed. */
                onSideMenuClosed = "onSideMenuClosed"
            }
        }
        enum ControlUnitType {
            invalid = 0,
            light = 1,
            sunblind = 2,
            hc = 3,
            window = 4
        }
    }
}
//# sourceMappingURL=RoomControl.d.ts.map