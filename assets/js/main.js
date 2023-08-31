     //Get the button
     let mybutton = document.getElementById("btn-back-to-top");

     // When the user scrolls down 20px from the top of the document, show the button
     window.onscroll = function () {
     scrollFunction();
     };
 
     function scrollFunction() {
     if (
     document.body.scrollTop > 20 ||
     document.documentElement.scrollTop > 20
     ) {
     mybutton.style.display = "block";
     } else {
     mybutton.style.display = "none";
     }
     }
     // When the user clicks on the button, scroll to the top of the document
     mybutton.addEventListener("click", backToTop);
 
     function backToTop() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
     }

     const showMoreBtn = document.querySelector('.show-more-btn');
     const showLessBtn = document.querySelector('.show-less-btn');
     const additionalText = document.querySelector('.additional-text');
 
     showMoreBtn.addEventListener('click', function (event) {
         event.preventDefault(); 
         additionalText.style.display = 'block';
 
         showMoreBtn.style.display = 'none';
         showLessBtn.style.display = 'inline-block';
     });
 
     showLessBtn.addEventListener('click', function (event) {
         event.preventDefault(); 
 
         additionalText.style.display = 'none';
 
         showLessBtn.style.display = 'none';
         showMoreBtn.style.display = 'inline-block';
        });

        const showMoreBtn1 = document.querySelector('.show-more-btn1');
        const showLessBtn1 = document.querySelector('.show-less-btn1');
        const additionalText1 = document.querySelector('.additional-text1');
    
        showMoreBtn1.addEventListener('click', function (event) {
            event.preventDefault(); 
            additionalText1.style.display = 'block';
    
            showMoreBtn1.style.display = 'none';
            showLessBtn1.style.display = 'inline-block';
        });
    
        showLessBtn1.addEventListener('click', function (event) {
            event.preventDefault(); 
    
            additionalText1.style.display = 'none';
    
            showLessBtn1.style.display = 'none';
            showMoreBtn1.style.display = 'inline-block';
        });

        const showMoreBtn2 = document.querySelector('.show-more-btn2');
        const showLessBtn2 = document.querySelector('.show-less-btn2');
        const additionalText2 = document.querySelector('.additional-text2');
    
        showMoreBtn2.addEventListener('click', function (event) {
            event.preventDefault(); 
            additionalText2.style.display = 'block';
    
            showMoreBtn2.style.display = 'none';
            showLessBtn2.style.display = 'inline-block';
        });
    
        showLessBtn2.addEventListener('click', function (event) {
            event.preventDefault(); 
    
            additionalText2.style.display = 'none';
    
            showLessBtn2.style.display = 'none';
            showMoreBtn2.style.display = 'inline-block';
        });