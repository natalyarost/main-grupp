popup.addEventListener('click', function (e) {
    if (e.target.closest('.popup') === null) {
        popup.classList.toggle("popup__opend");
    }
});
