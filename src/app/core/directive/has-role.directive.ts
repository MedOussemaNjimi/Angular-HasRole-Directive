import { NgIf } from '@angular/common';
import { Directive, effect, inject, input } from '@angular/core';
import { UserService } from '../service/user.service';

@Directive({
  selector: '[hasRole]',
  standalone:true,
  hostDirectives:[{directive:NgIf}]
})
export class HasRoleDirective {
private ngIfDirective = inject(NgIf);
private userService = inject(UserService);
role = input<any | any[]>([],{alias:"hasRole"})
predicate = input(true,{alias:"hasRoleAnd"})

  constructor(
  
  ) {     
    effect(()=> this.ngIfDirective.ngIf = this.userService.hasRole(this.role()) && this.predicate() )
  }

}
