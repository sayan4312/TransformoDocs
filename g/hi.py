import cv2
from PIL import Image
import pytesseract

im = Image.open("img.jpg")
im.rotate(180).show()
im.save("s1.jpg")