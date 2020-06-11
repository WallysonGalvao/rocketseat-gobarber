import IMailTemplateProvider from '../models/IMailTemplateProvider';

class FakeMailTemplateProvide implements IMailTemplateProvider {
  public async parse(): Promise<string> {
    return 'Mail content';
  }
}

export default FakeMailTemplateProvide;
