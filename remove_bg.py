from PIL import Image
import sys

def remove_background(img_path):
    img = Image.open(img_path).convert("RGBA")
    datas = img.getdata()

    new_data = []
    # The background is dark. Let's sample the top-left pixel.
    bg_color = datas[0]
    
    # We will make anything close to the background color transparent.
    # Since the hand is bright yellow/orange, we can just say: if R < 100 and G < 100 and B < 100, it's transparent.
    for item in datas:
        # Check if the pixel is dark
        if item[0] < 80 and item[1] < 80 and item[2] < 80:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(img_path, "PNG")

remove_background("public/3.png")
remove_background("public/4.png")
print("Background removed")
