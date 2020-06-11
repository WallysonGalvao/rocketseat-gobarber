import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseTemplateDTO from '../dtos/IParseTemplateDTO';

class FakeMailTemplateProvide implements IMailTemplateProvider {
  public async parse({ template }: IParseTemplateDTO): Promise<string> {
    return template;
  }
}

export default FakeMailTemplateProvide;
