
 document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const errand = document.getElementById("errand").value;
    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;
    const phone = document.getElementById("phonenumber").value;

    if (!errand || !pickup || !delivery || !phone) {
        alert("Please fill in all the fields.");
        return;
    }

    const handler = PaystackPop.setup({
        key: 'your-paystack-public-key', // Replace with your actual public key
        email: 'customer@email.com',     // You can dynamically attach email if available
        amount: 1000 * 100,              // Amount in Kobo
        currency: 'NGN',
        ref: 'MAIK-' + Math.floor((Math.random() * 1000000000) + 1),
        callback: function(response) {
            // Add reference to form before submitting
            const refInput = document.createElement("input");
            refInput.type = "hidden";
            refInput.name = "payment_reference";
            refInput.value = response.reference;
            form.appendChild(refInput);

            // Now submit to FormSubmit
            form.submit();
        },
        onClose: function() {
            alert('Transaction cancelled');
        }
    });

    handler.openIframe();
});