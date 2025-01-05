import { Pipe, PipeTransform } from '@angular/core';
import { PartialUserExtended } from '@minitroopers/shared';
import { PrefixArmy } from '../pages/signup/signup.component';

@Pipe({
  standalone: true,
  name: 'getArmyName',
})
export class GetArmyNamePipe implements PipeTransform {
  transform(user: PartialUserExtended | undefined): string {
    if (user) {
      const prefixs = PrefixArmy;

      return (
        "L'armée" +
        (user.prefix != 5 ? ' ' : '') +
        prefixs[user.prefix] +
        (user.prefix == 5 || user.prefix == 1 ? '' : ' ') +
        user.armyName
      );
    } else {
      return '';
    }
  }
}
