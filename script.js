// ==========================================
// 마우스 따라다니는 그라데이션 효과
// ==========================================
const mouseGradient = document.querySelector('.mouse-gradient');

document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    mouseGradient.style.setProperty('--mouse-x', `${x}px`);
    mouseGradient.style.setProperty('--mouse-y', `${y}px`);
});

// ==========================================
// 스크롤 시 네비게이션 활성화
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observerCallback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const activeId = entry.target.getAttribute('id');
            
            navLinks.forEach((link) => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${activeId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((section) => {
    observer.observe(section);
});

// ==========================================
// 부드러운 스크롤
// ==========================================
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==========================================
// 카드 호버 효과 (그라데이션)
// ==========================================
const cards = document.querySelectorAll('.strength-card, .experience-card, .vision-card');

cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--card-x', `${x}px`);
        card.style.setProperty('--card-y', `${y}px`);
    });
});

// ==========================================
// 스크롤 애니메이션
// ==========================================
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.strength-card, .experience-card, .vision-card');
    
    elements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.85) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// 초기 스타일 설정
document.querySelectorAll('.strength-card, .experience-card, .vision-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease`;
});

// 페이지 로드 시 및 스크롤 시 애니메이션 실행
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// ==========================================
// 초기 네비게이션 활성화
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    // 첫 번째 섹션 활성화
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
    
    // 약간의 지연 후 애니메이션 실행
    setTimeout(animateOnScroll, 100);
});

// ==========================================
// 콘솔 메시지
// ==========================================
console.log('%c안녕하세요! 👋', 'font-size: 24px; font-weight: bold; color: #64ffda;');
console.log('%c저는 소프트웨어 개발자 김민수입니다.', 'font-size: 14px; color: #8892b0;');
console.log('%c"기술은 사람을 위해 존재한다"', 'font-size: 12px; color: #64ffda; font-style: italic;');
console.log('%c이 페이지는 Brittany Chiang의 포트폴리오에서 영감을 받았습니다.', 'font-size: 11px; color: #495670;');
