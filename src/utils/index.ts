import { InternalServerErrorException } from '@nestjs/common';
import sharp from 'sharp';

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function shuffle(array: any[]) {
  var currentIndex = array.length,
    temporaryValue: any,
    randomIndex: number;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

export function strToObj(data: string) {
  return data == null ? [] : JSON.parse(data);
}

export function objToStr(data: any[]) {
  return JSON.stringify(data);
}

export function cropImg(n: number, filename: string) {
  const stepX = 100;
  const stepY = 100;
  const row = Math.floor((n - 1) / 6);
  const col = Math.floor((n - 1) % 6);
  const originalImage = `rec/${filename}.jpg`;
  const outputImage = `tmp/tmp.jpg`;

  sharp(originalImage)
    .extract({
      width: stepX,
      height: stepY,
      left: stepX * col,
      top: stepY * row,
    })
    .toFile(outputImage)
    .then(function (new_file_info) {})
    .catch(function (err) {
      throw new InternalServerErrorException();
    });
}
