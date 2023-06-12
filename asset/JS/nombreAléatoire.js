
Math.random()
let buttun = document.getElementById('fraiche') ;
let nbre = document.getElementById('lenombre') ;


function random(min, max){
    return Math.round(Math.random()*(max-min) + min)
};
    
    
buttun.addEventListener('click', function(){
    let nb = random(1, 100);
                
    nbre.textContent = nb;
});

