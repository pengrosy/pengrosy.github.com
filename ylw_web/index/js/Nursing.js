// 护理等级评估
  	 var oBox=document.getElementById('bbox');
  	 var aInput=getClass(oBox,'life_ability'); 
  	 var oBtn=document.getElementById('btn'); 
     var score =document.getElementsByClassName('score')[0];
	 var oTishi=document.getElementById('tishi');
     var num = 0, scoreNum = 0;
  	 for(var i=0;i<aInput.length;i++)
  	 {
      aInput[i].index = 0;
      aInput[i].score = 0;
      aInput[i].num = 0;
  		 checkCon(aInput[i]);
  	 }

     oBtn.onclick = function(){
        num = 0;
        for(var i=0;i<aInput.length;i++){
          num += aInput[i].num;
        }
        for(var i=0;i<aInput.length;i++){
         if( num < 20 ){
			 
		  oTishi.style.display="block";
		  
		  setInterval(function()
		  {
			  oTishi.style.display="none";
		  },3000)
		  
          //alert('请输入完整评测信息');
          return;
        }else{
          for(var i=0;i<aInput.length;i++){
            scoreNum += aInput[i].score;
            num += aInput[i].num;
          }
          console.log(scoreNum + ':' + scoreLevel(scoreNum).level);
          score.getElementsByTagName('em')[0].innerHTML = scoreNum;
          score.getElementsByTagName('strong')[0].innerHTML = scoreLevel(scoreNum).level;
        }
      }
      scoreNum = 0;
     }

     function scoreLevel(sco){
      var level = '';
      if( sco >= 80 ){
        level = '自理';
      }else if( sco >= 60 && sco < 79 ){
        level = '半护理';
      }else if( sco >= 50 && sco < 59 ){
        level = '全护理';
      }else{
        level = '专护';
      }
      return {
        score : sco,
        level : level
      }
     }

     function checkCon(con){
      var aCheck=con.getElementsByTagName('em');
      for( var i=0; i<aCheck.length; i++ ){
        aCheck[i].index = i;
        aCheck[i].onclick = function(){
          for( var i=0; i<aCheck.length; i++ ){
            aCheck[i].className = '';
          }
          this.className = 'active';
          this.parentNode.parentNode.num = 1;
          this.parentNode.parentNode.score = 5 - this.index * 5;
        }
      }
     }