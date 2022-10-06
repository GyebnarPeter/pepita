document.querySelectorAll(".quantity-btn").forEach( btn => {
    btn.onclick = () => {
        let id = btn.getAttribute("data-id");
        let ageGroup = document.querySelector(`#${id}`);
        let oldValue = parseInt(ageGroup.innerHTML);
        let newValue = btn.classList.contains("increase") ? ++oldValue : --oldValue;
        let isQuantityZero = oldValue <= 0;

        ageGroup.innerHTML = isQuantityZero ? 0 : newValue;
        ageGroup.style.color = isQuantityZero ? "#d4d4d4" : "black";
        
        calcPrice();
    }
});

const calcPrice = () => {
    let sum = 0;
    
    document.querySelectorAll(".quantity__value").forEach( quantity => {
        sum += parseInt(quantity.innerHTML);
    })
    
    document.querySelector(".total__price").innerHTML = `$${sum * 8}`;
}