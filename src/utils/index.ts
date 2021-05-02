import { InternalServerErrorException } from '@nestjs/common';
import { copyFileSync } from 'fs';
import * as sharp from 'sharp';

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

export async function cropImg(n: number, id: number) {
  const stepX = Math.floor(856 / 6);
  const stepY = Math.floor(500 / 6);
  const row = Math.floor((n - 1) / 6);
  const col = Math.floor((n - 1) % 6);
  const originalImage = `source/${id}/pic.jpg`;
  const outputImage = `tmp/${id}/${n}.jpg`;

  try {
    const new_file_info = await sharp(originalImage)
      .extract({
        width: stepX,
        height: stepY,
        left: stepX * col,
        top: stepY * row,
      })
      .toFile(outputImage);
    return outputImage;
  } catch (err) {
    console.log(err);
  }
}
export function copyFullImg(id: number) {
  const originalImage = `source/${id}/pic.jpg`;
  const outputImage = `tmp/${id}/full.jpg`;
  return copyFileSync(originalImage, outputImage);
}
