const puppeteer = require("puppeteer");

async function vote() {
  let browser = await puppeteer.launch({
  args: ['--no-sandbox']
});
  let page = await browser.newPage();
  await page.deleteCookie();
  await page.goto(
    "https://www.thaiupdate.info/young-female-star-2023-group-1/"
  );
  let count = 0;
  let h = 0;
  let v = 0;
  const headers = [
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.157 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
      Accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.82 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
    {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.150 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      "Accept-Encoding": "gzip, deflate, br",
    },
  ];

  while (true) {
    // Find and click on the Becky Armstrong option
    await page.waitForSelector("input#PDI_answer53638951");
    const option = await page.$("input#PDI_answer53638951");
    await option.click();

    // Find and click on the vote button
    const voteButton = await page.$("#pd-vote-button11767878");
    await voteButton.click();
    console.log("Selected!");

    // await page.waitForTimeout(5000);
    await page.waitForSelector("#captcha_11767878");
    // Wait for the math question to appear and solve it
    const question = await page.$eval(
      "#captcha_11767878 > span > p",
      (el) => el.textContent
    );

    const match = question.match(/(\d+)\s*\+\s*(\d+)\s*=/);
    if (!match) {
      throw new Error(`Could not parse math question: ${question}`);
    }
    const answer = parseInt(match[1]) + parseInt(match[2]);
    console.log(answer);

    // Fill in the answer and submit the form
    const answerInput = await page.$('input[name="answer"]');
    await answerInput.type(answer.toString());
    const submitButton = await page.$("#pd-vote-button11767878");
    await submitButton.click();
    v++;
    console.log(`Voted successfully~ Vote time: ${v}`);

    await page.waitForSelector("a.pds-return-poll"); // Wait for the element to be present
    const returnButton = await page.$("a.pds-return-poll"); // Select the element
    await returnButton.click(); // Click the element
    console.log("Returned successfully");
    count++; //
    if (count % 5 === 0) {
      if (h === 7) {
        h = 0;
      }
      await page.deleteCookie();
      await browser.close();
      browser = await puppeteer.launch({
  args: ['--no-sandbox']
});
      page = await browser.newPage();
      await page.setExtraHTTPHeaders(headers[h]);
      h++;
      await page.waitForTimeout(5000);
      await page.goto(
        "https://www.thaiupdate.info/young-female-star-2023-group-1/"
      );
      console.log("Restarted successfully");
    }
  }
}
vote();
