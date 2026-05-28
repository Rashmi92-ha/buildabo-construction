import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.scss'
})
export class PricingComponent {

  pricingPlans = [

    {
      title: 'Basic',
      price: '₹15L+',
      featured: false,

      features: [
        'Standard Materials',
        'Modern Design',
        'Basic Interior'
      ]
    },

    {
      title: 'Premium',
      price: '₹30L+',
      featured: true,

      features: [
        'Premium Materials',
        'Luxury Interiors',
        'Smart Features'
      ]
    },

    {
      title: 'Luxury',
      price: '₹50L+',
      featured: false,

      features: [
        'Customized Villas',
        'Modern Architecture',
        'High-End Finishes'
      ]
    }

  ];

}