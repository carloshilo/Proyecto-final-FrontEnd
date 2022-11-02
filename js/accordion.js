const accordion = document.getElementsByClassName('contenidoBox');
for (let i in accordion) {
    accordion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    });
};