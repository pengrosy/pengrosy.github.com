	var oMob=document.getElementById('mob');
	var oPsd=document.getElementById('psd');
	var oRePsd=document.getElementById('re_psd');
	var oTipM=document.getElementById('tip_m');
	var oCode=document.getElementById('code');
	var oRegBtn=document.getElementById('registerBtn');
	var oHide=getClass(document,'hide');
	var oAgree=document.getElementById('agree');
	
	 oAgree.onclick=function()
	 {
		if(this.className=='agree_terms')
		{
			this.className='agreeActive';
		}
		else
		{
			this.className='agree_terms';
		} 
	 };
	
	oRegBtn.onclick=function(){
		oMob.className=oMob.value==''?'alert':'';
		oHide[0].className=oPsd.value==''?'show':'hide';
		oHide[1].className=oRePsd.value==''?'show':'hide';
		
	};

	oMob.onkeyup=function(){
		if(/^[1][3578]\d{9}$/.test(this.value)){
			oTipM.innerHTML='手机号码正确';	
			oTipM.style.color='#ffb533';		
		}else{
			oTipM.innerHTML='请正确输入手机号';
		}
		oTipM.style.display='block';
	};
	
	oPsd.onkeyup=function(){
		pwStrength(this.value);
	};
	
	//判断输入密码的类型  
	function CharMode(iN){  
		if (iN>=48 && iN <=57) //数字  
			return 1;  
		if (iN>=65 && iN <=90) //大写  
			return 2;  
		if (iN>=97 && iN <=122) //小写  
			return 4;  
		else  
			return 8;   
	}
	//bitTotal函数  
	//计算密码模式  
	function bitTotal(num){  
		modes=0;  
		for (i=0;i<4;i++){  
			if (num & 1) modes++;  
			num>>>=1;  
		}
		return modes;  
	}
	//返回强度级别  
	function checkStrong(sPW){  
		if (sPW.length<6)  
			return 0; //密码太短，不检测级别
		Modes=0;  
		for (i=0;i<sPW.length;i++){  
			//密码模式  
			Modes|=CharMode(sPW.charCodeAt(i));  
		}
		return bitTotal(Modes);  
	}
  
	//显示颜色  
	function pwStrength(pwd){  
		Dfault_color="#f1d0b9";		//默认颜色
		L_color="#FF0000";		//低强度的颜色，且只显示在最左边的单元格中
		M_color="#FF9900";		//中等强度的颜色，且只显示在左边两个单元格中
		H_color="#33CC00";		//高强度的颜色，三个单元格都显示
		if (pwd==null||pwd==''){  
			Lcolor=Mcolor=Hcolor=Dfault_color;
		}  
		else{  
			S_level=checkStrong(pwd);  
			switch(S_level) {  
			case 0:  
				Lcolor=Mcolor=Hcolor=Dfault_color;
				break;
			case 1:  
				Lcolor=L_color;
				Mcolor=Hcolor=Dfault_color;
				break;  
			case 2:  
				Lcolor=Mcolor=M_color;  
				Hcolor=Dfault_color;  
				break;  
			default:  
				Lcolor=Mcolor=Hcolor=H_color;  
			}  
		}  
		document.getElementById("low").style.background=Lcolor;  
		document.getElementById("middle").style.background=Mcolor;  
		document.getElementById("high").style.background=Hcolor;  
		return;
	}
	
	//获取class元素
	function getClass(oPar,sClass){
		var aEle=(oPar||document).getElementsByTagName('*');
		var arr=[];
		var res=new RegExp('\\b'+sClass+'\\b','i');
	
		for(var i=0;i<aEle.length;i++){
			if(res.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}