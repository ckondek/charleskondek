

var works=[
            {'opera':'ANNE FRANK', 'place':'UNIVERSITY OF INDIANA','when':'UPCOMING','composer':'Shulamit Ran'},
            {'opera':'BORGIA INFAMI','place':'UNIVERSITY OF ST.LOUIS', 'when':'OCT 2017','composer':'Harold Blumenfeld'},
            {'opera':'BETWEEN TWO WORLDS','place':'LYRIC OPERA OF CHICAGO', 'when':'1997','composer':'Shulamit Ran'},
            {'opera':'ESTHER','place':'NEW YORK CITY OPERA', 'when':'OCT 1990','composer':'Hugo Weisgall'},
            {'opera':'SEASONS IN HELL','place':'CORBETT THEATER, OHIO', 'when':'FEB 1996','composer':'Harold Blumenfeld'}
          ];





$(document).ready(function(){
  var operas = document.getElementById('operas')
  works.forEach(function(item,index){
    var row=document.createElement('div')
    row.classList.add("row")
    var div1=document.createElement('h3')
    div1.classList.add('left')
    var div2=document.createElement('h3')
    div2.classList.add('middle')
    var div3=document.createElement('h3')
      div3.classList.add('right')
    div1.innerHTML=item.opera

    div2.innerHTML=item.place
    div3.innerHTML=item.composer

    row.appendChild(div1)
    row.appendChild(div2)
    row.appendChild(div3)
    operas.appendChild(row)


  })
  var $href =$('#menuBar a[href]')
  $href.on('click',function(){
    $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top -10}, 1500);
     })







})


console.log("here")
