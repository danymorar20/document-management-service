import { Injectable, NestMiddleware } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import pinoHttp from 'pino-http';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  private logger = pinoHttp({
    customProps: (req, res) => ({
      requestId: req.id,
    }),
  });

  use(req: any, res: any, next: () => void) {
    req.id = uuid();
    this.logger(req, res);
    next();
  }
}
