
const checkbox = document.getElementById('loginORsignin');
const login = document.getElementById('lbl-login');
const signup = document.getElementById("lbl-signin");
const form = document.getElementsByClassName("form");
const submit = document.getElementById("submit");

let boolLogin = true;

checkbox.addEventListener('change', function () {
    if (!checkbox.checked) {
        boolLogin = true;
        login.style.color = 'var(--text)';
        login.style.background = 'linear-gradient(-45deg, var(--accent-grad-1), var(--accent-grad-2))';
        signup.style.color = 'var(--accent)';
        signup.style.background = 'unset';
        submit.value = "Login";
    } else {
        login.style.color = 'var(--accent)';
        login.style.background = 'unset';
        signup.style.color = 'var(--text)';
        signup.style.background = 'linear-gradient(-45deg, var(--accent-grad-1), var(--accent-grad-2))';
        submit.value = "Sign up";
        boolLogin = false;
    }
});

const ErrorMessageHolder = document.getElementById('wrong-pw');

function errorUser() {
    ErrorMessageHolder.style.opacity = 1;
    if (document.getElementById("email").value == "" || document.getElementById("password").value == "") {
        ErrorMessageHolder.innerHTML = "Please enter email or password";
    }
    else {
        if(boolLogin)
            ErrorMessageHolder.innerHTML = "email or password is wrong!";
        }

}