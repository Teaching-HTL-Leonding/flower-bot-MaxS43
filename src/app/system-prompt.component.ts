
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-prompt',
  templateUrl: './system-prompt.component.html',
  styleUrls: ['./system-prompt.component.css']
})
export class SystemPromptComponent {
  systemPrompt: string = '';

  constructor(private router: Router) {}

  savePrompt() {
    localStorage.setItem('systemPrompt', this.systemPrompt);
    this.router.navigate(['/']);
  }
}
