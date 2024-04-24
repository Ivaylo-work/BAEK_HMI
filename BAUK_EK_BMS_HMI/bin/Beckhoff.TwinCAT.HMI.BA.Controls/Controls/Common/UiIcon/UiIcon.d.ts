declare module TcHmi.BuildingAutomation.Controls.Common {
    /**
     * The UiIcon contains a button to open a BA.BaView. Around the button active events will be displayed.
     * @category Control
     */
    class UiIcon extends Button implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        protected __baFc: Components.UiIcon;
        /**
         * Data for different displays around the icon.
         * @category Attributes
         */
        private __displaysDataFromDesigner;
        /**
         * Data for different events that can be displayed around the icon.
         * @category Attributes
         */
        private __eventsDataFromDesigner;
        private __connectionColors;
        private __connectionColorPerSide;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback function for the onObjectTypeButtonClicked event.
         * @category Event callbacks
         * @param ev The event object.
         */
        protected __onPressed(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the DisplaysData attribute if set from the designer.
         * @category Attribute setter and getter
         * @param p The new displaysData or null.
         * @returns The UiIcon.
         */
        private __setDisplaysDataDesigner;
        /**
         * Getter for the DisplaysData attribute if requested from the designer.
         * @category Attribute setter and getter
         * @returns The DisplaysData attribute.
         */
        private __getDisplaysDataDesigner;
        /**
         * Setter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @param p The new displaysData or null.
         * @returns The UiIcon.
         */
        setDisplaysData(p: Map<string, Components.UiIcon.IDisplayData> | null | undefined): this;
        /**
         * Getter for the DisplaysData attribute.
         * @category Attribute setter and getter
         * @returns The DisplaysData attribute.
         */
        getDisplaysData(): Map<string, Components.UiIcon.IDisplayData> | null | undefined;
        /**
        * Get all created displays.
        * @category Public
        * @returns All created displays.
        */
        getDisplays(): Map<string, Components.InputBox<string | number>> | undefined;
        /**
         * Adds a display to the UiIcon.
         * @category Public
         * @param data The data for the display.
         */
        addDisplay(name: string, data: Components.UiIcon.IDisplayData): Components.InputBox<string | number>;
        /**
         * Get a specific display by its name.
         * @category Public
         * @param name The name of the requested display.
         * @returns The display or null
         */
        getDisplay(name: string): Components.InputBox<string | number> | null;
        /**
         * Updates a certain display.
         * @category Public
         * @param name The name of the display to be updated.
         * @param data The data that shall be updated.
         */
        updateDisplay(name: string, data: Components.UiIcon.IDisplayData): void;
        /**
         * Removes the display with the given name.
         * @category Public
         * @param name The name of the display which should be removed.
         */
        removeDisplay(name: string): boolean;
        /**
        * Set a position for a specific display.
        * @category Public
        * @param name The name of the display.
        * @param pos The new position of the display.
        */
        setDisplayPosition(name: string, pos: Components.UiIcon.DisplayPosition): this;
        /**
         * Setter for the EventsData attribute if set from the designer.
         * @category Attribute setter and getter
         * @param p The new EventsData or null.
         * @returns The UiIcon.
         */
        private __setEventsDataDesigner;
        /**
         * Getter for the EventsData attribute if requested from the designer.
         * @category Attribute setter and getter
         * @returns The EventsData attribute.
         */
        private __getEventsDataDesigner;
        /**
         * Setter for the EventsData attribute.
         * @category Attribute setter and getter
         * @param p The new EventsData or null.
         * @returns The UiIcon.
         */
        setEventsData(p: Components.UiIcon.IEventData[] | null | undefined): this;
        /**
         * Getter for the EventsData attribute.
         * @category Attribute setter and getter
         * @returns The EventsData attribute.
         */
        getEventsData(): Components.UiIcon.IEventData[] | null | undefined;
        /**
         * Setter for the IsActive attribute.
         * @category Attribute setter and getter
         * @param p The new IsActive or null.
         * @returns The UiIcon.
         */
        setIsActive(p: boolean | null): this;
        /**
         * Processor for the IsActive attribute.
         * @category Attribute setter and getter
         */
        protected __processIsActive(): void;
        /**
         * Getter for the IsActive attribute.
         * @category Attribute setter and getter
         * @returns The IsActive attribute.
         */
        getIsActive(): boolean | null | undefined;
        /**
         * Setter for the ShowDisplays attribute.
         * @category Attribute setter and getter
         * @param p The new ShowDisplays or null.
         * @returns The UiIcon.
         */
        setShowDisplays(p: boolean | null): this;
        /**
         * Processor for the ShowDisplays attribute.
         * @category Attribute setter and getter
         */
        protected __processShowDisplays(): void;
        /**
         * Getter for the ShowDisplays attribute.
         * @category Attribute setter and getter
         * @returns The ShowDisplays attribute.
         */
        getShowDisplays(): boolean | null | undefined;
        /**
         * Setter for the Connections attribute.
         * @category Attribute setter and getter
         * @param p The new Connections or null.
         * @returns The UiIcon.
         */
        setConnections(p: Partial<FourSidedCss> | null | undefined): this;
        /**
         * Getter for the Connections attribute.
         * @category Attribute setter and getter
         * @returns The Connections attribute.
         */
        getConnections(): Partial<FourSidedCss> | null | undefined;
        /**
         * Setter for the ConnectionExtensions attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionExtensions or null.
         * @returns The UiIcon.
         */
        setConnectionExtensions(p: Partial<FourSidedCss> | null | undefined): this;
        /**
         * Getter for the ConnectionExtensions attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionExtensions attribute.
         */
        getConnectionExtensions(): Partial<FourSidedCss> | null | undefined;
        /**
         * Setter for the ConnectionsWidth attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionsWidth or null.
         * @returns The UiIcon.
         */
        setConnectionsWidth(p: number | null | undefined): this;
        /**
         * Getter for the ConnectionsWidth attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionsWidth attribute.
         */
        getConnectionsWidth(): number | null | undefined;
        /**
         * Setter for the ConnectionColors attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionColors or null.
         * @returns The UiIcon.
         */
        setConnectionColors(p: SolidColor | Color.RGBAColor | Color.IFourSidedColor | null | undefined): this;
        /**
         * Getter for the ConnectionColors attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionColors attribute.
         */
        getConnectionColors(): SolidColor | null;
        /**
         * Setter for the ConnectionColorPerSide attribute.
         * @category Attribute setter and getter
         * @param p The new ConnectionColorPerSide or null.
         * @returns The UiIcon.
         */
        setConnectionColorPerSide(p: Color.IFourSidedColor | null | undefined): this;
        /**
         * Getter for the ConnectionColorPerSide attribute.
         * @category Attribute setter and getter
         * @returns The ConnectionColorPerSide attribute.
         */
        getConnectionColorPerSide(): Color.IFourSidedColor | null;
        /**
         * Setter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @param p The new ShowTag or null.
         * @returns The UiIcon.
         */
        setShowTag(p: Components.UiIcon.DisplayPosition | null): this;
        /**
         * Getter for the ShowTag attribute.
         * @category Attribute setter and getter
         * @returns The ShowTag attribute.
         */
        getShowTag(): Components.UiIcon.DisplayPosition | null | undefined;
        get baObjectHandler(): BaObjectHandler;
        processBaObject(): void;
    }
}
//# sourceMappingURL=UiIcon.d.ts.map