declare module TcHmi.BuildingAutomation.Controls.Management {
    /**
     * A control to display and acknowledge events.
     * @category Control
     */
    class EventList extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject, IEventHandler {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        eventHandler: EventHandler<EventList>;
        protected __loadBaChildren: boolean;
        protected __loadTexts: boolean;
        /**
         * Defines if the global events from the SiteApi will be used.
         * @category Attributes
         */
        private __isGlobalEventList;
        /**
         * Defines the column sorting of the EventList.
         * @category Attributes
         */
        private __columnSorting;
        private __dataGrid;
        /**
         * Header of the event list that holds interaction buttons.
         * @category Elements
         */
        private __header;
        /**
         * Toggle buttons to hide and show events of different types.
         * @category Elements
         */
        private __eventToggles;
        /**
         * Toggle button to switch between history and not history.
         * @category Elements
         */
        private __historyToggle;
        /**
         * Button to confirm a single event.
         * @category Elements
         */
        private __confirmButton;
        /**
         * Button to confirm all events.
         * @category Elements
         */
        private __confirmAllButton;
        /**
         * The symbol for the extension events.
         * @category Internal
         */
        private __siteEventsSymbol;
        /**
         * The symbol for the extension event history.
         * @category Internal
         */
        private __siteEventHistorySymbol;
        /**
         * Filter for all currently displayed acknowledgeable events.
         * @category Internal
         */
        private __currentConfirmAllFilter;
        /**
         * Stores the acknowledgeable event count per event type which is read from the server. Needs to be stored to update the confirm all button when a event toggle changed.
         * @category Internal
         */
        private __acknowledgeableEventCountPerType;
        private __legendIconHandler;
        /**
         * Stores the subscription ids for different subscriptions.
         * @category Internal
         */
        private __subscriptionIds;
        /**
         * Handler when the selected item has changed.
         * @category Event handler
         */
        private __selectedItemChangedHandler;
        /**
         * The row classes provider function to manipulate rows of the data grid.
         * @param row The row to be manipulated.
         * @param rowData The data for this row.
         */
        private __rowClassesProviderFunc;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        private __watchEvents;
        private __stopSubscriptions;
        private __getColumnDefinition;
        private __updateColumns;
        private __processEventToggles;
        private __updateConfirmButton;
        /**
         * Detects if an event can be acknowledged or not.
         * @category Internal
         * @param data The data to be checked.
         * @returns True if the data can be acknowledged and false if not.
         */
        private static __detectCanAcknowledge;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the IsGlobalEventList attribute.
         * @category Attribute setter and getter
         * @param p The new IsGlobalEventList or null.
         * @returns The EventList.
         */
        setIsGlobalEventList(p: boolean | null | undefined): this;
        /**
         * Processor for the IsGlobalEventList attribute.
         * @category Attribute setter and getter
         */
        private __processIsGlobalEventList;
        /**
         * Getter for the IsGlobalEventList attribute.
         * @category Attribute setter and getter
         * @returns The IsGlobalEventList attribute.
         */
        getIsGlobalEventList(): boolean;
        /**
         * Setter for the ColumnSorting attribute.
         * @category Attribute setter and getter
         * @param p The new ColumnSorting or null.
         * @returns The EventList.
         */
        setColumnSorting(p: EventList.Columns | null | undefined): this;
        /**
         * Processor for the ColumnSorting attribute.
         * @category Attribute setter and getter
         */
        private __processColumnSorting;
        /**
         * Getter for the ColumnSorting attribute.
         * @category Attribute setter and getter
         * @returns The ColumnSorting attribute.
         */
        getColumnSorting(): EventList.Columns[];
        processBaObject(): void;
    }
    module EventList {
        enum EventListEvents {
            /** Is fired when the events of the event list have changed. */
            onEventsChanged = "onEventsChanged",
            /** Is fired when a single event was acknowledged. */
            onEventAcknowledged = "onEventAcknowledged",
            /** Is fired when all events where acknowledged. */
            onAllEventsAcknowledged = "onAllEventsAcknowledged"
        }
        const acknowledgeableEventsFilter: Filter;
        /** Enumeration of all available columns of the EventList. */
        enum Columns {
            baIdentifier = 0,
            event = 1,
            timestamp = 2,
            device = 3,
            objectName = 4,
            instancePath = 5,
            description = 6,
            eventClass = 7,
            eventClassInstanceDescription = 8,
            eventClassDescription = 9
        }
        /** The default column sorting of the EventList. */
        let DefaultColumnSorting: Columns[];
    }
}
//# sourceMappingURL=EventList.d.ts.map