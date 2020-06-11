import IParseTemplateDTO from '../../MailTemplateProvider/dtos/IParseTemplateDTO';

interface IMailContact {
  name: string;
  email: string;
}

export default interface ISendMailDTO {
  to: IMailContact;
  from?: IMailContact;
  subject: string;
  templateData: IParseTemplateDTO;
}
