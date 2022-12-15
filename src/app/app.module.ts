import { Module } from '@nestjs/common';
import { QRCodeModule } from 'src/code/qrcode.module';

@Module({
  imports: [
    QRCodeModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
