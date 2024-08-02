document.addEventListener("DOMContentLoaded", () => {
    const tipButtons = document.querySelectorAll(".percentage");
    const amtInput = document.querySelector(".info_input");
    const ttlPeople = document.querySelector("#people");
    const tpp = document.querySelector("#tpp");
    const total_per_person = document.querySelector("#total_per_person");
    const resetButton = document.querySelector("#resetButton");
    const percentage_input = document.querySelector("#percentage_input");

    let amtTotal = parseFloat(amtInput.value) || 0;
    let tipPercentage = 0;
    let totalPerson = parseInt(ttlPeople.value) || 1;

    function updateInfo() {
        if (amtTotal >= 0 && tipPercentage >= 0 && totalPerson > 0) {
            tpp.innerText = (((amtTotal * tipPercentage) / 100) / totalPerson).toFixed(2);
            total_per_person.innerText = ((amtTotal + (amtTotal * tipPercentage) / 100) / totalPerson).toFixed(2);
        }

    }

    function warningFun(target) {
        let warningPara = document.createElement("p");
        warningPara.innerText = "*Value should be above 0";
        warningPara.setAttribute("class", "warning");
        target.insertAdjacentElement("afterend", warningPara);
        console.log("Less");
        setTimeout(() => {
            warningPara.remove();
        }, 1000);
    }
    amtInput.addEventListener("input", (event) => {
        amtTotal = parseFloat(amtInput.value) || 0;
        if (amtTotal <= 0) {
            warningFun(event.target);
        }
        console.log(amtInput.value);
        updateInfo()
    });

    tipButtons.forEach((button) => {
        button.addEventListener("click", () => {
            tipPercentage = parseFloat(button.value);
            console.log(button.value);
            updateInfo();
        })
    });

    ttlPeople.addEventListener("input", (event) => {
        totalPerson = parseInt(ttlPeople.value);
        if (totalPerson < 1) {
            warningFun(event.target);
        }
        console.log(totalPerson);
        updateInfo();
    });

    resetButton.addEventListener("click", () => {
        amtInput.value = 100;
        amtTotal = parseFloat(amtInput.value) || 0;
        tipPercentage = 0;
        ttlPeople.value = 1;
        totalPerson = parseInt(ttlPeople.value) || 1
        percentage_input.value = "";
        updateInfo();
    });
    percentage_input.addEventListener("input", (event) => {
        tipPercentage = percentage_input.value;
        if (tipPercentage < 0) {
            warningFun(event.target)
        }
        updateInfo();
    })
});
