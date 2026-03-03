// Smooth scroll animation for skill bars
document.addEventListener('DOMContentLoaded', function() {
    animateSkills();
    addThemeToggle();
    addEditMode();
});

// Animate skill bars on scroll
function animateSkills() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute('style').match(/width:\s*(\d+%)/)[1];
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 100);
        observer.observe(bar);
    });
}

// Add theme toggle functionality
function addThemeToggle() {
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-toggle';
    themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    themeBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 30px;
        background: #2c3e50;
        color: white;
        border: none;
        padding: 15px;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        font-size: 1.2em;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        transition: all 0.3s ease;
        z-index: 1000;
    `;

    themeBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const icon = this.querySelector('i');
        
        if (document.body.classList.contains('dark-theme')) {
            icon.className = 'fas fa-sun';
            applyDarkTheme();
        } else {
            icon.className = 'fas fa-moon';
            removeDarkTheme();
        }
    });

    document.body.appendChild(themeBtn);
}

// Apply dark theme
function applyDarkTheme() {
    const style = document.createElement('style');
    style.id = 'dark-theme-style';
    style.textContent = `
        :root {
            --primary-color: #1a1a2e;
            --secondary-color: #0f3460;
            --accent-color: #e94560;
            --text-color: #eee;
            --light-bg: #16213e;
            --white: #0f1419;
            --border-color: #2c3e50;
        }
        body {
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        }
        .container {
            background: #0f1419;
            color: #eee;
        }
        .skill-bar {
            background: #2c3e50;
        }
        .timeline::before {
            background: var(--accent-color);
        }
        .timeline-item::before {
            background: var(--accent-color);
            box-shadow: 0 0 0 2px var(--accent-color);
        }
    `;
    document.head.appendChild(style);
}

// Remove dark theme
function removeDarkTheme() {
    const style = document.getElementById('dark-theme-style');
    if (style) {
        style.remove();
    }
}

// Add edit mode functionality
function addEditMode() {
    let isEditMode = false;
    
    const editBtn = document.createElement('button');
    editBtn.className = 'edit-toggle';
    editBtn.innerHTML = '<i class="fas fa-edit"></i> Chỉnh sửa';
    editBtn.style.cssText = `
        position: fixed;
        top: 30px;
        right: 30px;
        background: #e74c3c;
        color: white;
        border: none;
        padding: 12px 20px;
        border-radius: 25px;
        font-size: 0.9em;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(231, 76, 60, 0.4);
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
    `;

    editBtn.addEventListener('click', function() {
        isEditMode = !isEditMode;
        toggleEditMode(isEditMode);
        
        if (isEditMode) {
            this.innerHTML = '<i class="fas fa-save"></i> Lưu';
            this.style.background = '#27ae60';
        } else {
            this.innerHTML = '<i class="fas fa-edit"></i> Chỉnh sửa';
            this.style.background = '#e74c3c';
            saveData();
        }
    });

    document.body.appendChild(editBtn);
}

// Toggle edit mode
function toggleEditMode(isEdit) {
    const editableElements = [
        '.name',
        '.job-title',
        '.contact-item span',
        '.about-text',
        '.skill-name',
        '.language-name',
        '.language-level',
        '.timeline-content h4',
        '.company-name',
        '.responsibilities li',
        '.project-card h4',
        '.project-tech',
        '.project-desc',
        '.cert-info h4',
        '.cert-info p'
    ];

    editableElements.forEach(selector => {
        document.querySelectorAll(selector).forEach(element => {
            element.contentEditable = isEdit;
            if (isEdit) {
                element.style.outline = '1px dashed #3498db';
                element.style.padding = '2px';
            } else {
                element.style.outline = 'none';
                element.style.padding = '0';
            }
        });
    });
}

// Save data to localStorage
function saveData() {
    const data = {
        name: document.querySelector('.name').textContent,
        jobTitle: document.querySelector('.job-title').textContent,
        about: document.querySelector('.about-text').textContent,
        // Add more fields as needed
    };
    
    localStorage.setItem('cvData', JSON.stringify(data));
    showNotification('Đã lưu thay đổi!');
}

// Load data from localStorage
function loadData() {
    const data = JSON.parse(localStorage.getItem('cvData'));
    if (data) {
        if (data.name) document.querySelector('.name').textContent = data.name;
        if (data.jobTitle) document.querySelector('.job-title').textContent = data.jobTitle;
        if (data.about) document.querySelector('.about-text').textContent = data.about;
        // Load more fields as needed
    }
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 30px;
        background: #27ae60;
        color: white;
        padding: 15px 25px;
        border-radius: 5px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// Add animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleSheet);

// Handle profile image upload
document.querySelector('.profile-image img').addEventListener('click', function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    
    input.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                document.querySelector('.profile-image img').src = event.target.result;
                localStorage.setItem('profileImage', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    
    input.click();
});

// Load profile image from localStorage
const savedImage = localStorage.getItem('profileImage');
if (savedImage) {
    document.querySelector('.profile-image img').src = savedImage;
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add export to PDF functionality
function exportToPDF() {
    // This would require a library like jsPDF or html2pdf
    // For now, we'll use the print dialog which allows saving as PDF
    window.print();
}

// Load saved data on page load
loadData();

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
    
    // Ctrl/Cmd + E for edit mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'e') {
        e.preventDefault();
        document.querySelector('.edit-toggle').click();
    }
});

// Add tooltips for interactive elements
const tooltips = [
    { selector: '.profile-image img', text: 'Click để thay đổi ảnh' },
    { selector: '.print-btn', text: 'In hoặc lưu CV dưới dạng PDF' },
    { selector: '.theme-toggle', text: 'Chuyển đổi chế độ sáng/tối' },
    { selector: '.edit-toggle', text: 'Chỉnh sửa nội dung CV' }
];

tooltips.forEach(({ selector, text }) => {
    const element = document.querySelector(selector);
    if (element) {
        element.title = text;
    }
});

console.log('CV Web loaded successfully! 🎉');
console.log('Keyboard shortcuts:');
console.log('- Ctrl/Cmd + P: Print CV');
console.log('- Ctrl/Cmd + E: Toggle Edit Mode');

