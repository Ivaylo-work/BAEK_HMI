// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var BAUK_EK_BMS_HMI;
        (function (BAUK_EK_BMS_HMI) {
            function BlindStretchHandler(ControlName) {
                //console.log(`ControlName = ${ControlName}`);

                var myControl = TcHmi.Controls.get(ControlName);
                if (myControl) {
                    
                    //var controlPopUp = TcHmi.Controls.get('BlindsControlPopUp');
                    var textUpper = TcHmi.Controls.get(ControlName.concat('.UpperText'));
                    var textMiddle = TcHmi.Controls.get(ControlName.concat('.LowerText'));
                    var stretchButton = TcHmi.Controls.get(ControlName.concat('.StretchButton'));
                    var loadingImage = TcHmi.Controls.get(ControlName.concat('.LoadingImage'));
                    var loadingText = TcHmi.Controls.get(ControlName.concat('.LoadingText'));
                    var stretchFinishedText = TcHmi.Controls.get(ControlName.concat('.StretchFinishedText'));

                    var TextColorRed = {

                        "color": "rgba(255, 0, 0, 1)",
                    };

                    var TextColorDark = {

                        "color": "rgba(27, 27, 31, 1)",
                    };

                    var commands = [
                        {
                            'symbol': 'PLC1.MAIN.HowOftenTimer.Q'
                        },
                        {
                            'symbol': 'PLC1.MAIN.hmiStrech'
                        },
                        {
                            'symbol': 'PLC1.MAIN.hmiFinished'
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

                            if (commands[i].symbol.localeCompare('PLC1.MAIN.HowOftenTimer.Q') == 0) {
                                if (command.readValue == true && ControlName == 'BlindsControlPopUp') {
                                    myControl.open();
                                }
                                
                            }

                            if (commands[i].symbol.localeCompare('PLC1.MAIN.hmiStrech') == 0) {
                                if (command.readValue == true && ControlName == 'BlindsControlPopUp.UserControlHost') {
                                    textUpper.setVisibility('Collapsed');
                                    textMiddle.setVisibility('Collapsed');
                                    stretchButton.setVisibility('Collapsed');
                                    loadingImage.setVisibility('Visible');
                                    loadingText.setVisibility('Visible');
                                }
                            }

                            if (commands[i].symbol.localeCompare('PLC1.MAIN.hmiFinished') == 0) {
                                if (command.readValue == true && ControlName == 'BlindsControlPopUp.UserControlHost') {
                                    console.log("test here");
                                    textUpper.setVisibility('Collapsed');
                                    textMiddle.setVisibility('Collapsed');
                                    stretchButton.setVisibility('Collapsed');
                                    loadingImage.setVisibility('Collapsed');
                                    loadingText.setVisibility('Collapsed');
                                    stretchFinishedText.setVisibility('Visible');
                                   
                                }
                            }
                        }
                    });
                }
            }
            BAUK_EK_BMS_HMI.BlindStretchHandler = BlindStretchHandler;
        })(BAUK_EK_BMS_HMI = Functions.BAUK_EK_BMS_HMI || (Functions.BAUK_EK_BMS_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('BlindStretchHandler', 'TcHmi.Functions.BAUK_EK_BMS_HMI', TcHmi.Functions.BAUK_EK_BMS_HMI.BlindStretchHandler);
