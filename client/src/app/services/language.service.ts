import { Injectable } from '@angular/core';
import { Lang } from '@minitroopers/prisma';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  selectedLanguage: Lang = Lang.fr;

  setLanguage(lang: Lang) {
    this.selectedLanguage = lang;
  }
}
