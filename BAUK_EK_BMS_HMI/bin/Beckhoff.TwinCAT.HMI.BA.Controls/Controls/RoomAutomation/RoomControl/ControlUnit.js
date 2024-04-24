var TcHmi;!function(e){!function(t){!function(n){!function(o){!function(o){class a extends t.Components.TextControl{constructor(e,t,n){super(e,t,n),this.__hasResetSymbol=!1,this.__elementCreated=!1}__init(e){super.__init(e),this.__element.addClass("control-unit"),this.__operationStateLegenIconHandler=new t.Components.LegendIconHandler,this.__resetManualModeLegendIconHandler=new t.Components.LegendIconHandler,this.baObjectHandler=new t.BaObjectHandler(this),this.baTemplateHandler=new t.BA.BaTemplateHandler,this.baInterfaceHandler=new t.BaInterfaceHandler(this),this.baInterfaceHandler.baInterfaceDefinition=n.System.BaseRoomControl.BaInterfaceDef,this.setBaInterfaceSymbolNames(n.System.BaseRoomControl.BaInterfaceSymbolNames)}__attach(){this.__isAttached||(null!=this.__operationStateLegenIconHandler.icon&&this.__operationStateLegenIconHandler.show(),this.__baParent.sideMenuOpen&&null!=this.__resetManualModeLegendIconHandler.icon&&this.__resetManualModeLegendIconHandler.show(),this.__destroyersToCallOnDetach.push(this.__baParent.eventHandler.register(o.Control.ControlEvents.onSideMenuOpened,()=>{null!=this.__resetManualModeLegendIconHandler.icon&&this.__resetManualModeLegendIconHandler.show()})),this.__destroyersToCallOnDetach.push(this.__baParent.eventHandler.register(o.Control.ControlEvents.onSideMenuClosed,()=>{this.__resetManualModeLegendIconHandler.hide()})),super.__attach())}__detach(){this.__isAttached&&(this.__operationStateLegenIconHandler.hide(),this.__resetManualModeLegendIconHandler.hide(),super.__detach())}destroy(){var e,n,o;null===(e=this.__controlContainer)||void 0===e||e.destroy(),null===(n=this.__sideControl)||void 0===n||n.destroy(),null===(o=this.__sideControlHeader)||void 0===o||o.destroy(),null!=this.__subscriptionIds&&(this.__subscriptionIds.forEach(e=>t.Server.subscriptionCollector.remove(e)),delete this.__subscriptionIds),null!=this.__propSymbols&&this.__propSymbols.forEach(e=>{e.symbol.destroy(),e.destroyWatch()}),super.destroy()}processBaObject(){}getSideControl(){if(!this.__sideControlContainer){this.__sideControlContainer=$("<div>").addClass("side-control-container"),this.__sideControlHeader=new t.Components.ControlContainer(this.__id+"-side-control-header",this);let e={type:t.Components.ComponentType.Textblock,name:a.__nameFieldName,settings:{textAttributes:{text:this.__attrHandler.name,horizontalAlignment:"Center"}}};this.__sideControlHeader.addControl(e),null==this.__attrHandler.name&&(null!=this.baObjectHandler.baObject?this.baObjectHandler.tryWatchBaVariable(t.BA.BaParameterId.eInstDescription,e=>{this.setName(e)}):this.baInterfaceHandler.hasSubSymbol("name")&&this.baInterfaceHandler.watchSubSymbol("name",e=>{this.setName(e)})),this.__sideControlContainer.append(this.__sideControlHeader.getElement()),this.__sideControl=new t.Components.ControlContainer(this.__id+"-side-control",this),this.__sideControlContainer.append(this.__sideControl.getElement());let n=()=>{this.__sideControlContainer&&t.BusyHandler.detachBusyIndicator(this.__sideControlContainer)};this.busyHandler.checkForBusyChildren(n)&&this.__sideControlContainer&&t.BusyHandler.appendBusyIndicator(this.__sideControlContainer)}return this.__sideControlContainer}createElement(){this.__controlContainer||(this.__controlContainer=new t.Components.ControlContainer(this.__id+"-control-container",this),this.__iconContainer=$("<div>").addClass("icon-container"),this.__element.append(this.__iconContainer,this.__controlContainer.getElement())),this.__elementCreated=!0}__handleProperty(n,o,a,r){if(!n)return;let s=n[o];if(a=a.bind(this),null!=s)if("string"==typeof s)if(e.Symbol.isSymbolExpression(s)&&s.indexOf("%s%")>-1){const e=t.Helper.String.toServerMapping(s);this.__attrHandler[o+"Mapping"]=e,this.__attrHandler[o]=null,null==this.__subscriptionIds&&(this.__subscriptionIds=[]),this.__subscriptionIds.push(t.Server.subscriptionCollector.add(e,e=>{i(e)}))}else if(e.Symbol.isSymbolExpression(s)){const n=new e.Symbol(s),a=n.watch(e=>{t.Server.checkServerResult(t.Logger.Severity.warn,e)&&i(e.value)});null==this.__propSymbols&&(this.__propSymbols=new Map);let r=this.__propSymbols.get(o);null==r?r={symbol:n,destroyWatch:a}:(r.symbol.destroy(),r.destroyWatch(),r.symbol=n,r.destroyWatch=a)}else i(s);else i(s);else a(null);function i(e){let n;if(null==e)n=null;else if(r instanceof Array){let o=typeof e;if("object"==o||"function"==o)throw Error();if(r.indexOf(o)>-1)n=e;else for(let o=0;o<r.length&&(n=t.Helper.convertToType(e,r[o]),null==n);o++);}else n=t.Helper.convertToType(e,r);a(n)}}__appendOperationStateDisplay(e){var n,r,s,i,l;e?(null==(null===(n=this.__controlContainer)||void 0===n?void 0:n.getControl(a.__operationStateIconName))&&(null===(r=this.__controlContainer)||void 0===r||r.addControl({type:t.Components.ComponentType.Image,name:a.__operationStateIconName,settings:{cssClass:"fixed-size",order:1}})),null!=this.__sideControl&&null==this.__sideControl.getControl(a.__operationStateIconName)&&(this.__sideControl.addControl({type:t.Components.ComponentType.Image,name:a.__operationStateIconName,settings:{cssClass:"fixed-size",order:10}}),null===(s=this.__sideControlContainer)||void 0===s||s.addClass("use-operation-state"))):(null===(i=this.__controlContainer)||void 0===i||i.removeControl(o.LightControl.__operationStateIconName),null!=this.__sideControl&&(null===(l=this.__sideControlContainer)||void 0===l||l.removeClass("use-operation-state"),this.__sideControl.getControl(a.__operationStateIconName)&&this.__sideControl.removeControl(a.__operationStateIconName)))}__appendResetManualOperationStateButton(e){var n;e?null!=this.__sideControl&&(this.__sideControl.getControl(a.__resetManualOperationStateButtonName)||(this.__sideControl.addControl({type:t.Components.ComponentType.Button,name:a.__resetManualOperationStateButtonName,settings:{background:{image:t.Icons.RoomAutomation.ResetManual.path,imageHeight:70,imageHeightUnit:"%",imageWidth:70,imageWidthUnit:"%"},cssClass:"fixed-size",order:11},callback:()=>{this.__attrHandler&&this.__attrHandler.resetManualOperationStateSym&&this.__attrHandler.resetManualOperationStateSym.write(!0,e=>this.logger.checkServerResult(t.Logger.Severity.warn,e))}}),this.__resetManualModeLegendIconHandler.icon=t.Icons.RoomAutomation.ResetManual),this.__isAttached&&this.__resetManualModeLegendIconHandler.show()):(null===(n=this.__sideControl)||void 0===n||n.removeControl(a.__resetManualOperationStateButtonName),this.__resetManualModeLegendIconHandler.hide())}setAttributes(n){if(void 0!==n.baObject&&this.baObjectHandler.setBaObject(n.baObject),super.setAttributes(n),null!=n.resetManualOperationStateSym){let t=n.resetManualOperationStateSym;"string"==typeof t&&e.Symbol.isSymbolExpression(t)&&(this.__attrHandler.resetManualOperationStateSym=new e.Symbol(t))}return null!=n.name&&"string"==typeof n.name&&(n.name.length>0?(this.__attrHandler.name=n.name,this.__processName()):e.Symbol.isSymbolExpression(n.name)&&(this.__attrHandler.nameSym=new e.Symbol(n.name),this.__attrHandler.nameSym.watch(e=>{this.logger.checkServerResult(t.Logger.Severity.warn,e)&&(this.__attrHandler.name=e.value,this.__processName())}))),void 0!==n.type&&(this.__attrHandler.type=n.type),this}getAttributes(){return this.__attrHandler.getRef()}setBaInterface(e){return this.baInterfaceHandler.setBaInterfaceSym(e,()=>this.__processBaInterface()),this}__processBaInterface(){}getBaInterface(){return this.baInterfaceHandler.getBaInterfaceSym()}setBaInterfaceSymbolNames(e){return null!=e&&(this.baInterfaceHandler.baInterfaceSymNames=t.BaInterfaceHandler.convertToBaInterfaceSymbolNames(e)),this}getBaInterfaceSymbolNames(){return this.baInterfaceHandler.baInterfaceDescription}setName(e){return this.__attrHandler.checkAttribute(e,"name",{validator:"string"})?(this.__attrHandler.name=e,this.__processName(),this):this}__processName(){var e;let t=null===(e=this.__sideControlHeader)||void 0===e?void 0:e.getControl(a.__nameFieldName);null==t||t.textHandler.setText(this.__attrHandler.name)}getName(){return this.__attrHandler.name}setBaTemplateDescription(e){return this.baTemplateHandler.setBaTemplateDescription(e),this.processBaObject(),this}getBaTemplateDescription(){return this.baTemplateHandler.getBaTemplateDescription()}}a.__nameFieldName="name-field",a.__resetManualOperationStateButtonName="reset-manual-operation-state-button",a.__operationStateIconName="operation-state-icon",o.ControlUnit=a}(o.RoomControl||(o.RoomControl={}))}(n.RoomAutomation||(n.RoomAutomation={}))}(t.Controls||(t.Controls={}))}(e.BuildingAutomation||(e.BuildingAutomation={}))}(TcHmi||(TcHmi={}));