function validateForm() {
    var pin = document.contactForm.pin.value;
    var a=pin.charAt(0);
    if (a==7 ||a==8||a==9){

        alert ("The PIN cannot start from 7, 8 or 9");
        return false;
    }



}