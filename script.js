document.addEventListener('DOMContentLoaded',function(){

    var exitLink=document.querySelector('.exit');
    var exitModal=document.getElementById('exit-modal');
    var exitModalButtons=exitModal.querySelectorAll('button');


    exitLink.addEventListener('click',function(event){

        event.preventDefault();
        exitModal.classList.add('show');
    });

    exitModalButtons.forEach(function(button){

        button.addEventListener('click',function(){
            exitModal.classList.remove('show');
        });
    });
    const yesButton = document.getElementById('yes');

    yesButton.addEventListener('click', function() {
        window.location.href = 'exit.html';
    });


});