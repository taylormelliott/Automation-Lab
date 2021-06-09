import { Builder, Capabilities, By } from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:5500/movieList/index.html");
});

afterAll(async () => {
  await driver.quit();
});

test("Type in a movie and add it", async () => {
  let addMovie = await driver.findElement(By.xpath("//input"));

  await addMovie.sendKeys("Batman");
  await driver.sleep(2000);

  let addBtn = await driver.findElement(By.xpath("//button"));

  await addBtn.click();
  await driver.sleep(2000);
});

test("cross off an added movie", async () => {
  let crossOff = await driver.findElement(
    By.xpath("//span[contains(text(),'Batman')]")
  );

  await crossOff.click();
  await driver.sleep(2000);
});

test("Delete movie", async () => {
  let deleteBtn = await driver.findElement(By.xpath("//button[@id='Batman']"));

  await deleteBtn.click();
  await driver.sleep(2000);
});
