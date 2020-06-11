import IParseTemplateDTO from '../dtos/IParseTemplateDTO';

export default interface IMailTemplateProvider {
  parse(data: IParseTemplateDTO): Promise<string>;
}
