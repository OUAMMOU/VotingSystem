import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MerciVotedComponent } from './merci-voted.component';

describe('MerciVotedComponent', () => {
  let component: MerciVotedComponent;
  let fixture: ComponentFixture<MerciVotedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MerciVotedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MerciVotedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
