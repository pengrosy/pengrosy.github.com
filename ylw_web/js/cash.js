// JavaScript Document

window.onload=function()
{
	var oGetBtn=document.getElementById('getBtn');
	var oShowBox=document.getElementById('show_box');
	var oClosed=document.getElementById('closed');
	oGetBtn.onclick=function()
	{
		oShowBox.style.display="block";
	};
	oClosed.onclick=function()
	{
		oShowBox.style.display="none";
	};
};
