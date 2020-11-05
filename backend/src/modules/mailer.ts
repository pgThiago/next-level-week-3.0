import nodemailer from 'nodemailer';
import mailConfig from '../config/mail';
import path from 'path';
import hbs from 'nodemailer-express-handlebars';

const { host, port, user, pass } = mailConfig;

const transport = nodemailer.createTransport({
    host,
    port,
    auth: {
      user,
      pass
    }
});

transport.use('compile', hbs({
  viewEngine: {
    defaultLayout: undefined,
    partialsDir: path.resolve('./src/resources/mail/')
  },
  viewPath: path.resolve('./src/resources/mail/'),
  extName: '.html',
}));

export default transport;