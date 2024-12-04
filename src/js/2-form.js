const form = document.querySelector(".feedback-form");

const localStorageKey = "feedback-form-state";

const formdata = {email: "", message: ""};

form.addEventListener("input", formInputs);
previousText();
form.addEventListener("submit", formSubmit);


function formInputs(evt) {
    const key = evt.target.name;
    const value = evt.target.value;

    formdata[key] = value;
    localStorage.setItem(localStorageKey, JSON.stringify(formdata));
}


function previousText() {
    const text = localStorage.getItem(localStorageKey);

    if (text) {
        const parseText = JSON.parse(text);
        form.elements.email.value = parseText.email || "";
        form.elements.message.value = parseText.message || "";
    }
}


function formSubmit(evt) {
    evt.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if (!email || !message) {
        alert("Fill please all fields");
        return;
    }
    console.log(formdata);
    evt.currentTarget.reset();
    localStorage.removeItem(localStorageKey);
}
