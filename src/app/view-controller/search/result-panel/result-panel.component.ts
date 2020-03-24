import { SyncService } from './../shared/services/sync.service';
import { SearchResultInterface } from './../shared/interfaces/search-result.interface';
import { SearchService } from './../shared/services/search.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-controller-result-panel',
  templateUrl: './result-panel.component.html',
  styleUrls: ['./result-panel.component.scss']
})
export class ResultPanelComponent implements OnInit {
  @Input('visible') visible: boolean;
  results: Array<SearchResultInterface>;

  constructor(
    private syncService: SyncService,
    private searchService: SearchService
  ) {
    this.results = [];
  }

  ngOnInit() {
    this.syncService.searchQuery$.subscribe(query => {
      if (query !== '') {
        this.results = this.searchService.getResults(query);
      } else {
        this.results = [];
      }
    });
  }
}