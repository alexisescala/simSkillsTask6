import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { Item } from '../interfaces/item';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];
  constructor(
    private storageService: StorageService,
    public dms: DomSanitizer
  ) {}
  ngOnInit(): void {
    this.getItems();
  }

  display(b64: string) {
    return this.dms.bypassSecurityTrustUrl(b64);
  }

  getItems() {
    this.storageService.getItems().subscribe((response) => {
      this.items = response;
    });
  }
}
