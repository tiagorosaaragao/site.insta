// Configuração do Particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#00d4ff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5
        },
        size: {
            value: 5
        },
        line_linked: {
            enable: true,
            color: "#00d4ff",
            opacity: 0.4
        },
        move: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse"
            },
            onclick: {
                enable: true,
                mode: "push"
            }
        },
        modes: {
            repulse: {
                distance: 100
            },
            push: {
                particles_nb: 4
            }
        }
    }
});