import { DataServiceModule } from './data-service.module';

describe('DataServiceModule', () => {
  let dataServiceModule: DataServiceModule;

  beforeEach(() => {
    dataServiceModule = new DataServiceModule();
  });

  it('should create an instance', () => {
    expect(dataServiceModule).toBeTruthy();
  });
});
