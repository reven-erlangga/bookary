import { Injectable } from '@nestjs/common';

@Injectable()
export class AutoNumberService {
  public autoNumber(min: number, max: number) {
    const currentDate = new Date();
    min = Math.ceil(min);
    max = Math.floor(max);
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    let result = num.toString();
    result = result.concat((currentDate.getMonth() + 1).toString());
    result = result.concat(currentDate.getFullYear().toString());
    result = result.concat(currentDate.getMilliseconds().toString());

    return result;
  }
}

export default AutoNumberService;
