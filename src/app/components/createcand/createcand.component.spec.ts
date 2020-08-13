import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecandComponent } from './createcand.component';

describe('CreatecandComponent', () => {
  let component: CreatecandComponent;
  let fixture: ComponentFixture<CreatecandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatecandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
