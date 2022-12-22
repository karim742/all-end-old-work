const sliderContainer = document.querySelector('#slider_container');
const slide = document.querySelector('.slides');
const nextBtn = document.getElementById('next_btn');
const prevBtn = document.getElementById('prev_btn');
const interval = 3000;


let slides = document.querySelectorAll('.slide');
let index = 1;
let slideId;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

const slideWidth = slides[index].clientWidth;

slide.style.transform = `translateX(${-slideWidth * index}px)`;


const startSlide = () =>{
	slideId = setInterval(() =>{
		index++;
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
			slide.style.transition = `0.7s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
		}, interval);
}

slide.addEventListener('transitionend', () =>{
	slides = document.querySelectorAll('.slide');
		if(slides[index].id === firstClone.id) {
			slide.style.transition = `none`;
			index = 1;
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
		}
		if(slides[index].id === lastClone.id) {
			slide.style.transition = `none`;
			index = slides.length - 2;
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
		}
});

const moveToNextSlide = () =>{
	slides = document.querySelectorAll('.slide');
		if(index >= slides.length - 1) return;
			index++;
			slide.style.transform = `translateX(${-slideWidth * index}px)`;
			slide.style.transition = `0.7s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
}

const moveToprevSlide = () =>{
	if(index <= 0) return;
		index--;
		slide.style.transform = `translateX(${-slideWidth * index}px)`;
		slide.style.transition = `0.7s all cubic-bezier(0.67, 0.01, 0, 0.99)`;
}
				

sliderContainer.addEventListener('mouseenter', ()=>{
	clearInterval(slideId);
});

sliderContainer.addEventListener('mouseleave', startSlide);

nextBtn.addEventListener('click', moveToNextSlide);
prevBtn.addEventListener('click', moveToprevSlide);


startSlide();






// clickable scarch icon  sIcon.addEventListener('onmouseover', ()=>

const sIcon = document.getElementById('target_icon');
const scarchInput = document.getElementById('scarch');


sIcon.addEventListener('click', ()=>{
	sIcon.classList.add('scarch-icon');
	scarchInput.style.transition = '0.5s all linear';
	scarchInput.style.display = 'initial';
});


// scroll manu bar lock top in the document

function scrollFunction(){
	let manuBar = document.querySelector('#menu_section');
	if(document.body.scrollTop > 95 || document.documentElement.scrollTop > 95) {
		manuBar.classList.add('lockMenu');
	}else{
		manuBar.classList.remove('lockMenu');
	}
}




// fine log data main info show

let profiles = document.querySelectorAll('.studentName');
let loginDiv = document.querySelectorAll('.float-right');
let guestMessage = document.querySelector('#guestMessage')
let infoBody = document.querySelector('#infoBody')

if(localStorage.getItem('loginData')){
	profiles.forEach(profile=>{
		profile.style.display = 'initial';
	});

	loginDiv.forEach(login=>{
		login.style.display = 'none';
	})


	guestMessage.style.display = 'none';
	infoBody.style.display = 'initial';
}

let profileName = document.querySelector('.studentName');
let y = localStorage.getItem('signupData');

let currentData = JSON.parse(y)

profileName.innerHTML = currentData.name;


let profileImg = document.querySelector('#profile');
let logOutBtn = document.querySelector('#logOut');

profileImg.addEventListener('click',function(){
	logOutBtn.classList.toggle('logOutShow')
})


logOutBtn.addEventListener('click',function(){
	localStorage.removeItem('signupData');
	localStorage.removeItem('loginData');
	location.href = 'index.html'
})

