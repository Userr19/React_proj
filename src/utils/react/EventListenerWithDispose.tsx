function addEventListenerWithDispose(element: Element, name: string, handler: () => void) {
    element.addEventListener(name, handler);
    return () => element.removeEventListener(name, handler)
}

const disponse = addEventListenerWithDispose(window.document.body, 'resize', ()=> {
    console.log('resize');
    disponse();
});