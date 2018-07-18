var marginY = 0;
var destination = 0;
var speed = 1; 
var scroller = null;

function initScroll(elementId) {

	destination = document.getElementById(elementId).offsetTop;
	console.log(marginY)

	scroller = setTimeout (function (){
		initScroll(elementId);
	}, 1);

	marginY = marginY + speed;
	speed += 2;	

	if (marginY >= destination) {
	  clearTimeout(scroller);
	  speed = 1;
	}

	window.scroll(0, marginY - 200);
}

window.onscroll = function(){
	marginY = this.pageYOffset;	
};


function backScroll(){
	scroller = setTimeout(function(){
		backScroll();
	}, 1);

	marginY = marginY - speed;


	if(marginY <= destination){
		clearTimeout(scroller);
	}	

	window.scroll(0, marginY- 200);
}

 (function(){
	    let indice = 1,
	        quantidadeBanners = 4

	    function trocaBanner(numeroBanner){
	        $('#home-banner').removeClass()
	        $('#home-banner').addClass('banner'+ numeroBanner)
	    }
	    setInterval(function(){
	        if (indice>quantidadeBanners){
	            indice = 1
	        }

	        trocaBanner(indice)

	        indice++

	    },5000)
	})()
