document.getElementById('burger-menu').addEventListener('click', () => {
    let topnav = document.getElementById('topnav-id');
    if (!topnav.classList.contains('responsive')) {
        topnav.classList.add('responsive');
    } else {
        topnav.classList.remove('responsive');
    }
});