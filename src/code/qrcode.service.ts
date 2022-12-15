import { Injectable } from '@nestjs/common';
import { toString } from 'qrcode';
const sharp = require('sharp');

@Injectable()
export class QRCodeService {
  async create(text: string): Promise<string> {
  
    const svg = await toString(text, {
      errorCorrectionLevel: 'H',
      type: 'svg',
      scale: 0.4,
      margin: 1,
      color: {
        dark: '#000',
        light: '#fff'
      }
    })
    
    const buffer = Buffer.from(svg);
    
    const value = await sharp(buffer)
      .resize(400, 400)
      .png()
      .toBuffer()
    return value
  }
}
