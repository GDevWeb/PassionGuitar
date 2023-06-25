const handleResizeCardContent = () => {

    window.addEventListener('resize', () => {
        const cardContent = document.querySelector('.selection .card-content');
    const screenWidth = window.innerWidth;
  
    if (screenWidth < 728) {
        cardContent.classList.add('truncate');
    } else {
        cardContent.classList.remove('truncate');
    }
});

}
 
export {handleResizeCardContent}