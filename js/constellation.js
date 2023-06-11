
  particlesJS("hero-constellation", {
    particles: {
      number: {
        value: 80, // Adjust the number of particles
        density: {
          enable: true,
          value_area: 800 // Adjust the area density of particles
        }
      },
      color: {
        value: "#ffffff" // Adjust the color of particles
      },
      shape: {
        type: "circle", // Adjust the shape of particles (e.g., circle, square, triangle, etc.)
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          nb_sides: 5
        },
        image: {
          src: "images/Miners_Dry_Hero.jpg", // Replace with your own particle image path
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5, // Adjust the opacity of particles
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3, // Adjust the size of particles
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150, // Adjust the distance between particles
        color: "#ffffff", // Adjust the color of the particle connections
        opacity: 0.4, // Adjust the opacity of the particle connections
        width: 1 // Adjust the width of the particle connections
      },
      move: {
        enable: true,
        speed: 6, // Adjust the speed of particles
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse" // Adjust the interaction mode on hover (e.g., grab, bubble, repulse, etc.)
        },
        onclick: {
          enable: true,
          mode: "push" // Adjust the interaction mode on click (e.g., push, remove, bubble, etc.)
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 100 // Adjust the repulsion distance on hover
        },
        push: {
          particles_nb: 4 // Adjust the number of particles pushed on click
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  });

