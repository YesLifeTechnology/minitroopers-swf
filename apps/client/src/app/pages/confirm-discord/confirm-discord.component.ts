import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-confirm-discord',
  imports: [],
  templateUrl: './confirm-discord.component.html',
  styleUrl: './confirm-discord.component.scss',
})
export class ConfirmDiscordComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    const code = this.route.snapshot.queryParamMap.get('code');
    // console.log(code);
    if (code) {
      this.authService.getFromTokenDiscord(code).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.router.navigate(['/']);
    }
  }
}
