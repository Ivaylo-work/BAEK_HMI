var TcHmi,__awaiter=this&&this.__awaiter||function(e,t,n,l){return new(n||(n=Promise))((function(o,i){function a(e){try{r(l.next(e))}catch(e){i(e)}}function s(e){try{r(l.throw(e))}catch(e){i(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}r((l=l.apply(e,t||[])).next())}))};!function(e){let t;!function(t){let n;!function(n){let l;!function(l){function o(e){return null!=e&&!e.IsTop&&(e.getIsValid()?!!(t.Globals.SubjectInfosWithDialogs.indexOf(e.SubjectInfo.Identifier)>-1||e.hasSpecialVisu())&&!!(e.SubjectInfo.Identifier!=n.SubjectInfos.SpTRm||e instanceof n.BaView&&e.Children.has("X1")):(t.Logger.log(t.Logger.Severity.warn,e.isNotValidText),!1))}l.hasSpecialVisu=o,l.getSpecialVisu=function(l,i,a,s=!1){if(null==l||l.IsTop||!o(l))return;if(!l.getIsValid())return void t.Logger.log(t.Logger.Severity.warn,l.isNotValidText);let r,c,u,d,g,p,m=!1;if(null==i){let t=e.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.System.BaseControl",l.InstancePath+"-base-control",null,e.View.get());null!=t&&(i=t,m=!0)}switch(l.SubjectInfo.Identifier){case n.SubjectInfos.HtgCrv:case n.SubjectInfos.HeatgCrv:case n.SubjectInfos.SpTRm:case n.SubjectInfos.SpRoomTemp:let o=e.Controls.get(l.InstancePath+"-scale");if(null==o&&(o=e.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.Common.Scale",l.InstancePath+"-scale",null,i),null!=o&&o.setShowHeader(!1)),null!=o){let e=t.Components.ContextMenu.createContextMenuAndButton({id:o.getId(),rowEntryOptions:[{cbOnCreated:e=>{t.Locale.Localization.watchText(t.Locale.LangKey.Save,n=>{t.Logger.checkServerResult(t.Logger.Severity.warn,n)&&e.textHandler.setText(n.text)})},onPressed:()=>{null==o||o.eventHandler.raise(t.Controls.Common.Scale.ScaleEvents.onSave),e.menu.close()}},{cbOnCreated:e=>{t.Locale.Localization.watchText(t.Locale.LangKey.Reset,n=>{t.Logger.checkServerResult(t.Logger.Severity.warn,n)&&e.textHandler.setText(n.text)})},onPressed:()=>{null==o||o.eventHandler.raise(t.Controls.Common.Scale.ScaleEvents.onReset),e.menu.close()}}]});null==a||a.controlContainer.addControl(e.button),o.setBaObject(l),null==a||a.setContent(o.getElement()),c=()=>{null==o||o.eventHandler.raise(t.Controls.Common.Scale.ScaleEvents.onSave)},1==s&&(null==a||a.setButtons(t.Components.DialogWindow.Buttons.OkCancelSize)),g=()=>{null==o||o.destroy(),m&&(null==i||i.destroy()),e.button.destroy(),e.menu.destroy()},r=o}break;default:if(l.isTrendObject()){let e=l.InstancePath+"-trend",n=1;for(;t.Globals.CreatedBaseNodes.has(e);)e=l.InstancePath+"-trend-"+n,n++;let o=new t.Charting.Trend(e,i);o.baObjectHandler.setBaObject(l),null==a||a.setContent(o.getElement()),null==a||a.controlContainer.addControl(o.getMenuButton()),o.getElement().addClass("tchmi-ba-trend-in-dialog"),g=()=>{o.destroy(),m&&(null==i||i.destroy())},r=o}else if(l.Identifier.ObjectType===n.ObjectType.eSchedule){let n,o=e.Controls.get(l.InstancePath+"-schedule");null==o&&(o=e.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.Management.Schedule",l.InstancePath+"-schedule",null,i),null!=o&&(o.setOrientation(t.Orientation.horizontal),o.setShowHeader(!1))),null!=o&&(o.setBaObject(l),null==a||a.setContent(o.getElement())),1==s&&(null==a||a.setButtons(t.Components.DialogWindow.Buttons.Cancel),n=null==o?void 0:o.eventHandler.register(t.Controls.Management.Schedule.ScheduleEvents.onChanged,()=>{1==(null==o?void 0:o.hasChanges())?null==a||a.setButtons(t.Components.DialogWindow.Buttons.OkCancel):null==a||a.setButtons(t.Components.DialogWindow.Buttons.Cancel)})),c=()=>__awaiter(this,void 0,void 0,(function*(){null==a||a.stopClosing(),(yield t.Components.DialogWindow.confirm(t.Locale.Localization.getText(t.Locale.LangKey.ConfirmSaveChangesToPlc)))&&1==(yield null==o?void 0:o.writeScheduleToPlc())&&(null==a||a.close())})),d=()=>__awaiter(this,void 0,void 0,(function*(){(null==o?void 0:o.hasChanges())&&(null==a||a.stopClosing(),(yield t.Components.DialogWindow.confirm(t.Locale.Localization.getText(t.Locale.LangKey.ConfirmSaveChangesToPlc)))?(yield null==o?void 0:o.writeScheduleToPlc(),null==a||a.close()):(o.resetChanges(),null==a||a.close()))})),g=()=>{null==o||o.destroy(),m&&(null==i||i.destroy()),null!=n&&n()},r=o}else if(l.Identifier.ObjectType===n.ObjectType.eCalendar){let e=t.Globals.CreatedBaseNodes.get(l.InstancePath+"-calendar-list");null==e&&(e=new t.Components.CalendarList(l.InstancePath+"-calendar-list",i)),e.baObjectHandler.setBaObject(l),null==a||a.setContent(e.getElement()),1==s&&(null==a||a.setButtons(t.Components.DialogWindow.Buttons.Cancel)),r=e}else console.warn("Unknown SubjectInfo passed into getSpecialVisu()!",{subjectIdentifier:l.SubjectInfo,baObj:l})}return c&&(u=null==a?void 0:a.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onConfirmed,c)),d&&(p=null==a?void 0:a.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onClosing,d)),g&&(p=null==a?void 0:a.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onClosed,g)),null==a||a.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onClosed,e=>{e.destroy(),null!=p&&p(),null!=u&&u()}),null!=r&&r.getElement().css({position:"relative",height:"100%",width:"100%"}),null==r?void 0:r.getElement()}}(l=n.Helper||(n.Helper={}));class o{constructor(e){this.__defaultBaTemplateDescription=e}static getResultingBaTemplateDescription(e,t){return this.__mergeDesignerDescIntoDefaultDesc(e,JSON.parse(JSON.stringify(t)))}static __mergeDesignerDescIntoDefaultDesc(e,t){let l;for(let o in e){l=e[o];let i=t[o];"string"==typeof l?""!==l&&(i.identifier=l):null!=l&&(null!=l.identifier&&""!==l.identifier&&(i.identifier=l.identifier),null!=l.subTemplate&&n.BaView.isBaTemplateDescriptionWithSubTemplate(i)&&this.__mergeDesignerDescIntoDefaultDesc(l.subTemplate,i.subTemplate))}return t}set defaultBaTemplateDescription(e){this.__defaultBaTemplateDescription=e}get baBaTemplateDescription(){if(null==this.__baBaTemplateDescription){if(null==this.__defaultBaTemplateDescription)throw new Error("Template description must be set before consuming it.");return this.__defaultBaTemplateDescription}return this.__baBaTemplateDescription}setBaTemplateDescriptionInternal(e){return this.__baBaTemplateDescription=e,this}setBaTemplateDescription(e){let n=null;if(null!=e){if(null==this.__defaultBaTemplateDescription)return t.Logger.log(t.Logger.Severity.warn,"Default template description must be defined, before setting template description!"),this;n={},n=o.getResultingBaTemplateDescription(e,this.__defaultBaTemplateDescription)}return tchmi_equal(n,this.__baBaTemplateDescription)||void 0===n||null!=n&&"object"!=typeof n||(this.__baBaTemplateDescription=n),this}getBaTemplateDescription(){return this.__baBaTemplateDescription}}n.BaTemplateHandler=o,n.BaBasicObject.prototype.openNavigationDialog=function(l=!1){let o=t.Globals.CreatedBaseNodes.get(this.Mapping+"-nav-dialog");if(null==o){let i;if(o=new t.Components.DialogWindow(this.Mapping+"-nav-dialog",null,{buttons:l?t.Components.DialogWindow.Buttons.Cancel:t.Components.DialogWindow.Buttons.CancelSize,layout:{width:1e3},controls:[{type:t.Components.ComponentType.Button,settings:{background:{image:t.Icons.ObjectType.StructuredView.path,imageHeight:80,imageHeightUnit:"%",imageWidth:80,imageWidthUnit:"%"}},callback:()=>{this.openParameterDialog()}}],modal:l}),0==this.IsTop)i=this.tryWatchBaVariable(n.BaParameterId.eDescription,e=>{null==o||o.getHeadline().textHandler.setText(e)});else{let e=t.Locale.Localization.getText(t.Locale.LangKey.ProjectStructure);null==o||o.getHeadline().textHandler.setText(e+" "+this.Device.Description)}if(o.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onClosed,e=>{e.destroy(),null==o||o.destroy(),null!=i&&this.stopWatchBaVariable(i)}),n.Helper.hasSpecialVisu(this))n.Helper.getSpecialVisu(this,null,o,!0);else{let n=e.Controls.get(this.Mapping+"-nav-list");n||(n=e.ControlFactory.createEx("TcHmi.BuildingAutomation.Controls.Management.ProjectNavigationTextual",this.Mapping+"-nav-list",null,e.View.get()),null!=n&&(n.setShowHeader(!1).setBaObject(this).setContentPadding({left:0,leftUnit:"px",top:0,topUnit:"px",right:0,rightUnit:"px",bottom:0,bottomUnit:"px"}).getElement().css({position:"relative",height:"100%",width:"100%"}),o.setContent(n.getElement()),o.eventHandler.register(t.Components.DialogWindow.DialogWindowEvents.onClosed,e=>{e.destroy(),null==n||n.closeAllEntries(),null==n||n.destroy()})))}}o.open()}}(n=t.BA||(t.BA={}))}(t=e.BuildingAutomation||(e.BuildingAutomation={}))}(TcHmi||(TcHmi={}));