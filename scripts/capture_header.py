from playwright.sync_api import sync_playwright

def capture_header(url, output_path, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        # Clip to just the header area (top 100px which covers the sticky nav)
        page.screenshot(path=output_path, full_page=False, clip={'x': 0, 'y': 0, 'width': viewport_width, 'height': 100})
        browser.close()

def capture_full_above_fold(url, output_path, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, full_page=False)
        browser.close()

def capture_mobile(url, output_path):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 375, 'height': 812})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, clip={'x': 0, 'y': 0, 'width': 375, 'height': 100})
        browser.close()

if __name__ == '__main__':
    base = "E:/coding/proyectos-personales/activos/el-fogon-gourmet-nancy-garcía/screenshots"
    url = "http://localhost:3000"

    print("Capturing desktop header (1920x100)...")
    capture_header(url, f"{base}/header_desktop.png")

    print("Capturing desktop above-fold (1920x1080)...")
    capture_full_above_fold(url, f"{base}/above_fold_desktop.png")

    print("Capturing mobile header (375x100)...")
    capture_mobile(url, f"{base}/header_mobile.png")

    print("Done. Screenshots saved to:", base)
