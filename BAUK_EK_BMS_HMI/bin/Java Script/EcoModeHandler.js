// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.760.54/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var BAUK_EK_BMS_HMI;
        (function (BAUK_EK_BMS_HMI) {
            function EcoModeHandler(ControlName) {
                console.log(`ControlName = ${ControlName}`);

                var myControl = TcHmi.Controls.get(ControlName);
                if (myControl) {

                    //var for text
                    var EcoModeTextState = TcHmi.Controls.get(ControlName.concat('.EcoMode_TextState'));
                    //var for image change 
                    var EcoModeImage = TcHmi.Controls.get(ControlName.concat('.EcoMode_Image'));


                    //vars for image src
                    var ImageSrcNormalLeaf = 'Images/EcoMode/leaf.svg';

                    var ImageSrcGreenLeaf = 'Images/EcoMode/leaf_green.svg';

                    var TextColorRed = {

                        "color": "rgba(255, 0, 0, 1)",
                    };

                    var TextColorDark = {

                        "color": "rgba(27, 27, 31, 1)",
                    };

                    
                    //monitor the boardroom timer
                    var commands = [
                        {
                            'symbol': 'PLC1.LightControl.BoardRoomTime.Q'
                        },
                        {
                            'symbol': 'PLC1.LightControl.DeskAreaTime.Q'        
                        },
                        {
                            'symbol': 'PLC1.LightControl.AllLightsOff'
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

                            if ((commands[i].symbol.localeCompare('PLC1.LightControl.BoardRoomTime.Q') == 0) && ControlName == 'EcoMode_Boardroom') {
                                //Product stucked between conveupr sensors
                                if (command.readValue == true) {
                                    EcoModeTextState.setText('Active');
                                    EcoModeImage.setSrc(ImageSrcGreenLeaf);
                                }
                                else {
                                    EcoModeTextState.setText('Inactive');
                                    EcoModeImage.setSrc(ImageSrcNormalLeaf);
                                }
                            }
                            if ((commands[i].symbol.localeCompare('PLC1.LightControl.DeskAreaTime.Q') == 0) && ControlName == 'EcoMode_StaffRoom') {
                                //Product stucked between conveupr sensors
                                if (command.readValue == true) {
                                    EcoModeTextState.setText('Active');
                                    EcoModeImage.setSrc(ImageSrcGreenLeaf);
                                }
                                else {
                                    EcoModeTextState.setText('Inactive');
                                    EcoModeImage.setSrc(ImageSrcNormalLeaf);
                                }
                            }
                            if ((commands[i].symbol.localeCompare('PLC1.LightControl.AllLightsOff') == 0) && ControlName == 'EcoMode_CommunalArea') {
                                //Product stucked between conveupr sensors
                                if (command.readValue == true) {
                                    EcoModeTextState.setText('Active');
                                    EcoModeImage.setSrc(ImageSrcGreenLeaf);
                                }
                                else {
                                    EcoModeTextState.setText('Inactive');
                                    EcoModeImage.setSrc(ImageSrcNormalLeaf);
                                }
                            }
                        }
                    });
                }
            }
            BAUK_EK_BMS_HMI.EcoModeHandler = EcoModeHandler;
        })(BAUK_EK_BMS_HMI = Functions.BAUK_EK_BMS_HMI || (Functions.BAUK_EK_BMS_HMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('EcoModeHandler', 'TcHmi.Functions.BAUK_EK_BMS_HMI', TcHmi.Functions.BAUK_EK_BMS_HMI.EcoModeHandler);
