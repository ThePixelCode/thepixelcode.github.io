import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have mainLinks defined', () => {
    expect(component.mainLinks).toBeDefined();
  });

  it('should have "a" tags', () => {
    const native: HTMLElement = fixture.nativeElement;
    const item = native.querySelectorAll('a');
    for (let i = 0; i < component.mainLinks.length; i++) {
      let iItem = item.item(i);
      if (i == 0) {
        expect(iItem.className).toContain('active');
      } else {
        expect(iItem.className).not.toContain('active');
      }
      expect(iItem.textContent).toEqual(component.mainLinks[i]);
    }
  });
});
