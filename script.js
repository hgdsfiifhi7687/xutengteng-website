// 平滑滚动
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 动态年份
document.querySelector('footer p').innerHTML = `© ${new Date().getFullYear()} 徐腾腾的个人网站. 保留所有权利.`;