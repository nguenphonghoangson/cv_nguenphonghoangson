// Smooth scroll animation for skill bars
document.addEventListener('DOMContentLoaded', function() {
    animateSkills();
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

// Print CV Function
function printCV() {
    // Add print-specific styles
    const printStyles = document.createElement('style');
    printStyles.id = 'print-styles-temp';
    printStyles.textContent = `
        @media print {
            @page {
                size: A4;
                margin: 0;
            }
            
            body {
                margin: 0;
                padding: 0;
            }
            
            .print-btn,
            .download-btn,
            .theme-toggle,
            .edit-toggle {
                display: none !important;
            }
            
            .cv-body {
                box-shadow: none !important;
                border-radius: 0 !important;
                max-width: 100% !important;
            }
            
            .sidebar,
            .main-content {
                break-inside: avoid;
            }
            
            .experience-item,
            .education-item,
            .project-item {
                break-inside: avoid;
                page-break-inside: avoid;
            }
        }
    `;
    document.head.appendChild(printStyles);
    
    // Print
    window.print();
    
    // Remove temporary styles after printing
    setTimeout(() => {
        const tempStyles = document.getElementById('print-styles-temp');
        if (tempStyles) tempStyles.remove();
    }, 1000);
}

// PDF Download Function - Improved Version
async function downloadPDF() {
    // Show loading indicator
    showLoadingIndicator('Đang chuẩn bị tải PDF...');
    
    try {
        // Check if user wants high quality or quick download
        const useHighQuality = true; // Can be made configurable
        
        if (useHighQuality) {
            // Load required libraries
            await loadPDFLibraries();
            
            // Update loading message
            updateLoadingMessage('Đang tạo PDF chất lượng cao...');
            
            // Generate high-quality PDF
            await generateHighQualityPDF();
        } else {
            // Quick download using browser print
            await quickPDFDownload();
        }
        
        // Hide loading indicator
        hideLoadingIndicator();
        showNotification('✅ Tải PDF thành công!');
    } catch (error) {
        console.error('Error generating PDF:', error);
        hideLoadingIndicator();
        
        // Offer fallback option
        if (confirm('❌ Lỗi khi tạo PDF. Bạn có muốn thử phương pháp tải nhanh không?')) {
            try {
                await quickPDFDownload();
                showNotification('✅ Tải PDF thành công (phương pháp nhanh)!');
            } catch (fallbackError) {
                showNotification('❌ Không thể tải PDF. Vui lòng thử in thay thế (Ctrl+P)!');
            }
        } else {
            showNotification('❌ Lỗi khi tạo PDF. Vui lòng thử lại!');
        }
    }
}

// Quick PDF download using window.print
function quickPDFDownload() {
    return new Promise((resolve) => {
        showNotification('📄 Vui lòng chọn "Save as PDF" trong hộp thoại in');
        printCV();
        setTimeout(() => resolve(), 1000);
    });
}

// Load PDF Libraries
function loadPDFLibraries() {
    return new Promise((resolve, reject) => {
        if (typeof html2canvas !== 'undefined') {
            resolve();
            return;
        }
        
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js';
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('Failed to load html2canvas'));
        document.head.appendChild(script);
    });
}

// Generate High Quality PDF
async function generateHighQualityPDF() {
    const container = document.querySelector('.cv-body');
    const downloadBtn = document.querySelector('.download-btn');
    
    // Hide download button temporarily
    if (downloadBtn) downloadBtn.style.display = 'none';
    
    // Create high-resolution canvas
    const canvas = await html2canvas(container, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: 1200,
        windowHeight: container.scrollHeight,
        scrollY: -window.scrollY,
        scrollX: 0,
        imageTimeout: 0,
        removeContainer: true,
        onclone: (clonedDoc) => {
            // Optimize cloned document for PDF
            const clonedContainer = clonedDoc.querySelector('.cv-body');
            if (clonedContainer) {
                clonedContainer.style.transform = 'scale(1)';
                clonedContainer.style.boxShadow = 'none';
                clonedContainer.style.maxWidth = '1200px';
                clonedContainer.style.margin = '0 auto';
            }
        }
    });
    
    // Show download button again
    if (downloadBtn) downloadBtn.style.display = 'flex';
    
    // Convert canvas to image
    const imgData = canvas.toDataURL('image/png', 1.0);
    
    // Calculate PDF dimensions
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    // Create PDF using jsPDF
    const { jsPDF } = window.jspdf || { jsPDF: null };
    
    if (!jsPDF) {
        // Fallback: download as image if jsPDF not available
        downloadAsImage(imgData);
        return;
    }
    
    const pdf = new jsPDF('p', 'mm', 'a4', true);
    
    // Add pages as needed
    let heightLeft = imgHeight;
    let position = 0;
    
    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
    heightLeft -= pageHeight;
    
    // Add additional pages if needed
    while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight, '', 'FAST');
        heightLeft -= pageHeight;
    }
    
    // Save PDF
    pdf.save('CV_Nguyen_Phong_Hoang_Son.pdf');
}

// Fallback: Download as PNG image
function downloadAsImage(imgData) {
    const link = document.createElement('a');
    link.download = 'CV_Nguyen_Phong_Hoang_Son.png';
    link.href = imgData;
    link.click();
}

// Show loading indicator
function showLoadingIndicator(message = 'Đang tạo PDF...') {
    const loader = document.createElement('div');
    loader.id = 'pdf-loader';
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            z-index: 10000;
            color: white;
            font-family: 'Inter', sans-serif;
        ">
            <div style="
                border: 5px solid #f3f3f3;
                border-top: 5px solid #5B7FBF;
                border-radius: 50%;
                width: 60px;
                height: 60px;
                animation: spin 1s linear infinite;
            "></div>
            <p id="loading-message" style="margin-top: 20px; font-size: 18px; font-weight: 600;">
                ${message}
            </p>
            <p style="margin-top: 10px; font-size: 14px; opacity: 0.8;">
                Vui lòng chờ trong giây lát
            </p>
        </div>
    `;
    
    const style = document.createElement('style');
    style.id = 'loader-animation-style';
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    document.body.appendChild(loader);
}

// Update loading message
function updateLoadingMessage(message) {
    const messageEl = document.getElementById('loading-message');
    if (messageEl) {
        messageEl.textContent = message;
    }
}

// Hide loading indicator
function hideLoadingIndicator() {
    const loader = document.getElementById('pdf-loader');
    const style = document.getElementById('loader-animation-style');
    if (loader) {
        loader.remove();
    }
    if (style) {
        style.remove();
    }
}

// Load jsPDF library on demand
(function() {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
    script.async = true;
    document.head.appendChild(script);
})();

// Load saved data on page load
loadData();

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + P for print
    if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        e.preventDefault();
        window.print();
    }
});

// Add tooltips for interactive elements
const tooltips = [
    { selector: '.profile-image img', text: 'Click để thay đổi ảnh' },
    { selector: '.print-btn', text: 'In hoặc lưu CV dưới dạng PDF' }
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
