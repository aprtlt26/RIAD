function cursor(){

    if(document.querySelector('.cursor')){
      gsap.set('.cursor', {
          xPercent: -50,
          yPercent: -50
      })

      window.addEventListener('mousemove', e => {
          gsap.to('.cursor', 0, {
              x: e.clientX,
              y: e.clientY
          })
      })

      const enlaces = document.querySelectorAll('a')

      enlaces.forEach(enlace => {
        enlace.addEventListener('mouseenter', () => {
          gsap.to('.cursor', {
            background: '#F58F00',
            scale: 3,
            opacity: .6,
            duration: .5,
          })
        })

        enlace.addEventListener('mouseleave', () => {
          gsap.to('.cursor', {
            background: '#F58F00',
            scale: 1,
            opacity: .9,
            duration: .5,
          })
        })
      })
    }

    if(document.querySelector('#splide-hero-home')){
      const splideHeroHome = new Splide('#splide-hero-home', {
        type   : 'fade',
        lazyLoad: 'nearby',
        drag   : 'free',
        perPage: 1,
        rewind : true,
        pagination: false,
        arrows: true,
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
      })

      splideHeroHome.mount();
    }

    if(document.querySelector('#splide-hero-home-mobile')){
      const splideHeroHomeMobile = new Splide('#splide-hero-home-mobile', {
        type   : 'fade',
        drag   : 'free',
        lazyLoad: 'nearby',
        perPage: 1,
        rewind : true,
        pagination: true,
        arrows:false,
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
      })

      splideHeroHomeMobile.mount();
    }

    if(document.querySelector('#splide-edc')){
      const splideEdc = new Splide('#splide-edc', {
        type   : 'loop',
        drag   : 'free',
        lazyLoad: 'nearby',
        perPage: 1,
        // rewind : true,
        pagination: true,
        arrows: false,
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
      })

      splideEdc.mount();
    }

    if(document.querySelector('#splide-campesino')){
      const splideCampesino = new Splide('#splide-campesino', {
        type   : 'loop',
        drag   : 'free',
        lazyLoad: 'nearby',
        perPage: 1,
        // rewind : true,
        pagination: true,
        arrows: false,
        autoplay: true,
        breakpoints: {
          640: {
            perPage: 1,
          },
          480: {
            perPage: 1,
          },
        },
      })

      splideCampesino.mount();

    }

    if(document.querySelector('#splide-projects')){
      const splideProjects = new Splide( '#splide-projects', {
        type       : 'fade',
        lazyLoad: 'nearby',
        pagination : false,
        arrows     : false,
        cover      : true,
        autoplay: true,
        rewind: true,
      });
  
      const thumbnails = new Splide( '#thumbnail-slider', {
        rewind          : true,
        fixedWidth      : 128,
        fixedHeight     : 128,
        isNavigation    : true,
        gap             : 10,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 86,
            fixedHeight : 86,
            gap: 5,
            arrows: false,
          },
          428: {
            fixedWidth  : 86,
            fixedHeight : 86,
            gap: 5,
            arrows: false,
          },
        },
        lazyLoad: 'nearby',
      });
  
      splideProjects.sync( thumbnails );
      splideProjects.mount();
      thumbnails.mount();
    }

    if(document.querySelector('#splide-projects-2')){
      const splideProjects = new Splide( '#splide-projects-2', {
        type       : 'fade',
        lazyLoad: 'nearby',
        pagination : false,
        arrows     : false,
        cover      : true,
        autoplay: true,
        rewind: true,
      });
  
      const thumbnails = new Splide( '#thumbnail-slider-2', {
        rewind          : true,
        fixedWidth      : 128,
        fixedHeight     : 128,
        isNavigation    : true,
        gap             : 10,
        perPage: 3,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 86,
            fixedHeight : 86,
            gap: 5,
            arrows: false,
          },
          428: {
            fixedWidth  : 86,
            fixedHeight : 86,
            gap: 5,
            arrows: false,
          },
        },
        lazyLoad: 'nearby',
      });
  
      splideProjects.sync( thumbnails );
      splideProjects.mount();
      thumbnails.mount();
    }
  
  
    if(document.querySelector('#splide-gallery-project')){
      const splides = document.querySelectorAll('#splide-gallery-project');
      splides.forEach( splide => {
        const splideGalleryProject = new Splide( splide , {
          type       : 'fade',
          lazyLoad: 'nearby',
          pagination : false,
          arrows     : false,
          cover      : true,
          autoplay: true,
          rewind: true,
        });
  
        const thumbnailSlider = splide.querySelector('#thumbnail-slider');
        
        const thumbnails = new Splide( thumbnailSlider, {
            rewind          : true,
            fixedWidth      : 86,
            fixedHeight     : 86,
            isNavigation    : true,
            gap             : 10,
            focus           : 'center',
            pagination      : false,
            cover           : true,
            dragMinThreshold: {
              mouse: 4,
              touch: 10,
            },
            breakpoints : {
              640: {
                fixedWidth  : 86,
                fixedHeight : 86,
                gap: 5,
                arrows: false,
              },
              428: {
                fixedWidth  : 86,
                fixedHeight : 86,
                gap: 5,
                arrows: false,
              },
            },
            lazyLoad: 'nearby',
        });
    
        splideGalleryProject.sync( thumbnails );
        splideGalleryProject.mount();
        thumbnails.mount();
      })
    }
  
    if(document.querySelector('#splide-aliados')){
      const splideAliados = new Splide('#splide-aliados', {
        type   : 'loop',
        drag   : 'free',
        lazyLoad: 'nearby',
        perPage: 5,
        perMove: 1,
        rewind : true,
        pagination: true,
        arrows: true,
        autoplay: true,
        breakpoints: {
          768: {
            perPage: 4,
          },
          640: {
            perPage: 3,
          },
          480: {
            perPage: 2,
          },
        },
      })
  
      splideAliados.mount();
    }

    if(document.querySelector('#splide-coordinacion')){
      const splideAliados = new Splide('#splide-coordinacion', {
        type   : 'loop',
        drag   : 'free',
        perPage: 5,
        perMove: 1,
        rewind : true,
        pagination: true,
        arrows: true,
        autoplay: true,
        breakpoints: {
          768: {
            perPage: 4,
          },
          640: {
            perPage: 3,
          },
          480: {
            perPage: 2,
          },
        },
      })
  
      splideAliados.mount();
    }
  
    if(document.querySelector('.menu-mobile-open')){
      const menuMobile = document.querySelector('.menu-mobile');
      const menuMobileOpen = document.querySelector('.menu-mobile-open');
  
      if(document.querySelector('.menu-mobile-close')){
        const menuMobileClose = document.querySelector('.menu-mobile-close');
        menuMobileClose.addEventListener('click', () => {
          menuMobile.classList.remove('translate-x-[0%]');
          menuMobile.classList.add('translate-x-[100%]');
        })
      }  
  
      menuMobileOpen.addEventListener('click', () => {
        menuMobile.classList.remove('translate-x-[100%]');
        menuMobile.classList.add('translate-x-[0%]');
      })
    }
  
    if(document.querySelector('#splide-projects-mobile')){
      const splideProjectsMobile = new Splide( '#splide-projects-mobile', {
        type       : 'fade',
        //heightRatio: 0.5,
        pagination : false,
        lazyLoad: 'nearby',
        arrows     : false,
        cover      : true,
      });
  
      const thumbnailsMobile = new Splide( '#thumbnail-slider-mobile', {
        rewind          : true,
        //fixedWidth      : 128,
        //fixedHeight     : 128,
        isNavigation    : true,
        gap             : 10,
        focus           : 'center',
        pagination      : false,
        cover           : true,
        dragMinThreshold: {
          mouse: 4,
          touch: 10,
        },
        breakpoints : {
          640: {
            fixedWidth  : 66,
            fixedHeight : 38,
          },
          480: {
            fixedWidth  : 66,
            fixedHeight : 38,
          },
        },
        lazyLoad: 'nearby',
      });
  
      splideProjectsMobile.sync( thumbnailsMobile );
      splideProjectsMobile.mount();
      thumbnailsMobile.mount();
    }
  
    if(document.querySelector('.objetivo')){
      const objetivos = document.querySelectorAll('.objetivo');
  
      objetivos.forEach(objetivo => {
      
        const number = objetivo.querySelector('.objetivo-number');
        const icono = objetivo.querySelector('.objetivo-icono');
  
        objetivo.addEventListener('mouseenter', () => {
    
          number.classList.remove('opacity-100')
          number.classList.add('opacity-0')
          icono.classList.remove('translate-y-24');
          icono.classList.add('-translate-y-24')
         
        })
  
        objetivo.addEventListener('mouseleave', () => {
          number.classList.remove('opacity-0')
          number.classList.add('opacity-100')
          icono.classList.remove('-translate-y-24');
          icono.classList.add('translate-y-24')
        })
      })
    }

    if(document.querySelector('.objetivo')){
      const objetivos = document.querySelectorAll('.objetivo')

      objetivos.forEach(objetivo => {
        objetivo.addEventListener('mouseenter', () => {
          gsap.to('.cursor', {
            background: '#F58F00',
            scale: 3,
            opacity: .6,
            duration: .5,
          })
        })

        objetivo.addEventListener('mouseleave', () => {
          gsap.to('.cursor', {
            background: '#F58F00',
            scale: 1,
            opacity: .9,
            duration: .5,
          })
        })
      })
    }

   
  
    if(document.querySelector('.number-impacto') && document.querySelector('.number-municipios') && document.querySelector('.number-beneficiario')){
  
      function activarContadorMunicipios(){
        const numberBeneficiario = document.querySelector('.number-municipios');
        let startNumber = 0;
        let endNumber = parseInt(numberBeneficiario.getAttribute("data-value"));
  
        let counter = setInterval(() => {
          startNumber += 10;
          numberBeneficiario.textContent = `+ ${startNumber}`
          if(startNumber >= endNumber){
            clearInterval(counter);
          }
        }, 20)
        
      }

      function activarContadorBeneficiarios(){
        const numberBeneficiario = document.querySelector('.number-beneficiario');
        let startNumber = 0;
        let endNumber = parseInt(numberBeneficiario.getAttribute("data-value"));
  
        let counter = setInterval(() => {
          startNumber += 1;
          numberBeneficiario.textContent = `+ ${startNumber}M`
          if(startNumber >= endNumber){
            clearInterval(counter);
          }
        }, 100)

      }
  
      function activarContador(){
        const numbers = document.querySelectorAll('.number-impacto');
      
  
        numbers.forEach(number => {
          let startNumber = 0;
          let endNumber = parseInt(number.getAttribute("data-value"));
  
          let counter = setInterval(() => {
            startNumber +=1;
            number.textContent = `+ ${startNumber}`
            if(startNumber >= endNumber){
              clearInterval(counter);
            }
          }, 70)
        })
      }
  
      // FunciÃ³n de devoluciÃ³n de llamada que se ejecuta cuando la secciÃ³n "impacto" entra en el Ã¡rea visible
      function handleIntersection(entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > 0 && entry.target.id === 'impacto') {
            // La secciÃ³n "impacto" estÃ¡ en el Ã¡rea visible
            activarContadorMunicipios();
            activarContador(); // Activa el contador aquÃ­
            activarContadorBeneficiarios();
            observer.unobserve(entry.target); // Deja de observar la secciÃ³n despuÃ©s de activar el contador
          }
        });
      }
  
      // Opciones de configuraciÃ³n para el Intersection Observer
      const options = {
        threshold: 0.5 // Se activarÃ¡ la devoluciÃ³n de llamada cuando al menos el 50% del elemento sea visible
      };
  
      // Crear el Intersection Observer y observar la secciÃ³n "impacto"
      const observer = new IntersectionObserver(handleIntersection, options);
      const impactoSection = document.getElementById('impacto');
      observer.observe(impactoSection);
    }
  
    if(document.querySelector('.item-somos')){
      // const itemSomos = document.querySelector('.item-somos');
      // const dropdownSomos = document.querySelector('.dropdown-somos');
  
      // itemSomos.addEventListener('mouseenter', () => {
      //   dropdownSomos.classList.remove('hidden');
      //   dropdownSomos.classList.add('flex')
      // })
  
      // itemSomos.addEventListener('mouseleave', () => {
      //   dropdownSomos.classList.remove('flex');
      //   dropdownSomos.classList.add('hidden')
      // })
    }
  
    if(document.querySelector('.projects')){
      const projectOne = document.querySelector('.project:nth-child(1)');
      console.log(projectOne)
      projectOne.classList.add('active')
    }
  
    if(document.querySelector('.secciones')){

      const secciones = document.querySelector('.secciones');
      const parrafosSection = document.querySelectorAll('.parrafo-seccion')
      const imagenesSection = document.querySelectorAll('.imagen-seccion')
      const primerHijo = secciones.lastElementChild;
      console.log(primerHijo)
      const dataType = primerHijo.getAttribute('data-type')
      primerHijo.classList.add('active')

      const sectionParrafo = document.querySelector(`.parrafo-seccion[data-type="${dataType}"]`)
      const sectionImagen = document.querySelector(`.imagen-seccion[data-type="${dataType}"]`)
      sectionParrafo.classList.add('active')
      sectionImagen.classList.add('active')

      const sections = document.querySelectorAll('.seccion')

      sections.forEach(section => {
        section.addEventListener('click', () => {
          sections.forEach(section => {
            section.classList.remove('active')
          })

          section.classList.add('active');
          const dataType = section.getAttribute('data-type');
          parrafosSection.forEach(parrafo => {
            parrafo.classList.remove('active')
          })

          imagenesSection.forEach(imagen => {
            imagen.classList.remove('active')
          })

          const parrafoActive = document.querySelector(`.parrafo-seccion[data-type="${dataType}"]`)
          parrafoActive.classList.add('active')
          const imagenActive = document.querySelector(`.imagen-seccion[data-type="${dataType}"]`)
          imagenActive.classList.add('active')
        })
      })
      
    }
  
    if(document.querySelector('#splide-page-projects')){
      const splidePageProjects = new Splide('#splide-page-projects', {
        // drag   : 'free',
        perPage: 4,
        perMove: 1,
        rewind : true,
        gap: 4,
        pagination: false,
        arrows: true,
        // autoplay: false,
        breakpoints: {
          1024:{
            perPage: 3 
          },
          768: {
            perPage: 2,
          },
          640: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      })
  
      splidePageProjects.mount();
    }

    if(document.querySelector('#splide-timeline')){
      const splideTimeline = new Splide('#splide-timeline', {
        // type   : 'loop',
        // drag   : 'free',
        perPage: 4,
        perMove: 1,
        // rewind : true,
        gap: 0,
        pagination: false,
        arrows: true,
        // autoplay: false,
        breakpoints: {
          1024: {
            perPage: 3,
          },
          768: {
            perPage: 2,
          },
          640: {
            perPage: 2,
          },
          480: {
            perPage: 1,
          },
        },
      })
  
      splideTimeline.mount();
    }

    if(document.querySelector('#splide-years-gallery')){
      const splideYearsGallery = new Splide('#splide-years-gallery', {
        drag   : 'free',
        perPage: 5,
        rewind : true,
        gap: 8,
        pagination: false,
        arrows: true,
        // autoplay: false,
        breakpoints: {
          768: {
            perPage: 4,
          },
          640: {
            perPage: 3,
          },
          480: {
            perPage: 2,
          },
        },
      })
  
      splideYearsGallery.mount();
    }
  
    if(document.querySelector('.list-projects')){
      const tabEstadoProyectos = document.querySelector('.tabs-estado-proyectos');
      const primerHijo = tabEstadoProyectos.firstElementChild;
      const estadoActual = primerHijo.getAttribute('data-abierto')
      primerHijo.classList.add('active')
      const allProjects = document.querySelectorAll('.project-page-projects')
      const tabs = document.querySelectorAll('.tabs-estado');

      allProjects.forEach(project => {
        project.classList.remove('flex');
        project.classList.add('hidden')
      })

      const projectsOpen = document.querySelectorAll(`.project-page-projects[data-abierto="${estadoActual}"]`)
      const primerHijoOpen = projectsOpen[0];
      primerHijoOpen.classList.add('active')
      const dataIdValue = primerHijoOpen.getAttribute('data-id');
      const projectsContent = document.querySelectorAll('.proyecto-content');
  
      projectsContent.forEach(project => {
        project.classList.add('hidden', 'h-0');
      })

      const projectActive = document.querySelector(`.proyecto-content[data-id="${dataIdValue}"]`);
      projectActive.classList.remove('hidden', 'h-0');

      
      projectsOpen.forEach(project => {
        project.classList.remove('hidden');
        project.classList.add('flex')
      })

      const projectTabs = document.querySelectorAll('.project-page-projects');
  
      projectTabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const id = tab.getAttribute('data-id');
          mostrarContenidoProyectoActivo(id);
            
          projectTabs.forEach(tab => {
            tab.classList.remove('active')
          })

          tab.classList.add('active')
        })
      })
  
      function mostrarContenidoProyectoActivo(id){
        projectsContent.forEach(project => {
          project.classList.add('hidden', 'h-0');
          project.classList.remove('active')
        })
    
        const projectActive = document.querySelector(`.proyecto-content[data-id="${id}"]`);
        projectActive.classList.remove('hidden', 'h-0');
      }


      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(tab => {
            tab.classList.remove('active')
          })
          tab.classList.add('active')
          const estado = tab.getAttribute('data-abierto');
          allProjects.forEach(project => {
            project.classList.remove('flex')
            project.classList.add('hidden')
          })

          const splide = document.querySelector('#splide-page-projects');
          const contents = document.querySelector('.proyectos-content')
          const cuadrado = document.querySelector('.cuadrado-amarillo')
          const mensaje = document.querySelector('.mensaje')

          const projectStateCurrent = document.querySelectorAll(`.project-page-projects[data-abierto="${estado}"]`);
          if(projectStateCurrent.length <= 0){
            splide.classList.add('hidden')
            contents.classList.add('hidden')
            cuadrado.classList.add('hidden')
            mensaje.classList.remove('hidden')
          }else{
            splide.classList.remove('hidden')
            contents.classList.remove('hidden')
            cuadrado.classList.remove('hidden')
            mensaje.classList.add('hidden')
            projectStateCurrent.forEach(project => {
              project.classList.remove('hidden')
              project.classList.add('flex')
            })
          }
        })
      })

  
    }
  

    if(document.querySelector('.lineas-estrategicas')){
      const lineaEstrategica = document.querySelector('.lineas-estrategicas');
      const primerHijo = lineaEstrategica.firstElementChild;
      const listadoCursos = document.querySelectorAll('.cursos-asociados')
      primerHijo.classList.add('active')
      const lineaActive = primerHijo.getAttribute('data-linea');
      const cursosActive = document.querySelector(`.cursos-asociados[data-linea="${lineaActive}"]`);
      cursosActive.classList.add('active')

      const lineasEstrategicas = document.querySelectorAll('.linea-estrategica');
      lineasEstrategicas.forEach(linea => {
        linea.addEventListener('click', () => {
          lineasEstrategicas.forEach(linea => {
            linea.classList.remove('active');
          })
          linea.classList.add('active')
          const lineaActive = linea.getAttribute('data-linea');
          listadoCursos.forEach(curso => {
            curso.classList.remove('active')
          })
          const cursoActive = document.querySelector(`.cursos-asociados[data-linea="${lineaActive}"]`)
          cursoActive.classList.add('active')
        })
      })
    }

    if(document.querySelector('.expand-contacto')){
      const expand = document.querySelector('.expand-contacto');
      const info = document.querySelector('.info-contacto')

      expand.addEventListener('click', () => {
        info.classList.remove('h-0');
        info.classList.add('h-auto')
      })
    }

    if(document.querySelector('.imagen-galeria')){
      const years = document.querySelector('.years');
      const primerHijo = years.firstElementChild;
      const allPhotos = document.querySelectorAll('.imagen-galeria')
      const currentYear = primerHijo.getAttribute('data-year');
      primerHijo.classList.add('active');

      const photosCurrent = document.querySelectorAll(`.imagen-galeria[data-year="${currentYear}"]`);
      photosCurrent.forEach(photo => {
        photo.classList.add('active')
      })


      const allYears = document.querySelectorAll('.year-gallery');
      allYears.forEach(year => {
        year.addEventListener('click', () => {
          allYears.forEach(year => {
            year.classList.remove('active');
          })

          year.classList.add('active');
          const yearActive = year.getAttribute('data-year');
          allPhotos.forEach(photo => {
            photo.classList.remove('active')
          })

          const currentPhotos = document.querySelectorAll(`.imagen-galeria[data-year="${yearActive}"]`)
          const mensaje = document.querySelector('.mensaje');

          if(currentPhotos.length <= 0){
            mensaje.classList.remove('hidden')
          }else{
            mensaje.classList.add('hidden');
            currentPhotos.forEach(photo => {
              photo.classList.add('active')
            })
          }

        })
      })

    }
	
	

  

    

    


    if(document.querySelector('.documentos-2025')){
      const documentos = document.querySelector('.documentos-2025');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2025"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10');
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }

    if(document.querySelector('.documentos-2024')){
      const documentos = document.querySelector('.documentos-2024');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2024"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10');
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }

    if(document.querySelector('.documentos-2022')){
      const documentos = document.querySelector('.documentos-2022');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2022"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10');
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }

    if(document.querySelector('.documentos-2021')){
      const documentos = document.querySelector('.documentos-2021');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2021"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10');
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }

    if(document.querySelector('.documentos-2020')){
      const documentos = document.querySelector('.documentos-2020');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2020"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10');
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }

    if(document.querySelector('.documentos-2019')){
      const documentos = document.querySelector('.documentos-2019');

      const allDocuments = document.querySelectorAll(`.documento[data-categoria="documentos de actualizacion esal 2019"]`);

      if(allDocuments.length > 0){
        documentos.classList.remove('invisible')
        documentos.classList.remove('h-0')
        documentos.classList.add('visible')
        documentos.classList.add('h-auto')
        documentos.classList.add('mt-10')
        documentos.classList.add('sm:mt-20')
      }else{
        documentos.classList.remove('visible')
        documentos.classList.remove('h-auto')
        documentos.classList.add('invisible')
        documentos.classList.add('h-0')
        documentos.classList.remove('mt-10');
        documentos.classList.remove('sm:mt-20')
      }
    }


    if(document.querySelector('.image-arrow')){
      const tl = gsap.timeline();

      tl.fromTo('.image-arrow', {
        yPercent: -20,
        opacity: 0
      }, {
        opacity: 1,
        yPercent: 20,
        duration: 1,
        repeat: -1
      })
    }

}
  

window.addEventListener('scroll', () => {
  if(document.querySelector('.boton-donar')){
    const botonDonar = document.querySelector('.boton-donar');
    botonDonar.classList.add('active');

    setTimeout(() => {
    botonDonar.classList.remove('active');
    }, 2000)
  }

  if(document.querySelector('.social-icons')){
    // const icons = document.querySelectorAll('.icons');

    const tl = gsap.timeline();

    tl.to('.social-icons .icon', {
      xPercent: 150,
      opacity: 1,
      duration: .3, // DuraciÃ³n de la animaciÃ³n
      stagger: 0.1, // Intervalo entre las animaciones de letras
      // ease: "power1.inOut", // Easing deseado
    })

  }
}) 
  
document.addEventListener('DOMContentLoaded', cursor);