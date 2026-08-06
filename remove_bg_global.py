from PIL import Image

def remove_bg_global(filepath):
    print(f"Processing {filepath} globally...")
    img = Image.open(filepath).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    # Get top-left pixel as the background color
    bg_color = data[0, 0]
    print(f"Detected background color: {bg_color}")
    
    # Very strict tolerance so we don't accidentally hit the pure white inside the logo
    tolerance = 15
    
    def color_match(c1, c2):
        return abs(c1[0]-c2[0]) < tolerance and \
               abs(c1[1]-c2[1]) < tolerance and \
               abs(c1[2]-c2[2]) < tolerance
               
    transparent_count = 0
    for y in range(height):
        for x in range(width):
            if color_match(data[x, y], bg_color):
                data[x, y] = (0, 0, 0, 0)
                transparent_count += 1
                
    img.save(filepath, "PNG")
    print(f"Successfully removed {transparent_count} grey pixels globally from {filepath}")

if __name__ == "__main__":
    remove_bg_global("src/assets/college-logo.png")
