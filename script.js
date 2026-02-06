const cursor = document.getElementById('cursor');
const cursorFollower = document.getElementById('cursor-follower');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
        cursorFollower.style.left = e.clientX - 10 + 'px';
        cursorFollower.style.top = e.clientY - 10 + 'px';
    }, 100);
});

document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorFollower.style.transform = 'scale(0.8)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
});

const links = document.querySelectorAll('.link-btn');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(2)';
        cursor.style.background = '#6caced';
    });
    
    link.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#3498db';
    });
});

const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.background = '#6caced';
    });
    
    card.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.background = '#3498db';
    });
});

const animateText = (element, animation) => {
    element.style.animation = `${animation} 1s ease-in-out`;
    setTimeout(() => {
        element.style.animation = '';
    }, 1000);
};

const headings = document.querySelectorAll('h1, h2');
headings.forEach((heading, index) => {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        heading.style.opacity = '1';
        heading.style.transform = 'translateY(0)';
        
        animateText(heading, 'glow 2s ease-in-out infinite alternate');
    }, index * 200);
});