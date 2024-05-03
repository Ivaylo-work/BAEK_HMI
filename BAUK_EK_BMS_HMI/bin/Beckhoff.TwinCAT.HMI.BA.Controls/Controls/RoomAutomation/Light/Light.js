var TcHmi;!function(e){!function(t){!function(s){!function(i){let r;!function(e){e.detail="detail",e.quickLinks="quickLinks"}(r||(r={}));class a extends s.System.BaseRoomControl{constructor(e,s,i){super(e,s,i),this.__defaultBaTemplateDescription=a.BaTemplateDescription,this.__brightnessFeedbackReady=[],this.__useCurrentBrightness=!1,this.__uiFinishedHandler=(e,s)=>{s instanceof t.Components.Slider?this.__brightnessSlider&&this.writeBrightnessToPlc(this.__brightnessSlider.getValue()):s instanceof t.Components.Checkbox&&this.__brightnessSwitch&&this.writeBrightnessToPlc(this.__brightnessSwitch.getState())}}__previnit(){null==this.__baFc&&(this.__baFc=new a.Icon(this.__id+"-ba-fc",this)),super.__previnit(),this.__element.append(this.__baFc.getElement()),this.baInterfaceHandler.baInterfaceDefinition=a.BaInterfaceDef,this.setBaInterfaceSymbolNames(a.BaInterfaceSymbolNames),void 0===this.__attrHandler.readOnly&&this.setReadOnly(!1)}__init(){super.__init()}__attach(){super.__attach(),t.Helper.appendSourroundingElementsDimensionRectangle(this.__element,15),this.__baFc.eventHandler.register(t.Components.Button.ButtonEvents.onDoublePressed,()=>{if(!0!==this.__baFc.getReadOnly())if("number"==typeof this.__attrHandler.brightness){if(null!=this.__attrHandler.minBrightness&&null!=this.__attrHandler.maxBrightness){let e=0;e=this.__attrHandler.brightness===this.__attrHandler.maxBrightness?this.__attrHandler.minBrightness:this.__attrHandler.maxBrightness,this.writeBrightnessToPlc(e)}}else this.writeBrightnessToPlc(!this.__attrHandler.brightness)}),this.__baFc.setBrightness(null!=this.__attrHandler.brightnessFeedback?this.__attrHandler.brightnessFeedback:this.__attrHandler.brightness)}__detach(){super.__detach()}destroy(){var e,t,s,i;this.__keepAlive||(null!=this.__destroyOnBrightnessSliderChanged&&this.__destroyOnBrightnessSliderChanged(),null!=this.__destroyOnBrightnessSliderUIFinised&&this.__destroyOnBrightnessSliderUIFinised(),null!=this.__destroyOnBrightnessSwitchUIFinised&&this.__destroyOnBrightnessSwitchUIFinised(),null===(e=this.__brightnessSlider)||void 0===e||e.destroy(),null===(t=this.__brightnessSwitch)||void 0===t||t.destroy(),null===(s=this.childrenHandler.getChildren().get(this.__id+"-operation-state-display"))||void 0===s||s.destroy(),null===(i=this.childrenHandler.getChildren().get(this.__id+"-reset-manual-operation-state-button"))||void 0===i||i.destroy(),super.destroy())}__processChangedBrightness(e){if(this.__useCurrentBrightness=!0,this.setBrightness(e),null!=this.__attrHandler.brightnessFeedback&&this.__attrHandler.brightness!=this.__attrHandler.brightnessFeedback){let e=()=>{this.__brightnessFeedbackReady.forEach(e=>e()),this.__brightnessFeedbackReady=[],this.setBrightness(this.__attrHandler.brightnessFeedback)},s=this.logger.logPerformance(t.Logger.Severity.debug,"Brightness feedback response."),r=()=>{s()};this.__brightnessFeedbackReady.push(this.busyHandler.setBusy("Waiting for BrightnessFeedback",{cbOnTimeout:e,cbOnReady:r,showIndicator:i.showBusyIndicator}))}}__createOrUpdateControls(){if(null==this.__attrHandler.brightness)return;let e=this.__attrHandler.brightness;switch(null!=this.__attrHandler.brightnessFeedback&&0==this.__useCurrentBrightness&&(e=this.__attrHandler.brightnessFeedback),this.__useCurrentBrightness=!1,typeof e){case"number":this.__brightnessSwitch&&(this.__removeControl(r.detail,this.__brightnessSwitch),delete this.__brightnessSwitch,null!=this.__destroyOnBrightnessSwitchUIFinised&&(this.__destroyOnBrightnessSwitchUIFinised(),delete this.__destroyOnBrightnessSwitchUIFinised)),null==this.__brightnessSlider&&(this.__brightnessSlider=new t.Components.Slider(this.__id+"-brightness-slider",this),this.__brightnessSlider.setShowScale(!1).setShowValue(!1).setKnobAppearance(t.Components.Slider.KnobAppearance.round).setShowBusyIndicator(i.showBusyIndicator).layoutHandler.setMaxHeight(10).setMinHeight(10),this.__addControl(r.detail,this.__brightnessSlider,1),this.__destroyOnBrightnessSliderUIFinised=this.__brightnessSlider.eventHandler.register(t.Components.Slider.SliderEvents.onUserInteractionFinished,this.__uiFinishedHandler),this.__destroyOnBrightnessSliderChanged=this.__brightnessSlider.eventHandler.register(t.Components.Slider.SliderEvents.onValueChanged,()=>{null!=this.__brightnessSlider&&(this.__baFc.setBrightness(this.__brightnessSlider.getValue()),this.__updateDisplay(this.__brightnessSlider.getValue()))})),this.__brightnessSlider.setMinValue(this.__attrHandler.minBrightness).setMaxValue(this.__attrHandler.maxBrightness),0==a.showFeedbackInSlider?this.__brightnessSlider.setValue(e):(this.__brightnessSlider.setValue(this.__attrHandler.brightness),null!=this.__attrHandler.brightnessFeedback&&this.__brightnessSlider.setValueFeedback(this.__attrHandler.brightnessFeedback)),this.__createOrUpdateQuickLinks();let s=this.__getControl(r.quickLinks,a.__brightnessToggleName);s&&null!=this.__attrHandler.minBrightness&&s.setState(e>this.__attrHandler.minBrightness);break;case"boolean":this.__brightnessSlider&&(this.__removeControl(r.detail,this.__brightnessSlider),delete this.__brightnessSlider,null!=this.__destroyOnBrightnessSliderUIFinised&&(this.__destroyOnBrightnessSliderUIFinised(),delete this.__destroyOnBrightnessSliderUIFinised),null!=this.__destroyOnBrightnessSliderChanged&&(this.__destroyOnBrightnessSliderChanged(),delete this.__destroyOnBrightnessSliderChanged)),null==this.__brightnessSwitch&&(this.__brightnessSwitch=new t.Components.Checkbox(this.__id+"-brightness-switch",this),this.__brightnessSwitch.setActiveText(null).setInactiveText(null).setAppearance(t.Components.Checkbox.Appearance.toggleSlider).setReadOnly(!1).layoutHandler.setMaxHeight(25).setMinHeight(25).setMaxWidth(50).setMinWidth(50),this.__addControl(r.detail,this.__brightnessSwitch,1),this.__destroyOnBrightnessSwitchUIFinised=this.__brightnessSwitch.eventHandler.register(t.Components.Checkbox.CheckboxEvents.onUserInteractionFinished,this.__uiFinishedHandler)),this.__element.removeClass("has-quick-links"),this.__removeAllControls(r.quickLinks),this.__brightnessSwitch.setState(e)}this.__baFc.setBrightness(e),this.__updateDisplay(e)}__createOrUpdateQuickLinks(){if(0==a.ShowQuickLinks)return;if(null==this.__attrHandler.lightColor||null==this.__attrHandler.minBrightness||null==this.__attrHandler.maxBrightness)return;this.__element.hasClass("has-quick-links")||(this.__element.addClass("has-quick-links"),this.__addControls(r.quickLinks,[{type:t.Components.ComponentType.Checkbox,name:a.__brightnessToggleName,settings:{appearance:t.Components.Checkbox.Appearance.toggleSlider,readOnly:!1,layout:{maxHeight:25,minHeight:25,maxWidth:35,minWidth:35}},callback:e=>{this.writeBrightnessToPlc(1==e?this.__attrHandler.maxBrightness:this.__attrHandler.minBrightness)}},{type:t.Components.ComponentType.Button,settings:{background:t.Components.BackgroundStyler.createImageConfig(t.Icons.RoomAutomation.Lamp2.path,90)},callback:()=>{this.writeBrightnessToPlc((this.__attrHandler.maxBrightness-this.__attrHandler.minBrightness)/4+this.__attrHandler.minBrightness)}},{type:t.Components.ComponentType.Button,settings:{background:t.Components.BackgroundStyler.createImageConfig(t.Icons.RoomAutomation.Lamp2.path,90)},callback:()=>{this.writeBrightnessToPlc((this.__attrHandler.maxBrightness-this.__attrHandler.minBrightness)/2+this.__attrHandler.minBrightness)}},{type:t.Components.ComponentType.Button,settings:{background:t.Components.BackgroundStyler.createImageConfig(t.Icons.RoomAutomation.Lamp2.path,90)},callback:()=>{this.writeBrightnessToPlc(3*(this.__attrHandler.maxBrightness-this.__attrHandler.minBrightness)/4+this.__attrHandler.minBrightness)}}],2));let e=this.__attrHandler.maxBrightness-this.__attrHandler.minBrightness;for(let s=1;s<this.__getControls(r.quickLinks).length;s++){let i=this.__getControls(r.quickLinks)[s],a=0;switch(s){case 1:a=e/4+this.__attrHandler.minBrightness;break;case 2:a=e/2+this.__attrHandler.minBrightness;break;case 3:a=3*e/4+this.__attrHandler.minBrightness}i.setAttributes({background:{imageColor:t.Color.getFadeColor(t.Color.RGBAColor.Black,this.__attrHandler.minBrightness,this.__attrHandler.lightColor,this.__attrHandler.maxBrightness,a)}})}}__updateDisplay(e){null==e&&(e=0),this.__attrHandler.showValue?(this.__element.addClass("show-displays"),a.Icon.getBrightnessText(e,this.__attrHandler.minBrightness,this.__attrHandler.maxBrightness,e=>{this.__attrHandler.showValue?this.__baFc.textHandler.setText(e):this.__baFc.textHandler.setText(null)})):(this.__element.removeClass("show-displays"),this.__baFc.textHandler.setText(null))}static processBaObject(e,s){var i,r,n;let l=e.baObjectHandler;if(null!=l)if(null===(i=l.baObject)||void 0===i?void 0:i.checkAddParams(a.BaInterfaceDef,a.BaInterfaceSymbolNames)){let e=l.baObject.tryGetBaVariable("resetManual");s.processHasResetSymbol(null!=e);let t=l.baObject.tryGetBaVariable("operationState");null!=t&&l.watchBaVariable(t,e=>{s.processOperationState(e)});let i=l.baObject.tryGetBaVariable("cmdBrightness");if(null!=i){l.watchBaVariable(i,e=>{s.processBrightness(e)});let e=l.baObject.tryGetBaVariable("fdbBrightness");null!=e&&l.watchBaVariable(e,e=>{s.processBrightnessFeedback(e)})}else{let e=l.baObject.tryGetBaVariable("fdbLightOn");null!=e&&l.watchBaVariable(e,e=>{s.processBrightness(e),s.processBrightnessFeedback(e)})}l.baObject.tryGetBaVariable("cmdTemperature")}else if(null===(r=l.baObject)||void 0===r?void 0:r.checkTemplate(a.BaTemplateDefinition,e.baTemplateHandler.baBaTemplateDescription,e,!1)){let e=l.baObject.getTemplateChild("command");l.tryWatchChildrenBaVariable(e,t.BA.BaParameterId.ePresentValue,e=>{s.processBrightness(e)});let i=l.baObject.getTemplateChild("feedback");l.tryWatchChildrenBaVariable(i,t.BA.BaParameterId.ePresentValue,e=>{s.processBrightnessFeedback(e)}),s.processMinBrightness(0),s.processMaxBrightness(100);let r=l.baObject.findChildBySubjectInfoIdentifier("ResetState");s.processHasResetSymbol(null!=r);let a=l.baObject.getTemplateChild("state");a&&l.tryWatchChildrenBaVariable(a,t.BA.BaParameterId.ePresentValue,e=>{s.processOperationState(e)})}else null===(n=l.baObject)||void 0===n||n.logInvalidBaObject(e.getId())}static getOperationStateDisplayIcon(e){switch(e){case a.OperationState.autoActive:return t.Icons.RoomAutomation.Automatic;case a.OperationState.manual:return t.Icons.RoomAutomation.Manual;case a.OperationState.autoInactive:return t.Icons.RoomAutomation.Automatic;default:return t.Logger.log(t.Logger.Severity.warn,`Invalid operation state '${e}'`),null}}static getOperationStateDisplayBackgroundAttributes(e){var s;if(null==e)return{image:null,imageColor:null};let i={imageHeight:80,imageHeightUnit:"%",imageWidth:80,imageWidthUnit:"%",useSVG:!0};switch(i.image=null===(s=this.getOperationStateDisplayIcon(e))||void 0===s?void 0:s.path,e){case a.OperationState.autoActive:i.imageColor=t.Color.RGBAColor.TcHmiGreen;break;case a.OperationState.manual:i.imageColor=t.Color.RGBAColor.DarkOrange;break;case a.OperationState.autoInactive:i.imageColor=t.Color.RGBAColor.White}return i}static writeBrightnessToPlc(e,s){var i;if(null!=e)if(s instanceof t.BA.BaView)null===(i=s.getTemplateChild("command"))||void 0===i||i.tryWriteBaVariableValue(t.BA.BaParameterId.ePresentValue,e,e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)});else if(s instanceof t.BA.BaBasicObject){let i=s.tryGetBaVariable("cmdBrightness");if("number"==typeof e&&null!=i)return void i.write(e,e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)});if("boolean"!=typeof e)throw new Error("Tried to write invalid value to PLC!");{let e=s.tryGetBaVariable("cmdToggle");null!=e&&e.write(!0,e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)})}}else if(s instanceof t.BaInterfaceHandler)if("number"==typeof e&&s.hasSubSymbol("cmdBrightness"))s.writeSubSymbol("cmdBrightness",e).then(e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)});else{if("boolean"!=typeof e)throw new Error("Tried to write invalid value to PLC!");s.writeSubSymbol("cmdToggle",e).then(e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)})}}writeBrightnessToPlc(e){var t,s;1!=this.busyHandler.getIsBusy()&&null!=e&&((null===(t=this.baObjectHandler.baObject)||void 0===t?void 0:t.checkTemplate(a.BaTemplateDefinition,this.baTemplateHandler.baBaTemplateDescription))&&a.writeBrightnessToPlc(e,this.baObjectHandler.baObject),(null===(s=this.baObjectHandler.baObject)||void 0===s?void 0:s.checkAddParams(a.BaInterfaceDef,a.BaInterfaceSymbolNames))&&a.writeBrightnessToPlc(e,this.baObjectHandler.baObject),null!=this.baInterfaceHandler.getBaInterfaceSym()&&a.writeBrightnessToPlc(e,this.baInterfaceHandler),this.__processChangedBrightness(e))}static resetManualOperationStateToPlc(e){var s;e instanceof t.BA.BaView?null===(s=e.getTemplateChild("reset"))||void 0===s||s.tryWriteBaVariableValue(t.BA.BaParameterId.ePresentValue,!0,e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)}):e instanceof t.BA.BaBasicObject?e.tryWriteBaVariableValue("resetManual",!0):e instanceof t.BaInterfaceHandler&&e.hasSubSymbol("resetManual")&&e.writeSubSymbol("resetManual",!0)}resetManualOperationStateToPlc(){var e,t;(null===(e=this.baObjectHandler.baObject)||void 0===e?void 0:e.checkTemplate(a.BaTemplateDefinition,this.baTemplateHandler.baBaTemplateDescription))&&a.resetManualOperationStateToPlc(this.baObjectHandler.baObject),(null===(t=this.baObjectHandler.baObject)||void 0===t?void 0:t.checkAddParams(a.BaInterfaceDef,a.BaInterfaceSymbolNames))&&a.resetManualOperationStateToPlc(this.baObjectHandler.baObject),null!=this.baInterfaceHandler.getBaInterfaceSym()&&a.resetManualOperationStateToPlc(this.baInterfaceHandler)}setBaObject(e){return this.baObjectHandler.setBaObject(e),this}getBaObject(){return this.baObjectHandler.baObject}setAttributes(e){return super.setAttributes(e),void 0!==e.brightness&&this.setBrightness(e.brightness),void 0!==e.brightnessFeedback&&this.setBrightnessFeedback(e.brightnessFeedback),void 0!==e.operationState&&this.setOperationState(e.operationState),void 0!==e.minBrightness&&this.setMinBrightness(e.minBrightness),void 0!==e.maxBrightness&&this.setMaxBrightness(e.maxBrightness),void 0!==e.lightColor&&this.setLightColor(e.lightColor),void 0!==e.displayMode&&this.setDisplayMode(e.displayMode),void 0!==e.showValue&&this.setShowValue(e.showValue),this}getAttributes(){return this.__attrHandler}setBaInterface(e){return super.setBaInterface(e),this.baInterfaceHandler.setBaInterfaceSym(e,()=>{a.processBaInterface(this,{processBrightness:e=>this.setBrightness(e),processBrightnessFeedback:e=>this.setBrightnessFeedback(e),processOperationState:e=>this.setOperationState(e),processMaxBrightness:e=>this.setMaxBrightness(e),processMinBrightness:e=>this.setMinBrightness(e),processHasResetSymbol:e=>this.__hasResetSymbol=e})}),this}setBrightness(t){let s=null;if(null!=t)switch(typeof t){case"boolean":case"number":s=t;break;default:s=e.ValueConverter.toNumber(t),null==s&&(s=e.ValueConverter.toBoolean(t))}return null==s&&(s=this.getAttributeDefaultValueInternal("Brightness")),s===this.__attrHandler.brightness||(this.__attrHandler.brightness=s,this.__processBrightness(),e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Brightness"}),e.EventProvider.raise(this.__id+".onBrightnessChanged")),this}__processBrightness(){this.__createOrUpdateControls()}getBrightness(){return this.__attrHandler.brightness}setBrightnessFeedback(t){let s=null;if(null!=t)switch(typeof t){case"boolean":case"number":s=t;break;default:s=e.ValueConverter.toNumber(t),null==s&&(s=e.ValueConverter.toBoolean(t))}return null==s&&(s=this.getAttributeDefaultValueInternal("BrightnessFeedback")),s===this.__attrHandler.brightnessFeedback||(this.__attrHandler.brightnessFeedback=s,null!=this.__attrHandler.brightnessFeedback&&(this.__processBrightnessFeedback(),this.__brightnessFeedbackReady.forEach(e=>e()),this.__brightnessFeedbackReady=[],e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"BrightnessFeedback"}))),this}__processBrightnessFeedback(){this.__createOrUpdateControls()}getBrightnessFeedback(){return this.__attrHandler.brightnessFeedback}setMinBrightness(t){let s=e.ValueConverter.toNumber(t);return null==s&&(s=this.getAttributeDefaultValueInternal("MinBrightness")),s===this.__attrHandler.minBrightness||(this.__attrHandler.minBrightness=s,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MinBrightness"}),this.__processMinBrightness()),this}__processMinBrightness(){var e;"number"==typeof this.__attrHandler.brightness&&(null===(e=this.__brightnessSlider)||void 0===e||e.setMinValue(this.__attrHandler.minBrightness)),this.__baFc.setMinBrightness(this.__attrHandler.minBrightness),this.__createOrUpdateControls()}getMinBrightness(){return this.__attrHandler.minBrightness}setMaxBrightness(t){let s=e.ValueConverter.toNumber(t);return null==s&&(s=this.getAttributeDefaultValueInternal("MaxBrightness")),s===this.__attrHandler.maxBrightness||(this.__attrHandler.maxBrightness=s,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"MaxBrightness"}),this.__processMaxBrightness()),this}__processMaxBrightness(){var e;"number"==typeof this.__attrHandler.brightness&&(null===(e=this.__brightnessSlider)||void 0===e||e.setMaxValue(this.__attrHandler.maxBrightness)),this.__baFc.setMaxBrightness(this.__attrHandler.maxBrightness),this.__createOrUpdateControls()}getMaxBrightness(){return this.__attrHandler.maxBrightness}setLightColor(s){let i=e.ValueConverter.toObject(s);return null==i&&(i=this.getAttributeDefaultValueInternal("LightColor")),null!=i&&!t.Color.isSolidColor(i)||void 0===i||i===this.__attrHandler.lightColor||(null!=i&&e.isSolidColor(i)&&(i=t.Color.RGBAColor.fromSolidColor(i)),null==i||i instanceof t.Color.RGBAColor||(i=new t.Color.RGBAColor(i)),this.__attrHandler.lightColor=i,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"LightColor"}),this.__processLightColor()),this}__processLightColor(){this.__baFc.setLightColor(this.__attrHandler.lightColor),this.__createOrUpdateControls()}getLightColor(){var e;return null===(e=this.__attrHandler.lightColor)||void 0===e?void 0:e.toSolidColor()}setDisplayMode(t){let s=e.ValueConverter.toNumber(t);return null==s&&(s=this.getAttributeDefaultValueInternal("DisplayMode")),s===this.__attrHandler.displayMode||(this.__attrHandler.displayMode=s,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"DisplayMode"}),this.__processDisplayMode()),this}__processDisplayMode(){this.__baFc.setDisplayMode(this.__attrHandler.displayMode)}getDisplayMode(){return this.__attrHandler.displayMode}setOperationState(t){let s=e.ValueConverter.toNumber(t);return null==s&&(s=this.getAttributeDefaultValueInternal("OperationState")),s===this.__attrHandler.operationState||(this.__attrHandler.operationState=s,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"OperationState"}),this.__processOperationState()),this}__processOperationState(){var e;if(null==this.__attrHandler.operationState)this.__appendOperationStateDisplay(!1),this.__appendResetManualOperationStateButton(!1),this.__operationStateLegenIconHandler.hide();else{this.__appendOperationStateDisplay(!0),null===(e=this.__operationStateDisplay)||void 0===e||e.backgroundStyler.setAttributes(a.getOperationStateDisplayBackgroundAttributes(this.__attrHandler.operationState));let t=a.getOperationStateDisplayIcon(this.__attrHandler.operationState);null!=t&&(this.__operationStateLegenIconHandler.icon=t,this.__isAttached&&this.__operationStateLegenIconHandler.show()),this.__attrHandler.operationState!=a.OperationState.manual?this.__appendResetManualOperationStateButton(!1):this.__attrHandler.operationState===a.OperationState.manual&&this.__hasResetSymbol&&this.__appendResetManualOperationStateButton(!0)}}getOperationState(){return this.__attrHandler.operationState}setShowValue(t){let s=e.ValueConverter.toBoolean(t);return null==s&&(s=this.getAttributeDefaultValueInternal("ShowValue")),s===this.__attrHandler.showValue||(this.__attrHandler.showValue=s,e.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowValue"}),this.__processShowValue()),this}__processShowValue(){this.__createOrUpdateControls()}getShowValue(){return this.__attrHandler.showValue}processBaObject(){super.processBaObject(),a.processBaObject(this,{processBrightness:e=>this.setBrightness(e),processBrightnessFeedback:e=>this.setBrightnessFeedback(e),processOperationState:e=>this.setOperationState(e),processMaxBrightness:e=>this.setMaxBrightness(e),processMinBrightness:e=>this.setMinBrightness(e),processHasResetSymbol:e=>this.__hasResetSymbol=e})}static processBaInterface(e,t){t.processHasResetSymbol(e.baInterfaceHandler.hasSubSymbol("resetManual")),e.baInterfaceHandler.hasSubSymbol("operationState")&&e.baInterfaceHandler.watchSubSymbol("operationState",e=>{t.processOperationState(e)}),e.baInterfaceHandler.hasSubSymbol("cmdBrightness")?(e.baInterfaceHandler.watchSubSymbol("cmdBrightness",e=>{t.processBrightness(e)}),e.baInterfaceHandler.hasSubSymbol("fdbBrightness")&&e.baInterfaceHandler.watchSubSymbol("fdbBrightness",e=>{t.processBrightnessFeedback(e)})):e.baInterfaceHandler.watchSubSymbol("fdbLightOn",e=>{t.processBrightness(e),t.processBrightnessFeedback(e)}),e.baInterfaceHandler.hasSubSymbol("cmdTemperature")}}a.showFeedbackInSlider=!1,a.__brightnessToggleName="brightness-toggle",i.Light=a,function(i){let r,a;i.BaTemplateDefinition={command:{},feedback:{},reset:{optional:!0},state:{optional:!0}},i.BaTemplateDescription={command:{identifier:"Command"},feedback:{identifier:"Feedback"},reset:{identifier:"ResetState"},state:{identifier:"StateMI"}},i.BaInterfaceDef=Object.assign(Object.assign({},s.System.BaseRoomControl.BaInterfaceDef),{cmdToggle:{type:"boolean"},fdbLightOn:{type:"boolean"},initialize:{type:"boolean",optional:!0},operationState:{type:"integer",optional:!0},resetManual:{type:"boolean",optional:!0},cmdBrightness:{type:"number",optional:!0},fdbBrightness:{type:"number",optional:!0},cmdTemperature:{type:"number",optional:!0},fdbTemperature:{type:"number",optional:!0}}),i.BaInterfaceSymbolNames=Object.assign(Object.assign({},s.System.BaseRoomControl.BaInterfaceSymbolNames),{initialize:{symbolName:"bInitialize_In"},cmdToggle:{symbolName:"bToggle_In"},fdbLightOn:{symbolName:"bLightOn_Out"},operationState:{symbolName:"eOperationalState_Out"},resetManual:{symbolName:"bResetManual_In"},cmdBrightness:{symbolName:"fLightValue_In"},fdbBrightness:{symbolName:"fLightValue_Out"},cmdTemperature:{symbolName:"fLightTemperature_In"},fdbTemperature:{symbolName:"fLightTemperature_Out"}}),function(e){e[e.sliderHorizontal=0]="sliderHorizontal"}(r=i.ControlType||(i.ControlType={})),function(e){e[e.invalid=0]="invalid",e[e.autoActive=1]="autoActive",e[e.manual=2]="manual",e[e.autoInactive=3]="autoInactive"}(a=i.OperationState||(i.OperationState={})),i.LightOffColor=t.Color.RGBAColor.Black,i.ShowQuickLinks=!1;class n extends t.Components.Button{constructor(e,t,s){super(e,t,s)}__init(e){var s,i;super.__init(e),this.__legendIconHandler=new t.Components.LegendIconHandler,this.__element.addClass("light-icon"),void 0===(null==e?void 0:e.displayMode)&&this.setDisplayMode(n.DisplayMode.lightBulb),void 0===(null===(s=null==e?void 0:e.background)||void 0===s?void 0:s.imageHeight)&&this.backgroundStyler.setImageHeight(90,"%"),void 0===(null===(i=null==e?void 0:e.background)||void 0===i?void 0:i.imageWidth)&&this.backgroundStyler.setImageWidth(90,"%")}__attach(){this.__isAttached||(null!=this.__legendIconHandler.icon&&this.__legendIconHandler.show(),this.__destroyersToCallOnDetach.push(e.EventProvider.register("onThemeDataChanged",()=>{this.__animateBrightness()})),super.__attach())}__detach(){this.__isAttached&&(this.__legendIconHandler.hide(),super.__detach())}destroy(){super.destroy()}__animateBrightness(){if(null==this.__attrHandler.lightColor)return;let e=t.Color.RGBAColor.Red;if(null!=this.__attrHandler.minBrightness&&null!=this.__attrHandler.maxBrightness&&null!=this.__attrHandler.brightness)if("number"==typeof this.__attrHandler.brightness){let s=100/(this.__attrHandler.maxBrightness-this.__attrHandler.minBrightness)*(this.__attrHandler.brightness-this.__attrHandler.minBrightness);s<50&&s>0&&(s=50),e=t.Color.getFadeColor(i.LightOffColor,0,this.__attrHandler.lightColor,100,s)}else e=!0===this.__attrHandler.brightness?this.__attrHandler.lightColor:i.LightOffColor;this.__attrHandler.displayMode===n.DisplayMode.lightBulb||this.__attrHandler.displayMode===n.DisplayMode.lightBulbFilled?this.backgroundStyler.setImageColor(e,300).setColor(null,0):this.backgroundStyler.setColor(e,200).setImageColor(null)}static getBrightnessText(e,s,i,r){if(null!=e&&null!=s&&null!=i&&"number"==typeof e)r(t.Helper.Number.toPercentage(e,s,i).toFixed(0)+" %");else if(null!=e&&null!=s&&null!=i&&"boolean"==typeof e){let s=e?t.Locale.LangKey.On:t.Locale.LangKey.Off;t.Locale.Localization.watchText(s,e=>{t.Logger.checkServerResult(t.Logger.Severity.warn,e)&&null!=e.text&&r(e.text)})}else r("?")}setAttributes(e){return super.setAttributes(e),void 0!==e.brightness&&this.setBrightness(e.brightness),void 0!==e.minBrightness&&this.setMinBrightness(e.minBrightness),void 0!==e.maxBrightness&&this.setMaxBrightness(e.maxBrightness),void 0!==e.lightColor&&this.setLightColor(e.lightColor),void 0!==e.displayMode&&this.setDisplayMode(e.displayMode),this}getAttributes(){return this.__attrHandler.getRef()}setBrightness(e){return this.__attrHandler.checkAttribute(e,"brightness",{validator:["boolean","number"]})?(this.__attrHandler.brightness=e,this.__processBrightness(),this):this}__processBrightness(){this.__animateBrightness()}getBrightness(){return this.__attrHandler.brightness}setMinBrightness(e){return this.__attrHandler.checkAttribute(e,"minBrightness",{validator:"number"})?(this.__attrHandler.minBrightness=e,this.__processMinBrightness(),this):this}__processMinBrightness(){this.__animateBrightness()}getMinBrightness(){return this.__attrHandler.minBrightness}setMaxBrightness(e){return this.__attrHandler.checkAttribute(e,"maxBrightness",{validator:"number"})?(this.__attrHandler.maxBrightness=e,this.__processMaxBrightness(),this):this}__processMaxBrightness(){this.__animateBrightness()}getMaxBrightness(){return this.__attrHandler.maxBrightness}setLightColor(e){return this.__attrHandler.checkColorAttribute(e,"lightColor")?(this.__attrHandler.lightColor=e,this.__processLightColor(),this):this}__processLightColor(){this.__animateBrightness()}getLightColor(){return this.__attrHandler.lightColor}setDisplayMode(e){return this.__attrHandler.checkAttribute(e,"displayMode",{validator:"number"})?(this.__attrHandler.displayMode=e,this.__processDisplayMode(),this):this}__processDisplayMode(){switch(this.__attrHandler.displayMode){case n.DisplayMode.lightBulb:this.__element.removeClass("filled-display-mode"),this.backgroundStyler.setImage(t.Icons.RoomAutomation.Lamp2.path,!0),this.__legendIconHandler.icon=t.Icons.RoomAutomation.Lamp2,this.__isAttached&&this.__legendIconHandler.show();break;case n.DisplayMode.lightBulbFilled:this.__element.removeClass("filled-display-mode"),this.backgroundStyler.setImage(t.Icons.RoomAutomation.Lamp.path,!0),this.__legendIconHandler.icon=t.Icons.RoomAutomation.Lamp,this.__isAttached&&this.__legendIconHandler.show();break;default:this.backgroundStyler.setImage(null),this.__element.addClass("filled-display-mode"),this.__legendIconHandler.icon=void 0,this.__legendIconHandler.hide()}this.__animateBrightness()}getDisplayMode(){return this.__attrHandler.displayMode}__processReadOnly(){super.__processReadOnly(),!0===this.__attrHandler.readOnly?this.__element.removeClass("button"):this.__element.addClass("button")}}i.Icon=n,function(e){let t;!function(e){e[e.lightBulb=0]="lightBulb",e[e.lightBulbFilled=1]="lightBulbFilled",e[e.filled=2]="filled"}(t=e.DisplayMode||(e.DisplayMode={}))}(n=i.Icon||(i.Icon={}))}(a=i.Light||(i.Light={}))}(s.RoomAutomation||(s.RoomAutomation={}))}(t.Controls||(t.Controls={}))}(e.BuildingAutomation||(e.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("Light","TcHmi.BuildingAutomation.Controls.RoomAutomation",TcHmi.BuildingAutomation.Controls.RoomAutomation.Light),TcHmi.EventProvider.register("onThemeDataChanged",()=>{"Base-Dark"===TcHmi.Theme.get()?TcHmi.BuildingAutomation.Controls.RoomAutomation.Light.LightOffColor=TcHmi.BuildingAutomation.Color.RGBAColor.Gray:TcHmi.BuildingAutomation.Controls.RoomAutomation.Light.LightOffColor=TcHmi.BuildingAutomation.Color.RGBAColor.Black});