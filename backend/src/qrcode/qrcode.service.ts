import { Injectable } from '@nestjs/common';
import { toDataURL } from 'qrcode';

@Injectable()
export class QrcodeService {
  async generateQrCodeDataURL(otpAuthUrl: string) {
    return toDataURL(otpAuthUrl);
  }
}
