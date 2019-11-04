

var works=[
            {'opera':'ANNE FRANK', 'place':'UNIVERSITY OF INDIANA','when':'UPCOMING'},
            {'opera':'BORGIA INFAMI','place':'UNIVERSITY OF ST.LOUIS', 'when':'OCT 2017'},
            {'opera':'ESTHER','place':'NEW YORK CITY OPERA', 'when':'OCT 1990'},
            {'opera':'SEASONS IN HELL','place':'CORBETT THEATER, OHIO', 'when':'FEB 1996'}
          ];





$(document).ready(function(){
  var operas = document.getElementById('operas')
  works.forEach(function(item,index){
    var row=document.createElement('div')
    row.classList.add("row")
    var div1=document.createElement('h3')
    var div2=document.createElement('h3')
    div1.innerHTML=item.opera

    div2.innerHTML=item.place

    row.appendChild(div1)
    row.appendChild(div2)
    operas.appendChild(row)


  })
  var $href =$('#menuBar a[href]')
  $href.on('click',function(){
    $('html, body').animate({
       scrollTop: $($.attr(this, 'href')).offset().top -10}, 1500);
     })







})


console.log("here")
