import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webpay',
  templateUrl: './webpay.component.html',
  styleUrls: ['./webpay.component.css']
})
export class WebpayComponent implements OnInit, AfterViewInit {
  htmlContent: any;
  constructor(private location: Location, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    const htmlContent: any = this.location.getState();
    if (htmlContent) {
      this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(htmlContent.htmlContent);
    }
  }

  ngAfterViewInit() {
    this.submitIfFormExists()
  }

  submitIfFormExists() {
    const formElement = document.querySelector('form');
    console.log(formElement)
    if (formElement) {
      formElement.submit();
    }
  }
}
