import { ContactManagerModule } from './contact-manager.module';

describe('ContactManagerModule', () => {
  let contactManagerModule: ContactManagerModule;

  beforeEach(() => {
    contactManagerModule = new ContactManagerModule();
  });

  it('should create an instance', () => {
    expect(contactManagerModule).toBeTruthy();
  });
});
