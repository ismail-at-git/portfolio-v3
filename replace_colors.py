import os
import glob

components_dir = r"e:\My-Port\portfolio-v3\src\components"
for filepath in glob.glob(os.path.join(components_dir, "*.tsx")):
    with open(filepath, "r", encoding="utf-8") as f:
        content = f.read()
    
    # Replace blue-500 with brand
    content = content.replace("text-blue-500", "text-brand")
    content = content.replace("bg-blue-500", "bg-brand")
    content = content.replace("ring-blue-500", "ring-brand")
    content = content.replace("border-blue-500", "border-brand")
    
    # Replace blue-600 with brand/90 (or similar variant)
    content = content.replace("bg-blue-600", "bg-brand/90")
    content = content.replace("text-blue-600", "text-brand/90")

    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content)

print("Colors updated replacing blue-500 with brand.")
