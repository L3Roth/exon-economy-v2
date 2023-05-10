import { Component } from '@angular/core';

import { News } from '../interfaces/news-interface';
import { DynamicNewsService } from '../services/dynamic-news.service';

@Component({
  selector: 'app-stock-news',
  templateUrl: './stock-news.component.html',
  styleUrls: ['./stock-news.component.scss']
})
export class StockNewsComponent {
  stockNews: News[] = [];

  constructor(private newsService: DynamicNewsService) { }

  ngOnInit() {
    this.newsService.getDynamicNews('stocks OR stock market OR finance').then(articles => {
      this.stockNews = articles;
    });
  }
}
