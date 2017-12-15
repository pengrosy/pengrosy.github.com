var showCity = document.getElementById("show_city");
var city = document.getElementById("city");
var allCity = document.getElementById("all_city");
var cityMenu = allCity.getElementsByTagName("h4")[0].getElementsByTagName('a');
var cityList = allCity.getElementsByClassName('cityChoose_show');
var contact = document.getElementsByClassName('contact')[0];
var erweima = document.getElementById("erweima");
var timer = null, timeErweima = null;
// 选择所在城市
showCity.onmouseover = function(){
	this.style.border = '1px solid #ccc';
	this.style.borderBottom = 'none';
	allCity.style.display = 'block';

}
showCity.onmouseout = function(){

	this.style.border = '1px solid #fff';
	allCity.style.display = 'none';

}
allCity.onmouseover = function(){
	showCity.style.border = '1px solid #ccc';
	showCity.style.borderBottom = 'none';
	this.style.display = 'block';

}
allCity.onmouseout = function(){
	showCity.style.border = '1px solid #fff';
	this.style.display = 'none';
}

//选择所有城市列表
for( var i=0; i<cityMenu.length; i++ ){
	cityMenu[i].index = i;
	cityList[i].index = i;
	choP( cityList[i] );
	cityMenu[i].onmouseover = function(){
		for( var j=0; j<cityMenu.length; j++ ){
			cityMenu[j].className = 'none';
			cityList[j].style.display = 'none';
		}
		cityList[this.index].style.display = 'block';
		this.style.borderBottom = '2px solid #ef1111';
	}
	cityMenu[i].onmouseout = function(){
		for( var j=0; j<cityMenu.length; j++ ){
			cityMenu[j].className = 'none';
			cityMenu[j].style.borderBottom = 'none';
		}
	}
	cityList[i].onmouseover = function(){
		cityMenu[this.index].style.borderBottom = '2px solid #ef1111';
	}
	cityList[i].onmouseout = function(){
		for( var j=0; j<cityMenu.length; j++ ){
			cityMenu[j].style.borderBottom = 'none';
		}
	}
}

function choP( place ){
	var a = place.getElementsByTagName('a');
	for( var i=0; i<a.length; i++ ){
		a[i].onclick = function(){
			city.innerHTML = this.innerHTML;
			allCity.style.display='none';
		}
	}
}

//二维码
/*contact.onmouseover = function(){
	clearTimeout(timeErweima);
	this.getElementsByTagName('a')[0].style.color = '#ef1111';
	erweima.style.display = 'block';
}

erweima.onmouseover=function(){
	clearTimeout(timeErweima);
	erweima.style.display = 'block';
}

contact.onmouseout = function(){
	var _this = this;
	var timeErweima = setTimeout(function(){
		_this.getElementsByTagName('a')[0].style.color = '#999';
		erweima.style.display = 'none';
	}, 300);
}
erweima.onmouseout=function()
{ 
	var timeErweima = setTimeout(function(){
		contact.getElementsByTagName('a')[0].style.color = '#ef1111';
		erweima.style.display = 'none';
	}, 300);
	
};*/

//选择目的地
var province = document.getElementById('allProvince');
var places = province.getElementsByClassName('cityChoose_show');
var allPlace = document.getElementById('allPlace').getElementsByTagName('a');

for( var i=0; i<allPlace.length; i++ ){
	places[i].index = i;
	allPlace[i].index = i;
	allPlace[i].onmouseover = function(){
		for( var j=0; j<allPlace.length; j++ ){
			places[j].style.display = 'none';
		}
		this.style.borderBottom = '2px solid #ef1111';
		places[this.index].style.display = 'block';
	}
	allPlace[i].onmouseout = function(){
		this.style.borderBottom = 'none';
		places[this.index].style.display = 'block';
	}

	places[i].onmouseover = function(){
		allPlace[this.index].style.borderBottom = '2px solid #ef1111';
	}
	places[i].onmouseout = function(){
		for( var j=0; j<allPlace.length; j++ ){
			allPlace[j].style.borderBottom = 'none';
		}
	}
}



//目的地

    var oSearch = document.getElementById('search');
    var cancelP = document.getElementById('cancelP');
    var province = document.getElementById('allProvince');
  	var provinces = document.getElementById('allP').getElementsByTagName('a')
  	
  	oSearch.onclick = function(ev){
  	  var ev = ev || window.event;
  	  province.style.display = 'block';
  	  ev.preventDefault();
	  ev.cancelBubble=true;
  	}
	
	
	
  	document.onclick=cancelP.onclick = function(){
      province.style.display = 'none';
    }
  	
  	for( var i=0; i<provinces.length; i++ ){
  	  provinces[i].onclick = function(ev){
    		oSearch.value = this.innerHTML;
    		province.style.display = 'none';
  	  }
  	}