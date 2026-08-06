import sys
from rembg import remove
from PIL import Image

def remove_background(input_path, output_path):
    try:
        print(f"Processing: {input_path}")
        input_image = Image.open(input_path)
        output_image = remove(input_image)
        output_image.save(output_path)
        print(f"✅ Success! Saved to {output_path}")
    except Exception as e:
        print(f"❌ Error processing {input_path}: {e}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python remove_bg.py <input_path> <output_path>")
        sys.exit(1)
        
    remove_background(sys.argv[1], sys.argv[2])
