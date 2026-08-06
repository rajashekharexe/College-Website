from PIL import Image

try:
    # Open the transparent image
    img = Image.open(r"c:\Projects\Project College website\src\assets\association-logo-nobg.png")

    # Create a new white image of the same size
    white_bg = Image.new("RGB", img.size, (255, 255, 255))

    # Paste the transparent image onto the white background, using it as a mask
    white_bg.paste(img, (0, 0), img)

    # Save it directly to the Downloads folder
    output_path = r"C:\Users\Rajashekhar\Downloads\BLDE-association-logo-white-bg.png"
    white_bg.save(output_path)
    
    print(f"Successfully added white background and saved to {output_path}")
except Exception as e:
    print(f"Error: {e}")
