# Wait for a search box to become visible before typing a query.


from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Initialize the browser (Chrome in this case)
driver = webdriver.Chrome()

# Open a webpage with a search box (e.g., Google)
driver.get("https://www.google.com")

try:
    # Wait until the search box is visible (max wait time: 10 seconds)
    search_box = WebDriverWait(driver, 10).until(
        EC.visibility_of_element_located((By.NAME, "q"))
    )
    
    # Type a search term
    search_box.send_keys("Selenium WebDriver Waits")
    
    print("Search box was found and text was entered.")

finally:
    # Close the browser
    driver.quit()


# Key Concepts Used:
# WebDriverWait: Waits for a certain condition to occur before proceeding.

# EC.visibility_of_element_located: Checks if the element is visible in the DOM.

# By.NAME: Locates the search box using its name attribute (e.g., Google uses q for the search box).
