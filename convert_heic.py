import sys
import os
from PIL import Image
from pillow_heif import register_heif_opener

register_heif_opener()

def convert_heic_to_jpg(input_path):
    output_path = input_path.replace('.heic', '.jpg').replace('.HEIC', '.jpg')
    print(f"Converting {input_path} to {output_path}...")
    try:
        image = Image.open(input_path)
        image.convert('RGB').save(output_path, "JPEG")
        print(f"Success! Saved to {output_path}")
    except Exception as e:
        print(f"Error converting {input_path}: {e}")

if __name__ == "__main__":
    convert_heic_to_jpg(r"C:\Users\Rajashekhar\Downloads\1st .heic")
    convert_heic_to_jpg(r"C:\Users\Rajashekhar\Downloads\2nd.heic")
