const accordionItems = document.querySelectorAll('.accordionItem');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordionH');
  
  header.addEventListener('click', () => {
    item.classList.toggle('active');
    console.log("dnufiubi");
    
  });
});