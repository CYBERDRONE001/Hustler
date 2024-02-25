document.getElementById('Button').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/AirdaoAirdropBot?start=r03388756324";
});

document.getElementById('Button1').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://ltcminer.com/761182";
});

document.getElementById('Button2').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/Free_Bitcoin_Wallet_Pay_Bot?start=r03388756324";
});

document.getElementById('Button3').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/TRXReferKaroEarnKaroBot?start=5145669742";
});

document.getElementById('Button4').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/DigibyteSDGBAirdropBot?start=5145669742";
});

document.getElementById('Button5').addEventListener('click', function() {
    // Redirect to the specified URL
    window.location.href = "https://t.me/BeesLandBot?start=5145669742";
});

// Open slide menu
    function openSlideMenu() {
        document.getElementById('slideMenu').style.width = '200px';
    }

    // Close slide menu
    function closeSlideMenu() {
        document.getElementById('slideMenu').style.width = '0';
    }
    function navigate(page) {
    // Implement navigation logic based on the page parameter
    const pages = {
        'home': 'freeltccoin.html',
        'payout': 'freeltccoinwithdraw.html',
        'deposit': 'deposit.html',
        'buy': 'buyminer.html'
    };
    const targetPage = pages[page];
    if (targetPage) {
        window.location.href = targetPage; // Redirect to the target page
    } else {
        console.error('Invalid page parameter:', page);
    }
}