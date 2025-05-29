document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const errand = document.getElementById("errand").value;
    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;
    const phone = document.getElementById("phonenumber").value;

    if (!errand || !pickup || !delivery || !phone) {
      alert("Please fill in all the fields.");
      return;
    }

    let amount = 0;
    if (errand === "Food Delivery") amount = 1000;
    else if (errand === "Document Delivery") amount = 1500;
    else if (errand === "Parcel Pickup") amount = 2000;

    amount *= 100; // Convert to Kobo

    const handler = PaystackPop.setup({
      key: 'pk_test_1234567890abcdef1234567890abcdef12345678', // Replace this with your public key
      email: 'student@maiaiki.com', // Just a placeholder for Paystack
      amount: amount,
      currency: 'NGN',
      ref: 'MAIK-' + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        const refInput = document.createElement("input");
        refInput.type = "hidden";
        refInput.name = "payment_reference";
        refInput.value = response.reference;
        form.appendChild(refInput);

        form.submit(); // Only submit after successful payment
      },
      onClose: function () {
        alert("Transaction cancelled");
      }
    });

    handler.openIframe();
  });
});
