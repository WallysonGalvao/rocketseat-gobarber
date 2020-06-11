interface ITemplateVariables {
  [key: string]: string | number;
}

export default interface IParseTemplateDTO {
  template: string;
  variables: ITemplateVariables;
}
