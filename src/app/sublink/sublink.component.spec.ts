import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SublinkComponent } from './sublink.component';

describe('SublinkComponent', () => {
  let component: SublinkComponent;
  let fixture: ComponentFixture<SublinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SublinkComponent ]
    })
    .compileComponents();
  });

  it('Should create the component', () => {
    fixture = TestBed.createComponent(SublinkComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
