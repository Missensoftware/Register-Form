let currentTab = 0; 
showTab(currentTab);

function showTab(n) {
    let tabs = document.getElementsByClassName('tab');
    tabs[n].style.display = 'block';

    if (n == 0) {
        document.getElementById('prevBtn').style.display = 'none';
    } else {
        document.getElementById('prevBtn').style.display = 'inline';
    }

    if (n == (tabs.length - 1)) {
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }
    fixStepIndicator(n); 
}

function nextPrev(n) {
    let tabs = document.getElementsByClassName('tab');
    if (n == 1 && !validateForm()) return false; 

    tabs[currentTab].style.display = 'none';
    currentTab = currentTab + n;

    if (currentTab >= tabs.length) {
        document.getElementById('regForm').submit();
        return false;
    }
    showTab(currentTab);
}

function validateForm() { 
    let x, y, i, valid = true;
    x = document.getElementsByClassName('tab'); 
    y = x[currentTab].getElementsByTagName('input'); 

    for (i = 0; i < y.length; i++) {
        if (y[i].value == "") {
            y[i].className += " invalid";
            valid = false;
        }
    }

    if (valid) {
        document.getElementsByClassName('step')[currentTab].className += " finish";
    }
    return valid;
}

function fixStepIndicator(n) { 
    let i, x = document.getElementsByClassName('step');
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    x[n].className += " active";
}