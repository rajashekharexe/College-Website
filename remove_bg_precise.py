from PIL import Image
import sys

def remove_bg(filepath):
    try:
        print(f"Processing {filepath}...")
        img = Image.open(filepath).convert("RGBA")
        data = img.load()
        width, height = img.size
        
        # Get top-left pixel as the background color
        bg_color = data[0, 0]
        print(f"Detected background color: {bg_color}")
        
        visited = set()
        # Start BFS from all 4 corners
        queue = [(0,0), (width-1, 0), (0, height-1), (width-1, height-1)]
        
        # Tolerance for color matching
        tolerance = 25
        
        def color_match(c1, c2):
            return abs(c1[0]-c2[0]) < tolerance and \
                   abs(c1[1]-c2[1]) < tolerance and \
                   abs(c1[2]-c2[2]) < tolerance

        # Add seeds for the enclosed gaps under the top ribbon (which is around y=43)
        for x in range(width):
            if color_match(data[x, 43], bg_color):
                queue.append((x, 43))
                   
        transparent_pixels = []
        
        # Faster Queue
        from collections import deque
        q = deque(queue)
        
        while q:
            x, y = q.popleft()
            if (x, y) in visited:
                continue
            visited.add((x, y))
            
            if color_match(data[x, y], bg_color):
                transparent_pixels.append((x, y))
                # Add neighbors
                for dx, dy in [(0,1), (1,0), (0,-1), (-1,0)]:
                    nx, ny = x + dx, y + dy
                    if 0 <= nx < width and 0 <= ny < height:
                        if (nx, ny) not in visited:
                            q.append((nx, ny))
                        
        print(f"Found {len(transparent_pixels)} background pixels. Making them transparent...")
        for x, y in transparent_pixels:
            data[x, y] = (0, 0, 0, 0)
            
        img.save(filepath, "PNG")
        print(f"Successfully saved {filepath}")
    except Exception as e:
        print(f"Failed: {e}")

if __name__ == "__main__":
    remove_bg("src/assets/college-logo.png")
