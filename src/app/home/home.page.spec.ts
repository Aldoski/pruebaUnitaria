import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

// a "component" le puedo cambiar el nombre para que ser mas facil de leer
describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // 6 Creo el "spy" spy en sí guarda el resultado de cada operacion
  it ('Debería ser numero positivo', () =>{
    const spy = spyOn (component, 'suma');
    component.ngOnInit()
    expect (spy).toHaveBeenCalled();
  });

  it ('Debería ser numero positivo', () =>{
    const spy = spyOn (component, 'mult');
    component.ngOnInit()
    expect (spy).toHaveBeenCalled();
  });

  it ('Debería ser numero positivo', () =>{
    const spy = spyOn (component, 'div');
    component.ngOnInit()
    expect (spy).toHaveBeenCalled();
  });

  it ('Debería ser numero positivo', () =>{
    const spy = spyOn (component, 'resta');
    component.ngOnInit()
    expect (spy).toHaveBeenCalled();
  });

  // 10 manejo error "titulo"
  it ('deberia decir titulo',() =>{
    expect(component.titulo).toEqual('Home Page.');
  });

});
