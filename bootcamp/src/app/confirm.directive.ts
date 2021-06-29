import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirm]'
})
export class ConfirmDirective {
  @Input() appConfirm = () => {};
  @HostListener('click', ['$event'])
  confirmFirst(){
    const confirmed = window.confirm('Please confirm by clicking here!');
    if(confirmed){
      this.appConfirm();
    }
  }
}
