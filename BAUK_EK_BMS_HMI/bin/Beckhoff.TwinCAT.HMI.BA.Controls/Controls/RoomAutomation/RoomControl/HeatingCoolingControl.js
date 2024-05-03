var TcHmi,__awaiter=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(s,a){function r(t){try{d(n.next(t))}catch(t){a(t)}}function o(t){try{d(n.throw(t))}catch(t){a(t)}}function d(t){var e;t.done?s(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,o)}d((n=n.apply(t,e||[])).next())}))};!function(t){!function(e){!function(i){!function(i){!function(n){class s extends n.ControlUnit{constructor(t,e,i){super(t,e,i)}__init(t){super.__init(t),this.baTemplateHandler.defaultBaTemplateDescription=i.HeatingCooling.BaTemplateDescription,this.baInterfaceHandler.baInterfaceDefinition=i.HeatingCooling.BaInterfaceDef,this.setBaInterfaceSymbolNames(i.HeatingCooling.BaInterfaceSymbolNames),this.__tempAdjustStep=.5,this.__tempAdjustFeedbackReady=[],this.__element.addClass("hc-control"),void 0===(null==t?void 0:t.tempAdjustRange)&&this.setTempAdjustRange(3),void 0===(null==t?void 0:t.unit)&&this.setUnit("°C")}__attach(){this.__isAttached||super.__attach()}__detach(){this.__isAttached&&super.__detach()}destroy(){var t;null===(t=this.__acIcon)||void 0===t||t.destroy(),super.destroy()}createElement(){var t,n,a;super.createElement(),this.__acIcon||(this.__acIcon=new i.HeatingCooling.Icon(this.__id+"-hc",this,this.__attrHandler),this.__acIcon.setReadOnly(!0).getElement().addClass("icon"),null===(t=this.__iconContainer)||void 0===t||t.append(this.__acIcon.getElement())),(null===(n=this.__controlContainer)||void 0===n?void 0:n.getControl(s.__temperatureDisplayName))||null===(a=this.__controlContainer)||void 0===a||a.addControl({type:e.Components.ComponentType.Textblock,name:s.__temperatureDisplayName})}getSideControl(){return this.__sideControlContainer=super.getSideControl(),this.__sideControlContainer.addClass("hc"),this.__sideControl&&(this.__sideControl.getElement(),this.__updateSideControl()),this.__sideControlContainer}__processChangedTempAdjust(n){if(1!=this.busyHandler.getIsBusy()&&void 0!==n&&(this.setTempAdjust(n),this.baObjectHandler.baObject&&this.baObjectHandler.baObject.checkTemplate(i.HeatingCooling.BaTemplateDefinition,this.baTemplateHandler.baBaTemplateDescription)&&i.HeatingCooling.writeTempAdjustToPlc(n,this.baObjectHandler.baObject),null!=this.baInterfaceHandler.getBaInterfaceSym()&&i.HeatingCooling.writeTempAdjustToPlc(n,this.baInterfaceHandler),this.__attrHandler.tempAdjustMapping&&t.Server.writeSymbol(this.__attrHandler.tempAdjustMapping,n,t=>{this.logger.checkServerResult(e.Logger.Severity.warn,t)}),null!=this.__attrHandler.tempAdjustFeedback&&n!=this.__attrHandler.tempAdjustFeedback)){let t=()=>{this.__tempAdjustFeedbackReady.forEach(t=>t()),this.__tempAdjustFeedbackReady=[],this.setTempAdjust(this.__attrHandler.tempAdjustFeedback)};this.__sideControlContainer&&0==this.busyHandler.getIsBusy()&&i.showBusyIndicator&&e.BusyHandler.appendBusyIndicator(this.__sideControlContainer);let n=this.logger.logPerformance(e.Logger.Severity.debug,"TempAdjust feedback response."),s=()=>{n(),this.__sideControlContainer&&e.BusyHandler.detachBusyIndicator(this.__sideControlContainer)};this.__tempAdjustFeedbackReady.push(this.busyHandler.setBusy("Waiting for TempAdjustFeedback",{cbOnTimeout:t,cbOnReady:s,showIndicator:i.showBusyIndicator}))}}__processStatus(){var t,e;this.__acIcon&&this.__attrHandler&&(null===(e=null===(t=this.__sideControl)||void 0===t?void 0:t.getControl(s.__statusIconSideMenuName))||void 0===e||e.backgroundStyler.setAttributes(this.__acIcon.backgroundStyler.getAttributes()),this.__updateTempElements())}__updateTempElements(){var t,e,n,a,r;if(!this.__acIcon||!this.__attrHandler)return;let o=i.HeatingCooling.getTemperatureText(this.__attrHandler,this.__acIcon.currentSetpoint);this.__elementCreated&&(null===(t=this.__controlContainer)||void 0===t?void 0:t.getControl(s.__temperatureDisplayName))&&(null===(n=null===(e=this.__controlContainer)||void 0===e?void 0:e.getControl(s.__temperatureDisplayName))||void 0===n||n.textHandler.setText(o)),this.__sideControl&&(null===(r=null===(a=this.__sideControl)||void 0===a?void 0:a.getControl(s.__temperatureDisplayName))||void 0===r||r.textHandler.setText(o))}__updateSideControl(){if(!this.__sideControl)return;if(!this.__acIcon||!this.__attrHandler)return;if(null==this.__attrHandler.tempAdjustRange)return;if(this.__sideControl.getControl(s.__statusIconSideMenuName)||this.__sideControl.addControl({type:e.Components.ComponentType.Image,name:s.__statusIconSideMenuName,settings:{background:{imageHeight:100,imageHeightUnit:"%",imageWidth:100,imageWidthUnit:"%"},cssClass:"fixed-size"}}),!this.__sideControl.getControl(s.__temperatureDisplayName)){let t={type:e.Components.ComponentType.Textblock,name:s.__temperatureDisplayName,settings:{textAttributes:{text:i.HeatingCooling.getTemperatureText(this.__attrHandler,this.__acIcon.currentSetpoint)},layout:{maxWidth:e.Server.UserManagement.checkAccess(e.BA.Role.eAdvanced)?100:50}},cbOnCreated:t=>{0==this.__attrHandler.tempAdjustReadOnly&&(t.getElement().css("cursor","pointer"),t.getElement().on("pointerdown",t=>__awaiter(this,void 0,void 0,(function*(){if(null!=t.button&&0!=t.button)return;let i,n=e.Locale.Localization.getText(e.Locale.LangKey.EnterNewTempAdjust);null!=this.__attrHandler.tempAdjust&&(i=null!=this.__attrHandler.tempAdjustRange?yield e.Components.DialogWindow.promptNumericWithLimits(n,this.__attrHandler.tempAdjust,-this.__attrHandler.tempAdjustRange,this.__attrHandler.tempAdjustRange):yield e.Components.DialogWindow.promptNumericWithLimits(n,this.__attrHandler.tempAdjust),null!=i&&this.__processChangedTempAdjust(i))}))))}};this.__sideControl.addControl(t)}if(!this.__sideControl.getControl(s.__tempAdjustMinusButtonName)){let t={type:e.Components.ComponentType.Button,name:s.__tempAdjustMinusButtonName,callback:()=>{if(null==this.__attrHandler.tempAdjust||null==this.__attrHandler.tempAdjustRange)return;let t;this.__attrHandler.tempAdjust>-this.__attrHandler.tempAdjustRange&&(t=this.__attrHandler.tempAdjust-this.__tempAdjustStep,t<-this.__attrHandler.tempAdjustRange&&(t=-this.__attrHandler.tempAdjustRange),this.__processChangedTempAdjust(t))},settings:{background:{image:e.Icons.Standard.Minus.path,imageHeight:80,imageHeightUnit:"%",imageWidth:80,imageWidthUnit:"%"},layout:{maxWidth:20,maxHeight:20},readOnly:this.__attrHandler.tempAdjustReadOnly}};this.__sideControl.addControl(t)}if(!this.__sideControl.getControl(s.__tempAdjustSliderName)){let t={type:e.Components.ComponentType.Slider,name:s.__tempAdjustSliderName,callback:t=>{this.__processChangedTempAdjust(t)},settings:{step:.1,layout:{maxHeight:10,minHeight:10},showBusyIndicator:i.showBusyIndicator,knobAppearance:e.Components.Slider.KnobAppearance.round,readOnly:this.__attrHandler.tempAdjustReadOnly}};this.__sideControl.addControl(t),this.__processStatus(),this.__processTempAdjust(),this.__processTempAdjustFeedback()}if(this.__sideControl.getControl(s.__tempAdjustSliderName).setRanges(null).setMinValue(-this.__attrHandler.tempAdjustRange).setMaxValue(this.__attrHandler.tempAdjustRange).setRanges([{start:-this.__attrHandler.tempAdjustRange,color:e.Color.RGBAColor.Blue},{start:this.__attrHandler.tempAdjustRange,color:e.Color.RGBAColor.Red}]),!this.__sideControl.getControl(s.__tempAdjustPlusButtonName)){let t={type:e.Components.ComponentType.Button,name:s.__tempAdjustPlusButtonName,callback:()=>{if(null==this.__attrHandler.tempAdjust||null==this.__attrHandler.tempAdjustRange)return;let t;this.__attrHandler.tempAdjust<this.__attrHandler.tempAdjustRange&&(t=this.__attrHandler.tempAdjust+this.__tempAdjustStep,t>this.__attrHandler.tempAdjustRange&&(t=this.__attrHandler.tempAdjustRange),this.__processChangedTempAdjust(t))},settings:{background:{image:e.Icons.Standard.Plus.path,imageHeight:80,imageHeightUnit:"%",imageWidth:80,imageWidthUnit:"%"},layout:{maxWidth:20,maxHeight:20},readOnly:this.__attrHandler.tempAdjustReadOnly}};this.__sideControl.addControl(t)}}setAttributes(t){return super.setAttributes(t),this.baObjectHandler.baObject||(void 0!==t.tempAdjustRange&&this.setTempAdjustRange(t.tempAdjustRange),this.__handleProperty(t,"currentTemp",this.setCurrentTemp,"number"),this.__handleProperty(t,"tempAdjust",this.setTempAdjust,"number"),this.__handleProperty(t,"tempAdjustFeedback",this.setTempAdjustFeedback,"number"),this.__handleProperty(t,"heatingSetpoint",this.setHeatingSetpoint,"number"),this.__handleProperty(t,"heatingActive",this.setHeatingActive,"boolean"),this.__handleProperty(t,"coolingSetpoint",this.setCoolingSetpoint,"number"),this.__handleProperty(t,"coolingActive",this.setCoolingActive,"boolean"),void 0!==t.unit&&this.setUnit(t.unit)),this}getAttributes(){return this.__attrHandler.getRef()}__processBaInterface(){super.__processBaInterface(),i.HeatingCooling.processBaInterface(this,{processCurrentTemperature:t=>this.setCurrentTemp(t),processTempAdjust:t=>this.setTempAdjust(t),processTempAdjustFeedback:t=>this.setTempAdjustFeedback(t),processTempAdjustReadOnly:t=>{var e,i,n,a,r,o;this.__attrHandler.tempAdjustReadOnly=t,null===(i=null===(e=this.__sideControl)||void 0===e?void 0:e.getControl(s.__tempAdjustSliderName))||void 0===i||i.setReadOnly(t),null===(a=null===(n=this.__sideControl)||void 0===n?void 0:n.getControl(s.__tempAdjustMinusButtonName))||void 0===a||a.setReadOnly(t),null===(o=null===(r=this.__sideControl)||void 0===r?void 0:r.getControl(s.__tempAdjustPlusButtonName))||void 0===o||o.setReadOnly(t)},processHeatingSetpoint:t=>this.setHeatingSetpoint(t),processHeatingActive:t=>this.setHeatingActive(t),processCoolingSetpoint:t=>this.setCoolingSetpoint(t),processCoolingActive:t=>this.setCoolingActive(t)})}setCurrentTemp(t){return this.__attrHandler.checkAttribute(t,"currentTemp",{validator:"number"})?(this.__attrHandler.currentTemp=t,this.__processCurrentTemp(),this):this}__processCurrentTemp(){this.__updateTempElements()}getCurremtTemp(){return this.__attrHandler.currentTemp}setTempAdjust(t){return this.__attrHandler.checkAttribute(t,"tempAdjust",{validator:"number"})?(this.__attrHandler.tempAdjust=t,this.__processTempAdjust(),this):this}__processTempAdjust(){var t;let e=null===(t=this.__sideControl)||void 0===t?void 0:t.getControl(s.__tempAdjustSliderName);null==e||e.setValue(this.__attrHandler.tempAdjust)}getTempAdjust(){return this.__attrHandler.tempAdjust}setTempAdjustFeedback(t){return this.__attrHandler.checkAttribute(t,"tempAdjustFeedback",{validator:"number"})?(this.__attrHandler.tempAdjustFeedback=t,this.__processTempAdjustFeedback(),this):this}__processTempAdjustFeedback(){var t;if(null!=this.__attrHandler.tempAdjustFeedback){let e=null===(t=this.__sideControl)||void 0===t?void 0:t.getControl(s.__tempAdjustSliderName);null==e||e.setValue(this.__attrHandler.tempAdjustFeedback),this.__tempAdjustFeedbackReady.forEach(t=>t()),this.__tempAdjustFeedbackReady=[]}}getTempAdjustFeedback(){return this.__attrHandler.tempAdjustFeedback}setHeatingSetpoint(t){return this.__attrHandler.checkAttribute(t,"heatingSetpoint",{validator:"number"})?(this.__attrHandler.heatingSetpoint=t,this.__processHeatingSetpoint(),this):this}__processHeatingSetpoint(){this.__updateTempElements()}getHeatingSetpoint(){return this.__attrHandler.heatingSetpoint}setHeatingActive(t){return this.__attrHandler.checkAttribute(t,"heatingActive",{validator:"boolean"})?(this.__attrHandler.heatingActive=t,this.__processHeatingActive(),this):this}__processHeatingActive(){var t;this.__attrHandler&&this.__oldHeatingActive!=this.__attrHandler.heatingActive&&(null===(t=this.__acIcon)||void 0===t||t.setHeatingActive(this.__attrHandler.heatingActive),this.__processStatus(),this.__oldHeatingActive=this.__attrHandler.heatingActive)}getHeatingActive(){return this.__attrHandler.heatingActive}setCoolingSetpoint(t){return this.__attrHandler.checkAttribute(t,"coolingSetpoint",{validator:"number"})?(this.__attrHandler.coolingSetpoint=t,this.__processCoolingSetpoint(),this):this}__processCoolingSetpoint(){this.__updateTempElements()}getCoolingSetpoint(){return this.__attrHandler.coolingSetpoint}setCoolingActive(t){return this.__attrHandler.checkAttribute(t,"coolingActive",{validator:"boolean"})?(this.__attrHandler.coolingActive=t,this.__processCoolingActive(),this):this}__processCoolingActive(){var t;this.__attrHandler&&this.__oldCoolingActive!=this.__attrHandler.coolingActive&&(null===(t=this.__acIcon)||void 0===t||t.setCoolingActive(this.__attrHandler.coolingActive),this.__processStatus(),this.__oldCoolingActive=this.__attrHandler.coolingActive)}getCoolingActive(){return this.__attrHandler.coolingActive}setTempAdjustRange(t){return this.__attrHandler.checkAttribute(t,"tempAdjustRange",{validator:"number"})?(null==t&&(t=3),this.__attrHandler.tempAdjustRange=t,this.__updateSideControl(),this):this}getTempAdjustRange(){return this.__attrHandler.tempAdjustRange}setUnit(t){return this.__attrHandler.checkAttribute(t,"unit",{validator:"string"})?(null==t&&(t="°C"),this.__attrHandler.unit=t,this):this}getUnit(){return this.__attrHandler.unit}processBaObject(){super.processBaObject(),null!=this.baObjectHandler.baObject&&i.HeatingCooling.processBaObject(this,{processCurrentTemperature:t=>this.setCurrentTemp(t),processTempAdjust:t=>this.setTempAdjust(t),processTempAdjustFeedback:t=>this.setTempAdjustFeedback(t),processTempAdjustReadOnly:t=>{var e,i,n,a,r,o;this.__attrHandler.tempAdjustReadOnly=t,null===(i=null===(e=this.__sideControl)||void 0===e?void 0:e.getControl(s.__tempAdjustSliderName))||void 0===i||i.setReadOnly(t),null===(a=null===(n=this.__sideControl)||void 0===n?void 0:n.getControl(s.__tempAdjustMinusButtonName))||void 0===a||a.setReadOnly(t),null===(o=null===(r=this.__sideControl)||void 0===r?void 0:r.getControl(s.__tempAdjustPlusButtonName))||void 0===o||o.setReadOnly(t)},processHeatingSetpoint:t=>this.setHeatingSetpoint(t),processHeatingActive:t=>this.setHeatingActive(t),processCoolingSetpoint:t=>this.setCoolingSetpoint(t),processCoolingActive:t=>this.setCoolingActive(t)})}}s.__temperatureDisplayName="temperature-display",s.__statusIconSideMenuName="status-icon-side-menu",s.__tempAdjustSliderName="temp-adjust-slider",s.__tempAdjustMinusButtonName="temp-adjust-minus-button",s.__tempAdjustPlusButtonName="temp-adjust-plus-button",n.HeatingCoolingControl=s}(i.RoomControl||(i.RoomControl={}))}(i.RoomAutomation||(i.RoomAutomation={}))}(e.Controls||(e.Controls={}))}(t.BuildingAutomation||(t.BuildingAutomation={}))}(TcHmi||(TcHmi={}));