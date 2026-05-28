import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  sendEmail(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
   emailjs.sendForm('service_v3s7wri', 'template_cr5s90l', form, 'XjnHwPpXY0ey_cJrj')
      .then(() => {
        alert('Message Sent Successfully!');
        form.reset();
      })
      .catch(() => {
        alert('Failed To Send Message');
      });
  }
}
