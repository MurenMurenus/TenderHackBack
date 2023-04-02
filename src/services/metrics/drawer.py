from PIL import Image, ImageDraw, ImageFont
import io

'''from calculator import Calculator'''


class Drawer:
    @staticmethod
    def make_table1(data: dict, width: int = 3000, height: int = 2000):
        try:
            im = Image.new("RGBA", (width, height), 'white')
            drawer = ImageDraw.Draw(im)
            drawer.rectangle((0, (int(0.1 * height)), (int(0.7 * width), int(0.4 * height))), '#92d050', width=0)
            drawer.rectangle((0, (int(0.5 * height)), (int(0.7 * width), int(0.7 * height))), '#f4b084', width=0)

            drawer.rectangle((int(0.66 * width), int(0.1 * height), width, int(0.4 * height)), '#ffc000', width=0)
            drawer.rectangle((int(0.66 * width), (int(0.5 * height)), (width, int(0.7 * height))), '#ffc000', width=0)
            drawer.rectangle((int(0.66 * width), (int(0.8 * height)), (width, height)), '#ffc000', width=0)

            drawer.rectangle((0, (int(0.8 * height)), (int(0.66 * width), height)), '#fff2cc', width=0)

            drawer.line((0, (int(0.1 * height)), (width, int(0.1 * height))), 'black', width=4)
            drawer.line((0, (int(0.4 * height)), (width, int(0.4 * height))), 'black', width=4)

            drawer.line((0, (int(0.5 * height)), (width, int(0.5 * height))), 'black', width=4)
            drawer.line((0, (int(0.7 * height)), (width, int(0.7 * height))), 'black', width=4)

            drawer.line((0, (int(0.8 * height)), (width, int(0.8 * height))), 'black', width=4)

            drawer.line((int(0.33 * width), 0, (int(0.33 * width), int(0.7 * height))), 'black', width=4)
            drawer.line((int(0.66 * width), 0, (int(0.66 * width), height)), 'black', width=4)

            big_font = ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 180,
                                          encoding='UTF-8')
            font = ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 70, encoding='UTF-8')
            draw = ImageDraw.Draw(im)
            co1 = 0
            co2 = 0

            for index in data.keys():
                if index % 2 == 0:
                    delta_width = 0.33
                    delta_width_ = 0

                    if co2 == 0:
                        delta_height = 0.1
                        height_ = height
                        delta_height_ = 0
                    elif co2 == 1:
                        delta_height = 0.5
                        height_ = height
                        delta_height_ = 0.4 * height
                    else:
                        delta_height = 0.7
                        height_ = height
                        delta_height_ = 0.8 * height
                        delta_width = 0.66
                        delta_width_ = 0
                    if co2 == 2:
                        for text in data[index]:
                            f_width, f_height = draw.textsize(text, font=font)
                            draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                       (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                      text, fill="black", font=font)
                            delta_width = 0.66
                            delta_width_ = 0.99
                    else:
                        for text in data[index]:
                            f_width, f_height = draw.textsize(text, font=font)
                            draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                       (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                      text, fill="black", font=font)
                            delta_width += 0.33
                            delta_width_ += 0.33

                    co2 += 1

                else:
                    delta_width = 0.33
                    delta_width_ = 0

                    if co1 == 0:
                        delta_height = 0.5
                        height_ = height
                        delta_height_ = 0
                    elif co1 == 1:
                        delta_height = 0.6
                        height_ = height
                        delta_height_ = 0.6 * height
                    else:
                        delta_height = 0.8
                        height_ = height
                        delta_height_ = height
                        delta_width = 0.66
                        delta_width_ = 0
                    if co1 == 2:
                        for text in range(len(data[index])):
                            if text == 0:
                                f_width, f_height = draw.textsize(str(data[index][text]) + 'Р', font=big_font)
                                draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                           (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                          str(data[index][text]) + 'Р', fill="black", font=big_font)
                                delta_width = 0.66
                                delta_width_ = 0.99
                            else:
                                f_width, f_height = draw.textsize(str(data[index][text]), font=big_font)
                                draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                           (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                          str(data[index][text]), fill="black", font=big_font)
                                delta_width = 0.66
                                delta_width_ = 0.99
                    else:
                        for text in range(len(data[index])):
                            if text != 2:

                                f_width, f_height = draw.textsize(str(data[index][text]) + 'Р', font=big_font)
                                draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                           (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                          str(data[index][text]) + 'Р', fill="black", font=big_font)
                            else:
                                f_width, f_height = draw.textsize(str(data[index][text]), font=big_font)
                                draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                           (int(delta_height * height_) + delta_height_ - f_height) / 2),
                                          str(data[index][text]), fill="black", font=big_font)
                            delta_width += 0.33
                            delta_width_ += 0.33

                    co1 += 1
            mark = Image.new('RGBA', im.size, (255, 255, 255, 0))
            draw = ImageDraw.Draw(mark)

            y = 200
            for i in range(5):
                draw.text((100, y), 'https://t.me/Directbudget_bot', fill=(255, 255, 255, 125),
                          font=ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 220),
                          encoding='UTF-8')
                y += 400

            watermarked = Image.alpha_composite(im, mark)

            byte_array = io.BytesIO()
            watermarked.save(byte_array, 'png')
            return byte_array.getvalue()
        except Exception as e:
            print(e)

    @staticmethod
    def make_table2(data: dict, width: int = 2000, height: int = 1600):
        try:
            im = Image.new("RGBA", (width, height), 'white')
            drawer = ImageDraw.Draw(im)
            drawer.rectangle((0, (int(0.25 * height)), (width, int(0.5 * height))), '#92d050', width=0)
            drawer.rectangle((0, (int(0.75 * height)), (width, height)), '#f4b084', width=0)

            drawer.line((int(0.5 * width), 0, (int(0.5 * width), height)), 'black', width=4)
            drawer.line((0, int(0.25 * height), width, int(0.25 * height)), 'black', width=4)
            drawer.line((0, int(0.5 * height), width, int(0.5 * height)), 'black', width=4)
            drawer.line((0, int(0.75 * height), width, int(0.75 * height)), 'black', width=4)

            big_font = ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 180,
                                          encoding='UTF-8')
            font = ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 90, encoding='UTF-8')

            draw = ImageDraw.Draw(im)
            height_ = 0.25 * height

            co2 = 0

            for index in data.keys():

                if index % 2 == 0:
                    delta_width = 0.5
                    delta_width_ = 0

                    for text in data[index]:
                        f_width, f_height = draw.textsize(text, font=font)
                        draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                   (height_ - f_height) / 2),
                                  text, fill="black", font=font)
                        delta_width += 0.5
                        delta_width_ += 0.5

                else:
                    delta_width = 0.5
                    delta_width_ = 0
                    s = ''

                    if co2 == 0:
                        s = 'р'
                    else:
                        s = '%'

                    for text in data[index]:
                        f_width, f_height = draw.textsize(text, font=big_font)
                        draw.text(((int(delta_width * width) + delta_width_ * width - f_width) / 2,
                                   (height_ - f_height) / 2),
                                  text + s, fill="black", font=big_font)
                        delta_width += 0.5
                        delta_width_ += 0.5
                    co2 += 1
                height_ += 0.5 * height
            mark = Image.new('RGBA', im.size, (255, 255, 255, 0))
            draw = ImageDraw.Draw(mark)
            y = 0.26 * height
            for i in range(2):
                draw.text((60, y), 'https://t.me/Directbudget_bot', fill=(255, 255, 255, 125),
                          font=ImageFont.truetype(io.BytesIO(open("scripts/fonts/calibri.ttf", "rb").read()), 150),
                          encoding='UTF-8')
                y += 0.5 * height

            watermarked = Image.alpha_composite(im, mark)

            byte_array = io.BytesIO()
            watermarked.save(byte_array, 'png')
            return byte_array.getvalue()
        except Exception as e:
            print(e)


'''Drawer.make_table(Calculator(1200, 300000).compile())'''
