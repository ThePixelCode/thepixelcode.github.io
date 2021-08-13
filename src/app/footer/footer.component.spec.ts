import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have "All Copyrights Reserved"', () => {
    const native:HTMLElement = fixture.nativeElement;
    const p = native.querySelector('p');
    expect(p?.textContent).toEqual('All Copyrights Reserved');
  });

  it('should have footerList', () => {
    expect(component.footerList).toBeDefined();
  });
});
