/* javascript DOM Model */

{
    //innerHTML mens content print kri ne aape
    let dom1=document.getElementById('heading').innerHTML
    console.log(dom1);

    //id element id print kre
    let dom2=document.getElementById('heading').id
    console.log(dom2);

    //classname element class print kre
    let dom3=document.getElementById('heading').className
    console.log(dom3);

    //classlist class ni value print kre
    let dom4=document.getElementById('heading').classList
    console.log(dom4);

    //innerHTML means je text tame lakhelo hoy te print kre but new text browser ma change thay file ma no thay
    // let dom5=document.getElementById('heading').innerHTML = 'hello wold'
    // console.log(dom5);

    //innertext tag ni under no text print kri ne aape
    let dom6=document.getElementById('heading').innerText
    console.log(dom6);
 
      //textContent menas under no  tag no print thay but space print thase
    let dom7=document.getElementById('heading').textContent
    console.log(dom7);

     //innerHTML means tame koy  span tag ma write krelu hoy te tag pn print thase
    let dom8=document.getElementById('heading').innerHTML
    console.log(dom8);

}

/* different between innerHTML , textContent , innerText in javascript */

{
     //innertext tag ni under no text print kri ne aape space no add thay
    let dom6=document.getElementById('heading').innerText
    console.log(dom6);

    //textContent menas inside tag no print thay but space print thase
    let dom7=document.getElementById('heading').textContent 
    console.log(dom7);

    //innerHTML means tame koy span tag ma write krelu hoy te tag pn print thase
    let dom8=document.getElementById('heading').innerHTML
    console.log(dom8);

}