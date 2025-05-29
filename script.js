document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // 🚫 STOP default submission to FormSubmit

    const errand = document.getElementById("errand").value;
    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;
    const phone = document.getElementById("phonenumber").value;

    let amount = 0;
    if (errand === "Food Delivery") amount = 1000;
    else if (errand === "Document Delivery") amount = 1500;
    else if (errand === "Parcel Pickup") amount = 2000;

    amount *= 100;

    const handler = PaystackPop.setup({
      key: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your actual public key
      email: 'user@placeholder.com', // Needed for Paystack, not FormSubmit
      amount: amount,
      currency: 'NGN',
      ref: 'MAIK-' + Math.floor(Math.random() * 1000000000 + 1),
      callback: function (response) {
        // ✅ Append payment reference to form before submitting
        const refInput = document.createElement("input");
        refInput.type = "hidden";
        refInput.name = "payment_reference";
        refInput.value = response.reference;
        form.appendChild(refInput);

        form.submit(); // ✅ Now we manually submit to FormSubmit
      },
      onClose: function () {
        alert("Payment cancelled");
      }
    });

    handler.openIframe(); // ✅ Show Paystack popup
  });
});

