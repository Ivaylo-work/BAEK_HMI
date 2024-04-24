declare module TcHmi {
    module BuildingAutomation {
        module Icons {
            module Controls {
                class Localization extends TcHmi.Controls.System.TcHmiControl {
                    constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                }
            }
            module Locale {
                const Localization: BuildingAutomation.Locale.GenericLocalization<string>;
            }
        }
    }
}
//# sourceMappingURL=Localization.d.ts.map
declare module TcHmi.BuildingAutomation.Functions {
    function GetBaIconPath(path: string | null | undefined): string;
}
//# sourceMappingURL=GetBaIconPath.d.ts.map
declare module TcHmi {
    module BuildingAutomation {
        module Locale {
            class GenericLocalization<T extends string> extends TcHmi.Locale.ControlLocalization {
                constructor(type: string);
                private __type;
                watchText(key: T, callback: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void): TcHmi.DestroyFunction;
                watchTextEx(key: T, options: {
                    level: TcHmi.Locale.Level;
                } | undefined, callback: (this: void, data: TcHmi.Locale.IWatchTextResultObject) => void): TcHmi.DestroyFunction;
                getText(key: T): string;
                getSymbolExpression(key: T): string;
            }
        }
    }
}
//# sourceMappingURL=GenericLocalization.d.ts.map
declare module TcHmi {
    module BuildingAutomation {
        module Icons {
            function createIconData(path: string, category: string, description?: string, color?: RGBAColor): IconData;
            interface IconData {
                readonly path: string;
                readonly category: string;
                readonly description?: string;
                readonly color?: RGBAColor;
            }
            /**
             * Validates the interface 'IconData'.
             * @param p The input that should be checked.
             * @returns True if the input is valid and false if not.
            */
            function isIconData(p: any): p is IconData;
            /**
             * Gets the base path where the TcHmiBa icons are placed.
             * @returns The base path where the TcHmiBa icons are placed.
             */
            function getBaIconsPath(): "Beckhoff.TwinCAT.HMI.BA.Icons/Icons" | "TcHmiBaIcons/Icons/raw";
            const Path: string;
            module HVAC {
                const Path: string;
                const Boiler: IconData;
                const Burner: IconData;
                const Controller: IconData;
                const Cooler: IconData;
                const Damper: IconData;
                const Damper_diagonal: IconData;
                const Damper_horizontal: IconData;
                const Damper_vertical: IconData;
                const Erc_plate: IconData;
                const Erc_rotation: IconData;
                const Fan: IconData;
                const Filter: IconData;
                const Fire_damper: IconData;
                const Fire_damper_diagonal: IconData;
                const Fire_damper_horizontal: IconData;
                const Fire_damper_vertical: IconData;
                const Freeze_c: IconData;
                const Freeze_s: IconData;
                const Fu: IconData;
                const Hc: IconData;
                const Heater: IconData;
                const Humidifier: IconData;
                const Humidity_c: IconData;
                const Humidity_s: IconData;
                const Motor: IconData;
                const Pid: IconData;
                const Pressure_c: IconData;
                const Pressure_s: IconData;
                const Pump: IconData;
                const Shut_off_valve: IconData;
                const Temperature_c: IconData;
                const Temperature_outside_c: IconData;
                const Temperature_s: IconData;
                const Valve_threedirection_0: IconData;
                const Valve_threedirection_1: IconData;
                const Valve_threedirection_2: IconData;
                const Valve_threedirection_3: IconData;
                const Valve_twodirection_0: IconData;
                const Valve_twodirection_1: IconData;
                const Valve_twodirection_2: IconData;
                const Valve_twodirection_3: IconData;
            }
            module NodeType {
                const Path: string;
                const Aggregate: IconData;
                const Building: IconData;
                const BuildingElement: IconData;
                const Component: IconData;
                const ControlCabinet: IconData;
                const Floor: IconData;
                const Function: IconData;
                const General: IconData;
                const InformationFocus: IconData;
                const Location: IconData;
                const Other: IconData;
                const Plant: IconData;
                const Room: IconData;
                const Trade: IconData;
                const Unknown: IconData;
            }
            module ObjectType {
                const Path: string;
                const Accumulator: IconData;
                const AnalogInput: IconData;
                const AnalogOutput: IconData;
                const AnalogValue: IconData;
                const Averaging: IconData;
                const BinaryInput: IconData;
                const BinaryOutput: IconData;
                const BinaryValue: IconData;
                const Calendar: IconData;
                const Command: IconData;
                const Device: IconData;
                const EventClass: IconData;
                const EventEnrollment: IconData;
                const File: IconData;
                const GlobalGroup: IconData;
                const Loop: IconData;
                const MultiStateInput: IconData;
                const MultiStateOutput: IconData;
                const MultiStateValue: IconData;
                const NotificationClass: IconData;
                const Object: IconData;
                const Prog: IconData;
                const Project: IconData;
                const PulseConverter: IconData;
                const Schedule: IconData;
                const StructuredView: IconData;
                const Trend: IconData;
            }
            module Outdoor {
                const Path: string;
                const Compass: IconData;
            }
            module Building {
                const Path: string;
                const BurglarAlarm: IconData;
                const FacadeMaintenance: IconData;
                const FireAlarm: IconData;
                const IceAlarm: IconData;
                const StormAlarm: IconData;
                const SunProtection: IconData;
                const ThermalAutomation: IconData;
            }
            module RoomAutomation {
                const Path: string;
                const Automatic: IconData;
                const Cooling: IconData;
                const Heating: IconData;
                /** The lamp icon is filled and the fill color can be animated. */
                const Lamp: IconData;
                /** The lamp icon is not filled and only the stroke color can be animated. */
                const Lamp2: IconData;
                const MaintenancePosition: IconData;
                const Manual: IconData;
                const Presence: IconData;
                const ResetManual: IconData;
                const RoofDome: IconData;
                const SafetyPosition: IconData;
                const Socket: IconData;
                const Sun: IconData;
                const Sunblind: IconData;
                const SunblindAngleAdjustmentDown: IconData;
                const SunblindAngleAdjustmentUp: IconData;
                const SwitchOffDelay: IconData;
                const Temperature: IconData;
                const Ventilation: IconData;
                const Window: IconData;
            }
            module Standard {
                const Path: string;
                const Avatar: IconData;
                const CalendarMonth: IconData;
                const CalendarToday: IconData;
                const CalendarYear: IconData;
                const Close: IconData;
                const Cancel: IconData;
                const Confirm: IconData;
                const ConfirmAll: IconData;
                const DateTime: IconData;
                const Delete: IconData;
                const Down: IconData;
                const Down_Arrow: IconData;
                const Down_double: IconData;
                const Graph: IconData;
                const Hand: IconData;
                const Home: IconData;
                const Left: IconData;
                const Left_Arrow: IconData;
                const Left_double: IconData;
                const Lens: IconData;
                const List: IconData;
                const Lock: IconData;
                const Login: IconData;
                const Logout: IconData;
                const Maximize: IconData;
                const MenuBurger: IconData;
                const MenuDots: IconData;
                const Minus: IconData;
                const Pause: IconData;
                const Play: IconData;
                const Plus: IconData;
                const Reset: IconData;
                const Right: IconData;
                const Right_Arrow: IconData;
                const Right_double: IconData;
                const Stop: IconData;
                const Time: IconData;
                const Tools: IconData;
                const Up: IconData;
                const Up_Arrow: IconData;
                const Up_double: IconData;
            }
            module Events {
                const Path: string;
                module Event {
                    const Path: string;
                    const Alarm: IconData;
                    const Disturbance: IconData;
                    const Maintenance: IconData;
                    const Notification: IconData;
                    const Other: IconData;
                }
                module Flag {
                    const Path: string;
                    const Fault: IconData;
                    const InAlarm: IconData;
                    const OutOfService: IconData;
                    const Overridden: IconData;
                }
                module Lock {
                    const Path: string;
                    const LockHigh: IconData;
                    const LockMedium: IconData;
                }
                module Priority {
                    const Path: string;
                    const Critical: IconData;
                    const ManualLocal: IconData;
                    const ManualRemote: IconData;
                    const Safety: IconData;
                }
            }
        }
    }
}
//# sourceMappingURL=TcHmiBaIcons.d.ts.map