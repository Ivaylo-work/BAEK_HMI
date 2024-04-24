declare module TcHmi {
    module BuildingAutomation {
        module Globals {
            /** The numpad that will be displayed when a numeric input was selected on a touch screen. */
            let Numpad: TcHmi.Controls.Beckhoff.TcHmiKeyboard | undefined;
            /** The keyboard that will be displayed when a string input was selected on a touch screen. */
            let Keyboard: TcHmi.Controls.Beckhoff.TcHmiKeyboard | undefined;
            /** Defines the BA template profiles which will be displayed with a special control (e.g. schedule, trend, scale, etc.). */
            const SubjectInfosWithDialogs: string[];
        }
    }
}
//# sourceMappingURL=Globals.d.ts.map