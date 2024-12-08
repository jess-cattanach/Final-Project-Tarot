let minorDescrip = document.querySelectorAll('.explain');
let minorImages = document.querySelectorAll('.minorArcana');

function hideAll(){
    minorDescrip.forEach(function(el){
        el.style.display = 'none';
    });
}

hideAll();

minorImages.forEach(function(el){
    el.onclick = (e) => {
        hideAll();
       
        switch (e.target.getAttribute('id')){
            case 'cups':
                document.querySelector('#cupsExplain')
                .style.display = 'block'; 
                     
                break;
            case 'pentacles':
                document.querySelector('#pentExplain')
                .style.display = 'block';  
                                  
                break;
            case 'swords':
                document.querySelector('#swordExplain')
                .style.display = 'block';  
                                
                break;
            case 'wands':
                document.querySelector('#wandExplain')
                .style.display = 'block'; 
                                  
                break;
            }
    }
});


let sliderDescrip = document.querySelectorAll('.sliderEx');
let majorImages = document.querySelectorAll('.image-item');

function hideAllMajor(){
    sliderDescrip.forEach(function(el){
        el.style.display = 'none';
    });
}

hideAllMajor();

majorImages.forEach(function(el){
    el.onclick = (e) => {
        hideAllMajor();
       
        switch (e.target.getAttribute('id')){
            case 'theFool':
                document.querySelector('#theFoolEx')
                .style.display = 'block'; 
                     
                break;
            case 'theMagician':
                document.querySelector('#theMagicianEx')
                .style.display = 'block';  
                                  
                break;
            case 'highPriestess':
                document.querySelector('#highPriestessEx')
                .style.display = 'block';  
                                
                break;
            case 'theEmpress':
                document.querySelector('#theEmpressEx')
                .style.display = 'block'; 
                                  
                break;
            case 'theEmperor':
                document.querySelector('#theEmperorEx')
                .style.display = 'block'; 
                         
                break;
            case 'theHierophant':
                document.querySelector('#theHierophantEx')
                .style.display = 'block'; 
                             
                break;
            case 'theLovers':
                document.querySelector('#theLoversEx')
                .style.display = 'block'; 
                                 
                break;
            case 'theChariot':
                document.querySelector('#theChariotEx')
                .style.display = 'block'; 
                     
                break;
            case 'justice':
                document.querySelector('#justiceEx')
                .style.display = 'block'; 
                     
                break;
            case 'theHermit':
                document.querySelector('#theHermitEx')
                .style.display = 'block'; 
                     
                break;
            case 'wheelFortune':
                document.querySelector('#wheelFortuneEx')
                .style.display = 'block'; 
                     
                break;
            case 'strength':
                document.querySelector('#strengthEx')
                .style.display = 'block'; 
                     
                break;
            case 'hangedMan':
                document.querySelector('#hangedManEx')
                .style.display = 'block'; 
                     
                break;
            case 'death':
                document.querySelector('#deathEx')
                .style.display = 'block'; 
                     
                break;
            case 'temperance':
                document.querySelector('#temperanceEx')
                .style.display = 'block'; 
                     
                break;
            case 'theDevil':
                document.querySelector('#theDevilEx')
                .style.display = 'block'; 
                     
                break;
            case 'theTower':
                document.querySelector('#theTowerEx')
                .style.display = 'block'; 
                     
                break;
            case 'theStar':
                document.querySelector('#theStarEx')
                .style.display = 'block'; 
                     
                break;
            case 'theMoon':
                document.querySelector('#theMoonEx')
                .style.display = 'block'; 
                     
                break;
            case 'theSun':
                document.querySelector('#theSunEx')
                .style.display = 'block'; 
                     
                break;
            case 'judgement':
                document.querySelector('#judgementEx')
                .style.display = 'block'; 
                     
                break;
            case 'theWorld':
                document.querySelector('#theWorldEx')
                .style.display = 'block'; 
                     
                break;
            }
    }
});