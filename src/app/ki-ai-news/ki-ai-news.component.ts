import { Component } from '@angular/core';
import { News } from '../interfaces/news-interface';
import { DynamicNewsService } from '../services/dynamic-news.service';

@Component({
  selector: 'app-ki-ai-news',
  templateUrl: './ki-ai-news.component.html',
  styleUrls: ['./ki-ai-news.component.scss']
})
export class KiAiNewsComponent {
  politicsNews: News[] = [];

  constructor(private newsService: DynamicNewsService) {}

  ngOnInit() {
    this.newsService.getDynamicNews('artificial intelligence OR ai OR ki').then(articles => {
      this.politicsNews = articles;
    });
  }

}
