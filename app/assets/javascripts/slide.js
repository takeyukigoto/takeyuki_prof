$(function () {

  
  $('.slideshow').each(function () {

      var $slides = $(this).find('img'), 
          slideCount = $slides.length,   
          currentIndex = 0;              

      
      $slides.eq(currentIndex).fadeIn();

      
      setInterval(showNextSlide, 6000);

    
      function showNextSlide () {

          
          
          var nextIndex = (currentIndex + 1) % slideCount;

          
          $slides.eq(currentIndex).fadeOut();

          
          $slides.eq(nextIndex).fadeIn();

          
          currentIndex = nextIndex;
      }

  });

  $('.cover-inner').each(function () {

    var $slidesp = $(this).find('p'), 
        slideCountp = $slidesp.length,   
        currentIndexp = 0;              

        
      $slidesp.eq(currentIndexp).fadeIn();

       
       setInterval(showNextSlidep, 6000);

       
      function showNextSlidep () {

        
          
          var nextIndexp = (currentIndexp + 1) % slideCountp;

          
          $slidesp.eq(currentIndexp).fadeOut();

          
          $slidesp.eq(nextIndexp).fadeIn();

           
           currentIndexp = nextIndexp;
          }


        });













});
