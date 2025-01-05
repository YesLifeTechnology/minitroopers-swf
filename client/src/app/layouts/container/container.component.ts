import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnInit {
  ads: Ad[] = [];

  ngOnInit(): void {
    this.ads =
      window.innerWidth < 974
        ? [
            {
              description: "Devenez gérant d'un hôtel... particuliers",
              image: '/assets/images/ads/croquemotel.jpg',
              link: 'google.fr',
              title: 'Croquemotel',
            },
            {
              description: 'Elevez et faîtes combattre vos Dinoz',
              image: '/assets/images/ads/dinorpg.jpg',
              link: 'google.fr',
              title: 'Dinorpg',
            },
          ]
        : [
            {
              description:
                "Devenez gérant d'un hôtel aux clients... particuliers",
              image: '/assets/images/ads/croquemotel.jpg',
              link: 'google.fr',
              title: 'Croquemotel',
            },
            {
              description: 'Elevez et faîtes combattre vos Dinoz !',
              image: '/assets/images/ads/dinorpg.jpg',
              link: 'google.fr',
              title: 'Dinorpg',
            },
            {
              description: '16 membres, 2 traites détruisez ou survivez.',
              image: '/assets/images/ads/mush.jpg',
              link: 'google.fr',
              title: 'Mush',
            },
            {
              description: 'Le premier jeu de zombie gratuit !',
              image: '/assets/images/ads/hordes.jpg',
              link: 'google.fr',
              title: 'Hordes',
            },
          ];
  }
}

export interface Ad {
  image: string;
  title: string;
  description: string;
  link: string;
}
