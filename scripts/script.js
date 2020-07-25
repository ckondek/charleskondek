

var works=[
            {'opera':'ESTHER','place':'NEW YORK CITY OPERA<br>at LINCOLN CENTER', 'when':'OCT 1990','composer':'Hugo Weisgall'},
            {'opera':'ANNE FRANK', 'place':'INDIANA UNIVERSITY','when':'UPCOMING','composer':'Shulamit Ran'},
            {'opera':'BORGIA INFAMI','place':'WINTER OPERA, ST.LOUIS', 'when':'OCT 2017','composer':'Harold Blumenfeld'},
            {'opera':'BETWEEN TWO WORLDS','place':'LYRIC OPERA<br> OF CHICAGO<br>BIELEFELD, GERMANY', 'when':'1997','composer':'Shulamit Ran'},
            {'opera':'SEASONS IN HELL','place':'CORBETT THEATER, CINCINATTI<br>Albany Records', 'when':'FEB 1996','composer':'Harold Blumenfeld'},
            {'opera':'THE FAN<br><small>(also Director)</small>','place':'LYRIC OPERA<br> OF CHICAGO<br><small>Lyric\'s breezy <bold>The Fan</bold><br>stirs fresh air. <br>Chicago Sun Times</small>', 'when':'FEB 1996','composer':'Lee Goldstein'},
            {'opera':'WILL YOU MARRY ME?','place':'OPERA ENSEMBLE OF NEW YORK<br>Theodore Presser Company', 'when':'1989','composer':'Hugo Weisgall'},
            {'opera':'GINA and<br>the PRINCE of MINTZ','place':'NYS THEATER INSTITUTE, TROY, NY', 'when':'-','composer':'Steve Liebman'},
            {'opera':'EVOL SPELLED<br>BACKWARDS<br> IS LOVE','place':'GOETHE HAUS, DARMSTADT, GERMANY', 'when':'-','composer':'Hugh McGuiness'},
            {'opera':'MARRIAGE OF<br>THE GROCER OF SEVILLE','place':'WGBH-TV CHANNEL 2, BOSTON', 'when':'-','composer':'Greg Saeger'}
          ];

var translations=[
            {'opera':'The ITALIAN STRAW HAT','place':'SANTA FE OPERA<br>CAMDEN FESTIVAL, LONDON', 'when':'','composer':'Nino Rota'},
            {'opera':'WIENER BLUT','place':'WASHINGTON (DC) NATIONAL OPERA', 'when':'','composer':'Johann Strauss, II'},
            {'opera':'The DESPERATE HUSBAND', 'place':'SPOLETO FESTIVAL','when':'','composer':'Domenico Cimarosa'},
            {'opera':'The GRAND DUCHESS<br>BARBE-BLEU','place':'GLIMMERGLASS OPERA', 'when':'','composer':'Jacques Offenbach'},
            {'opera':'VÉRONIQUE','place':'OHIO LIGHT OPERA<br>Newport Classics', 'when':'','composer':'André Messager'},
            {'opera':'ABDUCTION FROM THE SERAGLIO','place':'OPERA GROUP OF BOSTON<br>(for Beverly Sills)', 'when':'','composer':'W. A. Mozart'},

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
