$(document).ready(function() {
    // Toggle do menu mobile
    $('#mobile_btn').on('click', function() { 
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    // Seções e itens de navegação
    const sections = $('section'); // Seleciona todos os elementos <section>
    const navItems = $('.nav-item'); // Seleciona todos os itens de navegação com a classe nav-item

    // Evento de rolagem
    $(window).on('scroll', function() {
        const header = $('header');
        const scrollPosition = $(window).scrollTop(); // Posição da rolagem atual
        const headerHeight = header.outerHeight(); // Altura do header
        let activeSectionIndex = 0;

        // Efeito de sombra no header ao rolar
        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        // Verifica em qual seção a rolagem está
        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - headerHeight; // Topo da seção em relação ao header
            const sectionBottom = sectionTop + section.outerHeight();

            // Verifica se o scroll está dentro da seção atual
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false; // Para o loop ao encontrar a seção ativa
            }
        });

        // Atualiza a classe 'active' nos itens de navegação
        navItems.removeClass('active'); // Remove 'active' de todos os itens
        $(navItems[activeSectionIndex]).addClass('active'); // Adiciona 'active' no item correspondente à seção
    });
    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration:2000,
        distance:'20%'
    });

    ScrollReveal().reveal('.dishe',{
        origin: 'left',
        duration:2000,
        distance:'20%'
    });

    ScrollReveal().reveal('#testimonial_chef',{
        origin: 'left',
        duration:1000,
        distance:'20%'
    });

    ScrollReveal().reveal('.feedback',{
        origin: 'left',
        duration:1000,
        distance:'20%'
    });


});