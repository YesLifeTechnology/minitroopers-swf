import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthStore } from 'src/app/stores/auth.store';

@Component({
  selector: 'app-container-referral',
  imports: [FormsModule],
  templateUrl: './container-referral.component.html',
  styleUrl: './container-referral.component.scss',
})
export class ContainerReferralComponent implements OnInit {
  referralLink: string = '';
  nextGoldReferral: number = 0;
  twitterLink: string = '';

  private authStore = inject(AuthStore);

  ngOnInit(): void {
    if (this.authStore.armyName()) {
      this.nextGoldReferral = this.authStore.referralGold();
      this.buildLinks(this.authStore.armyName()?.toLowerCase() as string);
    }
  }

  buildLinks(armyName: string) {
    this.referralLink = 'https://minitroopers.com/invite/' + armyName;

    this.twitterLink =
      'https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw%7Ctwcamp%5Ebuttonembed%7Ctwterm%5Eshare%7Ctwgr%5E&text=%23minitroopers%20Rejoins%20mon%20arm%C3%A9e%20!!&url=' +
      encodeURI(this.referralLink);
  }

  twitterCliked() {
    // stats
    // copy
  }

  discordCliked() {
    // stats
    // copy
  }
}
