import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgoTestModule } from '../../../test/module';
import { IgoSharedModule } from '../../shared';
import { IgoFilterModule } from '../../filter';

import { LayerListComponent } from './layer-list.component';
import { LayerItemComponent } from '../layer-item/layer-item.component';
import { LayerLegendComponent } from '../layer-legend/layer-legend.component';

describe('LayerListComponent', () => {
  let component: LayerListComponent;
  let fixture: ComponentFixture<LayerListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [IgoTestModule, IgoSharedModule, IgoFilterModule],
        declarations: [
          LayerListComponent,
          LayerItemComponent,
          LayerLegendComponent
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.layers = [];
    expect(component).toBeTruthy();
  });
});
