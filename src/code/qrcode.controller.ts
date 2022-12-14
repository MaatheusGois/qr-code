import { Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';

import { Controller } from '@nestjs/common';
import { QRCodeService } from './qrcode.service';

@Controller('qrcode')
export class QRCodeController {
  constructor(private readonly qrcodeService: QRCodeService) { }
  
  /**
   * Read a qrcode
   * @param QRCodeCreateDTO all params are requireds.
   * @returns Return a pet object if success, else return the specific error
   */
  @Get()
  async create(@Res() res: Response, @Query("url") url: string): Promise<any> {
    try {
      let code = await this.qrcodeService.create(url);
      res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': code.length
      });
      res.end(code)
    } catch (error) {
      throw error.message || error;
    }
  }
}
