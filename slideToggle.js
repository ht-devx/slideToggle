/*-------------------------------------------------
    
    jQuery's slideToggle in pure JS
    [#] Author: HT (@ht-devx)
    [#] Version: 0.9.0
    [#] Last updated: 2024-06-13 7:55PM [GMT-7]
    
    github.com/ht-devx/slideToggle
    
-------------------------------------------------*/

window.slideToggle = function(params){
	let slideToggleInit = (params) => {
		let trigger = params.trigger;
		let content = params.content;
		
		let vs = [trigger, content];
		let vs_present = vs.every(v => typeof v !== "undefined");
		if(vs_present){
			let triggerType = ({}).toString.call(trigger).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
			let contentType = ({}).toString.call(content).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
			
			if(!(triggerType == "null" || contentType == "null")){
			
				/*----- TRIGGER -----*/
				let idTrigger;
				if(triggerType !== "string" && triggerType.slice(0,4) == "html" && triggerType.slice(-7) == "element"){
					idTrigger = trigger;
				} else {
					let tdknr = document.querySelector(trigger);
					idTrigger = tdknr ? tdknr : null
				}
				
				/*----- CONTENT -----*/
				let idContent;
				if(triggerType !== "string" && triggerType.slice(0,4) == "html" && triggerType.slice(-7) == "element"){
					idContent = content;
				} else {
					let dkrzo = document.querySelector(content);
					idContent = dkrzo ? dkrzo : null
				}
				
				/*----- DO THE THING -----*/				
				if(idContent){
					Array.from(idContent.childNodes)?.forEach(node => {
						if(node.nodeType === 3 && node.data.trim().length && (node.parentNode && !node.parentNode.matches("span"))){
							let span = document.createElement("span");
							node.before(span);
							span.appendChild(node);
						}
					})
					
					idContent.classList.add("slidetoggle-content");
					
					if(!idContent.querySelector(".slidetoggle-outer")){
						let outer = document.createElement("div");
						outer.classList.add("slidetoggle-outer");
						idContent.prepend(outer);

						let inner = document.createElement("div");
						inner.classList.add("slidetoggle-inner");
						outer.append(inner);

						idContent.querySelectorAll(":scope > *:not(.slidetoggle-outer)")?.forEach(e => {
							inner.append(e)
						})
					}
					
					/*----- CLICK THE THING -----*/
					if(idTrigger){
						idTrigger.addEventListener("click", () => {
							!idTrigger.matches(".active") ? idTrigger.classList.add("active") : idTrigger.classList.remove("active");
							
							if(idContent){
								!idContent.matches(".active") ? idContent.classList.add("active") : idContent.classList.remove("active");
							}
						});
					}
				}
			}//end: sels do exist
			
			else {
				if(triggerType == "null"){
					console.warn(`[trigger] selector does not exist.`)
				}
				
				if(contentType == "null"){
					console.warn(`[content] selector does not exist.`)
				}
			}//end: if sels don't exist
			
			//console.log(contentType)
		}//end: all params present
	}//end slideToggleInit
	
	document.readyState == "loading" ?
	document.addEventListener("DOMContentLoaded", () => slideToggleInit(params)) :
	slideToggleInit(params);
}
