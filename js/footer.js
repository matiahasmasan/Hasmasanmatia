const createFooter = () =>{
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo/logo.png" class="logo">
    </div>
    <p class="footer-title">Hasmasan Matia</p>
    <p class="info">un elev pasionat de jocuri, programare, si web design</p>
    <p class="info">Support email- matiahasmasan@gmail.com</p>
    <p class="info">telephone- 0771 170 938</p>
    <div class="footer-social-container">
        <div>
            <a href="https://www.instagram.com/hasmasanmatia/" target="_blank" class="social-link">instagram</a>
            <a href="https://www.facebook.com/profile.php?id=100085504846861" target="_blank" class="social-link">facebook</a>
        </div>
    </div>
    <p class="footer-credit">CELE MAI BASIC JOCURI</p>
    `;
}

createFooter();