import React, { useEffect, useRef } from 'react';

const MouseTrail = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    let particles = [];
    let mouse = { x: undefined, y: undefined };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      
      // Add new particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouse.x, mouse.y));
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        // Primary purple / secondary cyan colors
        const colors = ['#8b5cf6', '#06b6d4', '#a78bfa'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.life = 1; // opacity
        this.decay = Math.random() * 0.02 + 0.02;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size -= 0.1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size > 0 ? this.size : 0, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.hexToRgb(this.color)}, ${this.life})`;
        ctx.fill();
      }

      hexToRgb(hex) {
        let r = 0, g = 0, b = 0;
        if (hex.length === 7) {
          r = parseInt(hex.substring(1, 3), 16);
          g = parseInt(hex.substring(3, 5), 16);
          b = parseInt(hex.substring(5, 7), 16);
        }
        return `${r}, ${g}, ${b}`;
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        
        // Remove dead particles
        if (particles[i].life <= 0 || particles[i].size <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }
      
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-50 mix-blend-screen"
    />
  );
};

export default MouseTrail;
