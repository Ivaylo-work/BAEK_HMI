var TcHmi,__classPrivateFieldGet=this&&this.__classPrivateFieldGet||function(receiver,state,kind,f){if("a"===kind&&!f)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof state?receiver!==state||!f:!state.has(receiver))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===kind?f:"a"===kind?f.call(receiver):f?f.value:state.get(receiver)};!function(TcHmi){!function(Controls){!function(Beckhoff){var _a,_TcHmiCheckbox_tchmiFQN;class TcHmiCheckbox extends TcHmi.Controls.System.TcHmiControl{constructor(element,pcElement,attrs){super(element,pcElement,attrs),this.__textDiv=null,this.__onPressedEventDestroyEvent=null,this.__resizedEventDestroyEvent=null,this.__onToggleGroupToggledEventDestroyEvent=null,this.__destroyStateSymbolWatch=null,this.__state=!1,this.__isActive=!1,this.__restoreUserInputOnLoad=!1,this.__dataPrecedence=TcHmi.DataPrecedence.Data,this.__userInput=null,this.__onResolverForToggleStateIconColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("toggleStateIconColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__toggleStateIconColor)||(this.__toggleStateIconColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ToggleStateIconColor"}),this.__processToggleStateIconColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=ToggleStateIconColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextColorWatchCallback=data=>{!this.__isAttached&&data.destroy&&data.destroy(),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textColor)||(this.__textColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextColor"}),this.__processTextColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=TextColor] Resolving symbols from object failed with error: "+TcHmi.Log.buildMessage(data.details))},this.__onResolverForTextBackgroundColorWatchCallback=data=>{!1===this.__isAttached&&this.__suspendObjectResolver("textBackgroundColor"),data.error===TcHmi.Errors.NONE?tchmi_equal(data.value,this.__textBackgroundColor)||(this.__textBackgroundColor=data.value,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextBackgroundColor"}),this.__processTextBackgroundColor()):TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=TextBackgroundColor] Resolving symbols from object faield with error: "+TcHmi.Log.buildMessage(data.details))}}__previnit(){super.__previnit(),this.__elementCheckbox=this.__element.find(".TcHmi_Controls_Beckhoff_TcHmiCheckbox-template"),0===this.__elementCheckbox.length&&(this.__elementCheckbox=this.__element.find(".tchmi-checkbox-template"))}__init(){super.__init(),this.__storage=new TcHmi.LocalStorage(this,{})}__attach(){if(super.__attach(),this.__resizedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onResized",this.__onResized()),this.__onPressedEventDestroyEvent=TcHmi.EventProvider.register(this.__id+".onPressed",this.__onPressed()),this.__stateSymbol&&!this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch())),this.__restoreUserInputOnLoad){const userInput=this.__storage?.get("userInput");userInput&&(this.__userInput=userInput,this.__evaluateDataPrecedence(this.__state)||this.__writeState(this.__userInput.userData,"userInteraction"))}}__detach(){super.__detach(),null!==this.__resizedEventDestroyEvent&&(this.__resizedEventDestroyEvent(),this.__resizedEventDestroyEvent=null),null!==this.__onPressedEventDestroyEvent&&(this.__onPressedEventDestroyEvent(),this.__onPressedEventDestroyEvent=null),this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null)}destroy(){this.__keepAlive||(this.__stateSymbol&&this.__stateSymbol.destroy(),null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),super.destroy())}__onToggleGroupToggled(){return(evt,data)=>{if(data&&data.ActiveElementId&&data.ActiveElementId!==this.__id&&(!this.__stateSymbol||this.__stateSymbol.getExpression().toString()!==data.source)){if("userInteraction"===data.source)this.__state&&(this.__userInput?this.__userInput.userData=!1:this.__userInput={userData:!1,originalData:this.__state},this.__restoreUserInputOnLoad&&this.__storage?.set("userInput",this.__userInput));else if(!this.__evaluateDataPrecedence(!1))return;this.__writeState(!1,"toggleGroup")}}}setToggleGroup(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ToggleGroup")),convertedValue!==this.__toggleGroup&&(this.__toggleGroup=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ToggleGroup"}),this.__processToggleGroup())}getToggleGroup(){return this.__toggleGroup}__processToggleGroup(){null!==this.__onToggleGroupToggledEventDestroyEvent&&(this.__onToggleGroupToggledEventDestroyEvent(),this.__onToggleGroupToggledEventDestroyEvent=null),null!==this.__toggleGroup&&(this.__onToggleGroupToggledEventDestroyEvent=TcHmi.EventProvider.register(this.__toggleGroup+".toggled",this.__onToggleGroupToggled()))}__writeState(state,source){return this.__state===state?Promise.resolve(this.__state):(this.__setIsActive(state),this.__stateSymbol?new Promise((resolve=>{this.__stateSymbol.write(state,(data=>{if(data.error!==TcHmi.Errors.NONE){const details=data.details??{code:data.error,message:TcHmi.Errors[data.error]};return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+TcHmi.Log.buildMessage(details)),this.__setIsActive(this.__state),void resolve(this.__state)}if(void 0===data.value&&this.__stateSymbol.getExpression().getType()===TcHmi.SymbolType.Server){const details={code:TcHmi.Errors.E_SERVER_READVALUE_MISSING,message:TcHmi.Errors[TcHmi.Errors.E_SERVER_READVALUE_MISSING],domain:this.__type,reason:"Read value is missing from state symbol write command."};return TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=StateSymbol, "+(this.__stateSymbol?"Symbol = "+this.__stateSymbol.getExpression().toString():"")+"] "+TcHmi.Log.buildMessage(details)),this.__setIsActive(this.__state),void resolve(this.__state)}this.__setInternalState(data.value??state,source),resolve(this.__state)}))})):(this.__setInternalState(state,source),Promise.resolve(this.__state)))}__setInternalState(state,source){this.__state!==state?(this.__setToggleState(state?"Active":"Normal",!0,!1),state&&null!==this.__toggleGroup&&TcHmi.EventProvider.raise(this.__toggleGroup+".toggled",{ActiveElementId:this.__id,source:source}),this.__state=state,this.__setIsActive(state),TcHmi.EventProvider.raise(this.getId()+".onStateChanged",{control:this,state:state,stateOld:!state})):this.__setIsActive(this.__state)}__processState(state,forwardStateSymbol,source){this.__evaluateDataPrecedence(state)&&(forwardStateSymbol?this.__writeState(state,source):this.__setInternalState(state,source))}__setIsActive(valueNew){this.__isActive!==valueNew&&(this.__isActive=valueNew,this.__element[0].classList.toggle("TcHmi_Controls_Beckhoff_TcHmiCheckbox-active",this.__isActive),this.__element[0].classList.toggle("tchmi-checkbox-active",this.__isActive))}__onResized(){return()=>{let width=this.getRenderedWidth();if(!width)return;let height=this.getRenderedHeight();height&&(this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.left&&(width-=this.__borderWidth.left),"None"!==this.__borderStyle.right&&(width-=this.__borderWidth.right)),this.__borderWidth&&this.__borderStyle&&("None"!==this.__borderStyle.top&&(height-=this.__borderWidth.top),"None"!==this.__borderStyle.bottom&&(height-=this.__borderWidth.bottom)),this.__element[0].style.setProperty("--square-size",Math.min(width,height)+"px"))}}__onPressed(){return()=>{!0===TcHmi.Access.checkAccess(this,"operate")&&this.getIsEnabled()&&(this.__userInput?this.__userInput.userData=!this.__state:this.__userInput={userData:!this.__state,originalData:this.__state},this.__restoreUserInputOnLoad&&this.__storage?.set("userInput",this.__userInput),this.__writeState(!this.__state,"userInteraction"))}}__setToggleState(valueNew,forwardStateSymbol,process){let convertedValue=TcHmi.ValueConverter.toToggleState(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ToggleState")),convertedValue!==this.__toggleState&&(this.__toggleState=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ToggleState"}),TcHmi.EventProvider.raise(this.__id+".onToggleStateChanged"),process&&this.__processToggleState())}setToggleState(valueNew){this.__evaluateDataPrecedence("Active"===valueNew)&&this.__setToggleState(valueNew,!0,!0)}getToggleState(){return this.__toggleState}__processToggleState(forwardStateSymbol=!0){this.__writeState("Active"===this.__toggleState,"attribute")}setToggleStateIconColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("ToggleStateIconColor"));let resolverInfo=this.__objectResolvers.get("toggleStateIconColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("toggleStateIconColor",{resolver:resolver,watchCallback:this.__onResolverForToggleStateIconColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForToggleStateIconColorWatchCallback)})}getToggleStateIconColor(){return this.__toggleStateIconColor}__processToggleStateIconColor(){TcHmi.StyleProvider.processStrokeColor(this.__element[0].getElementsByClassName("TcHmi_Controls_Beckhoff_TcHmiCheckbox-toggle-state-icon"),this.__toggleStateIconColor)}__processStateSymbolResult(data){data.error===TcHmi.Errors.NONE?!1!==data.value&&!0!==data.value||this.__processState(data.value,!1,this.__stateSymbol.getExpression().toString()):data.details&&TCHMI_CONSOLE_LOG_LEVEL>=1&&TcHmi.Log.errorEx("[Source=Control, Module="+this.__type+(__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN)!==this.__type?", Origin="+__classPrivateFieldGet(TcHmiCheckbox,_a,"f",_TcHmiCheckbox_tchmiFQN):"")+", Id="+this.getId()+", Attribute=StateSymbol, "+(this.__stateSymbol?"Symbol="+this.__stateSymbol.getExpression().toString():"")+"] "+TcHmi.Log.buildMessage(data.details))}__onStateSymbolWatch(){return data=>{this.__processStateSymbolResult(data)}}setStateSymbol(valueNew){let newSymbol=valueNew;if(null===newSymbol){let symbolExpression=this.getAttributeDefaultValueInternal("StateSymbol");symbolExpression&&(newSymbol=new TcHmi.Symbol(symbolExpression))}if(this.__stateSymbol!==newSymbol){if(this.__destroyStateSymbolWatch&&(this.__destroyStateSymbolWatch(),this.__destroyStateSymbolWatch=null),this.__stateSymbol&&this.__stateSymbol.destroy(),newSymbol instanceof TcHmi.Symbol)if(this.__stateSymbol=newSymbol,this.__isAttached)this.__destroyStateSymbolWatch=this.__stateSymbol.watch(this.__onStateSymbolWatch());else{let referenceDelegation=this.__stateSymbol.getReferenceDelegation();referenceDelegation&&(referenceDelegation.preload=done=>{this.__stateSymbol?.readEx2({forceParallel:!0,forceReadWriteGroup:1},(data=>{this.__processStateSymbolResult(data),done()}))})}else void 0===this.__stateSymbol?this.__stateSymbol=null:(this.__stateSymbol=null,this.__processState(!1,!1,"attribute"));TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"StateSymbol"})}}getStateSymbol(){return this.__stateSymbol}setRestoreUserInputOnLoad(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("RestoreUserInputOnLoad")),convertedValue!==this.__restoreUserInputOnLoad&&(this.__restoreUserInputOnLoad=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"RestoreUserInputOnLoad"}),this.__processRestoreUserInputOnLoad())}getRestoreUserInputOnLoad(){return this.__restoreUserInputOnLoad}__processRestoreUserInputOnLoad(){this.__restoreUserInputOnLoad?this.__userInput&&this.__storage?.set("userInput",this.__userInput):this.__storage?.delete("userInput")}resetUserInput(restoreOriginalValue){this.__userInput&&(restoreOriginalValue&&this.__writeState(this.__userInput.originalData,"userInteraction"),this.__userInput=null,this.__storage?.delete("userInput"))}setDataPrecedence(valueNew){let convertedValue=TcHmi.ValueConverter.toEnum(valueNew,TcHmi.DataPrecedence);null===convertedValue&&(convertedValue=TcHmi.ValueConverter.toEnum(this.getAttributeDefaultValueInternal("DataPrecedence"),TcHmi.DataPrecedence,TcHmi.DataPrecedence.Data)),convertedValue!==this.__dataPrecedence&&(this.__dataPrecedence=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"DataPrecedence"}))}getDataPrecedence(){return this.__dataPrecedence}__evaluateDataPrecedence(incoming){if(!this.__userInput||void 0===this.__dataPrecedence)return!0;switch(this.__dataPrecedence){case TcHmi.DataPrecedence.Data:return this.__userInput=null,this.__storage?.delete("userInput"),!0;case TcHmi.DataPrecedence.UserInput:return this.__userInput.originalData!==incoming&&(this.__userInput.originalData=incoming,this.__storage?.set("userInput",this.__userInput)),!1;case TcHmi.DataPrecedence.ChangedDataOnly:return this.__userInput.originalData!==incoming&&(this.__userInput=null,this.__storage?.delete("userInput"),!0)}}setText(valueNew){let convertedValue=TcHmi.ValueConverter.toString(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("Text")),convertedValue!==this.__text&&(this.__text=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"Text"}),this.__processText())}getText(){return this.__text}__processText(){if(void 0===this.__text)return;this.__textDiv||(this.__textDiv=document.createElement("div"),this.__textDiv.classList.add("TcHmi_Controls_Beckhoff_TcHmiCheckbox-label"),this.__processTextBackgroundColor(),this.__element[0].appendChild(this.__textDiv));let text=this.__text??"";this.__ignoreEscapeSequences||(text=tchmi_decode_control_characters(text)),this.__textDiv.textContent=text}setIgnoreEscapeSequences(valueNew){let convertedValue=TcHmi.ValueConverter.toBoolean(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("IgnoreEscapeSequences")),convertedValue!==this.__ignoreEscapeSequences&&(this.__ignoreEscapeSequences=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"IgnoreEscapeSequences"}),this.__processText())}getIgnoreEscapeSequences(){return this.__ignoreEscapeSequences}setTextPosition(valueNew){let convertedValue=TcHmi.ValueConverter.toEnum(valueNew,{Left:"Left",Right:"Right"},null);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextPosition")),convertedValue!==this.__textPosition&&(this.__textPosition=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextPosition"}),this.__processTextPosition())}getTextPosition(){return this.__textPosition}__processTextPosition(){if("Left"===this.__textPosition)this.__element[0].classList.add("text-left");else this.__element[0].classList.remove("text-left")}setTextHorizontalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toHorizontalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextHorizontalAlignment")),convertedValue!==this.__textHorizontalAlignment&&(this.__textHorizontalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextHorizontalAlignment"}),this.__processTextHorizontalAlignment())}getTextHorizontalAlignment(){return this.__textHorizontalAlignment}__processTextHorizontalAlignment(){switch(this.__textHorizontalAlignment){case"Left":default:this.__element[0].style.justifyItems="start",this.__element[0].style.textAlign="start";break;case"Center":this.__element[0].style.justifyItems="center",this.__element[0].style.textAlign="center";break;case"Right":this.__element[0].style.justifyItems="end",this.__element[0].style.textAlign="end"}}setTextVerticalAlignment(valueNew){let convertedValue=TcHmi.ValueConverter.toVerticalAlignment(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextVerticalAlignment")),convertedValue!==this.__textVerticalAlignment&&(this.__textVerticalAlignment=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextVerticalAlignment"}),this.__processTextVerticalAlignment())}getTextVerticalAlignment(){return this.__textVerticalAlignment}__processTextVerticalAlignment(){switch(this.__textVerticalAlignment){case"Top":this.__element[0].style.alignItems="start",this.__element[0].style.alignContent="start";break;case"Center":default:this.__element[0].style.alignItems="center",this.__element[0].style.alignContent="center";break;case"Bottom":this.__element[0].style.alignItems="end",this.__element[0].style.alignContent="end"}}setTextFontFamily(valueNew){let convertedValue=TcHmi.ValueConverter.toFontFamily(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontFamily")),convertedValue!==this.__textFontFamily&&(this.__textFontFamily=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontFamily"}),this.__processTextFontFamily())}getTextFontFamily(){return this.__textFontFamily}__processTextFontFamily(){TcHmi.StyleProvider.processFontFamily(this.__element,this.__textFontFamily)}setTextFontSize(valueNew){let convertedValue=TcHmi.ValueConverter.toNumber(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSize")),convertedValue!==this.__textFontSize&&(this.__textFontSize=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSize"}),this.__processTextFontSize())}getTextFontSize(){return this.__textFontSize}__processTextFontSize(){TcHmi.StyleProvider.processFontSize(this.__element,this.__textFontSize,this.__textFontSizeUnit)}setTextFontSizeUnit(valueNew){let convertedValue=TcHmi.ValueConverter.toFontSizeUnit(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontSizeUnit")),convertedValue!==this.__textFontSizeUnit&&(this.__textFontSizeUnit=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontSizeUnit"}),this.__processTextFontSizeUnit())}getTextFontSizeUnit(){return this.__textFontSizeUnit}__processTextFontSizeUnit(){this.__processTextFontSize()}setTextFontStyle(valueNew){let convertedValue=TcHmi.ValueConverter.toFontStyle(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontStyle")),convertedValue!==this.__textFontStyle&&(this.__textFontStyle=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontStyle"}),this.__processTextFontStyle())}getTextFontStyle(){return this.__textFontStyle}__processTextFontStyle(){TcHmi.StyleProvider.processFontStyle(this.__element,this.__textFontStyle)}setTextFontWeight(valueNew){let convertedValue=TcHmi.ValueConverter.toFontWeight(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextFontWeight")),convertedValue!==this.__textFontWeight&&(this.__textFontWeight=convertedValue,TcHmi.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"TextFontWeight"}),this.__processTextFontWeight())}getTextFontWeight(){return this.__textFontWeight}__processTextFontWeight(){TcHmi.StyleProvider.processFontWeight(this.__element,this.__textFontWeight)}setTextColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextColor"));let resolverInfo=this.__objectResolvers.get("textColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("textColor",{resolver:resolver,watchCallback:this.__onResolverForTextColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextColorWatchCallback)})}getTextColor(){return this.__textColor}__processTextColor(){TcHmi.StyleProvider.processTextColor(this.__element,this.__textColor)}
/**
                 * Returns the current background value.
                 * @preserve (Part of the public API)
                 */getTextBackgroundColor(){return this.__textBackgroundColor}
/**
                 * Sets the background value and calls the associated process function (processBackground).
                 * @param valueNew
                 * @preserve (Part of the public API)
                 */setTextBackgroundColor(valueNew){let convertedValue=TcHmi.ValueConverter.toObject(valueNew);null===convertedValue&&(convertedValue=this.getAttributeDefaultValueInternal("TextBackgroundColor"));let resolverInfo=this.__objectResolvers.get("textBackgroundColor");resolverInfo&&(resolverInfo.watchDestroyer&&resolverInfo.watchDestroyer(),resolverInfo.resolver.destroy());let resolver=new TcHmi.Symbol.ObjectResolver(convertedValue,this);this.__objectResolvers.set("textBackgroundColor",{resolver:resolver,watchCallback:this.__onResolverForTextBackgroundColorWatchCallback,watchDestroyer:resolver.watch(this.__onResolverForTextBackgroundColorWatchCallback)})}__processTextBackgroundColor(){this.__textDiv&&TcHmi.StyleProvider.processBackgroundColor(this.__textDiv,this.__textBackgroundColor)}__processAllBackground(){super.__processAllBackground(),this.__elementCheckbox[0].style.backgroundColor=this.__element[0].style.backgroundColor,this.__element[0].style.backgroundColor="",this.__elementCheckbox[0].style.backgroundImage=this.__element[0].style.backgroundImage,this.__element[0].style.backgroundImage=""}__processBorderRadius(){super.__processBorderRadius(),TcHmi.StyleProvider.processBorderRadius(this.__elementCheckbox,this.__borderRadius)}}_TcHmiCheckbox_tchmiFQN={value:"TcHmi.Controls.Beckhoff."+(_a=TcHmiCheckbox).name},Beckhoff.TcHmiCheckbox=TcHmiCheckbox}(Controls.Beckhoff||(Controls.Beckhoff={}))}(TcHmi.Controls||(TcHmi.Controls={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("TcHmiCheckbox","TcHmi.Controls.Beckhoff",TcHmi.Controls.Beckhoff.TcHmiCheckbox);