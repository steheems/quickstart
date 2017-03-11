import { AppComponent } from './app.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { BrowserTestingModule } from '@angular/platform-browser/testing';

describe('AppComponent', function () {
  let de: DebugElement;
  let comp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserTestingModule, FormsModule, RouterTestingModule],
      declarations: [AppComponent, UserComponent, AboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    comp = fixture.componentInstance;
    de = fixture.debugElement.query(By.css('ul'));
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have expected <ul> text', () => {
    fixture.detectChanges();
    const ul = de.nativeElement;
    expect(ul.innerText).toMatch(/home/i,
      '<ul> list should have element saying "Home"');
  });
});
