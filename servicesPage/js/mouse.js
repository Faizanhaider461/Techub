  const cursor = document.getElementById('cursor');
        const cursorOuter = document.getElementById('cursor-outer');
        
        
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            cursorOuter.style.left = e.clientX + 'px';
            cursorOuter.style.top = e.clientY + 'px';
            
          
            cursor.classList.add('cursor-active');
            cursorOuter.classList.add('outer-active');
            
          
            clearTimeout(window.cursorTimeout);
            window.cursorTimeout = setTimeout(function() {
                cursor.classList.remove('cursor-active');
                cursorOuter.classList.remove('outer-active');
            }, 100);
        });
        
       
        document.addEventListener('mouseleave', function() {
            cursor.style.opacity = '0';
            cursorOuter.style.opacity = '0';
        });
        
       
        document.addEventListener('mouseenter', function() {
            cursor.style.opacity = '1';
            cursorOuter.style.opacity = '1';
        });
        
        
        document.addEventListener('mousedown', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
            cursorOuter.style.transform = 'translate(-50%, -50%) scale(1.1)';
        });
        
        document.addEventListener('mouseup', function() {
            cursor.style.transform = 'translate(-50%, -50%)';
            cursorOuter.style.transform = 'translate(-50%, -50%)';
        });
        let currentIndex = 0;
  const slider = document.getElementById("slider");
  const totalSlides = slider.children.length;

  function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

 
  setInterval(() => moveSlide(1), 5000);