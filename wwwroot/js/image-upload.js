
class ImageUploadHandler {
    constructor() {
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const bannerInput = document.getElementById('bannerInput');
        if (bannerInput) {
            bannerInput.addEventListener('change', (e) => this.handleBannerUpload(e));
        }

        // Icon upload handling
        const iconInput = document.getElementById('iconInput');
        if (iconInput) {
            iconInput.addEventListener('change', (e) => this.handleIconUpload(e));
        }
    }

    handleBannerUpload(event) {
        const file = event.target.files[0];
        if (file) {
            if (!this.isValidImageFile(file)) {
                this.showError('Por favor, selecione um arquivo de imagem válido (JPG, PNG, GIF, WebP).');
                event.target.value = '';
                return;
            }

            if (file.size > 5 * 1024 * 1024) {
                this.showError('O arquivo é muito grande. Por favor, selecione uma imagem menor que 5MB.');
                event.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target.result;
                this.setBannerPreview(base64);
                this.setBannerBase64(base64);
            };
            reader.onerror = () => {
                this.showError('Erro ao ler o arquivo. Tente novamente.');
            };
            reader.readAsDataURL(file);
        }
    }

    handleIconUpload(event) {
        const file = event.target.files[0];
        if (file) {
            // Validate file type
            if (!this.isValidImageFile(file)) {
                this.showError('Por favor, selecione um arquivo de imagem válido (JPG, PNG, GIF, WebP).');
                event.target.value = '';
                return;
            }

            if (file.size > 2 * 1024 * 1024) {
                this.showError('O arquivo é muito grande. Por favor, selecione uma imagem menor que 2MB.');
                event.target.value = '';
                return;
            }

            const reader = new FileReader();
            reader.onload = (e) => {
                const base64 = e.target.result;
                this.setIconPreview(base64);
                this.setIconBase64(base64);
            };
            reader.onerror = () => {
                this.showError('Erro ao ler o arquivo. Tente novamente.');
            };
            reader.readAsDataURL(file);
        }
    }

    isValidImageFile(file) {
        const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        return validTypes.includes(file.type);
    }

    setBannerPreview(base64) {
        const bannerImg = document.getElementById('bannerImg');
        const bannerPreview = document.getElementById('bannerPreview');
        const bannerPlaceholder = document.getElementById('bannerPlaceholder');

        if (bannerImg && bannerPreview && bannerPlaceholder) {
            bannerImg.src = base64;
            bannerPreview.classList.remove('hidden');
            bannerPlaceholder.classList.add('hidden');
        }
    }

    setIconPreview(base64) {
        const iconImg = document.getElementById('iconImg');
        const iconPreview = document.getElementById('iconPreview');
        const iconPlaceholder = document.getElementById('iconPlaceholder');

        if (iconImg && iconPreview && iconPlaceholder) {
            iconImg.src = base64;
            iconPreview.classList.remove('hidden');
            iconPlaceholder.classList.add('hidden');
        }
    }

    setBannerBase64(base64) {
        const bannerBase64Input = document.getElementById('bannerBase64');
        if (bannerBase64Input) {
            bannerBase64Input.value = base64;
        }
    }

    setIconBase64(base64) {
        const iconBase64Input = document.getElementById('iconBase64');
        if (iconBase64Input) {
            iconBase64Input.value = base64;
        }
    }

    clearBanner() {
        const bannerInput = document.getElementById('bannerInput');
        const bannerBase64Input = document.getElementById('bannerBase64');
        const bannerPreview = document.getElementById('bannerPreview');
        const bannerPlaceholder = document.getElementById('bannerPlaceholder');

        if (bannerInput) bannerInput.value = '';
        if (bannerPreview) bannerPreview.classList.add('hidden');
        if (bannerPlaceholder) bannerPlaceholder.classList.remove('hidden');

        const originalBanner = bannerBase64Input?.getAttribute('data-original');
        if (bannerBase64Input) {
            bannerBase64Input.value = originalBanner || '';
        }
    }

    clearIcon() {
        const iconInput = document.getElementById('iconInput');
        const iconBase64Input = document.getElementById('iconBase64');
        const iconPreview = document.getElementById('iconPreview');
        const iconPlaceholder = document.getElementById('iconPlaceholder');

        if (iconInput) iconInput.value = '';
        if (iconPreview) iconPreview.classList.add('hidden');
        if (iconPlaceholder) iconPlaceholder.classList.remove('hidden');

        const originalIcon = iconBase64Input?.getAttribute('data-original');
        if (iconBase64Input) {
            iconBase64Input.value = originalIcon || '';
        }
    }

    showError(message) {
        let errorDiv = document.getElementById('image-upload-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.id = 'image-upload-error';
            errorDiv.className = 'fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 max-w-sm';
            document.body.appendChild(errorDiv);
        }

        errorDiv.textContent = message;
        errorDiv.style.display = 'block';

        // Auto-hide after 5 seconds
        setTimeout(() => {
            if (errorDiv) {
                errorDiv.style.display = 'none';
            }
        }, 5000);
    }

    // Utility method to trigger file input
    triggerBannerInput() {
        const bannerInput = document.getElementById('bannerInput');
        if (bannerInput) {
            bannerInput.click();
        }
    }

    triggerIconInput() {
        const iconInput = document.getElementById('iconInput');
        if (iconInput) {
            iconInput.click();
        }
    }
}

// Global functions for backward compatibility
function clearBanner() {
    if (window.imageUploadHandler) {
        window.imageUploadHandler.clearBanner();
    }
}

function clearIcon() {
    if (window.imageUploadHandler) {
        window.imageUploadHandler.clearIcon();
    }
}

function triggerBannerInput() {
    if (window.imageUploadHandler) {
        window.imageUploadHandler.triggerBannerInput();
    }
}

function triggerIconInput() {
    if (window.imageUploadHandler) {
        window.imageUploadHandler.triggerIconInput();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.imageUploadHandler = new ImageUploadHandler();
});

// Export for module usage if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageUploadHandler;
}

