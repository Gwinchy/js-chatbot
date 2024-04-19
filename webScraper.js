// Function to scrape a website for information
async function scrapeWebsite(url) {
    try {
        const response = await fetch(url);
        const html = await response.text();
        // Parse HTML and extract relevant information
        // This part needs to be customized based on the website structure
        const title = html.match(/<title>(.*?)<\/title>/i)[1];
        return title;
    } catch (error) {
        console.error("Error scraping website:", error);
        return "Error: Unable to retrieve information from the website.";
    }
}
