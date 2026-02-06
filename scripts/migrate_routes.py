import os
import shutil

BASE_DIR = r"c:\BMZ\WebSite\cerebrum-web\app\[locale]"

MAIN_DIR = os.path.join(BASE_DIR, "(main)")
AUTH_DIR = os.path.join(BASE_DIR, "(auth)")

# Ensure directories exist
os.makedirs(MAIN_DIR, exist_ok=True)
os.makedirs(AUTH_DIR, exist_ok=True)

# Files/Folders to move to (main)
main_items = ["academy", "dashboard", "docs", "download", "pricing", "page.js"]

# Files/Folders to move to (auth)
auth_items = ["auth"]

def safe_move(item, dest_dir):
    src = os.path.join(BASE_DIR, item)
    dst = os.path.join(dest_dir, item)
    
    if os.path.exists(src):
        try:
            shutil.move(src, dst)
            print(f"Moved {item} to {dest_dir}")
        except Exception as e:
            print(f"Error moving {item}: {e}")
    else:
        print(f"Source {item} not found")

print("Starting migration...")

for item in main_items:
    safe_move(item, MAIN_DIR)

for item in auth_items:
    safe_move(item, AUTH_DIR)

print("Migration complete.")
