
  document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page reload
    const pickup = document.getElementById("pickup").value;
    const delivery = document.getElementById("delivery").value;

    alert(`Pickup: ${pickup}\nDelivery: ${delivery}`);
    
    // Here you can send data to a server/API
  });


    <!-- Paystack Script -->
        document.getElementById("errandForm").addEventListener("submit", function(e) {
            e.preventDefault();
            const form = e.target;

            const handler = PaystackPop.setup({
                key: 'your-public-key-here', // Replace with your Paystack public key
                email: 'student@maiaiki.com', // Replace dynamically if needed
                amount: 1000 * 100, // Amount in Kobo (₦1000)
                currency: 'NGN',
                ref: 'MAIK-' + Math.floor((Math.random() * 1000000000) + 1),
                callback: function(response) {
                    alert('Payment successful! Reference: ' + response.reference);
                    form.submit();
                },
                onClose: function() {
                    alert('Transaction cancelled');
                }
            });
            handler.openIframe();
        });