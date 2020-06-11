import fs from 'fs';
import handlebars from 'handlebars';

import IMailTemplateProvider from '../models/IMailTemplateProvider';
import IParseTemplateDTO from '../dtos/IParseTemplateDTO';

class HandlebarsMailTemplateProvide implements IMailTemplateProvider {
  public async parse({ file, variables }: IParseTemplateDTO): Promise<string> {
    const templateFileContent = await fs.promises.readFile(file, {
      encoding: 'utf-8',
    });

    const parseTemplate = handlebars.compile(templateFileContent);

    return parseTemplate(variables);
  }
}

export default HandlebarsMailTemplateProvide;
