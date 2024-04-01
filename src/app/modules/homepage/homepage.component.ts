import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ReplaySubject, debounceTime, takeUntil } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { GetAllGifs, GetSearchGif } from 'src/app/core/storage/action/homepage.action';
import { HomePageService } from 'src/app/core/serviсe/homePage.service';



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public searchForm: FormGroup;
  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private store: Store, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      search: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.store.dispatch(new GetAllGifs());
    this.searchForm.valueChanges.pipe(debounceTime(500))
      .pipe(takeUntil(this.destroyed$))
      .subscribe((inputValue) => {
        if(inputValue.search){
          this.store.dispatch(new GetSearchGif(inputValue.search))
        } else {
          this.store.dispatch(new GetAllGifs());
        }
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }
}
