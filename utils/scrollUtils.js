/**
 * Utility function for smooth scrolling to page sections
 * @param {string} elementId - The ID of the element to scroll to (without the # symbol)
 */
export const scrollToSection = (elementId) => {
  // If no element ID is provided or it's just '#', scroll to top
  if (!elementId || elementId === '#') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    return;
  }

  // Get the element by ID
  const element = document.getElementById(elementId);
  
  // If element exists, scroll to it
  if (element) {
    // Get the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top;
    
    // Get the current scroll position
    const offsetPosition = elementPosition + window.pageYOffset - 80; // 80px offset for navbar
    
    // Scroll to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
