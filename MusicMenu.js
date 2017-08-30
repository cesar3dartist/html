// JavaScript Document
	function setValue(val)
		{
			parent.location.hash = val;
	
		}
	function setValues(val1, val2)
		{
			parent.location.hash = val1+"#"+val2;
		}
	$(function(){
		$("#form-group").wrapInner("<table cellspacing='30'><tr>");
		$(".post").wrap("<td></td>");
		$("body").mousewheel(function(event, delta) {
			this.scrollLeft -= (delta * 30);
			event.preventDefault();
		});
	});