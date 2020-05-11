import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultaVoteComponent } from './resulta-vote.component';

describe('ResultaVoteComponent', () => {
  let component: ResultaVoteComponent;
  let fixture: ComponentFixture<ResultaVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultaVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultaVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
