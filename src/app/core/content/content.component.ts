import { CUSTOM_ELEMENTS_SCHEMA, Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasRoleDirective } from '../directive/has-role.directive';
import { Role } from '../service/user.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,HasRoleDirective],
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
role :any = Role;
withThisPriviliege:boolean = false
}
