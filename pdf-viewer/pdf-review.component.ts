import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { DevExtremeModule } from '../../dev-extreme/dev-extreme.module';

@Component({
  standalone: true,
  selector: 'app-pdf-review',
  templateUrl: './pdf-review.component.html',
  styleUrls: ['./pdf-review.component.scss'],
  imports: [
    CommonModule,NgxExtendedPdfViewerModule, DevExtremeModule],
})
export class PdfReviewComponent implements OnInit {

  files: any[] = [];
  currentFile: string = "";

  constructor() {
    this.files = fileItems;
   }

  ngOnInit() {
  }

  
  onEvent(eventName,$event ): void {
    console.log("",eventName);
    console.log("",$event);
  }

  onPagesLoaded($event ): void {
    console.log("",$event);
  }

  selectItem(e) {
    this.currentFile = e.itemData.url;
  }

  selectedOpenMode = 'shrink';

  selectedPosition = 'left';

  selectedRevealMode = 'slide';
  isDrawerOpen = true;
  toolbarContent = [{
    widget: 'dxButton',
    location: 'before',
    options: {
      icon: 'menu',
      onClick: () => this.isDrawerOpen = !this.isDrawerOpen,
    },
  }];

}


const fileItems = [
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Mensual.pdf',
    isDirectory: false,
    size: 1024,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Anual.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://www.africau.edu/images/default/sample.pdf',
  },
  {
    name: 'Reporte Sisco.pdf',
    isDirectory: false,
    size: 20480,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
  {
    name: 'Reporte Builder.pdf',
    isDirectory: false,
    size: 3072,
    url: 'https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf',
  },
];
