if (document.location.hash == "" || document.location.hash == "#") {
    document.location.hash = "#papers";
}

if (document.location.hash == "#intro") {
    console.log('Hello')
    const styleEl = document.createElement('style');
    // Append <style> element to <head>
    document.head.appendChild(styleEl);

    // Grab style element's sheet
    const styleSheet = styleEl.sheet;
    styleSheet.insertRule(`
        .divide {
            background-color: 'red'
        }
    `, 0)
}