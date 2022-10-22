// main.js
/*---------------------------------------------------*/
/*  검색
/*---------------------------------------------------*/
$('.search-placeholder').click(function(){
	$(this).hide();
	$('#search').show();
	$('#search').focus();
})

/*---------------------------------------------------*/
/*  추천 일자리
/*---------------------------------------------------*/
const fj_slides = document.querySelector('.fj-slide-list'); 
const fj_slideImg = document.querySelectorAll('.fj-slide-list__li');
const fj_slideCount = fj_slideImg.length;
let fj_currentIdx = 0; 
const fj_prev = document.querySelector('.fj-slide-prev'); 
const fj_next = document.querySelector('.fj-slide-next'); 
const fj_slideWidth = 350; 

function fjMoveSlide(num) {
  fj_slides.style.left = -num * 375 + 'px';
  fj_currentIdx = num;
}

fj_prev.addEventListener('click', function () {
  if (fj_currentIdx !== 0) fjMoveSlide(fj_currentIdx - 1);
});

fj_next.addEventListener('click', function () {
	if (fj_slideCount < 4){
		$(".fj-slide-list").css('style', 0);
	} else if(fj_currentIdx !== fj_slideCount - 3){
		fjMoveSlide(fj_currentIdx + 1);
	}
});



/*---------------------------------------------------*/
/*  지식재산전문가
/*---------------------------------------------------*/
$(document).ready(function(){
	buttonAttr();
})

$('ul.ip-tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.ip-tabs li').removeClass('active');
	$('.ip-slide-list').removeClass('active');

	$(this).addClass('active');
	$("#"+tab_id).addClass('active');

	$('.ip-slide-list').css('left',0);

	buttonAttr();
})

function buttonAttr(){
	for(var i=1; i < 9; i++){
		if($("#tab-" + i).hasClass('active') == true){
			$('.ip-slide-prev').addClass('prev-' + i);
			$('.ip-slide-next').addClass('next-' + i);
			$('#tab-' + i).find('.ip-slide-list__li').addClass('li-' + i);

			const ip_slides = document.querySelector('#tab-' + i); 
			const ip_slideImg = document.querySelectorAll('.li-' + i);
			const ip_slideCount = ip_slideImg.length;
			let ip_currentIdx = 0; 
		
			function ipMoveSlide(num) {
				ip_slides.style.left = -num * 375 + 'px';
				ip_currentIdx = num;
			}

			$('.prev-' + i).click(function(){
				if (ip_currentIdx !== 0) ipMoveSlide(ip_currentIdx - 1);
			})

			$('.next-' + i).click(function(){
				if (ip_slideCount < 4){
					$("#tab-" + i).css('style', 0);
				} else if(ip_currentIdx !== ip_slideCount - 3){
					ipMoveSlide(ip_currentIdx + 1);
				}
			})
		}else{
			$('.ip-slide-prev').removeClass('prev-' + i);
			$('.ip-slide-next').removeClass('next-' + i);
			$('#tab-' + i).find('.ip-slide-list__li').removeClass('li-' + i);
		}
	}
}
/*---------------------------------------------------*/
/*  일자리 찾기
/*---------------------------------------------------*/
$('ul.sj-tab li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.sj-tab li').removeClass('active');
	$('.sj-content').removeClass('active');

	$(this).addClass('active');
	$("#"+tab_id).addClass('active');
})

$(".sj-like").click(function(){
	$(this).toggleClass('active');
});


/*---------------------------------------------------*/
/*  신입/경력 취업자
/*---------------------------------------------------*/
const nc_slides = document.querySelector('.nc-slide-list'); 
const nc_slideImg = document.querySelectorAll('.nc-slide-list__li');
const nc_slideCount = nc_slideImg.length;
let nc_currentIdx = 0; 
const nc_prev = document.querySelector('.nc-slide-prev'); 
const nc_next = document.querySelector('.nc-slide-next'); 
const nc_slideWidth = 350; 

function ncMoveSlide(num) {
  nc_slides.style.left = -num * 375 + 'px';
  nc_currentIdx = num;
}

nc_prev.addEventListener('click', function () {
  if (nc_currentIdx !== 0) ncMoveSlide(nc_currentIdx - 1);
});

nc_next.addEventListener('click', function () {
	if (nc_slideCount < 4){
		$(".nc-slide-list").css('style', 0);
	} else if(nc_currentIdx !== nc_slideCount - 3){
		ncMoveSlide(nc_currentIdx + 1);
	}
});