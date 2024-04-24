declare module TcHmi {
    module BuildingAutomation {
        module Helper {
            /** Helper methods for the keyboard an numpad. */
            module Keyboard {
                /** If true, a keyboard will pop up everytime an input is selected. Default is true. */
                let EnablePopUp: boolean;
                let LangKey: string;
                let InputType: BuildingAutomation.DataType;
                /**
                 * Creates the keyboard when a input with string input was selected on a touch screen.
                 */
                function createGlobalKeyboard(): void;
                /**
                 * Sets visibility of the keyboard.
                 */
                function setVisibilityKeyboard(visibility: boolean): void;
                /**
                 * Gets the layout file for the keyboard.
                 */
                function getLayoutPath(): string;
                /**
                 * Checks if the client is a mobile device.
                 */
                function isMobile(): boolean;
            }
            /**
             * Converts cardesian coordinates to polar.
             * @category Converter
             * @param x The x coordinate.
             * @param y The y coordinate.
             * @returns The polar coordinate [radius, phi].
             */
            function convertXYToPolar(x: number, y: number): number[];
            /**
             * Converts polar coordinates to cardesian.
             * @category Converter
             * @param r
             * @param phi
             * @returns The xy coordinates [x, y].
             */
            function convertPolarToXY(r: number, phi: number): number[];
            /**
             * Converts rad into deg.
             * @category Converter
             * @param rad Range from -π, π
             * @returns The deg value.
             */
            function convertRadToDeg(rad: number): number;
        }
    }
}
//# sourceMappingURL=Helper.d.ts.map