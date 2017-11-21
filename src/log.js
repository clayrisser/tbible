import winston, { transports } from 'winston';

winston.add(transports.File, { filename: 'debug.log' });

export default winston;
