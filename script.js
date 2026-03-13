// ฟังก์ชันปรับขนาดแถบเมนูนำทาง (Navbar) เมื่อเลื่อนหน้าจอลง
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // ถ้าเลื่อนหน้าจอลงมามากกว่า 50px
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 5%';
        navbar.style.backgroundColor = '#1F2937';
    } else {
        // ถ้าอยู่ด้านบนสุด
        navbar.style.padding = '20px 5%';
        navbar.style.backgroundColor = '#1F2937';
    }
});