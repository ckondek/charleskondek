

var works=[
            {'opera':'ESTHER','place':'NEW YORK CITY OPERA<br>at LINCOLN CENTER', 'when':'OCT 1990','composer':'Hugo Weisgall'},
            {'opera':'ANNE FRANK', 'place':'INDIANA UNIVERSITY','when':'UPCOMING','composer':'Shulamit Ran'},
            {'opera':'BORGIA INFAMI','place':'WINTER OPERA, ST.LOUIS', 'when':'OCT 2017','composer':'Harold Blumenfeld'},
            {'opera':'BETWEEN TWO WORLDS','place':'LYRIC OPERA OF CHICAGO<br>BIELFELD, GERMANY', 'when':'1997','composer':'Shulamit Ran'},
            {'opera':'SEASONS IN HELL','place':'CORBETT THEATER, CINCINATTI<br>Albany Records', 'when':'FEB 1996','composer':'Harold Blumenfeld'},
            {'opera':'THE FAN','place':'LYRIC OPERA OF CHICAGO', 'when':'FEB 1996','composer':'Lee Goldstein'},
            {'opera':'GINA<br> AND THE PRINCE OF MINTZ','place':'NYS THEATER INSTITUTE, TROY, NY', 'when':'-','composer':'Steve Liebman'},
            {'opera':'E','place':'NYS THEATER INSTITUTE, TROY, NY', 'when':'-','composer':'Steve Liebman'}
          ];

var translations=[
            {'opera':'ITALIAN STRAW HAT','place':'SANTA FE OPERA', 'when':'','composer':'Nino Rota'},
            {'opera':'WIENER BLUT','place':'WASHINGTON (DC) NATIONAL OPERA', 'when':'','composer':'Johann Strauss Jr.'},
            {'opera':'DESPERATE HUSBAND', 'place':'SPOLETO FESTIVAL','when':'','composer':'Domenico Cimarosa'},
            {'opera':'BARBE-BLEU','place':'GLIMMERGLASS OPERA', 'when':'','composer':'Jacques Offenbach'}

          ];





$(document).ready(function(){

  var operas = document.getElementById('operas')
  var trans = document.getElementById('translations')

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

  translations.forEach(function(item,index){
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
    trans.appendChild(row)
  })





  var $href =$('#menuBar a[href]')
  $href.on('click',function(){
              $('html, body').animate({scrollTop: $($.attr(this, 'href')).offset().top -10}, 1500);
        })
})
