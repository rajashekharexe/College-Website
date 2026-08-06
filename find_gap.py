from PIL import Image

def find_inner_grey(filepath):
    img = Image.open(filepath).convert("RGBA")
    data = img.load()
    width, height = img.size
    
    bg_color = data[0, 0]
    tolerance = 25
    
    def color_match(c1, c2):
        return abs(c1[0]-c2[0]) < tolerance and \
               abs(c1[1]-c2[1]) < tolerance and \
               abs(c1[2]-c2[2]) < tolerance
               
    mid_x = width // 2
    
    # scan down the middle column
    state = 0 # 0=top outer bg, 1=inside ribbon, 2=inside gap
    gap_pixels = []
    
    for y in range(height):
        c = data[mid_x, y]
        is_bg = color_match(c, bg_color)
        
        if state == 0 and not is_bg:
            state = 1 # hit the ribbon
        elif state == 1 and is_bg:
            state = 2 # hit the gap
            gap_pixels.append((mid_x, y))
        elif state == 2 and not is_bg:
            break # hit the main shield
            
    if gap_pixels:
        print(f"Found gap pixel at: {gap_pixels[0]}")
    else:
        print("Could not find the gap.")

if __name__ == "__main__":
    find_inner_grey("src/assets/college-logo.png")
