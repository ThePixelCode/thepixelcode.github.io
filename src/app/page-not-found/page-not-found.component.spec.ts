import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "404"', () => {
    const title: HTMLElement = fixture.nativeElement;
    const h1 = title.querySelector('h1')!;
    expect(h1.textContent).toEqual('404');
  });

  it('should contain "The Requested Page Doesnt Exist"', () => {
    const title: HTMLElement = fixture.nativeElement;
    const p = title.querySelector('p')!;
    expect(p.textContent).toContain("The Requested Page Doesn't Exist");
  });

  it('should contain "😢"', () => {
    const title: HTMLElement = fixture.nativeElement;
    const p = title.querySelector('p')!;
    expect(p.textContent).toEqual('😢');
  });
});
