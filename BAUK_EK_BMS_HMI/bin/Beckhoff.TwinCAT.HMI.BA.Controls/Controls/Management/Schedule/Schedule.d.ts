declare module TcHmi.BuildingAutomation.Controls.Management {
    /**
     * The schedule contains a tab window with tabs for the current weekly schedule, the regular weekly schedule
     * and the calendar with the exceptions.
     * @category Control
    */
    class Schedule extends System.BaseControl implements BaObjectHandler.IFCUsesBaObject, IEventHandler {
        constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
        baObjectHandler: BaObjectHandler;
        eventHandler: EventHandler<Schedule>;
        /**
         * Content window for the schedule.
         * @category Elements
         */
        private __contentWindow;
        /**
         * Tab window to select between the resulting schedule, weekly schedule and calendar.
         * @category Elements
         */
        private __tabWindow;
        /**
         * The schedule which displays the current week.
         * @category Elements
         */
        private __resultSched;
        /**
         * The schedule which displays the weekly schedule.
         * @category Elements
         */
        private __weeklySched;
        /**
         * Calendar which displays the exceptions of the schedule.
         * @category Elements
         */
        private __calendar;
        /**
         * The content menu of the schedule.
         * @category Elements
         */
        private __contextMenu;
        /**
         * Button in the context menu to save changes made to the weekly schedule or calendar.
         * @category Elements
         */
        private __saveButton;
        /**
         * Button in the context menu to save changes made to the weekly schedule or calendar.
         * @category Elements
         */
        private __resetButton;
        /**
         * Orientation of schedulr.
         * @category Attributes
         */
        private __orientation;
        /**
         * Snap periode in minutes for the weekly schedule.
         * @category Attributes
         */
        private __snapPeriode;
        /**
         * Identifier if the schedule has a header or not.
         * @category Attributes
         */
        private __showHeader;
        /**
         * Handler when the back button was pressed.
         * @category Event handler
         */
        private __saveButtonPressedHandler;
        /**
         * Handler when the reset button was pressed.
         * @category Event handler
         */
        private __resetButtonPressedHandler;
        /**
         * Handler when the weekly schedule data has changed
         * @category Event handler
         */
        private __weeklySchedChangedHandler;
        /**
         * Handler when the calendar data has changed.
         * @category Event handler
         */
        private __calendarChangedHandler;
        __previnit(): void;
        __init(): void;
        __attach(): void;
        __detach(): void;
        destroy(): void;
        /**
         * Updates the resulting schedule if calendar exceptions or the weekly schedule has changed
         * @category Internal
         */
        private __updateResultSchedule;
        /**
         * Merges weekly and exception entries.
         * @category Internal
         * @param currentWeek The current week.
         * @param weeklyEntries The weekly entries.
         * @param exceptions The exceptions.
         */
        private __mergeWeeklyAndExceptions;
        /**
         * Combines two schedule entry lists.
         * @category Internal
         * @param weekly Entries from the weekly schedule.
         * @param exception Entries from the exception schedule.
         */
        private __combineSchedEntries;
        /**
         * Updates the reset and save button if changes have been made or a reset has been done.
         * @category Internal
         */
        private __updateButtons;
        processBaObject(): void;
        /**
         * Getter for the weekly schedule entries.
         * @category Public
         * @returns The schedule entries of the weekly schedule.
         */
        getWeeklyScheudlerEntries(): BA.SchedWeek | null;
        /**
         * Writes the current schedule configuration to the plc.
         * @category Public
         */
        writeScheduleToPlc(): Promise<boolean>;
        /**
         * Identifies if the WeeklySchedule or Calendar have changes since the last reset.
         * @cateory Public
         */
        hasChanges(): boolean;
        /**
         * Reset all made changes.
         * @category Public
         */
        resetChanges(): void;
        setBaObject(p: BA.BaBasicObject | BA.BaBasicObject.IBaBasicObjectAttributes | Symbol | null | undefined): this;
        getBaObject(): BA.BaBasicObject<any> | null | undefined;
        /**
         * Setter for the Orientation attribute.
         * @category Attribute setter and getter
         * @param p The new orientation or null.
         * @returns The Schedule.
         */
        setOrientation(p: Orientation | null): this;
        /**
         * Processor for the Orientation attribute.
         * @category Attribute setter and getter
         */
        protected __processOrientation(): void;
        /**
         * Getter for the Orientation attribute.
         * @category Attribute setter and getter
         * @returns The Orientation attribute.
         */
        getOrientation(): Orientation | null;
        /**
         * Setter for ShowHeader attribute.
         * @category Attribute setter and getter
         * @param p The new ShowHeader or null.
         * @returns The Schedule.
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
         * Setter for the SnapPeriode attribute.
         * @category Attribute setter and getter
         * @param p The new SnapPeriode or null.
         * @returns The Schedule.
         */
        setSnapPeriode(p: number | null | undefined): this;
        /**
         * Processor for the SnapPeriode attribute.
         * @category Attribute setter and getter
         */
        protected __processSnapPeriode(): void;
        /**
         * Getter for SnapPeriode attribute.
         * @category Attribute setter and getter
         * @returns The SnapPeriode attribute.
         */
        getSnapPeriode(): number | null;
        /**
         * Setter for StateColors attribute.
         * @category Attribute setter and getter
         * @param p The new StateColors or null.
         * @returns The Schedule.
         */
        setStateColors(p: {
            value: number;
            color: SolidColor;
        }[] | null): this;
        /**
         * Getter for the StateColors attribute.
         * @category Attribute setter and getter
         * @returns The StateColors attribute.
         */
        getStateColors(): Map<number, Color.RGBAColor> | null | undefined;
        protected __processReadOnly(): void;
    }
    module Schedule {
        enum ScheduleEvents {
            onChanged = "onChanged",
            onSaved = "onSaved"
        }
    }
}
//# sourceMappingURL=Schedule.d.ts.map