const quotes = [
    "It always seems impossible until it’s done.",
    "Do it with all your heart, or don't do it at all.",
    "Sometimes you win, sometimes you learn.",
    "If you can't do great things, do small things in a great way.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The best way to predict the future is to create it.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Don't watch the clock; do what it does. Keep going.",
    "Believe you can and you're halfway there."

];

// قائمة الألوان التي سيتم استخدامها
const colors = ['#FF6347', '#4682B4', '#32CD32', '#FF4500', '#D2691E'];

// دالة لتغيير الاقتباس العشوائي
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length); // اختيار اقتباس عشوائي
    const randomColor = colors[Math.floor(Math.random() * colors.length)]; // اختيار لون عشوائي

    const quoteElement = document.getElementById("quote");

    // إضافة تأثير التلاشي قبل التغيير
    quoteElement.style.opacity = 0; // تفعيل التلاشي
    setTimeout(() => {
        // تغيير الاقتباس واللون
        quoteElement.innerText = quotes[randomIndex];
        quoteElement.style.color = randomColor;

        // إعادة تأثير التلاشي
        quoteElement.style.opacity = 1; 
    }, 500); // التأخير لمدة نصف ثانية
}

// عند تحميل الصفحة، يتم اختيار الاقتباس العشوائي
window.onload = function() {
    getRandomQuote();
};
