var TcHmi;!function(e){let n;!function(n){let t;!function(t){let o;function r(n,t){if(!(t instanceof Array))return void console.error("Passed user contents array is not an Array!",t);for(let e=0;e<t.length;e++)if("string"!=typeof t[e].content||"string"!=typeof t[e].userName)return void console.error("Passed user content does not match interface Interfaces.UserContent",t[e]);let o=e.Server.getCurrentUserConfig();if(!o)return void console.error("No user was logged in!");let r=o.name;if(!r)return void console.error("Current logged in user has no user name!");let i=t.find(e=>e.userName===r);i&&n.setTargetContent(i.content)}t.LoadUserDependentContent=function(t,i,s){t instanceof e.Controls.System.TcHmiRegion?s?(o||(o=e.EventProvider.register(t.getId()+".onTargetContentReplaced",()=>{let e=t.getTargetContent();null!=e&&n.Server.UserData.saveLastContent(e)})),t.setTargetContent(null),e.EventProvider.register(n.Server.Events.onBaSiteExtensionLoaded,e=>{e.destroy(),n.Server.UserData.loadLastContent().then(e=>{null==e?r(t,i):t.setTargetContent(e)}).catch(e=>n.Logger.log(n.Logger.Severity.warn,"Loading last user content failed!",e))})):r(t,i):console.error("Passed host region is not a TcHmiRegion!",t)}}(t=n.Functions||(n.Functions={}))}(n=e.BuildingAutomation||(e.BuildingAutomation={}))}(TcHmi||(TcHmi={})),TcHmi.Functions.registerFunctionEx("LoadUserDependentContent","TcHmi.BuildingAutomation.Functions",TcHmi.BuildingAutomation.Functions.LoadUserDependentContent);