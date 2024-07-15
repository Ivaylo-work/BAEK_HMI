// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var BAUK_EK_BMS_HMI;
        (function (BAUK_EK_BMS_HMI) {
            function WindTurbineSubscriber(ControlName) {
                //console.log(`ControlName = ${ControlName}`);
                var myControl = TcHmi.Controls.get('WindTurbine_LinearGauge');
                if (myControl) {

                    //var linearGauge = TcHmi.Controls.get('WindTurbine_LinearGauge');//ControlName.concat('WindTurbine.LinearGauge'));

                    var commands = [
                        {
                            'symbol': 'PLC1.MAIN.fbWindSimulator.windSpeed'
                        }
                    ];

                    TcHmi.Server.subscribe(commands, 500, function (data) {
                        if (data.error !== TcHmi.Errors.NONE) {
                            // Handle TcHmi.Server class level error here.
                            return;
                        }

                        var response = data.response;
                        if (!response || response.error !== undefined) {
                            // Handle TwinCAT HMI Server response level error here.
                            return;
                        }

                        var commands = response.commands;
                        if (commands === undefined) {
                            return;
                        }

                        for (var i = 0, ii = commands.length; i < ii; i++) {
                            var command = commands[i];
                            if (command === undefined) {
                                return;
                            }
                            if (command.error !== undefined) {
                                // Handle TwinCAT HMI Server command level error here.
                                return;
                            }

                            if (commands[i].symbol.localeCompare('PLC1.MAIN.fbWindSimulator.windSpeed') == 0) {
                                
                                myControl.setValue(command.readValue);
                            }
                        }
                    });
                }
            }
            BAUK_EK_BMS_HMI.WindTurbineSubscriber = WindTurbineSubscriber;
        })(BAUK_EK_BMS_HMI = Functions.BAUK_EK_BMS_HMI || (Functions.BAUK_EK_BMS_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('WindTurbineSubscriber', 'TcHmi.Functions.BAUK_EK_BMS_HMI', TcHmi.Functions.BAUK_EK_BMS_HMI.WindTurbineSubscriber);
