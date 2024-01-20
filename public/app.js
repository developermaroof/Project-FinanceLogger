import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
// inputs
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const amountValue = parseFloat(amount.value);
    if (isNaN(amountValue)) {
        console.error("Please enter a valid number for the amount.");
        return;
    }
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amountValue);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amountValue);
    }
    list.render(doc, type.value, "end");
});
