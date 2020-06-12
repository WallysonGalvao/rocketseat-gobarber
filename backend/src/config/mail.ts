interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_PROVIDER || 'ethereal',

  defaults: {
    from: {
      email: 'wallyson.galvao@gmail.com',
      name: 'Wallyson Galvão',
    },
  },
} as IMailConfig;
