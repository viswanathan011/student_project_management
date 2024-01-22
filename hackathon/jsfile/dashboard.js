document.addEventListener('DOMContentLoaded', function () {
    // Get all category boxes
    const categoryBoxes = document.querySelectorAll('.category-box');
  
    // Add click event listener to each category box
    categoryBoxes.forEach(box => {
      box.addEventListener('click', function () {
        // Toggle the 'active' class on the clicked category box
        box.classList.toggle('active');
  
        // Remove the 'active' class from other category boxes
        categoryBoxes.forEach(otherBox => {
          if (otherBox !== box) {
            otherBox.classList.remove('active');
          }
        });
      });
    });
  });
  