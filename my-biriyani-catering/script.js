function orderNow() {
    // Replace with your WhatsApp number
    const phoneNumber = "94723722286";
    const message = "Hello, I want to order biriyani catering.";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
}
