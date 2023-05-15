const creatNav = () =>{
    let nav=document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/logo/logo.png" class="brand-logo">
            <div class="nav-items">
                <p>Hasmasan Matia</p>
                <a href="#"><img src="img/profile.png"></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="inferno.html" class="link">inferno</a></li>
            <li class="link-item"><a href="coronera.html" class="link">coron-era</a></li>
            <li class="link-item"><a href="blupy.html" class="link">blupy the frog</a></li>
        </ul>
    `;
}

creatNav();