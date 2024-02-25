document.addEventListener('DOMContentLoaded', function() {
    const cryptoButton = document.querySelector('.crypto-section .visit-button');
    const paidAdvertButton = document.querySelector('.paid-advert-section .visit-button');
    const whatsappMemesButton = document.querySelector('.whatsapp-memes-section .visit-button');

    // Add event listeners to redirect users when buttons are clicked
    cryptoButton.addEventListener('click', function() {
        window.location.href = 'https://your-crypto-airdrop-website.com';
    });

    paidAdvertButton.addEventListener('click', function() {
        window.location.href = 'https://your-paid-advert-channel.com';
    });

    whatsappMemesButton.addEventListener('click', function() {
        window.location.href = 'https://your-whatsapp-memes-website.com';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const darkWebButton = document.getElementById('dark-web-button');

    // Add event listener to redirect users when dark web button is clicked
    darkWebButton.addEventListener('click', function() {
        window.location.href = 'https://your-dark-web-portal.com';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Social media links
    const facebookLink = document.querySelector('#facebook-link');
    const instagramLink = document.querySelector('#instagram-link');
    const tiktokLink = document.querySelector('#tiktok-link');
    const twitterLink = document.querySelector('#twitter-link');

    // Add event listeners to redirect users when social media links are clicked
    facebookLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://www.facebook.com/your-facebook-page';
    });

    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://www.instagram.com/your-instagram-page';
    });

    tiktokLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://www.tiktok.com/@your-tiktok-account';
    });

    twitterLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'https://twitter.com/your-twitter-account';
    });
});
