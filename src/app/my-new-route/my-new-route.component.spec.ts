import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNewRouteComponent } from './my-new-route.component';

describe('MyNewRouteComponent', () => {
  let component: MyNewRouteComponent;
  let fixture: ComponentFixture<MyNewRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNewRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNewRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
