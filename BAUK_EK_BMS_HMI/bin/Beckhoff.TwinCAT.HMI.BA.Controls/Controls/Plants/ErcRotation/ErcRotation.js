var TcHmi;!function(t){!function(i){!function(e){!function(s){class n extends e.System.BaseTemplate{constructor(t,e,s){super(t,e,s),this.__defaultBaTemplateDescription=n.BaTemplateDescription,this.__legendIconHandler=new i.Components.LegendIconHandler,this.__diffPrssSwiLegendIconHandler=new i.Components.LegendIconHandler}__previnit(){this.__diffPrssSwi=t.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.Common.UiIcon",this.__id+"-diff-prss-swi",null,this),null!=this.__diffPrssSwi&&(this.__diffPrssSwi.setConnections({left:16,right:16}).setIcon(i.Icons.HVAC.Pressure_s.path).getElement().addClass("diff-prss-swi"),this.__diffPrssSwi.setConnectionExtensions({bottom:76}),this.__element.append(this.__diffPrssSwi.getElement()),this.__diffPrssSwiLegendIconHandler.icon=i.Icons.HVAC.Pressure_s),this.__main=t.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.Common.UiIcon",this.__id+"-main",null,this),null!=this.__main&&(this.__main.setShowDisplays(!0).setIcon(i.Icons.HVAC.Erc_rotation.path).getElement().addClass("main"),this.__element.append(this.__main.getElement()),this.__legendIconHandler.icon=i.Icons.HVAC.Erc_rotation),super.__previnit()}__init(){super.__init()}__attach(){var t;super.__attach(),this.__legendIconHandler.show(),(null===(t=this.__diffPrssSwi)||void 0===t?void 0:t.getIsAttached())&&this.__diffPrssSwiLegendIconHandler.show()}__detach(){super.__detach(),this.__legendIconHandler.hide(),this.__diffPrssSwiLegendIconHandler.hide()}destroy(){var t,i;this.__keepAlive||(null===(t=this.__main)||void 0===t||t.destroy(),null===(i=this.__diffPrssSwi)||void 0===i||i.destroy(),super.destroy())}__processDisplaysData(){var t,s,n,o,a,l,r,_,d;let h;null===(t=this.__main)||void 0===t||t.setDisplaysData(null),this.__showSetpoint?(h=null===(s=this.__main)||void 0===s?void 0:s.getDisplay(e.System.UiIconFdbStp.setpointDisplayName),null==h&&(h=null===(n=this.__main)||void 0===n?void 0:n.addDisplay(e.System.UiIconFdbStp.setpointDisplayName,{position:this.__displayPosition,order:2,readOnly:!0,textAttributes:{fontWeight:"Bold",color:i.Color.RGBAColor.TcHmiBlue}})),null===(o=this.__main)||void 0===o||o.updateDisplay(e.System.UiIconFdbStp.setpointDisplayName,{position:this.__displayPosition,baObject:this.__setpoint,value:null==this.__setpoint?"???":void 0})):null===(a=this.__main)||void 0===a||a.removeDisplay(e.System.UiIconFdbStp.setpointDisplayName),this.__showFeedback?(h=null===(l=this.__main)||void 0===l?void 0:l.getDisplay(e.System.UiIconFdbStp.setpointDisplayName),null==h&&(h=null===(r=this.__main)||void 0===r?void 0:r.addDisplay(e.System.UiIconFdbStp.feedbackDisplayName,{position:this.__displayPosition,order:1,readOnly:!0,textAttributes:{fontWeight:"Bold"}})),null===(_=this.__main)||void 0===_||_.updateDisplay(e.System.UiIconFdbStp.feedbackDisplayName,{position:this.__displayPosition,baObject:this.__feedback,value:null==this.__feedback?"???":void 0})):null===(d=this.__main)||void 0===d||d.removeDisplay(e.System.UiIconFdbStp.feedbackDisplayName)}setDisplayPosition(i){let e=t.ValueConverter.toNumber(i);return null==e&&(e=this.getAttributeDefaultValueInternal("DisplayPosition")),tchmi_equal(e,this.__displayPosition)||(this.__displayPosition=e,this.__processDisplayPosition(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"DisplayPosition"})),this}__processDisplayPosition(){var t,i;if(null==this.__displayPosition)return;let e=null===(t=this.__main)||void 0===t?void 0:t.getDisplays();if(null!=e)for(const t of e.keys())null===(i=this.__main)||void 0===i||i.setDisplayPosition(t,this.__displayPosition)}getDisplayPosition(){return this.__displayPosition}setShowFeedbackErc(i){let e=t.ValueConverter.toBoolean(i);return null==e&&(e=this.getAttributeDefaultValueInternal("ShowFeedbackErc")),tchmi_equal(e,this.__showFeedback)||(this.__showFeedback=e,this.__processDisplaysData(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowFeedbackErc"})),this}getShowFeedbackValve(){return this.__showFeedback}setShowSetpointErc(i){let e=t.ValueConverter.toBoolean(i);return null==e&&(e=this.getAttributeDefaultValueInternal("ShowSetpointErc")),tchmi_equal(e,this.__showSetpoint)||(this.__showSetpoint=e,this.__processDisplaysData(),t.EventProvider.raise(this.__id+".onPropertyChanged",{propertyName:"ShowSetpointErc"})),this}getShowSetpointErc(){return this.__showSetpoint}processBaObject(){var e,s,o,a,l,r;if(super.processBaObject(),null===(e=this.__main)||void 0===e||e.setBaObject(null),null===(s=this.__diffPrssSwi)||void 0===s||s.setBaObject(null),null===(o=this.__main)||void 0===o||o.setIsActive(!1),this.__feedback=null,this.__setpoint=null,this.__processDisplaysData(),null==this.baObjectHandler.baObject)return;let _=null;if(this.baObjectHandler.baObject.checkTemplate(n.BaTemplateDefinition,this.baTemplateHandler.baBaTemplateDescription,this,!0)){if(null===(a=this.__main)||void 0===a||a.setBaObject(this.baObjectHandler.baObject),this.__diffPrssSwi){let t=this.baObjectHandler.baObject.getTemplateChild("diffPrssSwi");t?(this.__diffPrssSwi.setBaObject(t),this.__diffPrssSwi.getIsAttached()||(this.__diffPrssSwi.getElement().insertBefore(this.__main.getElement()),this.__diffPrssSwiLegendIconHandler.show())):this.__diffPrssSwi.getIsAttached()&&(this.__diffPrssSwi.getElement().detach(),this.__diffPrssSwiLegendIconHandler.hide())}_=this.baObjectHandler.baObject.getTemplateChild("command"),_&&(null===(r=null===(l=this.__main)||void 0===l?void 0:l.baObjectHandler)||void 0===r||r.tryWatchChildrenBaVariable(_,i.BA.BaParameterId.ePresentValue,i=>{var e;let s=t.ValueConverter.toBoolean(i);null!=s&&(null===(e=this.__main)||void 0===e||e.setIsActive(s))})),this.__feedback=this.baObjectHandler.baObject.getTemplateChild("feedback"),this.__setpoint=this.baObjectHandler.baObject.getTemplateChild("setpoint"),this.__processDisplaysData()}}}s.ErcRotation=n,function(t){t.BaTemplateDefinition={diffPrssSwi:{optional:!0},feedback:{optional:!0},setpoint:{optional:!0},command:{optional:!0}},t.BaTemplateDescription={diffPrssSwi:{identifier:"DiffPrssSwi"},feedback:{identifier:"Motor::Fdb"},setpoint:{identifier:"Motor::Mdlt"},command:{identifier:"Motor::Cmd"}}}(n=s.ErcRotation||(s.ErcRotation={}))}(e.Plants||(e.Plants={}))}(i.Controls||(i.Controls={}))}(t.BuildingAutomation||(t.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Controls.registerEx("ErcRotation","TcHmi.BuildingAutomation.Controls.Plants",TcHmi.BuildingAutomation.Controls.Plants.ErcRotation);