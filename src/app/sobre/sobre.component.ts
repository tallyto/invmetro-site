import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit, AfterViewInit {

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Inicializar animação dos números após a view estar carregada
    this.animateNumbers();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }

  private animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    statNumbers.forEach((statNumber: any) => {
      const target = parseInt(statNumber.getAttribute('data-target'));
      const duration = 2000; // 2 segundos
      const increment = target / (duration / 16); // 60 FPS aproximadamente
      let current = 0;
      
      const updateNumber = () => {
        current += increment;
        if (current < target) {
          statNumber.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateNumber);
        } else {
          statNumber.textContent = target.toString();
        }
      };
      
      // Iniciar animação quando o elemento estiver visível
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            updateNumber();
            observer.unobserve(entry.target);
          }
        });
      });
      
      observer.observe(statNumber);
    });
  }

}
