(async () => {
    const headerResponse = await fetch('/components/header/header.html');
    console.log(headerResponse);
    const headerHTMLText = await headerResponse.text();
    console.log(headerHTMLText);
    document.body.insertAdjacentHTML('afterbegin', headerHTMLText);
    const footerResponse = await fetch('/components/footer/footer.html');
    console.log(footerResponse);
    const footerHTMLText = await footerResponse.text();
    console.log(footerHTMLText);
    document.body.insertAdjacentHTML('beforeend', footerHTMLText);
})()

