// Tailwind config
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'purple-primary': '#8A2BE2',
                'purple-dark': '#4B0082',
                'dark-bg': '#121212',
                'dark-secondary': '#1E1E1E'
            }
        }
    }
};

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const closeMenu = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

if (menuToggle && closeMenu && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.remove('translate-x-full');
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.add('translate-x-full');
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
        });
    });
}

// Cloudflare iframe script
(function(){
    function c(){
        var b = a.contentDocument || a.contentWindow.document;
        if(b){
            var d = b.createElement('script');
            d.innerHTML = "window.__CF$cv$params={r:'95048b6eb47701a2',t:'MTc1MDAxNjQ4My4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
            b.getElementsByTagName('head')[0].appendChild(d);
        }
    }
    if(document.body){
        var a=document.createElement('iframe');
        a.height=1;
        a.width=1;
        a.style.position='absolute';
        a.style.top=0;
        a.style.left=0;
        a.style.border='none';
        a.style.visibility='hidden';
        document.body.appendChild(a);
        if('loading'!==document.readyState) c();
        else if(window.addEventListener) document.addEventListener('DOMContentLoaded', c);
        else{
            var e=document.onreadystatechange || function(){};
            document.onreadystatechange = function(b){
                e(b);
                if('loading'!==document.readyState){
                    document.onreadystatechange=e;
                    c();
                }
            }
        }
    }
})();
