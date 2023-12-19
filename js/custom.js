if (localStorage.getItem('checkout') === null) {
    localStorage.setItem('checkout', 0);
}

var checkout = localStorage.getItem('checkout');
document.querySelector('#checkout').textContent = checkout;

var logout = document.getElementById('loginlogout');
logout.addEventListener('click', handleLogout);

function handleLogout() {
    var isLoggedIn = localStorage.getItem('loggedIn') === '1';
    if (isLoggedIn) {
        localStorage.setItem('loggedIn', '0');
        window.location.href = 'home.html';
    } else {
        window.location.href = 'login.html';
    }
}

checkLoginStatus();

function checkLoginStatus() {
    var isLoggedIn = localStorage.getItem('loggedIn') === '1';
    var userDetailsElement = document.getElementById('userdetails');

    if (isLoggedIn) {
        document.querySelector('#loginlogout').textContent = 'Logout';
        userDetailsElement.classList.remove('d-none');
        userDetailsElement.classList.add('d-show');
    } else {
        userDetailsElement.classList.add('d-none');
        userDetailsElement.classList.remove('d-show');
        document.querySelector('#loginlogout').textContent = 'Login';
        var loginLogoutElement = document.getElementById('loginlogout');
        loginLogoutElement.setAttribute('href', 'login.html');
    }
}
