import { expect, test } from '@playwright/test';
import { LoginPage } from '../page-objects/login.page';
import { HomePage} from '../page-objects/home.page';
import { ProductPage} from '../page-objects/Product.Page';
import { CartPage } from '../page-objects/Cart.Page';
import { CheckoutPage} from '../page-objects/CheckoutPage';
import { OrderConfirmationPage} from '../page-objects/OrderConfirmationPage';

test('Verify users can buy an item succesfully', async ({ page }) => {

  // 1. Open browser and go to https://demo.testarchitect.com/
  await page.goto('https://demo.testarchitect.com/');
  await expect(page).toHaveURL('https://demo.testarchitect.com/');
  await page.getByRole('link', { name: 'Log in / Sign up'}).click();

  // 2. Login with valid credentials
  await page.fill('input[name="username"]', 'vuong.nguyen');
  await page.fill('input[name="password"]', 'GS5BBxiVSv34WQ2');
  await page.getByRole('button', { name: 'Log in'}).click();
  //await page.click('button[type="submit"]');

  // Wait for navigation after login
  //await page.waitForURL(/dashborad|home/);
  //console.log('Step 2: Logged in sucessfully');

  // 3. Navigate to All departments section
  await page.getByText('All departments').hover();

  //await expect(page).toHaveURL(/departments/);
  //console.log('Step 3: Navigated to All departments.');

  // 4. Select electronic components & Supplies
  await page.click('a:has-text("Electronic Components & Supplies")');
  //await expect(page).toHaveURL(/electronic-components/);
  //console.log('Step 4: Selected Electronic Components & Supplies.');

  // // 5. Verify the items should be displayed as a grid
  // await expect(page.locator('.product-grid')).toBeVisible();
  // //console.log('Step 5: Verified items are displayed as a grid.');

  // // 6. Switch view to list //bo di
  // await page.click('button[aria-label="List View"]'); //bo di
  // //console.log('Step 6: Switched view to list.');

  // // 7. Verify the items should be displayed as a list  //bo di
  // await expect(page.locator('.product-list')).toBeVisible();
  // console.log('Step 7: Verified items are displayed as a list.');

  // 8. Select any item randomly to purchase 
  const firstAddToCartButton = page.locator('.product-item .add-to-cart-button').first();
  await expect(firstAddToCartButton).toBeVisible();
  await firstAddToCartButton.click();
  //console.log('Step 8: Selected an item and clicked Add to cart (assuming direct add).');

  //9. Click 'Add to Cart' 
  //console.log('Step 9: Item added to cart (or handled in step 8).');

  // 10. Go to the cart
  await page.click('a:has-text("Cart")');
  await expect(page).toHaveURL(/cart/);
  //console.log('Step 10: Navigated to the cart.');
});




// test("Login with valid credentials", async ({ page }) => {
//   const login = new LoginPage(page);
//   const home = new HomePage(page);
//   const Product = new ProductPage(page);
//   const Cart = new CartPage(page);
//   const checkout = new CheckoutPage(page);
//   const confirmation = new OrderConfirmationPage(page);

//   // Step 1: Open browser and navigate to page
//   await login.goto();
  
//   // Step 2: login with valid credentials
//   await login.login('vuong nguyen', 'GS5BBxiVSv34WQ2');

//   await home.goToAllDepartments();
//   await home.selectCategory('Electronic Components & Supplies');
//   await home.verifyGridView()
//   await home.switchToListView();
//   await home.verifyListView();
//   await home.selectRandomItem();

//   await Product.addToCart();
//   await Product.goToCart();

//   await Cart.verifyItemInCart();
//   await Cart.proceedToCheckout();

//   await checkout.verifyCheckoutPage();
//   await checkout.fillBillingDetails();
//   await checkout.placeOrder();

//   await confirmation.verifyOrderConfirmation();
// });