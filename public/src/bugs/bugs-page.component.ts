import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bugfix1MutationHostComponent } from './bugfix-1-mutation/bugfix-1-host.component';
import { Bugfix2SubscriptionLeakHostComponent } from './bugfix-2-subscription-leak/bugfix-2-subscription-leak-host.component';
import { Bugfix3AsyncTemplateComponent } from './bugfix-3-async-template/bugfix-3-async-template.component';

@Component({
  selector: 'app-bugs-page',
  standalone: true,
  imports: [
    CommonModule,
    Bugfix1MutationHostComponent,
    Bugfix2SubscriptionLeakHostComponent,
    Bugfix3AsyncTemplateComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './bugs-page.component.html',
  styleUrls: ['./bugs-page.component.scss']
})
export class BugsPageComponent {}
