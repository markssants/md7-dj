// Smooth scrolling para links de navegação
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

// Header transparente/opaco baseado no scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
    }
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação a elementos específicos
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.track-item, .photo-item, .video-item, .presskit-item');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Simulação de player de áudio para tracks
document.querySelectorAll('.play-button, .play-button-large').forEach(button => {
    button.addEventListener('click', function() {
        // Aqui você pode integrar com um player real como SoundCloud, Spotify, etc.
        alert('Player de áudio será integrado aqui. Conecte com SoundCloud, Spotify ou outro serviço de streaming.');
    });
});

// Formulário de contato
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Aqui você pode integrar com um serviço de email como EmailJS ou backend
    const formData = new FormData(this);
    
    // Simulação de envio
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
});


// Efeito parallax suave no hero
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Menu mobile (se necessário expandir)
function toggleMobileMenu() {
    const nav = document.querySelector('nav ul');
    nav.classList.toggle('mobile-active');
}

// Adicionar classe ativa ao link de navegação baseado na seção atual
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Legendas para Gêneros Musicais
document.addEventListener('DOMContentLoaded', () => {
    const genreButtons = document.querySelectorAll('.genre-button');

    if (genreButtons.length > 0) {
        genreButtons.forEach(button => {
            button.addEventListener('click', () => {
                const genre = button.dataset.genre;
                const targetDesc = document.getElementById(`${genre}-desc`);
                const isAlreadyActive = button.classList.contains('active');

                // Remove a classe ativa de todos os botões e esconde todas as descrições
                document.querySelectorAll('.genre-button').forEach(btn => btn.classList.remove('active'));
                document.querySelectorAll('.genre-description').forEach(desc => desc.classList.remove('visible'));

                // Se o botão não estava ativo, torna-o ativo e mostra sua descrição
                if (!isAlreadyActive) {
                    button.classList.add('active');
                    if (targetDesc) {
                        targetDesc.classList.add('visible');
                    }
                }
            });
        });
    }

    // Hero Image Slideshow
    const heroImageContainer = document.querySelector('.hero-image');
    if (heroImageContainer) {
        const images = heroImageContainer.querySelectorAll('.profile-image');
        if (images.length > 1) {
            let currentIndex = 0;
            
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 3000); // Troca a cada 3 segundos
        }
    }

    // About Image Slideshow
    const aboutImageContainer = document.querySelector('.about-image');
    if (aboutImageContainer) {
        const images = aboutImageContainer.querySelectorAll('.performance-image');
        if (images.length > 1) {
            let currentIndex = 0;
            
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 2000); // Troca a cada 3 segundos
        }
    }

    // Logo Stickers Slideshow
    const logoSlideshows = document.querySelectorAll('.slideshow-container');
    logoSlideshows.forEach(slideshow => {
        const images = slideshow.querySelectorAll('.slideshow-image');
        if (images.length > 1) {
            let currentIndex = 0;
            setInterval(() => {
                images[currentIndex].classList.remove('active');
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].classList.add('active');
            }, 2500); // Troca a cada 2.5 segundos
        }
    });

    // Presskit Item Slideshows
    document.querySelectorAll('.presskit-slideshow').forEach(slideshow => {
        const images = slideshow.querySelectorAll('.presskit-slideshow-image');
        if (images.length > 1) {
            let currentIndex = 0;
            
            setInterval(() => {
                if (images[currentIndex]) {
                    images[currentIndex].classList.remove('active');
                }
                currentIndex = (currentIndex + 1) % images.length;
                if (images[currentIndex]) {
                    images[currentIndex].classList.add('active');
                }
            }, 3000); // Troca a cada 3 segundos
        }
    });

});

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-button');
    const photoItems = document.querySelectorAll('#photos .photo-grid .photo-item'); // Seletor mais específico para a galeria de fotos

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove a classe 'active' de todos os botões de filtro para resetar o estado.
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Adiciona a classe 'active' apenas ao botão que foi clicado.
            this.classList.add('active');

            const year = this.dataset.year;

            const photoGrid = document.querySelector('.photo-grid');
            const loadMoreButton = document.getElementById('load-more-photos');            

            photoItems.forEach(item => {
                const imageSrc = item.querySelector('img').src;
                // Melhora a lógica de filtragem para ser mais precisa com o caminho da pasta
                if (imageSrc.includes('/' + year + '/')) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
            // Esconde as fotos extras inicialmente (após as 8 primeiras)
            const visiblePhotos = photoGrid.querySelectorAll('.photo-item:not(.hidden)');
            for (let i = 8; i < visiblePhotos.length; i++) {
                visiblePhotos[i].classList.add('hidden');
            }


            // Mostra ou esconde o botão "Carregar mais"
            if (photoGrid.querySelectorAll('.photo-item.hidden').length > 0) {
                loadMoreButton.style.display = 'block'; // Mostra se houver fotos escondidas
            } else {
                loadMoreButton.style.display = 'none'; // Esconde se não houver mais fotos

            }
        });
    });
    // Aciona um clique no botão de 2025 no carregamento da página para definir um estado inicial.
    const initialButton = document.querySelector('.filter-button[data-year="2025"]');
    if (initialButton) {
        initialButton.click();

        // Garante que só as 8 primeiras fiquem visíveis
        const photoGrid = document.querySelector('.photo-grid');
        const visiblePhotos = photoGrid.querySelectorAll('.photo-item:not(.hidden)');
        for (let i = 8; i < visiblePhotos.length; i++) {
            visiblePhotos[i].classList.add('hidden');
        }
    }
});

// Carregar mais fotos

document.addEventListener('DOMContentLoaded', function() {
    const loadMoreButton = document.getElementById('load-more-photos');
    const photoGrid = document.querySelector('.photo-grid');

    if (loadMoreButton) {
        loadMoreButton.addEventListener('click', function() {
            const activeFilter = document.querySelector('.filter-button.active');
            const filterYear = activeFilter ? activeFilter.dataset.year : null;

            const hiddenPhotos = photoGrid.querySelectorAll('.photo-item.hidden' + (filterYear ? `[data-year="${filterYear}"]` : ''));

            hiddenPhotos.forEach(photo => photo.classList.remove('hidden'));

            loadMoreButton.style.display = 'none';
        });
    }
});
