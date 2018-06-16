import { element } from 'protractor';
import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges, SimpleChanges,
  DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy {
  // tslint:disable-next-line:no-input-rename
  @Input('srvElement') element: { type: string, name: string, content: string };
  @ContentChild('contentPeregraph') peregraph: ElementRef;
  constructor() {
    console.log('constructor - called');
  }

  ngOnInit() {
    console.log('ngOnInit - called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck - called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - called');
    console.log(this.peregraph);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked - called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked - called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - called');
  }
}
