declare module TcHmi.BuildingAutomation.Controls.Management {
    /**
     * The ProjectNavigationTextual can be used to navigate through a project structure of a device or a BaObject / BA.BaView.
     * It displays the descriptions, object type, value and events of BaObjects.
     * @category Control
     */
    class ProjectNavigationTextual extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        protected __loadBaChildren: boolean;
        protected __loadTexts: boolean;
        /**
         * Defines which text attribute of a BaObject is set as the title.
         * @category Attribute
         */
        private __baUsedTitle;
        /**
         * If true the header is shown.
         * @category Attribute
         */
        private __showHeader;
        /**
         * If true the values of the entries are shown.
         * @category Attribute
         */
        private __showValue;
        /**
         * If true the events of the entries are shown.
         * @category Attribute
         */
        private __showEvents;
        /**
         * If true the object type buttons of the entries are shown.
         * @category Attribute
         */
        private __showObjectType;
        /**
         * If true the children of a view will be displayed in the same view as a sublist. If false the children will be displayed in a new list.
         * @category Attribute
         */
        private __useNestedList;
        /**
         * Content window.
         * @category Elements
         */
        private __contentWindow;
        /**
         * Back button to navigate backward if useNestedList is false.
         * @category Elements
         */
        private __backButton;
        /**
         * Search through the project structure descriptions and only show the entries that match.
         * @category Elements
         */
        private __searchField;
        /**
         * Context menu to display options.
         * @category Elements
         */
        private __contextMenu;
        /**
         * FirSecondst row of the context menu which contains all toggle buttons.
         * @category Elements
         */
        private __contextMenuSecondRow;
        /**
         * Combobox for the BaUsedTitle attribute.
         * @category Elements
         */
        private __comboboxUsedTitle;
        /**
         * Toggle button for the UseNestedList attribute.
         * @category Elements
         */
        private __toggleButtonNestedList;
        /**
         * Toggle button for the ShowObjectType attribute.
         * @category Elements
         */
        private __toggleButtonShowObjectTypeButton;
        /**
         * Toggle button for the ShowValue attribute.
         * @category Elements
         */
        private __toggleButtonShowValue;
        /**
         * Toggle button for the ShowEvents attribute.
         * @category Elements
         */
        private __toggleButtonShowEvents;
        /**
         * Container for the project navigation list of the current view.
         * @category Elements
         */
        private __listContainer;
        /**
         * Dialog for schedule or trend
         * @category Elements
         */
        private __dialog;
        /**
         * The current view.
         * @category Internal
         */
        private __currentView;
        /**
         * The navigation provider for the data of the navigation.
         * @category Internal
         */
        private __navigationProvider;
        /**
         * The root view. Important if the list is not displayed as a nested list.
         * @category Internal
         */
        private __rootView;
        /**
         * The navigation history. Important if the list is not displayed as a nested list.
         * @category Internal
         */
        private __navHistory;
        /**
         * The amount of the events of the entry with the most events.
         * @category Internal
         */
        private __mostDisplayedEvents;
        /**
         * Stores the number of BaObject that load there attributes.
         * @category Internal
         */
        private __loadingCnt;
        private __destroyOnEntryOpened;
        private __destroyOnEntryClosed;
        private __destroyOnEntryContentViewButtonPressed;
        /**
         * Handler when an entry was selected.
         * @category Event handler
         */
        private __entrySelectedHandler;
        /**
         * Handler when the toggle button for the event list was toggled.
         * @category Event handler
         */
        private __cbUsedTitleChangedHandler;
        /**
         * Handler when a toggle button has changed its state.
         * @category Event handler
         */
        private __toggleButtonPressedHandler;
        /**
         * Handler when the search field looses the focus.
         * @category Event handler
         */
        private __searchFieldFocusOutHandler;
        /**
         * Handler when a content view button of an entry was pressed.
         * @category Event handler
         */
        private __contentViewButtonPressedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Callback function for the onObjectSelected event. Fired when an entry with child elements was selected in the list.
         * @category Event callbacks
         * @param entry The selected project navigation list entry.
         */
        private __onObjectSelected;
        /**
         * Callback function for the onNavigateBackward event. Fired when a navigate backward command was set.
         * @category Event callbacks
         */
        private __onNavigateBackward;
        /**
         * Callback function if a character was entered in the search field.
         * @category Event callbacks
         */
        private __onFilterList;
        /**
         * Updates the current displayed view. Appends the child html list of the new view.
         * @category Internal
         * @param view The new view object.
         */
        private __updateCurrentView;
        /**
         * Makes an entry of a ProjetNavigationList selectable if there is a special dialog for it (e.g. Schedule, Heating_Curve)
         * @param obj The ProjectNavigationList which shall be modified.
         */
        private __editEntries;
        processBaObject(): void;
        /**
         * Get the back button.
         * @category Public
         * @returns The backbutton to hide, show or append it on another position outside of the control.
         */
        getBackButton(): Components.Button | undefined;
        /**
         * Close all entries of the project navigation list
         * @category Public
         */
        closeAllEntries(): void;
        getCurrentView(): Navigation.ProjectNavigationList | undefined;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the BaUsedTitle attribute. Define which BA text attribute is displayed as the title.
         * @category Attribute setter and getter
         * @param p The new BaUsedTitle or null.
         * @returns The ProjectNavigationTextual.
         */
        setBaUsedTitle(p: string | BA.BaVariable.DescriptionVariables | null | undefined): this;
        /**
         * Processor for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         */
        protected __processBaUsedTitle(): void;
        /**
         * Getter for the BaUsedTitle attribute.
         * @category Attribute setter and getter
         * @returns The BaUsedTitle attribute.
         */
        getBaUsedTitle(): BA.BaVariable.DescriptionVariables | null;
        /**
         * Setter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The ProjectNavigationTextual.
         */
        setShowHeader(p: boolean | null): this;
        /**
         * Processor for the ShowHeader attribute.
         * @category Attribute setter and getter
         */
        protected __processShowHeader(): void;
        /**
         * Getter for the ShowHeader attribute.
         * @category Attribute setter and getter
         * @returns The ShowHeader attribute.
         */
        getShowHeader(): boolean | null;
        /**
         * Setter for the ShowValue attribute.
         * @category Attribute setter and getter
         * @param p The new ShowValue or null.
         * @returns The ProjectNavigationTextual.
         */
        setShowValue(p: boolean | null): this;
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
        getShowValue(): boolean | null;
        /**
         * Setter for the ShowEvents attribute.
         * @category Attribute setter and getter
         * @param p The new ShowEvents or null.
         * @returns The ProjectNavigationTextual.
         */
        setShowEvents(p: boolean | null): this;
        /**
         * Processor for the ShowEvents attribute.
         * @category Attribute setter and getter
         */
        protected __processShowEvents(): void;
        /**
         * Getter for the ShowEvents attribute.
         * @category Attribute setter and getter
         * @returns The ShowEvents attribute.
         */
        getShowEvents(): boolean | null;
        /**
         * Setter for the ShowObjectType attribute.
         * @category Attribute setter and getter
         * @param p The new ShowObjectType or null.
         * @returns The ProjectNavigationTextual.
         */
        setShowObjectType(p: boolean | null): this;
        /**
         * Processor for the ShowObjectType attribute.
         * @category Attribute setter and getter
         */
        protected __processShowObjectType(): void;
        /**
         * Getter for the ShowObjectType attribute.
         * @category Attribute setter and getter
         * @returns The ShowObjectType attribute.
         */
        getShowObjectType(): boolean | null;
        /**
         * Setter for the UseNestedList attribute.
         * @category Attribute setter and getter
         * @param p The new UseNestedList or null.
         * @returns The ProjectNavigationTextual.
         */
        setUseNestedList(p: boolean | null): this;
        /**
         * Processor for UseNestedList attribute.
         * @category Attribute setter and getter
         */
        protected __processUseNestedList(): void;
        /**
         * Getter for the UseNestedList attribute.
         * @category Attribute setter and getter
         * @returns The UseNestedList attribute.
         */
        getUseNestedList(): boolean | null;
        /**
         * Getter for the HeadlineText attribute.
         * @category Attribute setter and getter
         * @returns The HeadlineText attribute.
         */
        getHeadlineText(): string | null | undefined;
    }
}
//# sourceMappingURL=ProjectNavigationTextual.d.ts.map