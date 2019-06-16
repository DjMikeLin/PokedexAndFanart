import base64
from PIL import Image

def test(yourimagefile):
     with open(yourimagefile, "rb") as image_file:
         base64string = base64.b64encode(image_file.read())
         return base64string

image = Image.open('./fdfd.png')
print(test('./fdfd.png'));
