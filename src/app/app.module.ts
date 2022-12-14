import { Module } from '@nestjs/common';
import { QRCodeModule } from 'src/code/qrcode.module';

const options = {
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0,
  connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  useNewUrlParser: true
};

@Module({
  imports: [
    QRCodeModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
