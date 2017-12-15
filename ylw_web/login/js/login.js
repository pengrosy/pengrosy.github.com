// JavaScript Document
	var oMob=document.getElementById('mob');
	var oPsd=document.getElementById('psd');
	var oLogin=document.getElementById('loginBtn');
	var oTipsM=document.getElementById('m_tips');
	var oTipsP=document.getElementById('p_tips');
	var oAutoLogin=document.getElementById('autoLogin');
	
	
	
	oAutoLogin.onclick=function()
	{
		if(this.className=='auto_login')
		{
			this.className='active';
		}
		else
		{
			this.className='auto_login';
		}
		
	};
	
	oLogin.onclick=function(){
		if(oMob.value==''){
			oTipsM.style.display='block';	
		}else{
			oTipsM.style.display='none';		
		}
		if(oPsd.value==''){
			oTipsP.style.display='block';	
		}else{
			oTipsP.style.display='none';		
		}
	};
	
	oMob.onfocus=function(){
		this.style.border="1px solid #ff7676";
		if(this.value==''){
			oTipsM.style.display='none';	
		}
	};
	
	oMob.onblur=oPsd.onblur=function()
	{
		this.style.border="1px solid #ccc";
	};
	
	
	oPsd.onfocus=function(){
		this.style.border="1px solid #ff7676";
		if(this.value==''){
			oTipsP.style.display='none';	
		}
	};
